'use client';

import Image from "next/image";
import iStockBack from '../public/iStock-1487976856.jpg'
import seniorDrawing from '../public/iStock-M-seniorDrawing.jpg'
import seniorWalking from '../public/iStock-M-seniorWalking.jpg'
import Contact from "@/app/components/Contact";
import Accordion from "@/app/components/Accordion";
import { FaHandHoldingHeart, FaUserShield } from "react-icons/fa";
import { FaEarListen, FaStar } from "react-icons/fa6";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero Section - Premium Split Layout */}
            <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F3F0FA] -z-20 rounded-l-[100px] hidden lg:block" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFB088] opacity-20 blur-[100px] rounded-full -z-10" />

                <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                            <span className="text-[#4A3B69] font-medium text-sm tracking-wide uppercase">Excellence & Humanité</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif text-[#4A3B69] leading-[1.1]">
                            L&apos;art de <br />
                            <span className="italic text-[#FFB088]">prendre soin</span> <br />
                            à domicile.
                        </h1>
                        <p className="text-lg text-[#666070] leading-relaxed max-w-md">
                            Humana Services réinvente l&apos;accompagnement des seniors. Une présence bienveillante, des activités sur-mesure et un respect absolu de vos habitudes de vie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="/contact" className="px-8 py-4 bg-[#4A3B69] text-white rounded-full font-medium hover:bg-[#3D3058] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                                Commencer l&apos;expérience
                            </a>
                            <a href="#services" className="px-8 py-4 bg-white text-[#4A3B69] border border-[#E7DFF5] rounded-full font-medium hover:bg-[#F3F0FA] transition-all text-center">
                                Découvrir nos services
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-200/50">
                            <div>
                                <p className="text-3xl font-serif text-[#4A3B69]">10+</p>
                                <p className="text-sm text-[#666070]">Années d&apos;expérience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-serif text-[#4A3B69]">100%</p>
                                <p className="text-sm text-[#666070]">Satisfaction client</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content - Organic Shape */}
                    <div className="relative h-[600px] hidden lg:block">
                        <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
                            <Image
                                src={seniorWalking}
                                alt="Accompagnement premium"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-[#F3F0FA] rounded-full flex items-center justify-center text-[#4A3B69]">
                                    <FaStar />
                                </div>
                                <div>
                                    <p className="font-serif text-[#4A3B69] text-lg">Service Premium</p>
                                    <div className="flex text-[#FFB088] text-sm">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-sm text-[#666070] italic">&quot;Une équipe exceptionnelle qui a changé la vie de ma mère.&quot;</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - Minimalist & Clean */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-serif text-[#4A3B69] mb-6">Nos Piliers Fondamentaux</h2>
                        <div className="w-24 h-1 bg-[#FFB088] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Bienveillance Absolue", icon: FaHandHoldingHeart, text: "Chaque geste est pensé pour le confort et le bien-être émotionnel." },
                            { title: "Écoute Active", icon: FaEarListen, text: "Nous prenons le temps de comprendre les histoires et les désirs de chacun." },
                            { title: "Respect Intégral", icon: FaUserShield, text: "Votre dignité et votre intimité sont au cœur de notre déontologie." }
                        ].map((item, idx) => (
                            <div key={idx} className="group text-center p-8 rounded-[3rem] hover:bg-[#FDFBF7] transition-colors duration-500">
                                <div className="w-20 h-20 mx-auto bg-[#F3F0FA] rounded-full flex items-center justify-center text-[#4A3B69] text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon />
                                </div>
                                <h3 className="text-2xl font-serif text-[#4A3B69] mb-4">{item.title}</h3>
                                <p className="text-[#666070] leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Overlapping Cards */}
            <section id="services" className="py-32 bg-[#F3F0FA] relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl lg:text-5xl font-serif text-[#4A3B69] mb-8">Des services pensés pour l&apos;épanouissement.</h2>
                            <p className="text-[#666070] text-lg mb-8">
                                Bien plus qu&apos;une aide, nous apportons de la vie, de la joie et de la stimulation au quotidien.
                            </p>
                            <a href="/contact" className="text-[#4A3B69] font-medium border-b border-[#4A3B69] pb-1 hover:text-[#FFB088] hover:border-[#FFB088] transition-colors">
                                En savoir plus sur nos prestations →
                            </a>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-[2rem] shadow-lg hover:-translate-y-2 transition-transform duration-500">
                                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                                    <Image src={iStockBack} alt="Accompagnement" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-serif text-[#4A3B69] mb-3">Accompagnement</h3>
                                <p className="text-[#666070]">Promenades, sorties culturelles, courses... Maintenir le lien avec le monde extérieur.</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-lg hover:-translate-y-2 transition-transform duration-500 md:translate-y-12">
                                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                                    <Image src={seniorDrawing} alt="Activités" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-serif text-[#4A3B69] mb-3">Stimulation</h3>
                                <p className="text-[#666070]">Jeux de mémoire, arts créatifs, discussions... Garder l&apos;esprit vif et curieux.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Accordion - Dark Premium Theme */}
            <section className="py-32 bg-[#4A3B69] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-8">Notre Histoire &<br />Notre Engagement</h2>
                            <p className="text-purple-100 text-lg leading-relaxed mb-8">
                                Fondée sur des valeurs familiales fortes, Humana Services n&apos;est pas une simple agence. C&apos;est une promesse : celle de traiter vos proches comme les nôtres.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                            <Accordion items={accordionData} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Premium Slider Style */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="text-[#FFB088] font-medium tracking-widest uppercase text-sm mb-4 block">Témoignages</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-[#4A3B69]">Ce qu&apos;ils disent de nous</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Review 1 */}
                        <div className="bg-[#FDFBF7] p-10 rounded-[3rem] relative group hover:shadow-xl transition-all duration-500">
                            <div className="absolute top-10 left-10 text-6xl text-[#E7DFF5] font-serif opacity-50">&ldquo;</div>
                            <p className="text-[#4A3B69] text-xl lg:text-2xl font-serif italic leading-relaxed relative z-10 pt-8 mb-8">
                                Mon épouse retrouve le sourire et la joie de vivre en présence de l&apos;auxiliaire d&apos;Humana.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#FFB088] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">M</div>
                                <div>
                                    <p className="text-[#4A3B69] font-medium">Marc D.</p>
                                    <div className="flex text-[#FFB088] text-sm">★★★★★</div>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-[#FDFBF7] p-10 rounded-[3rem] relative group hover:shadow-xl transition-all duration-500 md:translate-y-12">
                            <div className="absolute top-10 left-10 text-6xl text-[#E7DFF5] font-serif opacity-50">&ldquo;</div>
                            <p className="text-[#4A3B69] text-xl lg:text-2xl font-serif italic leading-relaxed relative z-10 pt-8 mb-8">
                                Mon père ancien pilote, peut ressortir se balader à l&apos;aérodrome grâce à l&apos;accompagnement d&apos;Humana 😎
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#4A3B69] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">P</div>
                                <div>
                                    <p className="text-[#4A3B69] font-medium">Pierre L.</p>
                                    <div className="flex text-[#FFB088] text-sm">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="bg-[#FFB088]/5 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-serif text-[#4A3B69] mb-6">Prêt à améliorer votre quotidien ?</h2>
                            <p className="text-[#666070] text-lg mb-10 max-w-2xl mx-auto">
                                Contactez-nous pour une évaluation gratuite et sans engagement. Construisons ensemble le plan d&apos;aide idéal.
                            </p>
                            <Contact />
                        </div>
                        {/* Decor */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFB088] rounded-full opacity-30 blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#4A3B69] rounded-full opacity-10 blur-3xl"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

const accordionData = [
    {
        title: "Notre Philosophie",
        content: (
            <p className="text-purple-50">
                Nous croyons que le maintien à domicile ne doit pas être une contrainte, mais une opportunité de redécouvrir son environnement avec sérénité.
            </p>
        )
    },
    {
        title: "Expertise Alzheimer & Parkinson",
        content: (
            <p className="text-purple-50">
                Nos auxiliaires sont spécifiquement formés pour accompagner les troubles cognitifs avec patience, techniques de stimulation adaptées et sécurisation de l&apos;espace.
            </p>
        )
    },
    {
        title: "Recrutement Rigoureux",
        content: (
            <p className="text-purple-50">
                Chaque collaborateur est sélectionné non seulement pour ses compétences techniques, mais surtout pour ses qualités humaines irréprochables.
            </p>
        )
    },
];