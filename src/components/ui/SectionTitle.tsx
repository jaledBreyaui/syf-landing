interface SectionTitleProps {
    title: string;
    position?: string;
    addStyle?: string;
}

export default function SectionTitle({ title, position, addStyle }: SectionTitleProps) {
    return (
        <h2 className={`text-4xl md:text-5xl font-bold text-white ${position ? position : "text-center"} ${addStyle}`}>
            {title}
        </h2>
    )
}