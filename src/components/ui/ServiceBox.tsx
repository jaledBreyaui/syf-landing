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
        <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 shadow-lg text-center border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center text-violet-500 text-4xl mb-4">
                {icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-6">{description}</p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300">
                {buttonText}
            </button>
        </div>
    );
};

export default ServiceBox;
