import type { Metadata } from "next";
import { MapPin, Clock, Users, Shield, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Lebong Palembang – Hiace Berangkat Setiap Hari dari Lebong",
  description:
    "Travel Lebong–Palembang menggunakan Toyota Hiace ber-AC. Berangkat setiap hari, melewati Curup dan Kepahiang. Durasi 7–8 jam. Jemput area Lebong. Pesan via WhatsApp.",
  keywords: [
    "travel lebong palembang",
    "travel lebong ke palembang",
    "travel palembang lebong",
    "jadwal travel lebong palembang",
    "harga travel lebong palembang",
  ],
  alternates: { canonical: "https://travelcurup.biz.id/travel-lebong-palembang" },
  openGraph: {
    title: "Travel Lebong Palembang – Hiace Berangkat Setiap Hari",
    description:
      "Rute Lebong–Palembang dengan Toyota Hiace ber-AC. Jemput di Lebong, antar ke Palembang. Pesan tiket lewat WhatsApp.",
    url: "https://travelcurup.biz.id/travel-lebong-palembang",
  },
};

const schedules = [
  { waktu: "04.30 WIB", jenis: "Keberangkatan Subuh", keterangan: "Tiba di Palembang ±12.30 WIB", status: "Tersedia" },
  { waktu: "07.00 WIB", jenis: "Keberangkatan Pagi", keterangan: "Tiba di Palembang ±15.00 WIB", status: "Tersedia" },
  { waktu: "13.00 WIB", jenis: "Keberangkatan Siang", keterangan: "Tiba di Palembang ±21.00 WIB", status: "Tersedia" },
];

const faq = [
  {
    q: "Berapa lama perjalanan dari Lebong ke Palembang?",
    a: "Perjalanan dari Lebong (Muara Aman) ke Palembang memakan waktu sekitar 7 hingga 8 jam. Rutenya lebih panjang dibanding dari Curup karena Lebong berada di ketinggian yang lebih masuk ke pedalaman Bengkulu.",
  },
  {
    q: "Dari mana titik awal keberangkatan dari Lebong?",
    a: "Penumpang dapat dijemput di area Muara Aman dan sekitar Kabupaten Lebong. Konfirmasikan alamat jemput saat pemesanan agar kami bisa mengatur jalur penjemputan yang efisien.",
  },
  {
    q: "Apakah ada rute lanjutan setelah Curup?",
    a: "Ya, armada Lebong–Palembang melewati Curup sebelum melanjutkan perjalanan ke Kepahiang, Lahat, dan Palembang. Penumpang bisa naik dari Lebong dan melanjutkan perjalanan bersama.",
  },
  {
    q: "Bagaimana jika saya ingin tiket pulang (Palembang–Lebong)?",
    a: "Tersedia juga armada rute sebaliknya. Pesan tiket PP (pulang-pergi) sekaligus untuk memastikan kursi kembali ke Lebong sesuai jadwal yang Anda inginkan.",
  },
  {
    q: "Apakah bisa memesan untuk rombongan?",
    a: "Tentu. Untuk rombongan lebih dari 5 orang, kami menyarankan pemesanan minimal 2 hari sebelum keberangkatan agar kursi yang diinginkan dapat kami siapkan.",
  },
];

