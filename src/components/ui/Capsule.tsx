export default function Capsule({ text }: { text: string }) {
    return (
        <p className="inline-block rounded-full border-3 px-3 py-1 text-sm font-medium text-[#00733E] border-[#00733E]">
            {text}
        </p>
    );
}

// text-[#00733E]