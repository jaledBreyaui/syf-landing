"use client";
import { useState } from "react";
import Capsule from "./Capsule";
import ContactInput from "./ContactInput";
import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInfo";
import { useTranslation } from "react-i18next";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function ContactSection() {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        website: "", // honeypot
    });
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
    const [error, setError] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    phone: form.phone,
                    message: form.message,
                    website: form.website, // honeypot
                }),
            });

            const json = await res.json();
            if (!res.ok || !json.ok) {
                setStatus("error");
                setError(json.error || "No se pudo enviar el mensaje.");
                return;
            }

            setStatus("ok");
            setForm({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
                website: "",
            });
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Error de red/servidor.");
        }
    };
    return (
        <section id="contact" className="bg-[#2B3D8F]">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                <div className="max-w mb-0 md:mb-20 lg:mb-14 flex items-center justify-between flex-col-reverse md:flex-row ">
                    <div className="py-10 md:py-0">
                        <SectionTitle title={t('contact.title')} position="text-left" addStyle="" />
                        <p className="mt-3 text-gray-300 ml-1">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                    <Capsule text={t('contact.capsule')} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                        <form onSubmit={onSubmit}>
                            <div className="space-y-4">
                                <ContactInput name="name" placeholder="Name" type="text" value={form.name} onChange={onChange} required />
                                <ContactInput name="email" placeholder="Email" type="email" value={form.email} onChange={onChange} required />
                                <ContactInput name="company" placeholder="Company" type="text" value={form.company} onChange={onChange} />
                                <ContactInput name="phone" placeholder="Phone" type="tel" value={form.phone} onChange={onChange} />

                                {/* Honeypot: oculto para usuarios, visible para bots */}
                                <input
                                    type="text"
                                    name="website"
                                    value={form.website}
                                    onChange={onChange}
                                    className="hidden"
                                    autoComplete="off"
                                    tabIndex={-1}
                                />

                                <div className="relative">
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder="Tell us about your project"
                                        value={form.message}
                                        onChange={onChange}
                                        required
                                        className="peer p-3 sm:p-4 block w-full bg-[white] border-transparent rounded-lg sm:text-sm text-black placeholder:text-transparent 
                      focus:outline-hidden focus:ring-0 focus:border-transparent 
                      focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
                                    />
                                    <label
                                        htmlFor="contact-message"
                                        className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                      peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 
                      peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
                                    >
                                        Tell us about your project
                                    </label>
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="text-xs text-neutral-200">All fields are required</p>

                                <div className="mt-5 flex items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#00733E] font-medium text-sm text-white rounded-full focus:outline-hidden disabled:opacity-60"
                                    >
                                        {status === "sending" ? "Enviando..." : `${t('contact.form.submit')}`}
                                        <svg
                                            className="shrink-0 size-4 transition group-hover:translate-x-0.5"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>

                                    {status === "ok" && <span className="text-green-200 text-sm">¡Mensaje enviado!</span>}
                                    {status === "error" && <span className="text-red-200 text-sm">{error}</span>}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Tu columna derecha como ya la tenías */}
                    <div className="space-y-14">
                        <ContactInfo
                            title={t('contact.address')}
                            icon={
                                <IoLocationOutline size={30} />
                            }
                        >
                            <address>
                                Azcuenaga 1930 11 OF C <br />
                                Capital Federal, Argentina
                            </address>
                        </ContactInfo>

                        <ContactInfo
                            title={t('contact.email')}
                            icon={
                                <MdOutlineEmail size={28} />
                            }
                        >
                            <a href="mailto:hello@example.so" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200">
                                info@syfglobal-sas.com
                            </a>
                        </ContactInfo>
                        <ContactInfo
                            title={"Seguinos en nuestras redes"}
                            icon={
                                <IoShareSocialOutline size={30} />
                            }
                        >
                            <div className="flex flex-row gap-5 ml-1 mt-2">
                                <a href="https://www.linkedin.com/company/syf-global/?viewAsMember=true" target="blank"><BsLinkedin size={20} /></a>
                                <a href="https://www.instagram.com/syfglobal_sas?igsh=dmx0enRpeG1obm1m" target="blank"><BsInstagram size={20} /></a>
                            </div>
                        </ContactInfo>
                    </div>
                </div>
            </div>
        </section>
    );
}
























































// import Capsule from "./Capsule";
// import ContactInput from "./ContactInput";
// import SectionTitle from "./SectionTitle";
// import ContactInfo from "./ContactInfo";
// export default function ContactSection() {
//     return (
//         <section id="contact" className="bg-[#2B3D8F]">

//             <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
//                 <div className="max-w mb-0 md:mb-20 lg:mb-14 flex items-center justify-between flex-col-reverse md:flex-row ">
//                     <div className="py-10 md:py-0">
//                         <SectionTitle title="Te ayudamos a blabla" position="text-left" addStyle="" />
//                         <p className="mt-3 text-gray-300 ml-1">
//                             Whatever your goal - we will get you there.

//                         </p>
//                     </div>
//                     <Capsule text="Contacto" />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">

//                     <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
//                         <form>
//                             <div className="space-y-4">

//                                 <ContactInput placeholder="Name" type="name" />
//                                 <ContactInput placeholder="Email" type="email" />
//                                 <ContactInput placeholder="Company" type="company" />
//                                 <ContactInput placeholder="Phone" type="phone" />

//                                 <div className="relative">
//                                     <textarea
//                                         id="contact-message"
//                                         placeholder="Tell us about your project"
//                                         className="peer p-3 sm:p-4 block w-full bg-[white] border-transparent rounded-lg sm:text-sm text-black placeholder:text-transparent
//                     focus:outline-hidden focus:ring-0 focus:border-transparent
//                     focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
//                                     />
//                                     <label
//                                         htmlFor="contact-message"
//                                         className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100
//                     peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400
//                     peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
//                                     >
//                                         Tell us about your project
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className="mt-2">
//                                 <p className="text-xs text-neutral-500">All fields are required</p>
//                                 <p className="mt-5">
//                                     <button
//                                         type="submit"
//                                         className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#00733E] font-medium text-sm text-white rounded-full focus:outline-hidden"
//                                     >
//                                         Submit
//                                         <svg
//                                             className="shrink-0 size-4 transition group-hover:translate-x-0.5"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path d="M5 12h14" />
//                                             <path d="m12 5 7 7-7 7" />
//                                         </svg>
//                                     </button>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>

//                     <div className="space-y-14">

//                         <ContactInfo
//                             title="Our address:"
//                             icon={
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 >
//                                     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                                     <circle cx="12" cy="10" r="3" />
//                                 </svg>
//                             }
//                         >
//                             <address>
//                                 300 Bath Street, Tay House <br />
//                                 Glasgow G2 4JR, United Kingdom
//                             </address>
//                         </ContactInfo>

//                         <ContactInfo
//                             title="Email us:"
//                             icon={
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 >
//                                     <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
//                                     <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
//                                 </svg>
//                             }
//                         >
//                             <a
//                                 href="mailto:hello@example.so"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-neutral-200"
//                             >
//                                 hello@example.so
//                             </a>
//                         </ContactInfo>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }
