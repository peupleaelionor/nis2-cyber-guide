import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UXEnhancements from "@/components/UXEnhancements";

export const metadata: Metadata = {
  title: "NIS2 Cyber Guide | Conformité Cybersécurité PME",
  description: "Guides pratiques, checklist gratuite et audit de conformité NIS2 pour PME et ETI. Devenez conforme en 30 jours.",
  keywords: "NIS2, cybersécurité, conformité, PME, ETI, audit, checklist, directive européenne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
        <UXEnhancements />
      </body>
    </html>
  );
}
