import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#4A3B69] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-serif mb-6">Humana Services</h2>
                        <p className="text-purple-200 text-lg leading-relaxed max-w-md mb-8">
                            L&apos;excellence de l&apos;accompagnement à domicile. Une approche humaine, personnalisée et respectueuse pour une retraite épanouie.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/humana-services" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFB088] hover:text-[#4A3B69] transition-all">
                                <FaLinkedin className="text-xl" />
                            </a>
                            {/* Add other social links if needed */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-serif mb-6 text-[#FFB088]">Navigation</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-purple-200 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/a-propos" className="text-purple-200 hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="/contact" className="text-purple-200 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-serif mb-6 text-[#FFB088]">Contact</h3>
                        <ul className="space-y-4 text-purple-200">
                            <li>1196 Gland, Suisse</li>
                            <li><a href="tel:0794673902" className="hover:text-white transition-colors">078 221 38 21</a></li>
                            <li><a href="mailto:contact@humana-services.ch" className="hover:text-white transition-colors">contact@humana-services.ch</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-purple-300 text-sm">© {new Date().getFullYear()} Humana Services. Tous droits réservés.</p>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                        <span>Designed by</span>
                        <a href="https://swiss-berry.com" target="_blank" className="text-white hover:text-[#FFB088] transition-colors font-medium">
                            Swiss Berry
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
