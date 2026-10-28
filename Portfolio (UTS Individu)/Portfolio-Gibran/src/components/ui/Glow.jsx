"use client";

import { useRef } from "react";

// Kartu dengan cahaya yang mengikuti kursor (+ tilt opsional).
// Flex di dua lapis (flex-1 flex-col) supaya kartu di dalam grid otomatis sama tinggi dan isinya bisa didorong ke bawah.
function Glow({ className = "", tilt = false, children }) {
  const ref = useRef(null);
  const move = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = ref.current, r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty("--x", x + "px");
    el.style.setProperty("--y", y + "px");
    if (tilt) el.style.transform = `perspective(900px) rotateY(${(x / r.width - 0.5) * 5}deg) rotateX(${-(y / r.height - 0.5) * 5}deg)`;
  };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={() => tilt && (ref.current.style.transform = "")}
      className={`group surface relative flex flex-1 flex-col overflow-hidden rounded-3xl transition-transform duration-200 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(380px circle at var(--x) var(--y), var(--glow), transparent 60%)" }} />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export default Glow;
