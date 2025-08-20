// src/components/ContactInfo.tsx
import { ReactNode } from "react";

type ContactInfoProps = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
};

export default function ContactInfo({ icon, title, children }: ContactInfoProps) {
    return (
        <div className="flex gap-x-5">
            <div className="shrink-0 size-6 text-neutral-500">{icon}</div>
            <div className="grow">
                <h4 className="text-white font-semibold">{title}</h4>
                <div className="mt-1 text-neutral-400 text-sm not-italic">{children}</div>
            </div>
        </div>
    );
}