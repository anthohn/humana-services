"use server";

import React from "react";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { validateString, getErrorMessage } from "@/lib/utils";
import GuideDownloadEmail from "@/email/guide-download-email";

export const sendGuide = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const senderEmail = formData.get("senderEmail");
  const subscribeNewsletter = formData.get("subscribeNewsletter") === "true";

  // Simple server-side validation
  if (!validateString(firstName, 100)) {
    return {
      error: "Prénom invalide",
    };
  }
  if (!validateString(senderEmail, 200)) {
    return {
      error: "E-mail invalide",
    };
  }

  // Construct download URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.humana-services.ch";
  const downloadUrl = `${baseUrl}/docs/guide-proches-aidants.pdf`;

  // Render React Email template to HTML
  let emailHtml: string;
  try {
    emailHtml = await render(
      React.createElement(GuideDownloadEmail, {
        firstName: firstName as string,
        downloadUrl,
      })
    );
  } catch (error: unknown) {
    return {
      error: "Erreur de rendu de l'e-mail : " + getErrorMessage(error),
    };
  }

  // Configure SMTP Transport
  const smtpHost = process.env.SMTP_HOST || "mail.infomaniak.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // If SMTP is not configured yet, log warning and bypass so development/local testing doesn't break
  if (!smtpUser || !smtpPassword) {
    console.warn("SMTP credentials not configured. Email sending bypassed for local testing.");
    return {
      success: true,
      bypassed: true,
    };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // True for 465 (SSL), false for 587 (TLS/STARTTLS)
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    // 1. Send confirmation e-mail to the visitor
    await transporter.sendMail({
      from: `"Humana Services" <${smtpUser}>`,
      to: senderEmail as string,
      subject: "Votre guide d'accompagnement pour les proches aidants",
      html: emailHtml,
    });

    // 2. Send notification e-mail to the administrator
    await transporter.sendMail({
      from: `"Notification Humana Services" <${smtpUser}>`,
      to: "contact@humana-services.ch",
      subject: "Nouveau lead - Téléchargement du Guide Proches Aidants",
      text: `Nouveau téléchargement du guide par :\n\nPrénom : ${firstName}\nE-mail : ${senderEmail}\nDate : ${new Date().toLocaleString("fr-CH")}`,
    });

    // 3. Optional: Subscribe to Infomaniak Newsletter if checked and configured
    const apiKey = process.env.INFOMANIAK_API_TOKEN;
    const newsletterDomain = process.env.INFOMANIAK_NEWSLETTER_DOMAIN;
    const newsletterGroup = process.env.INFOMANIAK_NEWSLETTER_GROUP; // Optional Group ID

    if (subscribeNewsletter && apiKey && newsletterDomain) {
      try {
        const bodyData: any = {
          email: senderEmail as string,
          fields: {
            firstname: firstName as string,
          },
        };

        if (newsletterGroup) {
          const groupId = Number(newsletterGroup);
          if (!isNaN(groupId)) {
            bodyData.groups = [groupId];
          } else {
            bodyData.groups = [newsletterGroup];
          }
        }

        const response = await fetch(
          `https://api.infomaniak.com/1/newsletters/${newsletterDomain}/subscribers`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
          }
        );

        if (!response.ok) {
          const errText = await response.text();
          console.error("Erreur lors de l'abonnement Newsletter Infomaniak:", errText);
        } else {
          console.log(`Abonné newsletter Infomaniak avec succès: ${senderEmail}`);
        }
      } catch (err) {
        console.error("Exception lors de l'inscription Newsletter Infomaniak:", err);
      }
    }

    return {
      success: true,
    };
  } catch (error: unknown) {
    return {
      error: "Erreur lors de l'envoi de l'e-mail : " + getErrorMessage(error),
    };
  }
};
