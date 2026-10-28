// Ganti tema terang/gelap. Bila browser mendukung View Transitions, tema baru "mengembang"
// sebagai lingkaran dari titik tombol yang diklik.
export function toggleTheme(origin) {
  const root = document.documentElement;
  const next = root.classList.contains("dark") ? "light" : "dark";
  const apply = () => {
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) return apply();

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const end = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const t = document.startViewTransition(apply);
  t.ready.then(() =>
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(.65,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
    )
  );
}
