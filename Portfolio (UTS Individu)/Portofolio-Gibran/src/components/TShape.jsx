"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Megaphone, Guitar, FolderArchive, User } from "lucide-react";
import { PROFILE } from "../data/profile";
import Chip from "./ui/Chip";

// Bentuk T: palang atas = pengalaman pendukung (sengaja redup), batang = potret + bidang utama (dominan).
const BAR = [["Digital marketing", Megaphone], ["Audio", Guitar], ["Data & arsip", FolderArchive]];
const CORE = ["React", "Laravel", "Python", "MySQL", "Figma"];

function TShape() {
  const tiltRef = useRef(null);
  const imgRef = useRef(null);
  const [failed, setFailed] = useState(false);
  const duotone = PROFILE.photoTone !== "original";

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  // Tilt 3D mengikuti kursor (hanya mouse; layar sentuh tidak ikut)
  const move = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = tiltRef.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg)`;
  };
  const leave = () => { if (tiltRef.current) tiltRef.current.style.transform = ""; };

  return (
    <div className="stage-float mx-auto w-full max-w-md select-none">
      {/* Palang T */}
      <p className="mb-2 text-center text-xs text-faint">Pengalaman pendukung</p>
      <div className="grid grid-cols-3 gap-2">
        {BAR.map(([label, Icon], i) => (
          <div key={label} style={{ animationDelay: `${i * 90}ms` }}
            className="pop surface flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-center text-[11px] text-muted">
            <Icon size={15} /> {label}
          </div>
        ))}
      </div>
      <div aria-hidden className="mx-auto h-6 w-px bg-gradient-to-b from-fg/20 to-indigo-400/70" />

      {/* Batang T: panggung potret */}
      <div className="relative mx-auto w-[74%]">
        <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-indigo-400/30 blur-[70px] dark:bg-indigo-600/30" />
        <div ref={tiltRef} onPointerMove={move} onPointerLeave={leave} className="transition-transform duration-200 ease-out">
          <div className="unveil relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] p-[3px]">
            {/* cincin cahaya berputar */}
            <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[240%] -translate-x-1/2 -translate-y-1/2">
              <div className="ring-spin h-full w-full" style={{ background: "conic-gradient(from 0deg, transparent 0 50%, #6366f1 70%, #38bdf8 88%, transparent 100%)" }} />
            </div>
            <div tabIndex={0} aria-label={`Foto ${PROFILE.name}`}
              className="group relative aspect-[3/4.2] overflow-hidden rounded-t-[999px] rounded-b-[1.8rem] bg-slate-950 outline-none">
              {failed ? (
                <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-xs text-zinc-500">
                  <User size={28} /> Taruh foto wajah di public/foto/ lalu sesuaikan nama file di data/profile.js
                </div>
              ) : (
                <>
                  <img ref={imgRef} src={PROFILE.photo} alt={`Foto ${PROFILE.name}`} onError={() => setFailed(true)}
                    className={`settle h-full w-full object-cover object-top transition duration-700 ${duotone ? "grayscale contrast-110 group-hover:grayscale-0 group-focus:grayscale-0" : ""}`} />
                  {duotone && <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/60 to-blue-900/60 mix-blend-color transition-opacity duration-700 group-hover:opacity-0 group-focus:opacity-0" />}
                </>
              )}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              {/* label bidang utama (di atas foto, selalu terang) */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2.5 px-4 pb-5 text-center">
                <Code2 size={22} className="text-indigo-300" />
                <div>
                  <p className="font-display text-base font-bold leading-tight text-zinc-50">Software Engineering & IT</p>
                  <p className="mt-0.5 text-xs text-indigo-200/80">Bidang utama</p>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">{CORE.map((c) => <Chip key={c} tone="dark">{c}</Chip>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TShape;
