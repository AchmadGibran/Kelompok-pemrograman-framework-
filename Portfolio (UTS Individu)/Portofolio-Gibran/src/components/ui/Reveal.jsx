"use client";

import { useEffect, useRef } from "react";

// Muncul halus saat masuk layar. className "flex" dipakai bila dibungkus di dalam grid agar tinggi kartu tetap sejajar.
function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.setAttribute("data-in", ""); io.disconnect(); }
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</Tag>;
}

export default Reveal;
