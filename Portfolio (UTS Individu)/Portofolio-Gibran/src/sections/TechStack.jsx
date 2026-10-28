import { STACK } from "../data/stack";
import Section from "../components/ui/Section";
import Glow from "../components/ui/Glow";
import Chip from "../components/ui/Chip";
import Reveal from "../components/ui/Reveal";

function TechStack() {
  return (
    <Section id="stack" no="02" eyebrow="stack" title="Tech Stack" intro="Teknologi dan tools yang pernah saya gunakan dalam proyek dan pembelajaran.">
      <div className="grid gap-4 sm:grid-cols-2">
        {STACK.map(({ icon: Icon, title, items }, i) => (
          <Reveal key={title} delay={i * 90} className="flex">
            <Glow>
              <div className="flex flex-1 gap-5 p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-300"><Icon size={24} /></span>
                <div>
                  <h3 className="font-display text-lg font-bold text-fg">{title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{items.map((it) => <Chip key={it}>{it}</Chip>)}</div>
                </div>
              </div>
            </Glow>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
