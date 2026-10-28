import { Award } from "lucide-react";
import { CREDENTIALS } from "../data/credentials";
import Section from "../components/ui/Section";
import Glow from "../components/ui/Glow";
import Reveal from "../components/ui/Reveal";
import CertFrame from "../components/ui/CertFrame";

function Education() {
  return (
    <Section id="education" no="01" eyebrow="credentials" title="Education & Credentials" intro="Pendidikan formal beserta sertifikasi yang menyertainya. Klik gambar sertifikat untuk memperbesar.">
      <div className="grid gap-4 sm:grid-cols-2">
        {CREDENTIALS.map((c, i) => (
          <Reveal key={c.title} delay={i * 120} className="flex">
            <Glow>
              <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <c.icon size={24} />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-bold text-fg">{c.title}</h3>
                  <p className="mt-1 text-soft">{c.place}</p>
                  <p className="mt-1 text-sm text-faint">{c.note}</p>
                </div>
                {c.cert && (
                  <div className="border-t border-fg/10 pt-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                      <Award size={16} className="text-accent" /> {c.cert.name}
                    </p>
                    <p className="mb-4 mt-1 text-sm text-muted">{c.cert.detail}</p>
                    <CertFrame cert={{ ...c.cert, alt: `${c.cert.name}, ${c.cert.detail}`, hint: `Taruh sertifikat di ${c.cert.src}` }} />
                  </div>
                )}
              </div>
            </Glow>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Education;
