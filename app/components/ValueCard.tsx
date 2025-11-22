'use client';

import { IconType } from "react-icons";

interface ValueCardProps {
    title: string;
    description: string;
    icon: IconType;
    colorTheme: 'purple' | 'orange' | 'green';
}

export default function ValueCard({ title, description, icon: Icon, colorTheme }: ValueCardProps) {

    const themeStyles = {
        purple: {
            bg: 'bg-[#F3F0FA]', // Very light purple
            icon: 'text-[#AC96D5]',
            iconBg: 'bg-white'
        },
        orange: {
            bg: 'bg-[#FFF4E5]', // Very light orange
            icon: 'text-[#FF8A00]',
            iconBg: 'bg-white'
        },
        green: {
            bg: 'bg-[#E6F5F0]', // Very light green/teal
            icon: 'text-[#4CAF50]',
            iconBg: 'bg-white'
        }
    };

    const theme = themeStyles[colorTheme];

    return (
        <div className={`flex flex-col items-center p-8 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${theme.bg} h-full`}>
            <div className={`p-5 rounded-full shadow-sm mb-6 ${theme.iconBg}`}>
                <Icon className={`w-10 h-10 ${theme.icon}`} />
            </div>
            <h3 className="text-2xl font-serif font-medium text-gray-800 mb-4">{title}</h3>
            <p className="text-center text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
