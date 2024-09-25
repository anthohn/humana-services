import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: "Humana Services",
    template: "%s - Humana Services"
  },
  description: "Humana Services vous offre un soutien personnalisé d'aide à domicile et vous aide à vivre une retraite épanouissante et joyeuse avec des activités concoctées selon vos goûts qui égayeront votre vie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true} className={kanit.className}>
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
        <SpeedInsights />
      </body>
    </html>
  );
}
