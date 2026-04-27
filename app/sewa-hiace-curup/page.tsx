import type { Metadata } from "next";
import { MapPin, Clock, Users, Shield, CheckCircle, Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sewa Hiace Curup – Per Hari & Charter Wisata se-Bengkulu",
  description:
    "Sewa Toyota Hiace di Curup untuk wisata, perjalanan keluarga, acara perusahaan, atau rombongan. Harga terjangkau, armada terawat, sopir berpengalaman. Hubungi kami sekarang.",
  keywords: [
    "sewa hiace curup",
    "rental hiace curup",
    "sewa hiace bengkulu",
    "charter hiace curup",
    "sewa mobil hiace curup",
  ],
  alternates: { canonical: "https://travelcurup.biz.id/sewa-hiace-curup" },
  openGraph: {
    title: "Sewa Hiace Curup – Charter Harian & Wisata Bengkulu",
    description:
      "Toyota Hiace siap disewa harian dari Curup. Cocok untuk wisata rombongan, acara keluarga, atau kebutuhan korporat. Hubungi kami untuk penawaran terbaik.",
    url: "https://travelcurup.biz.id/sewa-hiace-curup",
  },
};

const packages = [
  {
    nama: "Charter Harian (8 Jam)",
    deskripsi: "Ideal untuk wisata lokal, survey lapangan, atau acara keluarga dalam 1 hari.",
    termasuk: ["Bahan bakar dalam area lokal", "Sopir berpengalaman", "AC sepanjang perjalanan"],
    catatan: "Maksimum 200 km per hari",
  },
  {
    nama: "Charter Antar Kota",
    deskripsi: "Cocok untuk perjalanan ke luar Bengkulu atau tujuan jarak jauh secara rombongan.",
    termasuk: ["Sopir yang hafal rute", "Fleksibel titik pemberhentian", "Bisa multi-hari"],
    catatan: "Biaya bahan bakar sesuai jarak",
  },
  {
    nama: "Wisata Bengkulu",
    deskripsi: "Paket wisata dengan destinasi populer seperti Pantai Panjang, Bukit Kaba, dan sekitarnya.",
    termasuk: ["Itinerary fleksibel", "Sopir merangkap pemandu lokal", "Jemput-antar dari Curup"],
    catatan: "Tiket masuk wisata tidak termasuk",
  },
];

const keunggulan = [
  {
    icon: <Users size={22} />,
    title: "Kapasitas Ideal Rombongan",
    desc: "Hiace menampung 9–12 penumpang, cocok untuk keluarga besar, tim kantor, atau kelompok wisata.",
  },
  {
    icon: <Shield size={22} />,
    title: "Armada Berumur Muda",
    desc: "Kendaraan kami terawat secara berkala. Anda tidak akan menghadapi kendala teknis di jalan.",
  },
  {
    icon: <Star size={22} />,
    title: "Sopir Paham Wilayah",
    desc: "Pengemudi kami memahami seluk-beluk jalan di Bengkulu, Rejang Lebong, dan rute ke Sumatera Selatan.",
  },
  {
    icon: <Clock size={22} />,
    title: "Waktu Sewa Fleksibel",
    desc: "Mulai dari setengah hari hingga beberapa hari penuh, sesuaikan dengan kebutuhan perjalanan Anda.",
  },
];

