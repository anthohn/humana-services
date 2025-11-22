import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

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
      <body suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable} font-sans bg-[#FDFBF7]`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
        <SpeedInsights />
      </body>
    </html>
  );
}
