// ServiceBox.tsx
import React from "react";

interface ServiceBoxProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    buttonText: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
    title,
    description,
    icon,
    buttonText,
}) => {
    return (
        <div className="bg-black/40 backdrop-blur-lg rounded-lg py-8 px-4 shadow-lg text-center border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center text-violet-500 text-4xl mb-4">
                {icon}
            </div>
            <h3 className="text-white text-2xl font-semibold mb-6">{title}</h3>
            <p className="text-gray-300 text-sm mb-6">{description}</p>
            <button className="bg-[#2B3D8F] hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300">
                {buttonText}
            </button>
        </div>
    );
};

export default ServiceBox;
