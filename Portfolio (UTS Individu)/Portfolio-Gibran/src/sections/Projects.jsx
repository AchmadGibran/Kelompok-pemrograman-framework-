"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Figma, Users, User, Layers, Code2, PenTool, Maximize2 } from "lucide-react";
import { PROJECTS } from "../data/projects";
import Section from "../components/ui/Section";
import Glow from "../components/ui/Glow";
import Chip from "../components/ui/Chip";
import Reveal from "../components/ui/Reveal";
import LinkBtn from "../components/ui/LinkBtn";
import ImageSlot from "../components/ui/ImageSlot";
import { LightboxCtx } from "../components/ui/Lightbox";

const FILTERS = [["all", "Semua", Layers], ["code", "Coding", Code2], ["design", "UI/UX", PenTool]];

// Kelompok proyek: judul kelompok tampil di atas barisnya agar alur lebih terarah.
const GROUPS = [
  ["code", "Web App & Backend", Code2],
  ["design", "UI/UX & Prototype", PenTool],
];

// Gambar sampul tiap proyek: taruh file di public/projects/<nama>.(png|jpg|jpeg|webp).
// Atau, bila mau nama/lokasi lain, tambahkan field `image: "/projects/xxx.png"` di data/projects.js (otomatis diprioritaskan).
const COVER_NAME = {
  "SIM-Mahasiswa": "sim-mahasiswa",
  "Personal Note App v2": "personal-notes",
  "OpenJob RESTful API & Automated Testing": "openjob-cover",
  "Hadir.in KHP": "hadirin-khp",
  "Prototype PanganBontang": "panganbontang",
};
const EXTS = ["png", "jpg", "jpeg", "webp"];

// Ilustrasi dekoratif: tampil hanya selama gambar sampul belum tersedia.
function Preview({ kind, glow, wide }) {
  const dots = (
    <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><i className="h-2.5 w-2.5 rounded-full bg-amber-300/70" /><i className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" /></div>
  );
  let body;
  if (kind === "api") {
    body = (
      <div className="mt-4 space-y-2 font-mono text-[11px]">
        {[["POST", "201", "text-emerald-500"], ["GET", "200", "text-emerald-500"], ["PUT", "200", "text-emerald-500"], ["GET", "401", "text-amber-500"], ["DELETE", "404", "text-rose-500"]].map(([m, c, col], i) => (
          <div key={i} className="flex items-center gap-3"><span className="w-12 text-faint">{m}</span><span className="h-1.5 flex-1 rounded-full bg-fg/10" /><span className={col}>{c}</span></div>
        ))}
      </div>
    );
  } else if (kind === "design") {
    body = (
      <div className="mt-3 flex items-center justify-center gap-2 py-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`h-[4.75rem] w-12 rounded-lg border bg-fg/[0.04] p-1.5 ${i === 1 ? "-translate-y-1 border-accent/60 shadow-lg shadow-indigo-500/20" : "border-fg/15"}`}>
              <div className="h-1.5 w-2/3 rounded bg-fg/20" /><div className="mt-1.5 h-6 rounded bg-fg/10" /><div className="mt-1.5 h-1.5 w-1/2 rounded bg-fg/10" />
            </div>
            {i < 2 && <span aria-hidden className="w-4 border-t border-dashed border-accent/60" />}
          </div>
        ))}
      </div>
    );
  } else {
    body = (
      <div className="mt-4 space-y-2">
        {["w-2/3", "w-1/2 ml-6", "w-3/4 ml-6", "w-2/5 ml-12", "w-1/3"].map((w, i) => <div key={i} className={`h-2 rounded-full bg-fg/10 ${w}`} />)}
      </div>
    );
  }
  return (
    <div className={`m-3 flex shrink-0 rounded-2xl bg-gradient-to-br ${glow} p-4 ${wide ? "lg:w-5/12" : ""}`} aria-hidden>
      <div className="min-h-[7.5rem] flex-1 rounded-xl border border-fg/10 bg-panel/80 p-4">{dots}{body}</div>
    </div>
  );
}

