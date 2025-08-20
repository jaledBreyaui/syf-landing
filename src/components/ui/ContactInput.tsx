export default function ContactInput({ placeholder, type }: { placeholder: string, type: string }) {
    return (
        <div>
            <div className="relative">
                <input
                    type="text"
                    id={`contact-${type}`}
                    placeholder={placeholder}
                    className="peer p-3 sm:p-4 block w-full bg-[white] border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                />
                <label
                    htmlFor={`contact-${type}`}
                    className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                >
                    {placeholder}
                </label>
            </div>
        </div>
    )
}