const faq = [
  {
    q: "Berapa biaya sewa Hiace per hari di Curup?",
    a: "Biaya sewa Hiace di Curup bervariasi tergantung durasi dan rute yang dituju. Untuk harga terkini dan penawaran sesuai kebutuhan, silakan hubungi kami langsung via WhatsApp.",
  },
  {
    q: "Apakah tersedia sopir dalam paket sewa?",
    a: "Ya, semua paket sewa sudah termasuk sopir berpengalaman. Kami tidak menyediakan sistem lepas kunci karena armada kami adalah kendaraan komersial yang dioperasikan secara profesional.",
  },
  {
    q: "Apa saja destinasi wisata populer dari Curup yang bisa dikunjungi?",
    a: "Beberapa destinasi favorit dari Curup antara lain Danau Mas Harun Bastari, Air Terjun Kepala Curup, Bukit Kaba, Pantai Panjang Bengkulu, dan Danau Tes di Lebong. Semuanya bisa dijangkau dengan Hiace.",
  },
  {
    q: "Bisakah Hiace disewa untuk perjalanan dari Curup ke luar provinsi?",
    a: "Bisa. Kami melayani charter ke luar Bengkulu, termasuk ke Palembang, Lampung, dan kota-kota lain di Sumatera. Biaya disesuaikan berdasarkan jarak dan durasi perjalanan.",
  },
  {
    q: "Berapa kapasitas penumpang Toyota Hiace?",
    a: "Toyota Hiace yang kami operasikan berkapasitas 9 hingga 12 penumpang, tergantung konfigurasi kursi. Kapasitas ini ideal untuk perjalanan rombongan keluarga atau kelompok kecil.",
  },
  {
    q: "Apakah bisa memesan Hiace untuk hari yang sama?",
    a: "Pemesanan mendadak bisa dilayani jika unit sedang tersedia. Untuk kepastian ketersediaan, kami menyarankan pemesanan minimal 1 hari sebelum keberangkatan.",
  },
];

