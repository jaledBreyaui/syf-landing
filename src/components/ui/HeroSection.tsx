'use client';
import { useMemo } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/lottie/ship.json' assert { type: 'json' };

export default function HeroSection() {
    const shouldReduce = useMemo(
        () =>
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
        []
    );

    return (
        <section className="bg-[#121212]">
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-10 md:pb-16">
                {/* 2 columnas en desktop, centrado vertical */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 min-h-[70svh]">
                    {/* Texto (izquierda en desktop) */}
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] md:leading-[1.07]">
                            La Mejor Experiencia
                            <br className="hidden sm:block" /> En Transporte.
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl">
                            Optimizamos tus operaciones de comercio internacional y nacional
                        </p>

                        <div className="mt-8">
                            <button className="inline-flex items-center rounded-lg bg-violet-600 px-5 py-3 text-white font-semibold shadow-sm hover:brightness-110 transition">
                                Contactanos
                            </button>
                        </div>
                    </div>

                    {/* Ilustración (derecha en desktop) */}
                    <div className="order-1 md:order-2 justify-self-center md:justify-self-end w-full">
                        <div className="w-full max-w-[640px] md:max-w-[720px] aspect-[16/10] md:aspect-[16/9]">
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
                </div>
            </div>
        </section>
    );
}
