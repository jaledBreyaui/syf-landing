export default function Capsule({ text }: { text: string }) {
    return (
        <p className="inline-block rounded-full border px-3 py-1 text-sm font-medium text-[#7f22ff] border-[#7f22ff] bg-[#7f22ff]/10">
            {text}
        </p>
    );
}
