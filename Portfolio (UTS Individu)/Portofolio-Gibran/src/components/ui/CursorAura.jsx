"use client";

import { useEffect, useRef } from "react";

// Cahaya lembut yang mengikuti kursor di seluruh halaman (hanya perangkat dengan mouse).
function CursorAura() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, x = tx, y = ty, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = "1"; };
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[520px] w-[520px] opacity-0 transition-opacity duration-500" />
  );
}

export default CursorAura;
