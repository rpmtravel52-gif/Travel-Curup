import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ color: "var(--sand)" }}>
              <MapPin size={18} />
              Travel<span style={{ color: "var(--terracotta)" }}>Curup</span>
            </div>
            <p>
              Armada travel terpercaya dari Curup, Bengkulu. Melayani perjalanan
              antar kota dengan nyaman, aman, dan tepat waktu sejak bertahun-tahun.
            </p>
          </div>
          <div>
            <h4>Rute Utama</h4>
            <ul className="footer-links">
              <li><Link href="/travel-curup-palembang">Travel Curup – Palembang</Link></li>
              <li><Link href="/travel-lebong-palembang">Travel Lebong – Palembang</Link></li>
              <li><Link href="/travel-curup-lebong">Travel Curup – Lebong</Link></li>
              <li><Link href="/sewa-hiace-curup">Sewa Hiace Curup</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontak & Operasional</h4>
            <ul className="footer-links">
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} />
                <a href="https://wa.me/6281270826212">+62 812-7082-6212</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Clock size={14} />
                <span>Setiap hari, 04.00 – 22.00 WIB</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={14} />
                <span>Kota Curup, Bengkulu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Travel Curup. Semua hak dilindungi.</span>
          <span>travelcurup.biz.id</span>
        </div>
      </div>
    </footer>
  );
}
