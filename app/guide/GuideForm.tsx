"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendGuide } from "@/actions/sendGuide";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full h-14 bg-[#4A3B69] text-white rounded-2xl font-medium hover:bg-[#3D3058] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
    >
      {pending ? (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        "Recevoir le guide gratuit"
      )}
    </button>
  );
}

export default function GuideForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    try {
      const result = await sendGuide(formData);
      if (result?.error) {
        toast.error(result.error);
        setError(result.error);
      } else {
        toast.success("E-mail envoyé avec succès !");
        router.push("/guide/merci");
      }
    } catch (err: unknown) {
      toast.error("Une erreur inattendue est survenue.");
      setError("Une erreur inattendue est survenue.");
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-purple-50 max-w-md w-full">
      <h3 className="text-2xl font-serif text-[#4A3B69] mb-6 text-center leading-tight">
        Recevoir le guide par e-mail
      </h3>
      <form action={handleSubmit} className="space-y-6">
        {/* Prénom */}
        <div className="flex flex-col items-start space-y-2">
          <label htmlFor="firstName" className="text-[#4A3B69] font-medium ml-2">
            Prénom <span className="text-[#FFB088]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            maxLength={100}
            placeholder="Votre prénom"
            className="h-14 px-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col items-start space-y-2">
          <label htmlFor="senderEmail" className="text-[#4A3B69] font-medium ml-2">
            Adresse e-mail <span className="text-[#FFB088]">*</span>
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={200}
            placeholder="exemple@email.com"
            className="h-14 px-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-start space-x-3 pt-2">
          <input
            id="subscribeNewsletter"
            name="subscribeNewsletter"
            type="checkbox"
            value="true"
            defaultChecked={true}
            className="h-5 w-5 rounded border-gray-300 text-[#4A3B69] focus:ring-[#AC96D5] mt-1 shrink-0 accent-[#4A3B69] cursor-pointer"
          />
          <label htmlFor="subscribeNewsletter" className="text-xs text-[#666070] leading-relaxed cursor-pointer select-none">
            Je souhaite recevoir des conseils et des informations d&apos;Humana Services par e-mail.
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg text-center">
            {error}
          </p>
        )}

        <SubmitButton />

        <p className="text-[11px] text-center text-[#666070] leading-relaxed">
          En soumettant ce formulaire, vous acceptez de recevoir le guide d&apos;accompagnement. Vos données restent strictement confidentielles et ne seront jamais partagées.
        </p>
      </form>
    </div>
  );
}
