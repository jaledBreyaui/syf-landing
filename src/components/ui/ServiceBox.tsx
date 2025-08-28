

import React from "react";

interface ServiceBoxProps {
    title: string;
    items: string[];
    icon: React.ReactNode;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, items, icon }) => {
    return (
        <div className="bg-black/40 backdrop-blur-lg rounded-lg py-8 px-6 shadow-lg text-center border border-white/10">
            {/* Icono arriba */}
            <div className="flex justify-center text-[#00733E] text-5xl mb-6">
                {icon}
            </div>

            {/* Título */}
            <h3 className="text-white text-2xl font-semibold mb-6">{title}</h3>

            {/* Lista de items */}
            <ul className="text-gray-300 text-left space-y-2 mx-auto">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {/* Podés cambiar el ícono de check por el que quieras */}
                        <span className="text-[#FFF]">-</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceBox;



































// // ServiceBox.tsx
// import React from "react";

// interface ServiceBoxProps {
//     title: string;
//     description: string;
//     icon?: React.ReactNode;
//     buttonText: string;
// }

// const ServiceBox: React.FC<ServiceBoxProps> = ({
//     title,
//     description,
//     icon,
//     buttonText,
// }) => {
//     return (
//         <div className="bg-black/40 backdrop-blur-lg rounded-lg py-8 px-4 shadow-lg text-center border border-white/10">
//             <div className="flex justify-center text-violet-500 text-4xl mb-4">
//                 {icon}
//             </div>
//             <h3 className="text-white text-2xl font-semibold mb-6">{title}</h3>
//             <p className="text-gray-300 text-sm mb-6">{description}</p>
//             <button className="bg-[#00733E] hover:bg-[#00733E]/60 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300">
//                 {buttonText}
//             </button>
//         </div>
//     );
// };

// export default ServiceBox;
