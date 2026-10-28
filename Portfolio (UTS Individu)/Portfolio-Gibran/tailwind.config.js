/** @type {import('tailwindcss').Config} */
// Warna memakai CSS variable (lihat globals.css) agar satu class berlaku untuk mode terang & gelap.
const tok = (n) => `rgb(var(--c-${n}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: tok("base"),     // latar halaman
        fg: tok("fg"),         // teks utama (juga dasar garis/permukaan transparan)
        soft: tok("soft"),     // teks sekunder terang
        muted: tok("muted"),   // teks deskripsi
        faint: tok("faint"),   // teks redup / placeholder
        accent: tok("accent"), // aksen indigo (menyesuaikan tema)
        panel: tok("panel"),   // latar bingkai gambar / mockup
      },
      fontFamily: { mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"] },
    },
  },
  plugins: [],
};
