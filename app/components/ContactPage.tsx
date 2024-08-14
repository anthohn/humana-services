"use client";
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {

  return (
    <div className="mb-20 sm:mb-28 text-center">
      <form
        className="flex flex-col space-y-3 p-10 rounded-2xl"
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
        <div className="flex space-x-4 ">
          <div className="flex flex-col items-start space-y-2 w-1/2">
            <label className="text-[#FF8A00]">Prénom</label>
            <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="firstName" type="text" maxLength={50} />
          </div>
          <div className="flex flex-col items-start space-y-2 w-1/2">
            <label className="text-[#FF8A00]">Nom de famille</label>
            <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="lastName" type="text" maxLength={50} />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex space-x-2">
            <label className="text-[#FF8A00]">E-mail</label>
            <label className="text-[#fab362]">(obligatoire)</label>
          </div>
          <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="senderEmail" type="email" required maxLength={70} />
        </div>

        {/* Message */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex space-x-2">
            <label className="text-[#FF8A00]">Message</label>
            <label className="text-[#fab362]">(obligatoire)</label>
          </div>
          <textarea className="h-52 rounded-lg p-4 bg-gray-100 w-full" name="message" placeholder="Je souhaite recevoir un accompagnement de Humana-services." required maxLength={5000} />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}