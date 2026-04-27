import type { Metadata } from "next";
import { MapPin, Clock, Users, Shield, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Curup Lebong – Innova Berangkat Pagi & Siang Setiap Hari",
  description:
    "Travel Curup–Lebong menggunakan Toyota Innova ber-AC. Durasi 1,5–2 jam, berangkat setiap hari. Cocok untuk warga yang bolak-balik Curup dan Lebong. Pesan via WhatsApp.",
  keywords: [
    "travel curup lebong",
    "travel lebong curup",
    "travel curup ke lebong",
    "innova curup lebong",
    "angkutan curup lebong",
  ],
  alternates: { canonical: "https://travelcurup.biz.id/travel-curup-lebong" },
  openGraph: {
    title: "Travel Curup–Lebong – Innova AC, Cepat & Nyaman",
    description:
      "Layanan travel Curup–Lebong harian dengan Toyota Innova. Berangkat pagi dan siang. Pesan tiket via WhatsApp.",
    url: "https://travelcurup.biz.id/travel-curup-lebong",
  },
};

const schedules = [
  { waktu: "06.00 WIB", jenis: "Pagi I", keterangan: "Tiba di Lebong ±07.45 WIB", status: "Tersedia" },
  { waktu: "09.00 WIB", jenis: "Pagi II", keterangan: "Tiba di Lebong ±10.45 WIB", status: "Tersedia" },
  { waktu: "13.00 WIB", jenis: "Siang", keterangan: "Tiba di Lebong ±14.45 WIB", status: "Tersedia" },
  { waktu: "16.00 WIB", jenis: "Sore", keterangan: "Tiba di Lebong ±17.45 WIB", status: "Tersedia" },
];

const faq = [
  {
    q: "Berapa lama perjalanan Curup ke Lebong?",
    a: "Perjalanan Curup–Lebong dengan Toyota Innova normalnya membutuhkan 1,5 hingga 2 jam, tergantung kondisi jalan dan cuaca. Rute ini melewati jalur yang relatif lebih singkat dibanding rute ke Palembang.",
  },
  {
    q: "Apakah layanan ini tersedia setiap hari?",
    a: "Ya, kami beroperasi setiap hari termasuk akhir pekan dan hari libur nasional. Jadwal tetap berjalan normal kecuali ada kondisi force majeure seperti jalan tertutup longsor.",
  },
  {
    q: "Berapa harga tiket Curup–Lebong?",
    a: "Harga tiket Curup–Lebong mulai dari Rp 60.000 per penumpang. Untuk info harga terkini dan ketersediaan kursi, silakan hubungi kami via WhatsApp.",
  },
  {
    q: "Armada apa yang digunakan?",
    a: "Rute Curup–Lebong menggunakan Toyota Innova, kendaraan yang ideal untuk perjalanan jarak menengah seperti ini. Kapasitas 5–6 penumpang, ber-AC, dengan ruang bagasi yang cukup.",
  },
  {
    q: "Bisakah saya pesan untuk pulang-pergi di hari yang sama?",
    a: "Bisa. Cukup informasikan jadwal keberangkatan dan kepulangan saat pemesanan, dan kami akan pastikan kursi tersedia untuk kedua arah perjalanan Anda.",
  },
];

