import ContactPage from "@/app/components/ContactPage";
import { Metadata } from "next";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <main className="bg-[#FDFBF7] min-h-screen relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F3F0FA] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB088] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

            <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Info */}
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
                                <div className="w-14 h-14 bg-[#F3F0FA] rounded-full flex items-center justify-center text-[#4A3B69] group-hover:scale-110 transition-transform">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">E-mail</p>
                                    <p className="text-xl text-[#4A3B69] font-medium">contact@humana-services.ch</p>
                                </div>
                            </a>

                            <a href="tel:0794673902" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-[#FFF4E5] rounded-full flex items-center justify-center text-[#FF8A00] group-hover:scale-110 transition-transform">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">Téléphone</p>
                                    <p className="text-xl text-[#4A3B69] font-medium">079 467 39 02</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-4">
                                <div className="w-14 h-14 bg-[#E6F5F0] rounded-full flex items-center justify-center text-[#4CAF50]">
                                    <FaLocationDot className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wide font-medium">Adresse</p>
                                    <p className="text-xl text-[#4A3B69] font-medium">1196 Gland, Suisse</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/80 backdrop-blur-lg p-8 lg:p-12 rounded-[3rem] shadow-xl border border-white/50">
                            <ContactPage />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}