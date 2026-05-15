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
  metadataBase: new URL('https://humana-services.ch'),
  title: {
    default: "Humana Services",
    template: "%s - Humana Services"
  },
  description: "Humana Services vous offre un soutien personnalisé d'aide à domicile et vous aide à vivre une retraite épanouissante et joyeuse avec des activités concoctées selon vos goûts qui égayeront votre vie.",
  openGraph: {
    title: "Humana Services - L'art de prendre soin à domicile",
    description: "Soutien personnalisé d'aide à domicile pour une retraite épanouissante en Suisse Romande.",
    url: 'https://humana-services.ch',
    siteName: 'Humana Services',
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humana Services',
    description: "L'art de prendre soin à domicile.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
