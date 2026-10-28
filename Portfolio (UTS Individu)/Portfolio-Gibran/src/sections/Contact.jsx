import { Mail, ArrowUpRight } from "lucide-react";
import { SOCIALS } from "../data/socials";
import { PROFILE } from "../data/profile";
import Glow from "../components/ui/Glow";
import Reveal from "../components/ui/Reveal";

function Contact() {
  const EMAIL = PROFILE.email;
  return (
    <section id="contact" className="relative scroll-mt-8 overflow-hidden px-5 pb-40 pt-20 sm:py-28 md:pb-28">
      <div aria-hidden className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-3xl rounded-full bg-indigo-400/25 blur-[120px] dark:bg-indigo-600/25" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">05 — contact</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-6xl">
            Mari Terhubung & Berkolaborasi.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Punya proyek menarik, tawaran kolaborasi, atau sekadar ingin berdiskusi seputar teknologi? Silakan hubungi saya langsung melalui email di bawah ini.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 flex max-w-xl">
          <Glow className="!rounded-2xl">
            <a href={`mailto:${EMAIL}`} className="group flex flex-1 flex-col justify-between rounded-2xl p-6 transition-all duration-300 sm:p-8">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-transform group-hover:scale-110"><Mail size={24} /></div>
                <h3 className="text-xl font-bold text-fg">Kirim Pesan via Email</h3>
                <p className="mt-1 text-sm text-muted">Hubungi saya secara profesional untuk diskusi atau penawaran kerja.</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm font-medium text-accent">
                <span className="break-all">{EMAIL}</span>
                <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          </Glow>
        </Reveal>

        {/* 4 tombol sosial: grid 2×2 di layar kecil, satu baris 4 kolom di layar ≥ md. Selalu simetris. */}
        <div className="mt-12">
          <p className="mb-6 text-center text-sm font-medium text-muted">Atau kunjungi profil sosial media saya:</p>
          <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {SOCIALS.map(({ icon: Icon, label, href }, i) => (
              <Reveal as="li" key={label} delay={i * 80} className="flex">
                <Glow className="!rounded-2xl">
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer"
                      className="group flex flex-1 flex-col items-center justify-center gap-2 px-4 py-6 text-soft transition-colors hover:text-fg">
                      <Icon size={22} className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ) : (
                    <span className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-6 text-faint">
                      <Icon size={22} />
                      <span className="text-sm font-medium">{label}</span>
                      <span className="text-[11px]">segera</span>
                    </span>
                  )}
                </Glow>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
