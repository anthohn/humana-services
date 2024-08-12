'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { links } from "@/lib/data";
import clsx from "clsx";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Image from "next/image";

export default function Header() {

    useEffect(() => {
        initFlowbite();
      }, []);
      const linkclassNamees = "";
    
    const pathname = usePathname()
    return (
        <>
            <nav className="fixed md:relative  w-full md:bg-transparent">
                <div className="flex flex-wrap items-center  py-5 px-10 justify-between">
                    <div className="hidden md:w-1/3 md:block " id="navbar-default">
                        <ul className="text-[18px] items-center font-normal text-gray-50 flex flex-col md:p-0 mt-4 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0">
                            <Link 
                            className={`link ${pathname === '/' ? 'underline underline-offset-8' : linkclassNamees}`} 
                            href="/">
                            Accueil
                            </Link>
                            <Link 
                            className={`link ${pathname === '/a-propos' ? 'underline underline-offset-8' : linkclassNamees}`} 
                            href="/a-propos">
                            À propos
                            </Link>
                            <Link 
                            className={`link ${pathname === '/contact' ? 'underline underline-offset-8' : linkclassNamees}`} 
                            href="/contact">
                            Contact
                            </Link>
                        
                        </ul>
                    </div>
                    <Link 
                        className="flex justify-center space-x-3 rtl:space-x-reverse md:w-1/3"
                        href="/">
                        <Image src={'/492F7A.png'} width={200} height={200} style={{ width: 200, height: 'auto'}} alt="logo" className="" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="md:w-1/3 flex justify-end">
                        <a href="tel:0794673902" className="hidden md:block bg-gray-50 text-[#B2A0D3] text rounded-full py-3 px-4 text-sm text">079 467 39 02</a>
                    </div>

                </div>
            </nav>
        </>
    )
}