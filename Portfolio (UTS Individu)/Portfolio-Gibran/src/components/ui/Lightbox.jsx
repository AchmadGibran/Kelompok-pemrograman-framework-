"use client";

import { createContext, useEffect, useState } from "react";
import { X } from "lucide-react";

export const LightboxCtx = createContext(() => {});

// Menyediakan fungsi open({ src, alt }) ke seluruh komponen + menampilkan gambar layar penuh
export function LightboxProvider({ children }) {
  const [box, setBox] = useState(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setBox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <LightboxCtx.Provider value={setBox}>
      {children}
      {box && (
        <div role="dialog" aria-modal="true" aria-label={box.alt} onClick={() => setBox(null)}
          className="fadein fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button type="button" aria-label="Tutup" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X size={20} /></button>
          <img src={box.src} alt={box.alt} className="pop max-h-full max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </LightboxCtx.Provider>
  );
}