export default function TravelCurupLebong() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Rute Harian Jarak Dekat
          </div>
          <h1>Travel Curup – Lebong</h1>
          <p className="hero-desc">
            Perjalanan dua jam yang menghubungkan dua wilayah penting di Bengkulu.
            Menggunakan Toyota Innova ber-AC, rute ini cocok untuk warga yang beraktivitas
            rutin antara Curup dan Lebong — tanpa perlu repot mencari kendaraan umum.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/6281270826212" className="btn-primary">
              <Phone size={16} /> Pesan Tiket Sekarang
            </a>
          </div>
        </div>
      </section>

      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item"><Clock size={15} /> Durasi: 1,5–2 jam</div>
          <div className="info-item"><Users size={15} /> Kapasitas: 5–6 kursi</div>
          <div className="info-item"><Shield size={15} /> Innova AC + Nyaman</div>
          <div className="info-item"><MapPin size={15} /> 4 jadwal keberangkatan/hari</div>
        </div>
      </div>

      <div className="main-content">
        <div className="route-box">
          <div className="route-path">
            <span className="route-city">Curup</span>
            <span className="route-arrow">⟷</span>
            <span className="route-city">Lebong</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginLeft: "auto" }}>Dua Arah Tersedia</span>
          </div>
          <div className="route-stats">
            <div className="stat-item">
              <div className="stat-label">Durasi Tempuh</div>
              <div className="stat-value">1,5–2</div>
              <div className="stat-sub">jam perjalanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Harga Mulai</div>
              <div className="stat-value">Rp 60k</div>
              <div className="stat-sub">per penumpang</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Armada</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>Toyota Innova</div>
              <div className="stat-sub">AC, legroom luas</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Frekuensi</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>4x/Hari</div>
              <div className="stat-sub">pagi s/d sore</div>
            </div>
          </div>
        </div>

        <section className="section">
          <p className="section-label">Jadwal Keberangkatan</p>
          <h2>Empat Jadwal Harian Curup–Lebong</h2>
          <p style={{ marginBottom: "1rem" }}>
            Dengan empat slot keberangkatan per hari, Anda punya banyak pilihan waktu yang
            fleksibel — baik untuk urusan pagi maupun perjalanan sore hari.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Jam Berangkat</th>
                  <th>Sesi</th>
                  <th>Estimasi Tiba</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((s) => (
                  <tr key={s.waktu}>
                    <td><strong>{s.waktu}</strong></td>
                    <td>{s.jenis}</td>
                    <td>{s.keterangan}</td>
                    <td><span className="badge badge-green">{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section prose">
          <p className="section-label">Tentang Rute Ini</p>
          <h2>Curup dan Lebong: Dua Kota yang Saling Terhubung</h2>
          <p>
            Curup sebagai ibu kota Rejang Lebong dan Muara Aman sebagai pusat Kabupaten
            Lebong memiliki ketergantungan satu sama lain yang tinggi — baik dalam hal
            ekonomi, pendidikan, maupun pemerintahan. Tidak sedikit warga Lebong yang
            bekerja atau bersekolah di Curup, dan sebaliknya.
          </p>
          <h3>Kenapa Innova untuk Rute Ini?</h3>
          <p>
            Toyota Innova dipilih karena karakter jalur Curup–Lebong yang melewati
            perbukitan dengan beberapa tanjakan dan tikungan. Innova dikenal stabil di
            jalan berbukit, memiliki suspensi yang baik, dan interior yang luas untuk
            penumpang dewasa maupun yang membawa tas besar.
          </p>
          <h3>Rute yang Dilalui</h3>
          <p>
            Perjalanan dari Curup menuju Lebong melewati kawasan Selupu Rejang, kemudian
            naik menuju Rimbo Pengadang, dan masuk ke wilayah Lebong melalui jalur yang
            dikelilingi hutan dan ladang warga. Pemandangan sepanjang perjalanan cukup
            memanjakan mata, terutama di pagi hari.
          </p>

          <h3>Yang Sudah Termasuk dalam Harga Tiket</h3>
          <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
            {[
              "Kursi ber-AC di Toyota Innova",
              "Jemput di area Curup atau Lebong",
              "Antar ke tujuan di kota tujuan",
              "Bagasi tas standar/ransel",
              "Pengemudi lokal berpengalaman",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle size={16} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="testimonials">
          <p className="section-label">Kata Penumpang Kami</p>
          <h2>Kepercayaan Warga Curup & Lebong</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Saya tiap minggu bolak-balik Lebong–Curup untuk urusan keluarga. Travel
                Curup ini paling konsisten soal jadwal. Mobilnya juga nyaman, tidak mual
                walau jalannya naik-turun."
              </p>
              <div className="testimonial-author">— Ibu Sari, pegawai swasta di Curup</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Harga terjangkau, bisa langsung dijemput dari rumah. Untuk perjalanan
                ke Curup yang rutin, ini pilihan paling praktis."
              </p>
              <div className="testimonial-author">— Pak Rendi, warga Muara Aman, Lebong</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★☆</div>
              <p className="testimonial-text">
                "Innova-nya bersih dan AC-nya dingin. Untuk perjalanan Lebong–Curup,
                tidak ada yang lebih nyaman dari ini sejauh yang saya tahu."
              </p>
              <div className="testimonial-author">— Desy, mahasiswi di Curup</div>
            </div>
          </div>
        </div>

        <section className="section">
          <p className="section-label">Pertanyaan Umum</p>
          <h2>FAQ – Travel Curup ke Lebong</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <div className="faq-item" key={item.q}>
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-section">
          <h2>Pesan Tiket Curup–Lebong Sekarang</h2>
          <p>
            Chat kami di WhatsApp, sebutkan jadwal dan titik jemput. Kursi Anda akan
            kami konfirmasi dalam hitungan menit.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/6281270826212?text=Halo%2C+saya+ingin+pesan+tiket+travel+Curup-Lebong" className="btn-wa">
              💬 Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
