// tone="dark": dipakai di atas foto (selalu gelap), tidak ikut berganti tema.
const Chip = ({ children, tone }) => (
  <span className={`rounded-full border px-3 py-1 text-xs ${tone === "dark" ? "border-white/15 bg-white/10 text-zinc-200" : "border-fg/10 bg-fg/5 text-soft"}`}>{children}</span>
);

export default Chip;
