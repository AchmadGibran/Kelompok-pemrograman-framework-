// Latar global: aurora berwarna yang bergerak pelan + grid titik. Mengikuti tema lewat CSS variable.
function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full blur-[110px]" style={{ background: "var(--aurora-a)", animation: "drift 16s ease-in-out infinite" }} />
      <div className="absolute -right-16 top-1/3 h-[26rem] w-[26rem] rounded-full blur-[120px]" style={{ background: "var(--aurora-b)", animation: "drift 20s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full blur-[120px]" style={{ background: "var(--aurora-c)", animation: "drift 24s ease-in-out infinite" }} />
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgb(var(--c-fg)/.10)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}

export default AuroraBackground;
