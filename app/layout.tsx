import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/** Police de marque : wordmark LIFTPURDY et slogan du hero, toujours en capitales. */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Coach sportif à ${SITE.city} & en ligne`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "coach sportif La Rochelle",
    "coaching sportif en ligne",
    "personal trainer La Rochelle",
    "perte de gras",
    "prise de masse",
    "préparation sportive",
    "remise en forme",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Coach sportif à ${SITE.city} & en ligne`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Coach sportif à ${SITE.city} & en ligne`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} ${montserrat.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>

        <Navbar />

        <main id="contenu">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
