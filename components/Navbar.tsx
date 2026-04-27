"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu } from "lucide-react";

const links = [
  { href: "/travel-curup-palembang", label: "Curup–Palembang" },
  { href: "/travel-lebong-palembang", label: "Lebong–Palembang" },
  { href: "/travel-curup-lebong", label: "Curup–Lebong" },
  { href: "/sewa-hiace-curup", label: "Sewa Hiace" },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo">
          <MapPin size={20} />
          Travel<span>Curup</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={path === l.href ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/6281270826212"
              className="nav-links a nav-cta"
              style={{
                display: "inline-block",
                background: "var(--terracotta)",
                color: "var(--white)",
                padding: "0.45rem 1.1rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
        <button className="nav-toggle" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </nav>
  );
}
