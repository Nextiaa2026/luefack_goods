import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "LEUFACK GOODS SARL | Logistique, Import-Export & Commerce Général",
    template: "%s | LEUFACK GOODS SARL",
  },
  description:
    "LEUFACK GOODS SARL connecte les marchés africains au monde : logistique, import-export et commerce général.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LEUFACK GOODS SARL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full antialiased", inter.variable)}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
