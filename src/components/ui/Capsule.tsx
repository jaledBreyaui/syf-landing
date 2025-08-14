export default function Capsule({ text }: { text: string }) {
    return (
        <p className="inline-block rounded-full border px-3 py-1 text-sm font-medium text-[#2B3D8F] border-[#2B3D8F] bg-[#2B3D8F]/10">
            {text}
        </p>
    );
}