// Sampul proyek: coba tiap ekstensi berurutan; bila semuanya gagal, jatuh ke ilustrasi dekoratif.
function Cover({ p, wide }) {
  const open = useContext(LightboxCtx);
  const name = COVER_NAME[p.title];
  const srcs = p.image ? [p.image] : name ? EXTS.map((e) => `/projects/${name}.${e}`) : [];
  const [i, setI] = useState(0);
  const imgRef = useRef(null);

  // Gambar yang gagal dimuat sebelum hydration tidak memicu onError, jadi dicek ulang di sini.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setI((n) => n + 1);
  }, [i]);

  if (i >= srcs.length) return <Preview kind={p.kind} glow={p.glow} wide={wide} />;

  const src = srcs[i];
  const alt = `Tampilan proyek ${p.title}`;
  return (
    <div className={`m-3 flex shrink-0 rounded-2xl bg-gradient-to-br ${p.glow} p-2.5 ${wide ? "lg:w-5/12" : ""}`}>
      <button type="button" onClick={() => open({ src, alt })} aria-label={`Perbesar: ${alt}`}
        className={`group/cover relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-fg/10 bg-panel aspect-[16/10] ${wide ? "lg:aspect-auto lg:min-h-[14rem]" : ""} focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}>
        <img key={src} ref={imgRef} src={src} alt={alt} loading="lazy" onError={() => setI((n) => n + 1)}
          className="absolute inset-0 h-full w-full object-contain object-center transition duration-500 group-hover/cover:scale-[1.04]" />
        <span aria-hidden className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white opacity-0 backdrop-blur transition group-hover/cover:opacity-100">
          <Maximize2 size={11} /> Perbesar
        </span>
      </button>
    </div>
  );
}

function Card({ p, wide }) {
  const solo = p.type === "Individual Project";
  const TypeIcon = solo ? User : Users;
  return (
    <Glow tilt>
      <div className={`flex flex-1 flex-col ${wide ? "lg:flex-row" : ""}`}>
        <Cover p={p} wide={wide} />
        <div className="flex flex-1 flex-col p-7 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">{p.category}</span>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${solo ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"}`}>
              <TypeIcon size={12} /> {p.type}
            </span>
            <span className="text-xs text-faint">{p.context}</span>
          </div>
          <h4 className="font-display mt-3 text-2xl font-bold text-fg">{p.title}</h4>
          <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>

          {p.proof?.length > 0 && (
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Bukti pengujian</p>
              <div className="grid gap-3">
                {p.proof.map((x) => <ImageSlot key={x.src} src={x.src} alt={x.alt} hint={x.hint} fit="object-contain" className="aspect-[16/9] w-full bg-panel" />)}
              </div>
            </div>
          )}

          {/* tombol selalu di dasar kartu (mt-auto) sehingga sejajar antar kartu */}
          <div className="mt-auto pt-6">
            {p.group === "design" ? (
              <>
                <div className="flex flex-wrap gap-3"><LinkBtn href={p.figma} icon={Figma} label="Figma Prototype" primary /></div>
                <p className="mt-2 text-xs text-faint">Prototype Mode · akses publik, bisa dicoba tanpa login.</p>
              </>
            ) : (
              <div className="flex flex-wrap gap-3">
                <LinkBtn href={p.github} icon={Github} label="GitHub" />
                {p.demo && <LinkBtn href={p.demo} icon={ExternalLink} label="Live Demo" primary />}
              </div>
            )}
          </div>
        </div>
      </div>
    </Glow>
  );
}

function Projects() {
  const [f, setF] = useState("all");
  return (
    <Section id="projects" no="03" eyebrow="projects" title="Main Projects" intro="Lima proyek pilihan: tiga proyek coding dan dua proyek UI/UX. Jenis tiap proyek (group atau individual) tertera di kartunya.">
      <div role="tablist" aria-label="Filter proyek" className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map(([key, label, Icon]) => (
          <button key={key} role="tab" aria-selected={f === key} onClick={() => setF(key)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${f === key ? "border-indigo-500 bg-indigo-500 text-white shadow-lg shadow-indigo-500/25" : "border-fg/15 text-muted hover:border-accent hover:text-accent"}`}>
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {GROUPS.filter(([key]) => f === "all" || f === key).map(([key, heading, Icon]) => {
        const list = PROJECTS.filter((p) => p.group === key);
        return (
          <div key={key} className="mt-14 first:mt-0">
            <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold text-soft">
              <Icon size={16} className="text-accent" /> {heading}
              <span className="font-normal text-faint">· {list.length} proyek</span>
              <span aria-hidden className="h-px flex-1 bg-fg/10" />
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {list.map((p, i) => {
                // jumlah ganjil → kartu terakhir (OpenJob) satu-satunya di barisnya, tampil lebar
                const wide = list.length % 2 === 1 && i === list.length - 1;
                return (
                  <Reveal key={p.title} delay={(i % 2) * 120} className={`flex ${wide ? "lg:col-span-2" : ""}`}>
                    <Card p={p} wide={wide} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        );
      })}
    </Section>
  );
}

export default Projects;