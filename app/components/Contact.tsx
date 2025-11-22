'use client';
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
      <form
        className="flex flex-col space-y-6"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("E-mail envoyé avec succès !");
        }}
      >
        {/* Prénom / Nom */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="text-[#4A3B69] font-medium ml-2">Prénom</label>
            <input
              className="h-14 px-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all"
              name="firstName"
              type="text"
              maxLength={50}
              placeholder="Votre prénom"
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="text-[#4A3B69] font-medium ml-2">Nom</label>
            <input
              className="h-14 px-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all"
              name="lastName"
              type="text"
              maxLength={50}
              placeholder="Votre nom"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#4A3B69] font-medium ml-2">E-mail <span className="text-[#FFB088]">*</span></label>
          <input
            className="h-14 px-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={70}
            placeholder="exemple@email.com"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col items-start space-y-2">
          <label className="text-[#4A3B69] font-medium ml-2">Message <span className="text-[#FFB088]">*</span></label>
          <textarea
            className="h-32 rounded-2xl p-6 bg-[#F9FAFB] border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#AC96D5] focus:border-transparent transition-all resize-none"
            name="message"
            placeholder="Comment pouvons-nous vous aider ?"
            required
            maxLength={5000}
          />
        </div>

        <div className="pt-2">
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
}