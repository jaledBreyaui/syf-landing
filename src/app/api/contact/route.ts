import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    name: z.string().min(2, "Nombre muy corto"),
    email: z.string().email("Email inválido"),
    company: z.string().optional().default(""),
    phone: z.string().optional().default(""),
    message: z.string().min(5, "Mensaje muy corto"),
    // Honeypot opcional:
    website: z.string().optional().default(""),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = schema.parse(body);

        // Anti-spam simple: si honeypot viene con algo, cortar
        if (data.website && data.website.trim() !== "") {
            return NextResponse.json({ ok: true }, { status: 200 });
        }

        const html = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><b>Nombre:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Empresa:</b> ${data.company || "-"}</p>
      <p><b>Teléfono:</b> ${data.phone || "-"}</p>
      <p><b>Mensaje:</b></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `;

        const sent = await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: process.env.RESEND_TO!,
            subject: `Contacto web: ${data.name}`,
            replyTo: data.email, // útil para responder directo
            html,
        });

        if (sent.error) {
            return NextResponse.json({ ok: false, error: sent.error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err: unknown) {
        let msg = "Error enviando el mensaje";
        if (err instanceof Error) {
            msg = err.message;
        }
        return NextResponse.json({ ok: false, error: msg }, { status: 400 });
    }
}
