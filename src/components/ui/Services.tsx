import SectionTitle from './SectionTitle'
import ServiceBox from './ServiceBox'

export default function Services() {
    return (
        <section id="servicios" className="relative ">
            {/* Fondo fijo global: funciona en iOS */}
            <div
                aria-hidden
                className={[
                    'fixed inset-0 -z-10',      // queda pegado a la ventana detrás de todo
                    'bg-cover bg-top md:bg-[position:50%_20%]',
                    "bg-[url('/parallax.jpg')]",
                    "md:bg-[url('/hero.jpg')]",
                    'blur-[2px]',               // tu blur
                ].join(' ')}
            />

            {/* Velo de color por encima del fondo pero debajo del contenido */}
            <div className="pointer-events-none absolute inset-0 -z-0 bg-[violet-700]/10 mix-blend-multiply" />
            {/* #2B3D8F */}
            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-16 z-10">
                <SectionTitle title="Servicios" addStyle="mb-20" />
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
        </section>
    )
}
