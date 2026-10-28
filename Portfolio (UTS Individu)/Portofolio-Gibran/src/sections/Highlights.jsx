import { Megaphone, Guitar, FolderArchive } from "lucide-react";
import Section from "../components/ui/Section";
import Glow from "../components/ui/Glow";
import Reveal from "../components/ui/Reveal";
import CertFrame from "../components/ui/CertFrame";
import { HIGHLIGHT_CERTS as C } from "../data/highlights";

// Tinggi kartu disamakan oleh grid (items stretch). Di dalam kartu: flex flex-col flex-1 justify-between
// → teks di atas, sertifikat selalu menempel di dasar, sehingga bingkai sertifikat sejajar antar kartu.
function Cluster({ icon: Icon, title, delay, body, footer }) {
  return (
    <Reveal delay={delay} className="flex">
      <Glow>
        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div>
            <Icon size={22} className="text-emerald-600/80 dark:text-emerald-300/80" />
            <h3 className="font-display mt-4 text-lg font-bold leading-snug text-fg">{title}</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">{body}</div>
          </div>
          <div>{footer}</div>
        </div>
      </Glow>
    </Reveal>
  );
}

const Item = ({ label, children }) => (
  <div>
    <p className="font-semibold text-soft">{label}</p>
    <p className="mt-1">{children}</p>
  </div>
);

function Highlights() {
  return (
    <Section id="highlights" no="04" eyebrow="highlights" small title="Complementary Highlights" intro="Pengalaman di luar bidang utama yang melengkapi proses belajar saya. Klik gambar sertifikat untuk memperbesar.">
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        <Cluster icon={Megaphone} title="Social Commerce & Digital Marketing" delay={0}
          body={<>
            <Item label="Sertifikasi">Kompetensi BNSP (BLKI / Ditekindo), Social Media Marketing.</Item>
            <Item label="TikTok Live Selling Numismatics">Mengelola live selling item uang kuno dan menyelesaikan 90+ transaksi langsung.</Item>
          </>}
          footer={<CertFrame cert={C.smm} />} />

        <Cluster icon={Guitar} title="Audio Production & Musical Achievements" delay={120}
          body={<Item label="Rekam Jejak Prestasi Musik Nasional">Peringkat 6 Nasional FLS2N Gitar Solo SMK 2022 & Juara Harapan 3 Nasional Duet Gitar FLS2N SMP.</Item>}
          footer={<figure><CertFrame cert={C.fls2nSmk} /><figcaption className="mt-2 text-center text-xs text-faint">{C.fls2nSmk.caption}</figcaption></figure>} />

        <Cluster icon={FolderArchive} title="Government Data & Records Operations" delay={240}
          body={<Item label="Third-Party Records Management & Data Entry Specialist (2025–2026)">Mengelola digitalisasi dokumen, pengindeksan database, kategorisasi berkas, dan data entry di beberapa instansi pemerintahan.</Item>}
          footer={<CertFrame cert={C.arsip} />} />
      </div>
    </Section>
  );
}

export default Highlights;
