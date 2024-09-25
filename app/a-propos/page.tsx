import seniorTalking from '../../public/iStock-M-seniorTalking.jpg'
import Image from 'next/image'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "à propos",
};

export default function About() {

    return (
        <>
            <div className="flex justify-center bg-[#E7DFF5] pb-20">
                <div className="flex flex-col-reverse md:flex-row md:space-x-8 my-12 p-12 xl:px-14 2xl:px-32 md:p-4 justify-between ">
                    <div className="flex flex-col md:basis-5/12">
                        <h1 className="text-[30px] lg:text-4xl xl:text-5xl md:py-24 pb-12 pt-4 font-serif text-[#6A4AA4]">Qui sommes-nous ?</h1>
                        <p className="text-[#AC96D5] text-xl lg:text-2xl tracking-wide text-justify"><span className="italic font-bold">Humana Services</span> est bien plus qu&apos;une entreprise d&apos;accompagnement à domicile. 
                            Nous sommes dévoués à rendre <span className="font-bold">votre retraite plus enrichissante</span> et pleine de <span className="font-bold">joie </span>
                            en <span className="font-bold">personnalisant des activités stimulantes</span> selon vos préférences. Chez nous, l&apos;aspect 
                            humain est au cœur de tout ce que nous faisons, car nous croyons que chaque moment de 
                            votre vie mérite d&apos;être vécu avec <span className="font-bold">passion et bonheur.</span> Nous sommes là pour vous 
                            accompagner dans cette nouvelle phase de votre vie, en mettant l&apos;accent sur <span className="font-bold">votre 
                            bien-être</span> et en créant des <span className="font-bold">expériences uniques qui égayeront chaque jour.</span> 
                            Notre <span className="font-bold">équipe dévouée</span> est prête à travailler en étroite collaboration avec vous 
                            pour construire un avenir à domicile <span className="font-bold">rempli de moments mémorables.</span>
                        </p>
                    </div>
                    <div className="flex h-[485px] md:h-full md:basis-7/12 md:mt-16">
                        <Image
                            src={seniorTalking}
                            alt='Seniors talking'
                            className='object-cover rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}