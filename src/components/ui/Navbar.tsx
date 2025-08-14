'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState<'es' | 'en'>('es');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => window.innerWidth >= 768 && setOpen(false);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const saved = (typeof window !== 'undefined' && (localStorage.getItem('lang') as 'es' | 'en' | null)) || null;
        const initial = saved ?? ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');
        setLang(initial);
        if (typeof document !== 'undefined') document.documentElement.lang = initial;
    }, []);

    const toggleLang = () => {
        const next = lang === 'es' ? 'en' : 'es';
        setLang(next);
        if (typeof window !== 'undefined') localStorage.setItem('lang', next);
        if (typeof document !== 'undefined') document.documentElement.lang = next;
        window.dispatchEvent(new CustomEvent('langchange', { detail: next }));
    };

    return (
        <>
            <div
                className={[
                    'fixed top-0 inset-x-0 z-50 transition-all duration-300',
                    scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-[#121212]/70' : 'bg-[#121212]',
                ].join(' ')}
                aria-label="Site navigation"
            >
                <div
                    className={[
                        'max-w-6xl mx-auto flex items-center justify-between',
                        'text-white transition-all duration-300',
                        scrolled
                            ? 'mt-3 mb-3 rounded-full border border-violet-600/20 px-4 py-2 md:px-6 md:py-3 shadow-lg bg-[#121212]/80'
                            : 'px-4 py-4 md:px-6',
                    ].join(' ')}
                >
                    {/* Logo a la izquierda, sin padding fantasma */}
                    <Link href="#" className="inline-flex items-center">
                        <span className="font-extrabold tracking-tight">S&amp;F Global SAS</span>
                    </Link>

                    {/* Links desktop */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {['Home', 'Nosotros', 'Servicios', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-neutral-200 hover:text-white transition"
                            >
                                {item}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLang}
                            className="relative rounded-full bg-[#7f22fe] px-4 py-2 font-semibold text-white hover:brightness-110 transition"
                            aria-label="Toggle language ES/EN"
                        >
                            {lang.toUpperCase()}
                            {scrolled && (
                                <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-[#7f22fe]/30" />
                            )}
                        </button>
                    </nav>

                    {/* Hamburguesa mobile */}
                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 hover:bg-white/10 transition"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" aria-hidden="true">
                            {open ? (
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <>
                                    <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú mobile desplegable */}
            <div
                className={[
                    'fixed left-0 right-0 z-40 md:hidden transition-transform duration-300',
                    open ? 'translate-y-0' : '-translate-y-full',
                    'top-0',
                ].join(' ')}
            >
                <div className="h-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" aria-hidden />
                <div className="bg-[#121212] text-white px-6 pt-20 pb-6 border-b border-white/10">
                    <nav className="flex flex-col gap-4 text-base">
                        {['Home', 'Nosotros', 'Servicios', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="py-1 text-neutral-200 hover:text-white"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <button
                            className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#7f22fe] px-4 py-3 font-semibold hover:brightness-110"
                            onClick={() => {
                                toggleLang();
                                setOpen(false);
                            }}
                            aria-label="Toggle language ES/EN"
                        >
                            {lang.toUpperCase()}
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}
