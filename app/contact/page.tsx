'use client'
import ContactPage from "@/app/components/ContactPage";

export default function Contact() {
    return (
        <>
            <div className="flex justify-center bg-[#E7DFF5] p-10 pt-28 md:p-4 md:pt-28">
                <div className="flex w-full flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-20 lg:w-10/12 xl:w-3/4 text-[#FF8A00]">
                    <div className="flex flex-col md:w-5/12">
                        <div className="flex flex-col pb-0">
                            <h1 className="text-5xl md:text-4xl xl:text-5xl font-serif font-medium">Contactez-nous</h1>
                            <a className="mt-10" href='mailto:contact@humana-services.ch'>contact@humana-services.ch</a>
                            <a className="mt-2" href="tel:0794673902">079 467 39 02</a>
                            <p className="mt-6">1196 Gland</p>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12">
                        <ContactPage />
                    </div>
                </div>
            </div>
        </>
    );
}