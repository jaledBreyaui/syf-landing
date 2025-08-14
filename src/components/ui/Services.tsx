'use client'
import SectionTitle from './SectionTitle'
import ServiceBox from './ServiceBox'
import Image from 'next/image'
import { useWidth } from '@/hooks/useWidth'

export default function Services() {
    const width = useWidth();
    return (
        <section id="services" className="relative bg-[#121212]">
            <div className="relative overflow-hidden sm:py-20 lg:py-0">
                <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage: `url(/${width > 648 ? "hero.jpg" : "parallax.jpg"})`,
                        backgroundPosition: "50% 20%",
                        backgroundAttachment: "fixed",
                        filter: 'blur(2px)'
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-4 py-16 z-50  flex flex-col service-container">
                    <SectionTitle title='Servicios' addStyle='mb-20' />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceBox
                            title="Land Transport"
                            description="Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience."
                            buttonText="Book a Truck"
                        />
                        <ServiceBox
                            title="Air Freight"
                            description="Efficient aerial logistics for seamless cargo transport, ensuring swift global connections and reliable delivery solutions."
                            buttonText="Book a Freight"
                        />
                        <ServiceBox
                            title="Ocean Freight"
                            description="Efficient maritime solutions navigating global trade with precision, reliability, and sustainability for seamless ocean freight."
                            buttonText="Book a Ship"
                        />
                        <ServiceBox
                            title="Logística de Distribución"
                            description="Optimized distribution logistics to ensure on-time delivery and cost efficiency across your network."
                            buttonText="Book a Ship"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-violet-700/10 mix-blend-multiply" />
            </div>
        </section>
    )
}
