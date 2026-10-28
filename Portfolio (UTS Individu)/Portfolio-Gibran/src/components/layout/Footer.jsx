import { ArrowUp } from "lucide-react";
import { PROFILE } from "../../data/profile";

// Ikon sosial media hanya ada di section Contact; footer cukup hak cipta + kembali ke atas.
const Footer = () => (
  <footer className="border-t border-fg/10 px-5 pb-24 pt-8 text-center text-sm text-faint md:pb-8">
    <p>© {new Date().getFullYear()} {PROFILE.name}. Dibuat dengan Next.js dan Tailwind CSS.</p>
    <a href="#about" className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition hover:text-accent">
      <ArrowUp size={14} /> Kembali ke atas
    </a>
  </footer>
);

export default Footer;
