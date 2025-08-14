'use client'
import { useMemo } from 'react'
import Lottie from 'lottie-react'
import animationData from '@/assets/lottie/ship.json' assert { type: 'json' }

export default function HeroSection() {
    const shouldReduce = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
        []
    )

    return (
        <section className="mx-auto max-w-7xl px-4 py-14 md:py-24 h-[80vh]">
            <div className="rounded-3xl bg-[#121212] overflow-hidden">
                {/* ✅ Grid estable: 1 col mobile / 2 cols desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">

                    {/* Ilustración: en mobile va ABAJO (order-2), en desktop a la DERECHA */}
                    <div className="order-1 md:order-2 px-6 md:px-0">
                        {/* Alto predecible para que no se pise con el texto */}
                        <div className="w-full max-w-[720px] mx-auto aspect-[16/10] md:aspect-[16/9]">
                            <Lottie
                                animationData={animationData as unknown as object}
                                loop={!shouldReduce}
                                autoplay={!shouldReduce}
                                className="h-full w-full"
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid meet',
                                    progressiveLoad: true,
                                    hideOnTransparent: true,
                                }}
                            />
                        </div>
                    </div>

                    {/* Texto: en mobile va ARRIBA (order-1), en desktop a la IZQUIERDA */}
                    <div className="order-2 md:order-1 px-6 py-10 md:px-12 md:py-16">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] md:leading-[1.07]">
                            La Mejor Experiencia<br className="hidden sm:block" /> En Transporte.
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl">
                            Optimizamos tus operaciones de comercio internacional y nacional
                        </p>

                        <div className="mt-8">
                            <button className="inline-flex items-center rounded-lg bg-violet-600 px-5 py-3 text-white font-semibold shadow-sm hover:brightness-110 transition">
                                Contactanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
