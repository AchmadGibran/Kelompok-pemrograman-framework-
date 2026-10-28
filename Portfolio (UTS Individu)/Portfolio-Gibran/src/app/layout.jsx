import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "../components/ui/Lightbox";
import AuroraBackground from "../components/ui/AuroraBackground";
import CursorAura from "../components/ui/CursorAura";
import { PROFILE } from "../data/profile";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: `${PROFILE.name} | Portofolio`,
  description: `${PROFILE.name}, ${PROFILE.headline}.`,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05060f" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fc" },
  ],
};

// Dijalankan sebelum halaman tampil agar tidak berkedip: bawaan GELAP, kecuali pengunjung pernah memilih terang.
const THEME_SCRIPT = `try{if(localStorage.getItem("theme")==="light"){var r=document.documentElement;r.classList.remove("dark");r.style.colorScheme="light"}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`dark ${display.variable} ${body.variable}`} style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} /></head>
      <body className="min-h-screen bg-base text-fg antialiased">
        <AuroraBackground />
        <CursorAura />
        <LightboxProvider>
          {children}
        </LightboxProvider>
      </body>
    </html>
  );
}
