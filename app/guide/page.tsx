import React from "react";
import { Metadata } from "next";
import GuideForm from "./GuideForm";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Guide gratuit pour les proches aidants",
  description: "Découvrez notre guide pratique et bienveillant pour accompagner vos proches au quotidien. 10 petits gestes, conseils de communication et d'activités.",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen pt-24 md:pt-36 pb-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Decor elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F3F0FA] -z-20 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#FFB088] opacity-10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - Column 1 to 7 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
              <span className="text-[#4A3B69] font-medium text-xs tracking-wider uppercase">Guide Offert</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif text-[#4A3B69] leading-tight">
              Accompagner un proche avec <span className="italic text-[#FFB088]">douceur</span> et bienveillance.
            </h1>
            <p className="text-lg text-[#666070] leading-relaxed max-w-xl">
              Les changements de mémoire peuvent parfois être déstabilisants pour la personne concernée comme pour ses proches. Ce guide a été créé pour vous apporter des conseils pratiques, du soutien et un peu de douceur au quotidien.
            </p>

            {/* List of guide contents */}
            <div className="space-y-4 max-w-lg">
              <h2 className="text-xl font-serif text-[#4A3B69] font-medium">Ce que vous découvrirez dans ce guide :</h2>
              <ul className="space-y-4">
                {[
                  "Comprendre les changements de mémoire de manière bienveillante",
                  "10 petits gestes simples qui facilitent grandement le quotidien",
                  "Des techniques de communication douce pour apaiser et rassurer",
                  "Des idées d'activités adaptées pour stimuler la mémoire et le bien-être",
                  "Conseils essentiels pour prendre soin de soi en tant que proche aidant"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-[#666070]">
                    <FaCheckCircle className="text-[#FFB088] text-xl shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Small quote matching the PDF style */}
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-[2rem] border border-purple-50 max-w-xl shadow-sm">
              <p className="text-[#4A3B69] italic font-serif text-lg text-center leading-relaxed">
                &ldquo;Rendre la vie plus belle, un petit geste à la fois.&rdquo;
              </p>
            </div>
          </div>

          {/* Form Content - Column 8 to 12 */}
          <div className="lg:col-span-5 flex justify-center">
            <GuideForm />
          </div>
        </div>
      </div>
    </main>
  );
}
