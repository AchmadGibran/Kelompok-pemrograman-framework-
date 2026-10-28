import Reveal from "./Reveal";

// small = section pendukung: judul lebih kecil agar fokus tetap ke bidang utama
// no + eyebrow = penanda kecil bergaya terminal di atas judul (mis. "01 — credentials")
const Section = ({ id, no, eyebrow, title, intro, small = false, children }) => (
  <section id={id} className={`scroll-mt-8 px-5 ${small ? "py-14 sm:py-20" : "py-20 sm:py-28"}`}>
    <div className="mx-auto max-w-6xl">
      <Reveal>
        {(no || eyebrow) && (
          <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
            {no && <span>{no}</span>}
            <span aria-hidden className="h-px w-10 bg-accent/40" />
            {eyebrow && <span className="uppercase">{eyebrow}</span>}
          </p>
        )}
        <h2 className={`font-display font-extrabold tracking-tight ${small ? "text-2xl text-soft sm:text-3xl" : "text-3xl text-fg sm:text-5xl"}`}>{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default Section;
