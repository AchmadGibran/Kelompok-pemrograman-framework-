import { CheckCircle2, ArrowDown } from "lucide-react";
import { PROFILE } from "../data/profile";
import { STACK } from "../data/stack";
import Chip from "../components/ui/Chip";
import TShape from "../components/TShape";
import Typewriter from "../components/ui/Typewriter";

function Hero() {
  const d = (n) => ({ animationDelay: `${n}ms` });
  const marquee = STACK.flatMap((s) => s.items);
  return (
    <section id="about" className="relative scroll-mt-8 overflow-hidden px-5 pb-10 pt-28 sm:pt-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rise" style={d(0)}>
            <p className="font-display text-xl font-bold text-fg">{PROFILE.name}</p>
            <p className="text-sm text-muted">Teknik Informatika, STITEK Bontang</p>
          </div>
          <div className="rise mt-6 flex flex-wrap gap-2" style={d(100)}>
            {PROFILE.badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                <CheckCircle2 size={14} /> {b}
              </span>
            ))}
          </div>
          <h1 className="rise font-display shine mt-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-sky-500 bg-clip-text text-5xl font-extrabold leading-[1.02] tracking-tight text-transparent dark:from-white dark:via-indigo-200 dark:to-sky-300 sm:text-7xl" style={d(200)}>
            {PROFILE.headline}
          </h1>

          {/* baris terminal: teks diketik bergantian */}
          <p className="rise surface mt-6 inline-flex max-w-full flex-wrap items-center gap-x-2 rounded-xl px-4 py-2.5 font-mono text-xs text-muted sm:text-sm" style={d(260)}>
            <span className="text-emerald-600 dark:text-emerald-300">gibran@portfolio</span>
            <span className="text-faint">:</span><span className="text-accent">~</span><span className="text-faint">$</span>
            <span>membangun</span>
            <Typewriter words={PROFILE.typed} className="text-fg" />
          </p>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={d(320)}>{PROFILE.summary}</p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={d(420)}>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400">
              Lihat Proyek <ArrowDown size={16} />
            </a>
            <a href="#contact" className="rounded-full border border-fg/15 px-6 py-3.5 font-semibold text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">Hubungi Saya</a>
          </div>
        </div>
        <div className="lg:col-span-2"><TShape /></div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]" aria-hidden>
        <div className="flex w-max gap-3" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marquee, ...marquee].map((m, i) => <Chip key={i}>{m}</Chip>)}
        </div>
      </div>
    </section>
  );
}

export default Hero;
