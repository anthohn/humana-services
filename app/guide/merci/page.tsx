import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FaHeart, FaDownload, FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Merci pour votre intérêt",
  description: "Téléchargez directement votre guide pratique pour les proches aidants ou consultez vos e-mails.",
};

export default function MerciPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-[#FDFBF7] relative overflow-hidden flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFB088] opacity-10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-xl text-center space-y-8">
        <div className="w-20 h-20 bg-[#F3F0FA] rounded-full flex items-center justify-center text-[#4A3B69] text-3xl mx-auto shadow-sm animate-bounce-slow">
          <FaHeart className="text-[#FFB088]" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-serif text-[#4A3B69]">Merci pour votre confiance !</h1>
          <p className="text-lg text-[#666070] leading-relaxed">
            Votre demande a bien été prise en compte. Un e-mail contenant votre lien de téléchargement vient de vous être envoyé.
          </p>
          <p className="text-sm text-[#9E9AA6]">
            Si vous ne l&apos;avez pas reçu d&apos;ici quelques minutes, n&apos;hésitez pas à vérifier votre dossier de courrier indésirable (spams).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a
            href="/docs/guide-proches-aidants.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 bg-[#4A3B69] text-white rounded-full font-medium hover:bg-[#3D3058] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FaDownload className="text-sm" />
            Télécharger le guide (PDF)
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#4A3B69] border border-[#E7DFF5] rounded-full font-medium hover:bg-[#F3F0FA] transition-all flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-sm" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
