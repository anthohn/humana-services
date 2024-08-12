
import ContactPage from "@/components/contactPage";


export default function Contact() {

    return (
        <>
            <div className="flex justify-center bg-[#E7DFF5]">
                <div className="flex flex-col md:flex-row md:space-x-20 md:w-3/4 mt-32 text-[#FF8A00]">
                    <div className="flex flex-col md:w-5/12">
                        <div className="flex flex-col p-10">
                            <h1 className=" text-5xl font-serif font-medium">Contactez-nous</h1>
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
    )
}