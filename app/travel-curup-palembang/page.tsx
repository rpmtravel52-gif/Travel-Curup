import type { Metadata } from "next";
import { MapPin, Clock, Users, Shield, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Curup Palembang – Hiace AC Berangkat Setiap Hari",
  description:
    "Travel Curup–Palembang tersedia setiap hari. Armada Toyota Hiace ber-AC, berangkat pagi dan sore. Durasi perjalanan 6–7 jam. Jemput di Curup, Rejang Lebong. Pesan via WhatsApp.",
  keywords: [
    "travel curup palembang",
    "travel curup ke palembang",
    "travel palembang curup",
    "jadwal travel curup palembang",
    "harga travel curup palembang",
  ],
  alternates: { canonical: "https://travelcurup.biz.id/travel-curup-palembang" },
  openGraph: {
    title: "Travel Curup Palembang – Hiace AC Berangkat Setiap Hari",
    description:
      "Armada Toyota Hiace ber-AC rute Curup–Palembang. Berangkat setiap hari, pagi dan sore. Pesan tiket lewat WhatsApp sekarang.",
    url: "https://travelcurup.biz.id/travel-curup-palembang",
  },
};

const schedules = [
  { waktu: "05.00 WIB", jenis: "Keberangkatan Pagi", keterangan: "Tiba di Palembang ±12.00 WIB", status: "Tersedia" },
  { waktu: "08.00 WIB", jenis: "Keberangkatan Pagi II", keterangan: "Tiba di Palembang ±15.00 WIB", status: "Tersedia" },
  { waktu: "14.00 WIB", jenis: "Keberangkatan Sore", keterangan: "Tiba di Palembang ±21.00 WIB", status: "Tersedia" },
];

const faq = [
  {
    q: "Berapa lama perjalanan dari Curup ke Palembang?",
    a: "Durasi normal perjalanan Curup–Palembang dengan Toyota Hiace berkisar 6 hingga 7 jam, tergantung kondisi lalu lintas dan cuaca. Rute melewati Kepahiang dan Lahat sebelum masuk ke Kota Palembang.",
  },
  {
    q: "Apakah ada layanan jemput di rumah?",
    a: "Ya, kami melayani jemput penumpang di wilayah Curup dan Rejang Lebong tanpa biaya tambahan. Konfirmasikan alamat jemput saat pemesanan melalui WhatsApp.",
  },
  {
    q: "Bagaimana cara pesan tiket travel Curup–Palembang?",
    a: "Pemesanan dilakukan melalui WhatsApp ke nomor kami. Sampaikan tanggal keberangkatan, jumlah penumpang, dan titik jemput. Tiket dikonfirmasi dalam hitungan menit.",
  },
  {
    q: "Apakah harga tiket sudah termasuk bagasi?",
    a: "Harga tiket mencakup 1 koper atau 1 ransel berukuran normal. Barang bawaan berlebihan atau di luar standar ukuran dikenakan biaya tambahan sesuai kesepakatan.",
  },
  {
    q: "Armada apa yang digunakan untuk rute ini?",
    a: "Kami menggunakan Toyota Hiace dengan kapasitas 9–12 penumpang, dilengkapi AC, kursi nyaman, dan bagasi yang memadai untuk rute jarak jauh Curup–Palembang.",
  },
];

