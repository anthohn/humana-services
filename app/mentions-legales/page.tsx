import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales & Politique de Confidentialité",
  description: "Mentions légales et politique de confidentialité de Humana Services Sàrl à Gland, Suisse.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 max-w-4xl space-y-12 text-gray-700 leading-relaxed">
        {/* Header */}
        <div className="border-b border-purple-100 pb-6">
          <h1 className="text-4xl font-serif text-[#4A3B69] mb-4">
            Mentions Légales &amp; Politique de Confidentialité
          </h1>
          <p className="text-[#9E9AA6] text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-CH", { year: "numeric", month: "long" })}
          </p>
        </div>

        {/* Section 1: Mentions Légales */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif text-[#4A3B69]">1. Mentions Légales (Impression)</h2>
          <p>
            Conformément à la législation suisse, voici les informations relatives à l&apos;éditeur et à l&apos;hébergeur du site internet :
          </p>
          <div className="bg-white p-6 rounded-2xl border border-purple-50 shadow-sm space-y-2 text-sm text-[#666070]">
            <p><strong>Éditeur du site :</strong> Humana Services Sàrl</p>
            <p><strong>Siège social :</strong> 1196 Gland, Suisse</p>
            <p><strong>Contact e-mail :</strong> <a href="mailto:contact@humana-services.ch" className="text-[#4A3B69] underline">contact@humana-services.ch</a></p>
            <p><strong>Téléphone :</strong> 078 221 38 21</p>
            <p><strong>Hébergement du site :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
            <p><strong>Enregistrement du nom de domaine :</strong> Infomaniak Network SA, Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse</p>
          </div>
        </section>

        {/* Section 2: Politique de Confidentialité */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif text-[#4A3B69]">2. Politique de Confidentialité &amp; Protection des données</h2>
          <p>
            Humana Services Sàrl accorde une importance capitale à la protection de votre vie privée et de vos données personnelles. Cette politique détaille la manière dont vos données sont collectées, traitées et stockées lors de l&apos;utilisation de notre site internet et de nos services.
          </p>

          <h3 className="text-lg font-serif text-[#4A3B69] font-medium pt-2">Collecte et Traitement des Données</h3>
          <p>
            Lorsque vous demandez le téléchargement de notre guide ou utilisez notre formulaire de contact, nous collectons les informations personnelles suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Votre prénom (et nom si fourni).</li>
            <li>Votre adresse e-mail.</li>
          </ul>

          <h3 className="text-lg font-serif text-[#4A3B69] font-medium pt-2">But du traitement</h3>
          <p>
            Vos données sont collectées pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>L&apos;envoi automatique du guide d&apos;accompagnement par e-mail.</li>
            <li>L&apos;inscription à notre newsletter (conseils, actualités pour les proches aidants) **uniquement si vous avez coché la case de consentement spécifique** lors de la soumission du formulaire.</li>
          </ul>

          <h3 className="text-lg font-serif text-[#4A3B69] font-medium pt-2">Partage avec des tiers &amp; Stockage</h3>
          <p>
            Vos données sont conservées en toute confidentialité. Nous ne vendons, ne louons et ne partageons pas vos données avec des tiers à des fins commerciales. Pour la gestion de notre liste de diffusion et de notre newsletter, nous utilisons la solution **Infomaniak Newsletter** (Infomaniak Network SA, Suisse). Vos données sont stockées de manière sécurisée en Suisse.
          </p>

          <h3 className="text-lg font-serif text-[#4A3B69] font-medium pt-2">Vos Droits (Accès, Rectification, Suppression)</h3>
          <p>
            Conformément à la Loi fédérale sur la protection des données (LPD) et au RGPD, vous disposez d&apos;un droit d&apos;accès, de modification, de rectification et de suppression de vos données personnelles à tout moment.
          </p>
          <p>
            Vous pouvez vous désinscrire de notre newsletter à tout moment en cliquant sur le lien de désinscription situé au bas de chaque e-mail que nous envoyons, ou en nous écrivant directement à <a href="mailto:contact@humana-services.ch" className="text-[#4A3B69] underline">contact@humana-services.ch</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
