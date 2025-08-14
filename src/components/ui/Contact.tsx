import Capsule from "./Capsule";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-[#121212]">

            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                <div className="max-w mb-0 md:mb-20 lg:mb-14 flex items-center justify-between flex-col-reverse md:flex-row ">
                    <div className="py-10 md:py-0">
                        <SectionTitle title="Te ayudamos a blabla" position="text-left" addStyle="" />
                        <p className="mt-3 text-gray-300 ml-1">
                            Whatever your goal - we will get you there.

                        </p>
                    </div>
                    <Capsule text="Contacto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    {/* Form */}
                    <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                        <form>
                            <div className="space-y-4">
                                {/* Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="contact-name"
                                        placeholder="Name"
                                        className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-name"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                                    >
                                        Name
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="contact-email"
                                        placeholder="Email"
                                        className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-email"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                                    >
                                        Email
                                    </label>
                                </div>

                                {/* Company */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="contact-company"
                                        placeholder="Company"
                                        className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-company"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                                    >
                                        Company
                                    </label>
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="contact-phone"
                                        placeholder="Phone"
                                        className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-phone"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                                    >
                                        Phone
                                    </label>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        id="contact-message"
                                        placeholder="Tell us about your project"
                                        className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent 
                    focus:outline-hidden focus:ring-0 focus:border-transparent 
                    focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-message"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-300 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-300 
                    peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-300"
                                    >
                                        Tell us about your project
                                    </label>
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="text-xs text-neutral-500">All fields are required</p>
                                <p className="mt-5">
                                    <button
                                        type="submit"
                                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#2B3D8F] font-medium text-sm text-white rounded-full focus:outline-hidden"
                                    >
                                        Submit
                                        <svg
                                            className="shrink-0 size-4 transition group-hover:translate-x-0.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-14">
                        {/* Address */}
                        <div className="flex gap-x-5">
                            <svg
                                className="shrink-0 size-6 text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div className="grow">
                                <h4 className="text-white font-semibold">Our address:</h4>
                                <address className="mt-1 text-neutral-400 text-sm not-italic">
                                    300 Bath Street, Tay House<br />
                                    Glasgow G2 4JR, United Kingdom
                                </address>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-x-5">
                            <svg
                                className="shrink-0 size-6 text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                            </svg>
                            <div className="grow">
                                <h4 className="text-white font-semibold">Email us:</h4>
                                <a
                                    href="mailto:hello@example.so"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 text-neutral-400 text-sm hover:text-neutral-200"
                                >
                                    hello@example.so
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Contact Info */}
                </div>
                {/* End Grid */}
            </div>
        </section>
    );
}
