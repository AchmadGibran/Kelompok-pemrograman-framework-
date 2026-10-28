import ImageSlot from "./ImageSlot";

// Bingkai sertifikat dengan tinggi seragam di semua kartu. Orientasi menentukan rasio gambar:
// "portrait" (vertikal, 3:4) memenuhi tinggi bingkai dan berada di tengah; "landscape" (4:3) memenuhi lebar.
const FRAME = "flex h-[21rem] w-full items-center justify-center rounded-2xl border border-fg/10 bg-fg/[0.03] p-3";
const BY_ORIENTATION = {
  portrait: "h-full max-w-full aspect-[3/4]",
  landscape: "w-full max-h-full aspect-[4/3]",
};

function CertFrame({ cert, orientation }) {
  const o = orientation || cert.orientation || "landscape";
  return (
    <div className={FRAME}>
      <ImageSlot src={cert.src || cert.image} alt={cert.alt} hint={cert.hint} kind="cert" fit="object-contain"
        className={`${BY_ORIENTATION[o]} bg-panel`} />
    </div>
  );
}

export default CertFrame;
