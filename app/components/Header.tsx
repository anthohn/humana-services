"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Image from "next/image";

export default function Header2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/a-propos", label: "À propos" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className={`md:bg-transparent ${isMenuOpen ? 'bg-[#E7DFF5]' : 'bg-transparent'} transition-colors duration-200`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={'/492F7A.png'} width={200} height={200} style={{ width: 200, height: 'auto' }} alt="logo" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Numéro de téléphone visible uniquement en mode desktop */}
                    <a 
                        href="tel:0794673902" 
                        className="hidden md:block bg-gray-50 text-[#B2A0D3] rounded-full py-3 px-4 text-sm"
                    >
                        079 467 39 02
                    </a>
                    <button 
                        type="button" 
                        className="inline-flex items-center w-16 h-16 justify-center text-sm rounded-lg md:hidden" 
                        aria-controls="navbar-default" 
                        aria-expanded={isMenuOpen} 
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <HamburgerIcon isActive={isMenuOpen} />
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="text-[#FF8A00] text-5xl space-y-8 md:space-y-0 h-screen md:h-0 md:text-[18px] md:font-normal md:text-gray-50 flex flex-col justify-center md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link 
                                    className={`link ${pathname === link.href ? 'underline underline-offset-8' : ''}`} 
                                    href={link.href} 
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {/* Ajout du numéro de téléphone ici */}
                        {isMenuOpen && (
                            <li>
                                <a 
                                    href="tel:0794673902" 
                                    className="bg-gray-50 text-[#B2A0D3] rounded-full py-3 px-4 text-sm"
                                >
                                    079 467 39 02
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function HamburgerIcon({ isActive }: { isActive: boolean }) {
    return (
        <svg className={`ham hamRotate ham1 ${isActive ? 'active' : ''}`} viewBox="0 0 100 100" width="80">
            <path
                className={`line top ${isActive ? 'active-line' : ''}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path
                className={`line middle ${isActive ? 'active-line' : ''}`}
                d="m 30,50 h 40" />
            <path
                className={`line bottom ${isActive ? 'active-line' : ''}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
    );
}
