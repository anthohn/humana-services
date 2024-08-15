import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col space-y-8 justify-center items-center bg-[#AC96D5] h-96">
                <p className="text-4xl text-gray-50 font-serif">Humana Services</p>
                <Link className="underline text-lg text-gray-50" href="/a-propos">
                    À propos
                </Link>
                <div className="flex flex-col space-y-3 items-center text-lg sm:text-xl text-gray-50">
                    <a href="mailto:contact@humana-services.ch" className="">contact@humana-services.ch</a>
                    <p>1196 Gland</p>
                    <a href="tel:0794673902" className="">079 467 39 02</a>
                </div>
                <a href="https://www.linkedin.com/company/humana-services"  target="_blank" className="bg-gray-50 rounded-md px-[10px] py-1 font-bold text-xl text-[#AC96D5] hover:bg-gray-200 transition">in</a>

            </div>
        </>
    )
}
