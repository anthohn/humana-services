"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-[40px] w-[110px] bg-[#BDABDD] text-white rounded-full hover:bg-[#c4b3e0]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Envoyer{" "}
        </>
      )}
    </button>
  );
}