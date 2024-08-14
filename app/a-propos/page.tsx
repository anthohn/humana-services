
import seniorTalking from '../../public/iStock-M-seniorTalking.jpg'
import Image from 'next/image'

export default function About() {

    return (
        <>
            <div className="flex justify-center bg-[#E7DFF5]">
                <div className="flex flex-col-reverse md:flex-row md:space-x-20 md:w-3/4 my-40 p-8">
                    <div className="flex flex-col md:w-5/12">
                        <h1 className="md:text-5xl text-4xl md:py-24 pb-12 pt-8 font-serif text-[#6A4AA4] font-medium">Qui sommes-nous ?</h1>
                        <p className="text-[#AC96D5] text-2xl tracking-wide text-justify"><span className="italic font-bold">Humana Services</span> est bien plus qu&apos;une entreprise d&apos;accompagnement à domicile. 
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
                    <div className="md:w-7/12">
                        <Image
                                src={seniorTalking}
                                alt='Seniors talking'
                                layout='cover'
                                className='rounded-3xl'
                            />
                    </div>
                </div>
            </div>
        </>
    )
}