'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import iStockBack from '../public/iStock-1487976856.jpg'
import seniorDrawing from '../public/iStock-M-seniorDrawing.jpg' 
import seniorWalking from '../public/iStock-M-seniorWalking.jpg'
import Contact from "@/app/components/Contact";

export default function Home() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Image
        src={iStockBack}
        fill
        quality={100}
        alt='Seniors'
        className="-z-[999] object-cover	" // image est en arrière-plan
      />
        
      <div className="flex flex-col w-10/12 sm:w-8/12 mx-auto justify-center h-screen">
          <div className='text-neutral-100 font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              <p className="font-serif text-center">L&apos;aide à domicile humaine et personnalisée</p>
          </div>
          {/* contact */}
          <div className='flex flex-col sm:flex-row w-full items-center justify-between'>
              <div className='flex space-x- mt-12 md:mt-32 px-4 py-2 rounded-full w-full justify-center '>
                  <a href="/contact" className="bg-gray-50 text-center rounded-full px-9 py-5 text-[#B2A0D3] text-lg">TROUVER DE L&apos;AIDE</a>
              </div>
          </div>
      </div>

      {/* Valeurs */}
      <div className="flex justify-center bg-gray-50 py-24">
          <div className="flex flex-col items-center md:flex-row space-y-8 md:space-y-0 w-9/12 font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-400 md:justify-between">
              <p className="md:w-1/3 text-center font-serif ">Bienveillance</p>
              <p className="md:w-1/3 text-center font-serif ">Écoute</p>
              <p className="md:w-1/3 text-center font-serif ">Respect</p>
          </div>
      </div>
      
      {/* Nos services */}
      <div className="flex flex-col justify-center bg-[#E7DFF5] py-20">
          <p className="flex justify-center font-medium text-5xl text-[#AC96D5] mb-20 font-serif">Nos services</p>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-around ">
              <div className="flex flex-col w-full sm:w-5/12 bg-gray-50 p-10">
                  <Image
                      src={seniorWalking}
                      alt='Seniors walking'
                      style={{
                          width: '100%',
                          height: 'auto',
                      }}
                  />
                  <div className="flex justify-center font-medium text-3xl md:text-4xl text-[#AC96D5] pt-10 font-serif text-center">Accompagnement</div>
              </div>
              <div className="flex flex-col w-full sm:w-5/12 bg-gray-50 p-10">
                  <Image
                      src={seniorDrawing}
                      alt='Seniors drawing'
                      style={{
                          width: '100%',
                          height: 'auto',
                      }}
                  />
                  <div className="flex justify-center font-medium text-3xl md:text-4xl text-[#AC96D5] pt-10 font-serif text-center">Activités stimulantes</div>
              </div>
          </div>
      </div>

      {/* A propos */}
      <div className="flex flex-col space-y-20 lg:space-y-40 justify-center items-center bg-[#AC96D5] pt-14 pb-44 lg:pt-36 px-8">
        <div className="flex flex-col space-y-4 w-full lg:w-2/3 pb-4 border-b">
          <p className="flex w-full font-medium text-4xl xl:text-5xl text-gray-50 font-serif">À propos de nous</p>
          {accordionData.map((item, index) => (
              <div key={index} className="flex flex-col ">
                  <button
                      className="flex w-full text-gray-50 text-2xl justify-between border-t pt-4"
                      onClick={() => toggleAccordion(index)}
                  >
                      <span>{item.title}</span>
                      <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: openIndex === index ? 'auto' : 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                  >
                      <div className="text-gray-50 text-2xl flex w-9/12 py-8">
                          {item.content}
                      </div>
                  </motion.div>
              </div>
          ))}
        </div>
      </div>

      {/* Avis */}
      <div 
        className="flex flex-col space-y-16 md:space-y-4 justify-center items-center bg-gray-50 py-36 px-8 md:px-60">

          <div className="flex w-full justify-start">
              <p className="w-2/3 text-lg md:text-2xl text-[#AC96D5] italic underline">Avis de nos clients</p>
          </div>
          <div className="flex w-full md:justify-start">
              <p className="text-3xl md:text-4xl text-orange-500 md:w-2/3 font-serif">« Mon épouse retrouve le sourire et la joie de vivre en présence de l&apos;auxiliaire d&apos;Humana »</p>
          </div>
          <div className="flex w-full md:justify-end">
              <p className="text-3xl md:text-4xl text-orange-500 md:w-2/3 font-serif">« Mon père ancien pilote, peut ressortir se balader à l&apos;aérodrome grâce à l&apos;accompagnement d&apos;Humana 😎 »</p>
          </div>
      </div>
      <div className="flex justify-center bg-[#E7DFF5] pt-28">
          <Contact />
      </div>
    </>
   )
}

const accordionData = [
  {
    title: "Que proposons-nous ?",
    content: (
      <>
          <p>
              <span className="italic font-bold">Humana Services</span> vous offre un soutien personnalisé <span className="font-bold">d&apos;aide à domicile</span> et vous aide à 
              vivre une <span className="font-bold">retraite épanouissante</span> et joyeuse avec des activités concoctées <span className="font-bold">selon vos goûts</span> qui égayeront votre vie.
          </p>
      </>
    )
  },
  {
    title: "Expérience et histoire",
    content: (
      <>
          <p>
              Avec plus de <span className="font-bold">10 ans d&apos;expérience</span> dans le domaine de l&apos;accompagnement à domicile, nous avons acquis une expertise avérée, notamment dans la prise en charge des personnes atteintes de maladies telles qu&apos;Alzheimer et Parkinson.
          </p>
      </>
    )
  },
  {
    title: "Qualité de l'accompagnement",
    content: (
      <>
          <ul className="mt-4 list-disc list-inside">
              <li>Capacité d&apos;écoute et d&apos;empathie</li>
              <li>Diplomatie et douceur</li>
          </ul>
      </>
    )
  },
];