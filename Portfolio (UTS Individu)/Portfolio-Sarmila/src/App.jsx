
import "./App.css";

const skills = [
  {
    number: "01",
    title: "Microsoft Office",
    description: "Mengolah dokumen dan menyusun informasi.",
  },
  {
    number: "02",
    title: "HTML",
    description: "Membuat struktur halaman website.",
  },
  {
    number: "03",
    title: "CSS",
    description: "Mengatur tampilan dan desain website.",
  },
  {
    number: "04",
    title: "React.js",
    description: "Mempelajari pembuatan antarmuka website.",
  },
];

function App() {
  return (
    <main className="portfolio">
      {/* SAMPUL */}
      <section className="cover" id="beranda">
        <div className="cover-text">
          <p className="eyebrow">PERSONAL PORTFOLIO</p>

          <h1>Portofolio</h1>

          <p className="name">
            SARMILA
            <br />
            TEKNIK INFORMATIKA
          </p>

          <p className="cover-campus">
            Sekolah Tinggi Teknologi Bontang
          </p>

          <a className="website" href="#profil">
            Kenali saya lebih dekat ↘
          </a>
        </div>

        <div className="cover-photo">
          <div className="photo-frame">
            <img
              src="/images/foto-saya.png"
              alt="Foto profil Sarmila"
            />
          </div>
        </div>

        <span className="cover-number">
          01 / PERSONAL PROFILE
        </span>
      </section>

      {/* TENTANG SAYA */}
      <section className="section profile" id="profil">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>Tentang Saya</h2>
          <p>KENALI SAYA LEBIH DEKAT</p>
        </div>

        <div className="profile-description">
          <p>
            Halo, saya <strong>Sarmila</strong>, mahasiswa Teknik
            Informatika yang sedang belajar dan mengembangkan
            kemampuan di bidang teknologi informasi. Saat ini saya
            tertarik mempelajari pembuatan website serta pemrograman
            menggunakan berbagai teknologi.
          </p>

          <p>
            Walaupun masih dalam tahap belajar, saya memiliki
            keinginan untuk terus mencoba, memperbaiki kesalahan,
            dan meningkatkan kemampuan melalui latihan dan proyek.
            Saya berharap ilmu yang saya pelajari dapat menjadi bekal
            untuk mengembangkan karier di bidang teknologi.
          </p>
        </div>

        <div className="identity-grid">
          <article className="identity-item">
            <span>01 / NAMA</span>
            <h3>Sarmila</h3>
          </article>

          <article className="identity-item">
            <span>02 / NIM</span>
            <h3>202312080</h3>
          </article>

          <article className="identity-item">
            <span>03 / PROGRAM STUDI</span>
            <h3>Teknik Informatika</h3>
          </article>
        </div>
      </section>

      {/* PENDIDIKAN */}
      <section className="section education" id="pendidikan">
        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>Pendidikan</h2>
          <p>PERJALANAN PENDIDIKAN SAYA</p>
        </div>

        <article className="education-card">
          <div className="education-mark">
            <img
              src="/images/logo-kampus.jpg"
              alt="Logo Sekolah Tinggi Teknologi Bontang"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="education-info">
            <span className="card-label">
              PERGURUAN TINGGI
            </span>

            <h3>Sekolah Tinggi Teknologi Bontang</h3>

            <p>Program Studi Teknik Informatika</p>

            <p className="student-number">
              NIM: 202312080
            </p>
          </div>
        </article>
      </section>

      {/* KEAHLIAN */}
      <section className="section skills" id="keahlian">
        <div className="section-heading">
          <span className="section-number">03</span>
          <h2>Keahlian</h2>
          <p>KEMAMPUAN YANG SEDANG SAYA KEMBANGKAN</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article
              className="skill-card"
              key={skill.number}
            >
              <span>{skill.number}</span>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="skill-line" />
            </article>
          ))}
        </div>
      </section>

      {/* PENGALAMAN DAN PROYEK */}
      <section
        className="section experience"
        id="pengalaman"
      >
        <div className="section-heading">
          <span className="section-number">04</span>
          <h2>Proyek Saya</h2>
          <p>PROSES BELAJAR DAN BERKARYA</p>
        </div>

        <div className="experience-content">
          <div className="experience-photo">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
              alt="Ilustrasi pengembangan website"
            />

            <span>WEB DEVELOPMENT / LARAVEL</span>
          </div>

          <div className="experience-list">
            <p className="intro">
              Saya terus belajar dan mengembangkan keterampilan
              melalui latihan pemrograman dan pengerjaan proyek.
            </p>

            <article className="timeline-item">
              <span>PROJECT 01</span>

              <h3>Website Sistem Penarikan Uang</h3>

              <p>
                Proyek website menggunakan Laravel untuk sistem
                penarikan uang nasabah Bank Dhanartha Bontang.
                Proyek ini membantu saya mempelajari pengelolaan
                data nasabah dan proses penarikan uang.
              </p>

              <div className="tech-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </article>

            <article className="timeline-item">
              <span>PROJECT 02</span>

              <h3>Website Portofolio Pribadi</h3>

              <p>
                Website pribadi untuk menampilkan data diri,
                pendidikan, keahlian, dan proyek yang dibuat
                menggunakan React.js dan CSS.
              </p>

              <div className="tech-tags">
                <span>React.js</span>
                <span>CSS</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <footer className="footer" id="kontak">
        <p>LET'S CONNECT</p>

        <h2>Mari Terhubung.</h2>

        <p className="footer-description">
          Terima kasih telah mengunjungi portofolio saya.
          Jangan ragu untuk menghubungi saya.
        </p>

        <div className="contact-links">
          <a href="mailto:milasarmila1224@gmail.com">
            <span>Email</span>
            milasarmila1224@gmail.com ↗
          </a>

          <a
            href="https://www.instagram.com/Sabura_3/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Instagram</span>
            @Sabura_3 ↗
          </a>
        </div>

        <a className="back-top" href="#beranda">
          Kembali ke atas ↑
        </a>

        <span className="copyright">
          © 2026 SARMILA — PERSONAL PORTFOLIO
        </span>
      </footer>
    </main>
  );
}

export default App;
