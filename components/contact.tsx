"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <p className="text-[#AC96D5] font-medium text-5xl font-serif">Contactez-nous !</p>

      <form
        className="mt-10 flex flex-col space-y-3 bg-white p-10 rounded-2xl"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        {/* Prénom / Nom */}
        <div className="flex space-x-4">
          <div className="flex flex-col items-start space-y-2 w-1/2">
            <label className="text-[#AC96D5]">Prénom</label>
            <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="firstName" type="text" required maxLength={500} />
          </div>
          <div className="flex flex-col items-start space-y-2 w-1/2">
            <label className="text-[#AC96D5]">Nom de famille</label>
            <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="lastName" type="text" required maxLength={500} />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex space-x-2">
            <label className="text-[#AC96D5]">E-mail</label>
            <label className="text-[#C5B5E1]">(obligatoire)</label>
          </div>
          <input className="h-14 px-4 rounded-lg bg-gray-100 w-full" name="senderEmail" type="email" required maxLength={500} />
        </div>

        {/* Message */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex space-x-2">
            <label className="text-[#AC96D5]">Message</label>
            <label className="text-[#C5B5E1]">(obligatoire)</label>
          </div>
          <textarea className="h-52 rounded-lg p-4 bg-gray-100 w-full" name="message" placeholder="Je souhaite recevoir un accompagnement de Humana-services." required maxLength={5000} />
        </div>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}