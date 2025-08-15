// push.mjs
import { execSync } from "child_process";
import readline from "readline";

const c = {
    red: s => `\x1b[31m${s}\x1b[0m`,
    green: s => `\x1b[32m${s}\x1b[0m`,
    yellow: s => `\x1b[33m${s}\x1b[0m`,
    cyan: s => `\x1b[36m${s}\x1b[0m`,
    bold: s => `\x1b[1m${s}\x1b[0m`,
};

const args = process.argv.slice(2);
const autoYes = args.includes("-y") || args.includes("--yes");
let commitMsg = args.find(a => !a.startsWith("-")) || "";


function sh(cmd, opts = {}) {
    try {
        const res = execSync(cmd, {
            stdio: opts.inherit ? "inherit" : "pipe",
            encoding: "utf8",
        });
        // Cuando stdio="inherit", res es null → devolvemos string vacío
        return typeof res === "string" ? res.trim() : "";
    } catch (e) {
        if (opts.allowFail) return "";
        throw e;
    }
}

async function prompt(q) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await new Promise(res => rl.question(q, ans => res(ans)));
    rl.close();
    return answer;
}

function ensureGitRepo() {
    try {
        sh("git rev-parse --is-inside-work-tree");
    } catch {
        console.error(c.red("❌ No estás dentro de un repositorio Git."));
        process.exit(1);
    }
}

function getBranch() {
    let b = sh("git rev-parse --abbrev-ref HEAD");
    if (!b) b = "(desconocida)";
    return b;
}

function hasChanges() {
    const status = sh("git status --porcelain");
    return status.length > 0;
}

async function main() {
    ensureGitRepo();

    // Mensaje de commit
    if (!commitMsg) {
        commitMsg = await prompt(c.cyan("✏️  Mensaje de commit: "));
        if (!commitMsg) {
            console.error(c.red("❌ Commit abortado: mensaje vacío."));
            process.exit(1);
        }
    }

    // Rama actual
    const branch = getBranch();

    // Mostrar cambios pendientes
    const pending = sh("git status --porcelain");
    if (!pending) {
        const ahead = sh("git rev-list --left-right --count @{u}...HEAD", { allowFail: true });
        if (ahead) {
            const [behind, aheadCount] = ahead.split("\t").map(Number);
            if (aheadCount > 0) {
                console.log(c.yellow("ℹ️  No hay cambios nuevos para commitear, pero hay commits locales sin pushear."));
            } else {
                console.log(c.yellow("ℹ️  No hay cambios para commitear ni pushear."));
                process.exit(0);
            }
        } else {
            console.log(c.yellow("ℹ️  No hay cambios para commitear. Intento de push de todas formas..."));
        }
    } else {
        console.log(c.bold(c.cyan("\nCambios pendientes (git status --porcelain):")));
        console.log(pending || "(sin cambios)");
        const diff = sh("git --no-pager diff --staged", { allowFail: true });
        if (!diff) {
            // Mostrar diff de working dir (no staged) para transparencia
            const wdDiff = sh("git --no-pager diff", { allowFail: true });
            if (wdDiff) {
                console.log(c.bold(c.cyan("\nDiff de working directory (no staged):")));
                console.log(wdDiff);
            }
        }
    }

    // Confirmación
    if (!autoYes) {
        const ans = (await prompt(c.yellow(`\n¿Commiteo y pusheo a ${c.bold(branch)}? [s/N]: `))).toLowerCase();
        if (ans !== "s" && ans !== "si" && ans !== "sí" && ans !== "y" && ans !== "yes") {
            console.log(c.red("❌ Operación cancelada."));
            process.exit(1);
        }
    }

    // add
    try {
        console.log(commitMsg)
        console.log(c.cyan("\n▶ git add ."));
        sh("git add .", { inherit: true });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    // commit
    try {
        console.log(c.cyan(`▶ git commit -m "${commitMsg.replace(/"/g, '\\"')}"`));
        sh(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { inherit: true });
    } catch (e) {
        // Si no hay cambios staged, git commit falla; intentamos continuar al push si hay commits pendientes
        const ahead = sh("git rev-list --left-right --count @{u}...HEAD", { allowFail: true });
        if (!ahead) {
            console.error(c.red("❌ Error en 'git commit' y no se pudo determinar si hay commits para pushear."));
            process.exit(1);
        } else {
            const [behind, aheadCount] = ahead.split("\t").map(Number);
            if (aheadCount === 0) {
                console.error(c.red("❌ No hay nada para commitear y no hay commits nuevos para pushear."));
                process.exit(1);
            } else {
                console.log(c.yellow("⚠️  No se generó un nuevo commit, pero hay commits locales. Continuo con el push..."));
            }
        }
    }

    // Determinar remoto/rama de upstream
    let upstream = sh("git rev-parse --abbrev-ref --symbolic-full-name @{u}", { allowFail: true });
    if (!upstream) {
        // No hay upstream: intentamos origin/<branch>
        upstream = `origin ${branch}`;
        console.log(c.yellow(`ℹ️  No había upstream configurado. Se intentará pushear a ${upstream}.`));
        try {
            sh(`git push -u origin ${branch}`, { inherit: true });
            console.log(c.green("\n✅ Push completado (se configuró upstream)."));
            process.exit(0);
        } catch (e) {
            console.error(c.red("\n❌ Error en 'git push -u origin <branch>'"));
            process.exit(1);
        }
    } else {
        // push normal al upstream configurado
        try {
            console.log(c.cyan(`▶ git push (${upstream})`));
            sh("git push", { inherit: true });
            console.log(c.green("\n✅ Push completado."));
        } catch (e) {
            console.error(c.red("\n❌ Error en 'git push'. Revisá las credenciales, la red o conflictos remotos."));
            process.exit(1);
        }
    }
}

main().catch(err => {
    console.error(c.red(`\n❌ Error inesperado: ${err?.message || err}`));
    process.exit(1);
});
