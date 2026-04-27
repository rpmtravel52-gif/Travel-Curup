import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://travelcurup.biz.id"),
  title: {
    default: "Travel Curup – Armada Nyaman Bengkulu, Palembang, Lebong",
    template: "%s | Travel Curup",
  },
  description:
    "Travel Curup melayani rute Curup–Palembang, Lebong–Palembang, dan Curup–Lebong dengan armada Toyota Hiace dan Innova. Pesan tiket sekarang, berangkat tepat waktu.",
  keywords: ["travel curup", "travel bengkulu palembang", "travel lebong palembang", "sewa hiace curup", "travel curup lebong"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Travel Curup",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