export default function TravelLebongPalembang() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Dari Pedalaman Bengkulu ke Kota Palembang
          </div>
          <h1>Travel Lebong – Palembang</h1>
          <p className="hero-desc">
            Dari ketinggian Kabupaten Lebong, kami mengantarkan Anda turun menuju
            Palembang dengan nyaman. Rute panjang yang membelah pegunungan Bukit Barisan
            ini ditangani oleh sopir berpengalaman yang hafal setiap tikungannya.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/6281234567890" className="btn-primary">
              <Phone size={16} /> Pesan Tiket Sekarang
            </a>
          </div>
        </div>
      </section>

      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item"><Clock size={15} /> Durasi: 7–8 jam</div>
          <div className="info-item"><Users size={15} /> Kapasitas: 9–12 kursi</div>
          <div className="info-item"><Shield size={15} /> AC + Jok Nyaman</div>
          <div className="info-item"><MapPin size={15} /> Jemput di area Lebong</div>
        </div>
      </div>

      <div className="main-content">
        <div className="route-box">
          <div className="route-path">
            <span className="route-city">Lebong</span>
            <span className="route-arrow">⟶</span>
            <span className="route-city">Palembang</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginLeft: "auto" }}>Pulang–Pergi (PP) Tersedia</span>
          </div>
          <div className="route-stats">
            <div className="stat-item">
              <div className="stat-label">Durasi Tempuh</div>
              <div className="stat-value">7–8</div>
              <div className="stat-sub">jam perjalanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Harga Mulai</div>
              <div className="stat-value">Rp 170k</div>
              <div className="stat-sub">per penumpang</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Armada</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>Toyota Hiace</div>
              <div className="stat-sub">AC, kursi ergonomis</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Keberangkatan</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>Setiap Hari</div>
              <div className="stat-sub">subuh, pagi & siang</div>
            </div>
          </div>
        </div>

        <section className="section">
          <p className="section-label">Jadwal Keberangkatan</p>
          <h2>Tiga Pilihan Waktu Berangkat dari Lebong</h2>
          <p style={{ marginBottom: "1rem" }}>
            Kami menyediakan tiga slot keberangkatan harian dari Lebong menuju Palembang.
            Keberangkatan subuh cocok bagi yang ingin tiba di Palembang sebelum siang.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Jam Berangkat</th>
                  <th>Keterangan</th>
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
          <h2>Perjalanan dari Lebong ke Palembang: Apa yang Perlu Diketahui?</h2>
          <p>
            Kabupaten Lebong terletak di bagian utara Bengkulu, berbatasan dengan Sumatera
            Selatan di sisi timurnya. Perjalanan dari Lebong menuju Palembang melewati Curup
            (Rejang Lebong), kemudian Kepahiang, turun ke Lahat, melewati Muara Enim, dan
            berakhir di Kota Palembang.
          </p>
          <h3>Mengapa Pilih Travel daripada Bus?</h3>
          <p>
            Armada Toyota Hiace yang kami operasikan jauh lebih fleksibel dibanding bus besar.
            Dengan kapasitas 9–12 penumpang, Hiace mampu berhenti di titik-titik yang Anda
            perlukan tanpa harus menunggu kursi penuh. Ini menjadikannya pilihan yang lebih
            cepat dan personal untuk rute jarak jauh seperti Lebong–Palembang.
          </p>
          <h3>Tips Perjalanan Lebong–Palembang</h3>
          <p>
            Disarankan untuk makan ringan sebelum berangkat, terutama jika mengambil jadwal
            subuh. Jalur dari Lebong menuju Curup memiliki banyak tikungan tajam, sehingga
            penumpang yang rentan mabuk perjalanan sebaiknya mengonsumsi obat antisipasi
            sebelum berangkat. Perjalanan menjadi lebih mulus setelah melewati Kepahiang
            menuju dataran Lahat.
          </p>

          <h3>Yang Sudah Termasuk dalam Harga Tiket</h3>
          <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
            {[
              "Penjemputan di area Lebong (Muara Aman & sekitarnya)",
              "Kursi ber-AC sepanjang perjalanan",
              "Pengantaran ke tujuan di Palembang",
              "Bagasi standar 1 koper atau tas ransel",
              "Sopir berpengalaman & paham rute",
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
          <h2>Dipercaya oleh Warga Lebong</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Saya PNS di Lebong yang sering dinas ke Palembang. Travel ini sudah saya
                pakai bertahun-tahun. Tidak pernah mengecewakan, selalu datang jemput
                tepat waktu."
              </p>
              <div className="testimonial-author">— Pak Arif, ASN Kabupaten Lebong</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Anak saya kuliah di Palembang. Setiap liburan naik travel ini dari Lebong.
                Aman, nyaman, dan saya selalu tenang walau anak berangkat sendiri."
              </p>
              <div className="testimonial-author">— Ibu Yanti, orang tua mahasiswa</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★☆</div>
              <p className="testimonial-text">
                "Harganya sepadan dengan kenyamanan yang didapat. Mobilnya bersih dan
                sopirnya tidak ngebut walau jalannya sepi."
              </p>
              <div className="testimonial-author">— Budi, wiraswasta dari Lebong Utara</div>
            </div>
          </div>
        </div>

        <section className="section">
          <p className="section-label">Pertanyaan Umum</p>
          <h2>FAQ – Travel Lebong ke Palembang</h2>
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
          <h2>Siap Berangkat dari Lebong?</h2>
          <p>
            Hubungi kami via WhatsApp untuk konfirmasi tiket. Sampaikan jadwal, jumlah
            penumpang, dan titik jemput — kami urus sisanya.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/6281234567890?text=Halo%2C+saya+ingin+pesan+tiket+travel+Lebong-Palembang" className="btn-wa">
              💬 Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": "Travel Lebong ke Palembang",
            "description": "Layanan travel antar kota rute Lebong–Palembang dengan armada Toyota Hiace ber-AC.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Travel Curup",
              "url": "https://travelcurup.biz.id",
              "telephone": "+6281234567890",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curup",
                "addressRegion": "Bengkulu",
                "addressCountry": "ID",
              },
            },
          }),
        }}
      />
    </main>
  );
}
