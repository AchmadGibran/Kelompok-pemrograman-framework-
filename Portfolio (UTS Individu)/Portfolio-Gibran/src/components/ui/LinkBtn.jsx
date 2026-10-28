function LinkBtn({ href, icon: Icon, label, primary }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";
  if (!href) return <span className={`${base} border border-fg/10 text-faint`}><Icon size={16} /> {label} (segera)</span>;
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`${base} ${primary ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 hover:bg-indigo-400" : "border border-fg/15 text-fg hover:-translate-y-0.5 hover:border-accent hover:text-accent"}`}>
      <Icon size={16} /> {label}
    </a>
  );
}

export default LinkBtn;