export default function SewaHiaceCurup() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Berbasis di Curup, Bengkulu
          </div>
          <h1>Sewa Hiace Curup – Charter Fleksibel untuk Rombongan</h1>
          <p className="hero-desc">
            Butuh kendaraan kapasitas besar untuk wisata keluarga, perjalanan korporat,
            atau penjemputan rombongan? Armada Toyota Hiace kami siap mengangkut 9–12
            penumpang ke mana saja dari Curup, dengan sopir berpengalaman dan harga yang
            transparan.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/6281270826212" className="btn-primary">
              <Phone size={16} /> Tanya Harga Sekarang
            </a>
            <a href="https://wa.me/6281270826212" className="btn-outline">
              💬 Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item"><Users size={15} /> 9–12 penumpang</div>
          <div className="info-item"><Clock size={15} /> Sewa harian / multi-hari</div>
          <div className="info-item"><Shield size={15} /> Sudah termasuk sopir</div>
          <div className="info-item"><MapPin size={15} /> Jangkauan seluruh Bengkulu & antar kota</div>
        </div>
      </div>

      <div className="main-content">
        {/* Paket sewa */}
        <section className="section">
          <p className="section-label">Paket Sewa</p>
          <h2>Pilih Sesuai Kebutuhan Perjalanan Anda</h2>
          <div className="cards-grid">
            {packages.map((p) => (
              <div className="card" key={p.nama}>
                <h3 style={{ color: "var(--bark)", marginBottom: "0.5rem" }}>{p.nama}</h3>
                <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>{p.deskripsi}</p>
                <div style={{ display: "grid", gap: "0.35rem", marginBottom: "0.75rem" }}>
                  {p.termasuk.map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle size={14} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--muted)", fontStyle: "italic", borderTop: "1px solid var(--parchment)", paddingTop: "0.65rem" }}>
                  {p.catatan}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keunggulan */}
        <section className="section">
          <p className="section-label">Keunggulan Armada Kami</p>
          <h2>Mengapa Sewa Hiace di Travel Curup?</h2>
          <div className="cards-grid">
            {keunggulan.map((k) => (
              <div className="card" key={k.title}>
                <div className="card-icon">{k.icon}</div>
                <h3>{k.title}</h3>
                <p>{k.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Artikel */}
        <section className="section prose">
          <p className="section-label">Info Armada</p>
          <h2>Toyota Hiace: Pilihan Tepat untuk Rombongan di Bengkulu</h2>
          <p>
            Toyota Hiace adalah kendaraan van komersial yang sudah terbukti andal di jalur-jalur
            Sumatera. Dengan ground clearance yang cukup tinggi dan mesin diesel bertenaga,
            Hiace mampu melewati jalan pegunungan Bengkulu dengan stabil — baik jalur
            Curup–Kepahiang maupun rute lintas provinsi.
          </p>
          <h3>Untuk Acara Apa Saja Hiace Ini Bisa Disewa?</h3>
          <p>
            Armada Hiace kami sering digunakan untuk berbagai kebutuhan: kunjungan wisata
            keluarga ke Bukit Kaba atau Pantai Panjang, antar-jemput tamu undangan dalam acara
            pernikahan, perjalanan dinas instansi atau perusahaan, serta charter ke luar kota
            seperti Palembang atau Lampung.
          </p>
          <h3>Apa yang Membedakan Charter Hiace dari Sekadar Naik Travel?</h3>
          <p>
            Ketika Anda menyewa Hiace secara charter, seluruh kendaraan menjadi milik rombongan
            Anda. Tidak perlu berbagi kursi dengan penumpang lain, tidak ada jadwal yang
            mengikat, dan pemberhentian bisa disesuaikan dengan keinginan. Ini memberikan
            kebebasan penuh atas perjalanan Anda.
          </p>
          <h3>Tips Menyewa Hiace untuk Wisata di Bengkulu</h3>
          <p>
            Untuk wisata sehari di sekitar Curup, sebaiknya Anda berangkat pagi agar bisa
            menikmati lebih banyak destinasi sebelum sore. Informasikan daftar tempat yang
            ingin dikunjungi saat pemesanan agar sopir dapat membantu merencanakan urutan
            kunjungan yang efisien.
          </p>
        </section>

        {/* Testimonial */}
        <div className="testimonials">
          <p className="section-label">Pelanggan Charter Kami</p>
          <h2>Dipercaya untuk Berbagai Kebutuhan Perjalanan</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Sewa Hiace untuk wisata keluarga ke Pantai Panjang dan Benteng Marlborough.
                Sopirnya sabar, mobilnya bersih. Anak-anak sangat menikmati perjalanannya."
              </p>
              <div className="testimonial-author">— Pak Fauzi, kepala keluarga dari Curup</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Kami pakai Hiace ini untuk rombongan karyawan ke Bukit Kaba. Perjalanan
                lancar, tidak ada kendala. Pasti akan kami gunakan lagi untuk acara kantor
                berikutnya."
              </p>
              <div className="testimonial-author">— Humas PT XYZ, Rejang Lebong</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Charter ke Palembang untuk keluarga besar. Semua 11 orang masuk dengan
                nyaman. Harganya lebih hemat kalau dibanding naik travel biasa per orang."
              </p>
              <div className="testimonial-author">— Ibu Marlina, dari Curup Tengah</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="section">
          <p className="section-label">Pertanyaan Umum</p>
          <h2>FAQ – Sewa Hiace di Curup</h2>
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
          <h2>Siap Charter Hiace dari Curup?</h2>
          <p>
            Hubungi kami via WhatsApp sekarang. Ceritakan kebutuhan perjalanan Anda —
            tujuan, jumlah penumpang, dan tanggal — dan kami akan berikan penawaran terbaik.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/6281270826212?text=Halo%2C+saya+ingin+menanyakan+sewa+Hiace+dari+Curup" className="btn-wa">
              💬 Minta Penawaran via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Travel Curup – Sewa Hiace",
            "description": "Sewa Toyota Hiace harian dan charter di Curup, Bengkulu. Cocok untuk wisata rombongan dan perjalanan antar kota.",
            "url": "https://travelcurup.biz.id/sewa-hiace-curup",
            "telephone": "+6281270826212",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Curup",
              "addressRegion": "Bengkulu",
              "addressCountry": "ID",
            },
            "areaServed": ["Bengkulu", "Rejang Lebong", "Lebong", "Palembang"],
          }),
        }}
      />
    </main>
  );
}
