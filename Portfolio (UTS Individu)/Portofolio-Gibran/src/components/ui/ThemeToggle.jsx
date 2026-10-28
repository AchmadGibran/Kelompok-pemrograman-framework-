"use client";

import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../../lib/theme";

// Ikon ditukar murni lewat CSS (dark:) sehingga tidak ada state dan tidak ada kedipan saat load.
function ThemeToggle({ className = "" }) {
  const onClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };
  return (
    <button type="button" onClick={onClick} aria-label="Ganti tema terang atau gelap" title="Ganti tema"
      className={`inline-flex items-center justify-center rounded-full text-muted transition hover:text-fg ${className}`}>
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="dark:hidden" />
    </button>
  );
}

export default ThemeToggle;
