'use client';

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col w-full">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <button
                        className="flex w-full text-gray-50 text-2xl justify-between border-t border-white/20 pt-4 pb-2 hover:text-white transition-colors"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-xl sm:text-2xl font-serif text-left">{item.title}</span>
                        <span className="text-2xl font-light">{openIndex === index ? '−' : '+'}</span>
                    </button>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                            height: openIndex === index ? 'auto' : 0,
                            opacity: openIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="text-gray-100 text-lg lg:text-xl flex w-full py-4 font-light leading-relaxed">
                            {item.content}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
