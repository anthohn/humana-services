import { Metadata } from "next";
import { FaEnvelope, FaPhone, FaLocationDot, FaHeart } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Humana Services pour une évaluation gratuite. Nous sommes à votre écoute pour un accompagnement sur-mesure à domicile.",
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        url: '/contact',
    },
};

export default function Contact() {
    return (
        <main className="bg-[#FDFBF7] min-h-screen relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F3F0FA] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB088] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

            <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-32 z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Column: Info (Identical to original) */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <span className="text-[#FFB088] font-medium tracking-widest uppercase text-sm mb-4 block">Contactez-nous</span>
                            <h1 className="text-5xl lg:text-6xl font-serif text-[#4A3B69] mb-6">
                                Parlons de <br /> <span className="italic">vous.</span>
                            </h1>
                            <p className="text-[#666070] text-lg">
                                Une question ? Un besoin spécifique ? Notre équipe est à votre écoute pour construire l&apos;accompagnement qui vous ressemble.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <a href="mailto:contact@humana-services.ch" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-[#F3F0FA] rounded-full flex items-center justify-center text-[#4A3B69] group-hover:scale-110 transition-transform shrink-0">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">E-mail</p>
                                    <p className="text-xl text-[#4A3B69] font-medium transition-colors group-hover:text-[#FFB088] break-words">contact@humana-services.ch</p>
                                </div>
                            </a>

                            <a href="tel:0782213821" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-[#FFF4E5] rounded-full flex items-center justify-center text-[#FFB088] group-hover:scale-110 transition-transform shrink-0">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">Téléphone</p>
                                    <p className="text-xl text-[#4A3B69] font-medium transition-colors group-hover:text-[#FFB088]">078 221 38 21</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-4">
                                <div className="w-14 h-14 bg-[#E6F5F0] rounded-full flex items-center justify-center text-[#4CAF50] shrink-0">
                                    <FaLocationDot className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">Adresse</p>
                                    <p className="text-xl text-[#4A3B69] font-medium">1196 Gland, Suisse</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Original White Card filled with direct actions */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/80 backdrop-blur-lg p-8 lg:p-12 rounded-[3rem] shadow-xl border border-white/50 text-center space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-serif text-[#4A3B69]">
                                    Privilégions un contact <span className="italic text-[#FFB088]">direct</span>
                                </h2>
                                <p className="text-[#666070] leading-relaxed max-w-lg mx-auto">
                                    Afin de favoriser un échange authentique, chaleureux et sans filtre, nous choisissons de ne pas utiliser de formulaire automatisé. Nous vous invitons à nous joindre directement selon vos préférences.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                                <a
                                    href="tel:0782213821"
                                    className="w-full sm:w-auto px-8 py-4 bg-[#4A3B69] text-white rounded-full font-medium hover:bg-[#3D3058] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                                >
                                    <FaPhone className="text-sm" />
                                    Appelez-nous (078 221 38 21)
                                </a>
                                <a
                                    href="mailto:contact@humana-services.ch"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-[#4A3B69] border border-[#E7DFF5] rounded-full font-medium hover:bg-[#F3F0FA] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                                >
                                    <FaEnvelope className="text-sm" />
                                    Écrivez-nous (E-mail)
                                </a>
                            </div>

                            <div className="border-t border-purple-50 pt-6 flex items-center justify-center gap-2 text-xs text-[#9CA3AF]">
                                <FaHeart className="text-[#FFB088] animate-pulse" />
                                <span>Réponse sous 24h &bull; À vos côtés avec bienveillance</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}