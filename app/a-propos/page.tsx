import seniorTalking from '../../public/iStock-M-seniorTalking.jpg'
import Image from 'next/image'
import { Metadata } from "next";
import { FaQuoteLeft } from 'react-icons/fa';

export const metadata: Metadata = {
    title: "À Propos",
};

export default function About() {
    return (
        <main className="bg-[#FDFBF7] overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[#FFB088] font-medium tracking-widest uppercase text-sm mb-4 block">Notre Histoire</span>
                        <h1 className="text-5xl lg:text-7xl font-serif text-[#4A3B69] mb-8">
                            Plus qu&apos;un service,<br />
                            <span className="italic">une vocation.</span>
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image with Organic Shape */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FFB088] opacity-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl transform rotate-6 scale-105"></div>
                            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src={seniorTalking}
                                    alt='Moments de partage'
                                    fill
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="text-[#4A3B69]">
                                <FaQuoteLeft className="text-4xl text-[#E7DFF5] mb-6" />
                                <p className="text-2xl font-serif leading-relaxed mb-6">
                                    Humana Services est né d&apos;une conviction simple : chaque instant de vie mérite d&apos;être célébré.
                                </p>
                            </div>

                            <div className="text-[#666070] text-lg leading-relaxed space-y-6">
                                <p>
                                    Nous sommes bien plus qu&apos;une entreprise d&apos;accompagnement à domicile. Nous sommes les gardiens de votre sourire et les artisans de votre bien-être.
                                </p>
                                <p>
                                    Notre mission est de transformer la retraite en une période <span className="text-[#4A3B69] font-medium">enrichissante et joyeuse</span>.
                                    En personnalisant chaque activité, nous remettons l&apos;humain au cœur de l&apos;accompagnement.
                                </p>
                                <p>
                                    Parce que nous croyons que le bonheur n&apos;a pas d&apos;âge, notre équipe dévouée s&apos;engage à créer avec vous un avenir rempli de moments mémorables.
                                </p>
                            </div>

                            <div className="pt-8">
                                <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-purple-50">
                                    <p className="font-serif text-[#4A3B69] text-xl mb-2">Notre Promesse</p>
                                    <p className="text-[#666070]">Passion, Bonheur, et Bien-être absolu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}