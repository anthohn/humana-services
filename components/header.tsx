'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        initFlowbite();
    }, []);

    useEffect(() => {
        const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]') as HTMLElement;
        const navbarMenu = document.getElementById('navbar-default');
        const menuLinks = navbarMenu?.querySelectorAll('a') as NodeListOf<HTMLElement>;

        if (!menuButton || !navbarMenu || !menuLinks) return;

        const handleMenuToggle = () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            setIsMenuOpen(isExpanded);
            if (isExpanded) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        };

        const closeMenu = () => {
            if (menuButton.getAttribute('aria-expanded') === 'true') {
                menuButton.click();
            }
        };

        menuButton.addEventListener('click', handleMenuToggle);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        return () => {
            menuButton.removeEventListener('click', handleMenuToggle);
            menuLinks.forEach(link => {
                link.removeEventListener('click', closeMenu);
            });
        };
    }, []);

    const pathname = usePathname();
    const linkclassNamees = "";

    return (
        <>
            <nav className={`md:bg-transparent ${isMenuOpen ? 'bg-[#E7DFF5]' : 'bg-transparent'} transition-colors duration-00`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={'/492F7A.png'} width={200} height={200} style={{ width: 200, height: 'auto' }} alt="logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href="tel:0794673902" className="hidden md:block bg-gray-50 text-[#B2A0D3] rounded-full py-3 px-4 text-sm">079 467 39 02</a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="text-[#FF8A00] text-5xl h-screen md:h-0 md:text-[18px] md:font-normal md:text-gray-50 flex flex-col justify-center md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link className={`link ${pathname === '/' ? 'underline underline-offset-8' : linkclassNamees}`} href="/">Accueil</Link>
                            </li>
                            <li>
                                <Link className={`link ${pathname === '/a-propos' ? 'underline underline-offset-8' : linkclassNamees}`} href="/a-propos">À propos</Link>
                            </li>
                            <li>
                                <Link className={`link ${pathname === '/contact' ? 'underline underline-offset-8' : linkclassNamees}`} href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
