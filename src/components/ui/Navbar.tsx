// 'use client';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// /** Truck icon simple */
// // function TruckIcon({ className = 'size-6' }: { className?: string }) {
// //     return (
// //         <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
// //             <path d="M3 6a2 2 0 0 1 2-2h9v8h2.586a2 2 0 0 1 1.414.586L20 14h1a1 1 0 1 1 0 2h-1.126A3.002 3.002 0 0 1 16 19a3.002 3.002 0 0 1-2.874-3H10.874A3.002 3.002 0 0 1 8 19a3.002 3.002 0 0 1-2.874-3H3a1 1 0 1 1 0-2h1V6Zm2 0v8h5V6H5Zm9 0v6h1.586L18 13.414V12h-2V6ZM8 18a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
// //         </svg>
// //     );
// // }

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);

//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 100);
//         onScroll();
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     // Cierra el menú al cambiar de tamaño para evitar estados raros
//     useEffect(() => {
//         const onResize = () => window.innerWidth >= 768 && setOpen(false);
//         window.addEventListener('resize', onResize);
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     return (
//         <>
//             {/* Barra fija que cambia de estilo al scrollear */}
//             <div
//                 className={[
//                     'fixed z-150 transition-all duration-300 ',
//                     scrolled
//                         ? 'top-4 inset-x-4 md:inset-x-6'
//                         : 'top-0 inset-x-0',
//                 ].join(' ')}
//                 aria-label="Site navigation"
//             >
//                 <div
//                     className={[
//                         'mx-auto flex items-center justify-between',
//                         'bg-[#121212] text-white',
//                         'transition-all duration-300',
//                         scrolled
//                             ? 'max-w-6xl rounded-full border border-violet-600/20 px-4 py-2 md:px-6 md:py-3 shadow-lg'
//                             : 'w-full px-4 py-3 md:px-8 md:py-4',
//                     ].join(' ')}
//                 >
//                     {/* Logo */}
//                     <Link href="#" className="group inline-flex items-center gap-2">
//                         <span className="relative grid place-items-center rounded-full p-2 text-[#7f22fe]">
//                             {/* <span className="absolute inset-0 rounded-full ring-2 ring-[#ff642e]/30 group-hover:ring-[#7f22fe]/50 transition" /> */}
//                             {/* <TruckIcon className="size-5 relative" /> */}
//                         </span>
//                         <span className="font-extrabold tracking-tight">S&F Global SAS</span>
//                     </Link>

//                     {/* Links desktop */}
//                     <nav className="hidden md:flex items-center gap-6 text-sm">
//                         {['Home', 'Nosotros', 'Servicios', 'Contact'].map((item) => (
//                             <Link
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className="text-neutral-200 hover:text-white transition"
//                             >
//                                 {item}
//                             </Link>
//                         ))}
//                         <button
//                             className="relative rounded-full bg-[#7f22fe] px-4 py-2 font-semibold text-white hover:brightness-110 transition"
//                         >
//                             Use for Free
//                             {/* aro tenue como en tu referencia */}
//                             {scrolled && (
//                                 <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-[#7f22fe]/30" />
//                             )}
//                         </button>
//                     </nav>

//                     {/* Botón hamburguesa mobile */}
//                     <button
//                         className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 ring-1 ring-white/10 hover:bg-white/5 transition"
//                         aria-label="Toggle menu"
//                         aria-expanded={open}
//                         onClick={() => setOpen((v) => !v)}
//                     >
//                         <span className="sr-only">Menu</span>
//                         <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
//                             {open ? (
//                                 <path d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path d="M4 7h16M4 12h16M4 17h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Drop de menú mobile: se despliega desde arriba */}
//             <div
//                 className={[
//                     'fixed left-0 right-0 z-40 md:hidden transition-transform duration-300',
//                     open ? 'translate-y-0' : '-translate-y-full',
//                     'top-0',
//                 ].join(' ')}
//             >
//                 {/* sombra/overlay */}
//                 <div
//                     className="h-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"
//                     aria-hidden
//                 />
//                 <div className="bg-[#121212] text-white px-6 pt-20 pb-6 border-b border-white/10">
//                     <nav className="flex flex-col gap-4 text-base">
//                         {['Services', 'Nosotros', 'Servicios', 'Contact'].map((item) => (
//                             <Link
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className="py-1 text-neutral-200 hover:text-white"
//                                 onClick={() => setOpen(false)}
//                             >
//                                 {item}
//                             </Link>
//                         ))}
//                         <button
//                             className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#7f22fe] px-4 py-3 font-semibold hover:brightness-110"
//                             onClick={() => setOpen(false)}
//                         >
//                             Use for Free
//                         </button>
//                     </nav>
//                 </div>
//             </div>

//             {/* Spacer opcional para evitar solapado del contenido al inicio */}
//             <div className={scrolled ? 'h-24' : 'h-16'} aria-hidden />
//         </>
//     );
// }
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState<'es' | 'en'>('es');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cerrar menú al agrandar pantalla
    useEffect(() => {
        const onResize = () => window.innerWidth >= 768 && setOpen(false);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Init lenguaje desde localStorage o navegador
    useEffect(() => {
        const saved =
            (typeof window !== 'undefined' &&
                (localStorage.getItem('lang') as 'es' | 'en' | null)) || null;

        const initial =
            saved ??
            ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');

        setLang(initial);
        if (typeof document !== 'undefined') {
            document.documentElement.lang = initial;
        }
    }, []);

    // Toggle lenguaje
    const toggleLang = () => {
        const next = lang === 'es' ? 'en' : 'es';
        setLang(next);
        if (typeof window !== 'undefined') {
            localStorage.setItem('lang', next);
        }
        if (typeof document !== 'undefined') {
            document.documentElement.lang = next;
        }
        // evento opcional para que el resto de la app pueda reaccionar
        window.dispatchEvent(new CustomEvent('langchange', { detail: next }));
    };

    return (
        <>
            {/* Barra fija */}
            <div
                className={[
                    'fixed z-150 transition-all duration-300 ',
                    scrolled ? 'top-4 inset-x-4 md:inset-x-6' : 'top-0 inset-x-0',
                ].join(' ')}
                aria-label="Site navigation"
            >
                <div
                    className={[
                        'mx-auto flex items-center justify-between',
                        'bg-[#121212] text-white',
                        'transition-all duration-300',
                        scrolled
                            ? 'max-w-6xl rounded-full border border-violet-600/20 px-4 py-2 md:px-6 md:py-3 shadow-lg'
                            : 'w-full px-4 py-3 md:px-8 md:py-4',
                    ].join(' ')}
                >
                    {/* Logo */}
                    <Link href="#" className="group inline-flex items-center gap-2">
                        <span className="relative grid place-items-center rounded-full p-2 text-[#7f22fe]" />
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

                        {/* Botón ES/EN */}
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
                        className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 ring-1 ring-white/10 hover:bg-white/5 transition"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                            {open ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
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
                <div
                    className="h-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"
                    aria-hidden
                />
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

                        {/* Toggle ES/EN también en mobile */}
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

            {/* Spacer para evitar solape */}
            <div className={scrolled ? 'h-24' : 'h-16'} aria-hidden />
        </>
    );
}
