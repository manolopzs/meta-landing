import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whitepaper",
  description:
    "Enviamos a tu correo las noticias de negocios más importantes del día, en un formato fácil de leer.",
  openGraph: {
    title: "Whitepaper — Lo más importante, cada mañana.",
    description:
      "El medio de análisis empresarial que leen los empresarios mexicanos. Suscríbete y recibe cada mañana las noticias de negocios que importan.",
    type: "website",
    locale: "es_MX",
    siteName: "Whitepaper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepaper — Lo más importante, cada mañana.",
    description:
      "El medio de análisis empresarial que leen los empresarios mexicanos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
