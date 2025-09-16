"use client"
import React from "react";
import SectionTitle from './SectionTitle'
import ServiceBox from './ServiceBox'
import { useTranslation } from 'react-i18next';
import { FaShip, FaPlane, FaTruck, FaFileInvoice, FaProjectDiagram, FaPlusSquare } from "react-icons/fa";
const iconMap: Record<string, React.ReactNode> = {
    service1: <FaShip />,
    service2: <FaPlane />,
    service3: <FaTruck />,
    service4: <FaFileInvoice />,
    service5: <FaProjectDiagram />,
    service6: <FaPlusSquare />,
};

export default function Services() {
    const { t } = useTranslation();
    const servicesObj = t("services.items", {
        returnObjects: true,
    }) as Record<string, { title: string; items: string[] }>;

    const order = ["service1", "service2", "service3", "service4", "service5", "service6"];
    return (
        <section id="services" className="relative ">
            {/* Fondo fijo global: funciona en iOS */}
            <div
                aria-hidden
                className={[
                    'fixed inset-0 -z-10',
                    'bg-cover bg-top md:bg-[position:50%_20%]',
                    "bg-[url('/parallax.jpg')]",
                    "md:bg-[url('/hero.jpg')]",
                    'blur-[2px]',
                ].join(' ')}
            />
            <div className="pointer-events-none absolute inset-0 -z-0 bg-[violet-700]/10 mix-blend-multiply" />
            {/* #2B3D8F */}
            <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-16 z-10">
                <SectionTitle title={t('services.title')} addStyle="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {order.map((key) => {
                        const svc = servicesObj[key];
                        if (!svc) return null;
                        return (
                            <ServiceBox
                                key={key}
                                title={svc.title}
                                items={svc.items}
                                icon={iconMap[key]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