export default function TravelCurupPalembang() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Rute Populer
          </div>
          <h1>Travel Curup – Palembang</h1>
          <p className="hero-desc">
            Perjalanan dari jantung Bengkulu menuju ibu kota Sumatera Selatan. Armada
            Toyota Hiace ber-AC beroperasi setiap hari dengan jadwal pagi dan sore —
            agar Anda bisa memilih waktu yang paling sesuai.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/6281234567890" className="btn-primary">
              <Phone size={16} /> Pesan Tiket Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item"><Clock size={15} /> Durasi: 6–7 jam</div>
          <div className="info-item"><Users size={15} /> Kapasitas: 9–12 kursi</div>
          <div className="info-item"><Shield size={15} /> AC + Bagasi memadai</div>
          <div className="info-item"><MapPin size={15} /> Jemput di Curup & sekitarnya</div>
        </div>
      </div>

      <div className="main-content">
        {/* Route box */}
        <div className="route-box">
          <div className="route-path">
            <span className="route-city">Curup</span>
            <span className="route-arrow">⟶</span>
            <span className="route-city">Palembang</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginLeft: "auto" }}>Pulang–Pergi (PP) Tersedia</span>
          </div>
          <div className="route-stats">
            <div className="stat-item">
              <div className="stat-label">Durasi Tempuh</div>
              <div className="stat-value">6–7</div>
              <div className="stat-sub">jam perjalanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Harga Mulai</div>
              <div className="stat-value">Rp 150k</div>
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
              <div className="stat-sub">pagi & sore</div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <section className="section">
          <p className="section-label">Jadwal Keberangkatan</p>
          <h2>Pilih Waktu yang Pas untuk Anda</h2>
          <p style={{ marginBottom: "1rem" }}>
            Tersedia tiga slot keberangkatan harian dari Curup menuju Palembang. Penumpang
            dijemput di titik yang sudah disepakati sesuai jadwal.
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

        {/* Article content */}
        <section className="section prose">
          <p className="section-label">Tentang Rute Ini</p>
          <h2>Mengapa Banyak Warga Curup Memilih Travel ke Palembang?</h2>
          <p>
            Palembang adalah kota tujuan yang paling banyak dikunjungi oleh warga Curup dan
            Rejang Lebong — baik untuk keperluan bisnis, pendidikan, maupun silaturahmi
            keluarga. Jarak antara dua kota ini sekitar 250–270 km, dengan melewati jalur
            pegunungan Kepahiang dan dataran Lahat yang cukup menantang namun indah.
          </p>
          <h3>Keunggulan Menggunakan Armada Hiace untuk Perjalanan Ini</h3>
          <p>
            Toyota Hiace dipilih bukan tanpa alasan untuk rute Curup–Palembang. Dibandingkan
            minibus biasa, Hiace menawarkan suspensi yang lebih nyaman saat melewati tanjakan
            dan tikungan di jalur Kepahiang–Lahat. Kapasitas bagasinya pun lebih lapang,
            cocok bagi penumpang yang membawa oleh-oleh atau barang belanjaan.
          </p>
          <p>
            Interior armada kami dilengkapi kursi berbahan fabric yang mudah dibersihkan, AC
            yang dingin merata, dan tata cahaya yang cukup untuk penumpang yang ingin membaca
            selama perjalanan. Kebersihan dijaga setiap keberangkatan.
          </p>
          <h3>Rute yang Dilalui</h3>
          <p>
            Perjalanan dimulai dari Kota Curup, melewati Kepahiang, kemudian turun ke Lahat
            (Sumatera Selatan), lanjut ke Prabumulih, dan masuk ke Kota Palembang. Titik
            antar akhir di Palembang dapat disesuaikan dengan kebutuhan penumpang — baik
            di kawasan Ilir maupun Seberang Ulu.
          </p>
          <h3>Barang Apa Saja yang Boleh Dibawa?</h3>
          <p>
            Setiap penumpang diperkenankan membawa 1 tas besar atau koper standar tanpa
            biaya tambahan. Untuk bawaan ekstra seperti kardus atau perabot kecil,
            harap koordinasikan terlebih dahulu agar dapat dicarikan solusi yang tepat.
          </p>

          {/* Keunggulan list */}
          <h3>Apa yang Termasuk dalam Harga Tiket?</h3>
          <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
            {[
              "Kursi ber-AC sepanjang perjalanan",
              "Jemput di area Curup & Rejang Lebong",
              "Antar ke titik tujuan di Palembang",
              "Bagasi standar 1 koper/tas ransel",
              "Sopir berpengalaman rute Bengkulu–Sumsel",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle size={16} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <div className="testimonials">
          <p className="section-label">Kata Penumpang Kami</p>
          <h2>Pengalaman Nyata dari Pelanggan Setia</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Sering pulang kampung dari Palembang ke Curup, dan Travel Curup selalu
                jadi pilihan pertama. Tepat waktu, mobilnya bersih, sopirnya ramah."
              </p>
              <div className="testimonial-author">— Rina S., mahasiswi asal Curup di Palembang</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Saya rutin ke Palembang untuk urusan dagang. Hiace-nya nyaman buat
                perjalanan panjang, AC-nya dingin, dan sampai tepat sesuai estimasi."
              </p>
              <div className="testimonial-author">— Pak Hendra, pedagang dari Rejang Lebong</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★☆</div>
              <p className="testimonial-text">
                "Pesan tiket lewat WhatsApp mudah banget. Konfirmasi cepat, dan sopirnya
                jemput tepat di depan rumah saya di Curup Kota."
              </p>
              <div className="testimonial-author">— Ibu Dewi, ibu rumah tangga</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="section">
          <p className="section-label">Pertanyaan Umum</p>
          <h2>FAQ – Travel Curup ke Palembang</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <div className="faq-item" key={item.q}>
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <h2>Pesan Tiket Travel Curup–Palembang</h2>
          <p>
            Konfirmasi pemesanan lewat WhatsApp. Sampaikan tanggal, jumlah penumpang, dan
            alamat jemput — kami siapkan kursi untuk Anda.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/6281234567890?text=Halo%2C+saya+ingin+pesan+tiket+travel+Curup-Palembang" className="btn-wa">
              💬 Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": "Travel Curup ke Palembang",
            "description":
              "Layanan travel antar kota rute Curup–Palembang dengan armada Toyota Hiace ber-AC. Berangkat setiap hari.",
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
