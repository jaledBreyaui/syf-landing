import Capsule from "./Capsule";
// import SectionTitle from "./SectionTitle";
import Image from "next/image";
export default function About() {
    return (
        <section className="px-4 py-10 sm:py-20 flex flex-col items-center bg-[#121212]">
            <Capsule text="Nosotros" />
            <div className="pt-10 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="md:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <Image className="rounded-xl object-cover hidden sm:block" src="/5.jpg" alt="about Us image" height={600} width={450} />
                            </div>
                            <Image className="sm:ml-0 ml-auto rounded-xl object-cover"
                                src="/6.jpg"
                                height={600}
                                width={450}
                                alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Empowering Each Other to Succeed</h2>
                                    <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Every project weve undertaken has been a collaborative effort, where every person
                                        involved has left their mark. Together, weve not only constructed buildings but also
                                        built enduring connections that define our success story.</p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#00733E] text-4xl font-bold font-manrope leading-normal">33+</h3>
                                        <h6 className="text-gray-300 text-base font-normal leading-relaxed">Years of Experience</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-[#00733E] text-4xl font-bold font-manrope leading-normal">125+</h4>
                                        <h6 className="text-gray-300 text-base font-normal leading-relaxed">Successful Projects</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-[#00733E] text-4xl font-bold font-manrope leading-normal">52+</h4>
                                        <h6 className="text-gray-300 text-base font-normal leading-relaxed">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            {/* <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}