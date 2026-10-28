"use client";

import { useEffect, useState } from "react";
import { NAV } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

function FloatingNav() {
  const [active, setActive] = useState("about");
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => document.getElementById(id) && io.observe(document.getElementById(id)));
    const onScroll = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-fg/5">
        <div className="h-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400" style={{ width: pct + "%" }} />
      </div>
      <nav aria-label="Navigasi utama"
        className="surface fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-0.5 rounded-full p-1.5 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:gap-1 md:bottom-auto md:top-5"
        style={{ background: "rgb(var(--c-panel) / .82)" }}>
        {NAV.map(([id, label, Icon]) => (
          <a key={id} href={`#${id}`} aria-label={label}
            className={`flex items-center gap-2 rounded-full px-2.5 py-2.5 text-sm font-medium transition sm:px-3.5 md:py-2 ${active === id ? "bg-indigo-500 text-white" : "text-muted hover:text-fg"}`}>
            <Icon size={18} className="md:hidden" />
            <span className="hidden md:inline">{label}</span>
          </a>
        ))}
        <span aria-hidden className="mx-1 hidden h-5 w-px bg-fg/15 md:block" />
        <ThemeToggle className="h-10 w-10 md:h-9 md:w-9" />
      </nav>
    </>
  );
}

export default FloatingNav;
