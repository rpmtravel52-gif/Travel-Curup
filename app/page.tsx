import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Shield, Star, Phone, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Curup – Armada Hiace & Innova Siap Antar Anda",
  description:
    "Travel Curup menyediakan layanan transportasi antar kota rute Curup–Palembang, Lebong–Palembang, dan Curup–Lebong. Armada bersih, sopir berpengalaman, harga bersahabat.",
};

const routes = [
  {
    href: "/travel-curup-palembang",
    from: "Curup",
    to: "Palembang",
    duration: "6–7 jam",
    armada: "Toyota Hiace",
    price: "Rp 150.000",
  },
  {
    href: "/travel-lebong-palembang",
    from: "Lebong",
    to: "Palembang",
    duration: "7–8 jam",
    armada: "Toyota Hiace",
    price: "Rp 170.000",
  },
  {
    href: "/travel-curup-lebong",
    from: "Curup",
    to: "Lebong",
    duration: "1,5–2 jam",
    armada: "Toyota Innova",
    price: "Rp 60.000",
  },
  {
    href: "/sewa-hiace-curup",
    from: "Curup",
    to: "Tujuan Anda",
    duration: "Fleksibel",
    armada: "Toyota Hiace",
    price: "Hubungi Kami",
  },
];

const features = [
  {
    icon: <Shield size={22} />,
    title: "Armada Terawat",
    desc: "Setiap kendaraan menjalani pengecekan rutin sebelum beroperasi. Kebersihan interior dijaga setiap keberangkatan.",
  },
  {
    icon: <Clock size={22} />,
    title: "Tepat Waktu",
    desc: "Kami menghormati waktu Anda. Keberangkatan sesuai jadwal yang sudah disepakati, tanpa menunggu lama di agen.",
  },
  {
    icon: <Star size={22} />,
    title: "Sopir Berpengalaman",
    desc: "Pengemudi kami hafal jalur Bengkulu–Sumsel dan terbiasa menghadapi kondisi jalan pegunungan dengan aman.",
  },
  {
    icon: <Phone size={22} />,
    title: "Pesan Lewat WhatsApp",
    desc: "Konfirmasi tiket cukup lewat chat. Tidak perlu datang ke kantor, cukup hubungi dan tempat duduk langsung kami simpankan.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Berbasis di Curup, Bengkulu
          </div>
          <h1>Perjalanan Nyaman dari Curup ke Mana Saja</h1>
          <p className="hero-desc">
            Kami mengantarkan Anda dari Curup dan Lebong menuju Palembang — dan
            sebaliknya — dengan armada bersih, sopir berpengalaman, dan harga yang
            tidak menguras kantong.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/6281234567890" className="btn-primary">
              <Phone size={16} /> Pesan via WhatsApp
            </a>
            <Link href="/travel-curup-palembang" className="btn-outline">
              Lihat Rute Tersedia <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item">
            <Clock size={15} /> Beroperasi 04.00 – 22.00 WIB setiap hari
          </div>
          <div className="info-item">
            <MapPin size={15} /> Jemput di lokasi Anda (area Curup & Lebong)
          </div>
          <div className="info-item">
            <Shield size={15} /> Armada ber-AC & diasuransikan
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Routes */}
        <section className="section">
          <p className="section-label">Rute Tersedia</p>
          <h2>Pilih Jurusan Perjalanan Anda</h2>
          <div className="cards-grid">
            {routes.map((r) => (
              <Link href={r.href} key={r.href} className="card" style={{ display: "block" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif, 'Playfair Display', serif)", fontWeight: 700, fontSize: "1.1rem", color: "var(--bark)" }}>
                      {r.from} → {r.to}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.2rem" }}>{r.armada}</div>
                  </div>
                  <ChevronRight size={18} style={{ color: "var(--terracotta)", marginTop: "0.2rem" }} />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", fontWeight: 600 }}>Durasi</div>
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: "0.95rem" }}>{r.duration}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", fontWeight: 600 }}>Mulai dari</div>
                    <div style={{ fontWeight: 700, color: "var(--terracotta)", fontSize: "0.95rem" }}>{r.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <p className="section-label">Mengapa Travel Curup?</p>
          <h2>Standar Layanan yang Kami Jaga</h2>
          <div className="cards-grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <h2>Siap Berangkat? Pesan Tiket Sekarang</h2>
          <p>Kami siap melayani Anda setiap hari. Konfirmasi melalui WhatsApp, mudah dan cepat.</p>
          <div className="cta-actions">
            <a href="https://wa.me/6281234567890" className="btn-wa">
              💬 Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
