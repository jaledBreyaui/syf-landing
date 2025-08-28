import React from "react";

type Props = {
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

export default function ContactInput({
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
}: Props) {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                id={`contact-${name}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="peer p-3 sm:p-4 block w-full bg-[white] border-transparent rounded-lg sm:text-sm text-black placeholder:text-transparent 
          focus:outline-hidden focus:ring-0 focus:border-transparent 
          focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
            />
            <label
                htmlFor={`contact-${name}`}
                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 
          peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 
          peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
            >
                {placeholder}
            </label>
        </div>
    );
}
