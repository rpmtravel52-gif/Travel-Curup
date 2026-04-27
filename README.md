# Travel Curup – Website

Website resmi layanan travel **Travel Curup** berbasis di Curup, Bengkulu.

## Stack

- **Framework**: Next.js 15.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS (globals.css, tanpa Tailwind)
- **Hosting**: Vercel
- **Domain**: travelcurup.biz.id

## Halaman

| Route | Deskripsi |
|---|---|
| `/` | Homepage |
| `/travel-curup-palembang` | Rute Curup–Palembang (Hiace) |
| `/travel-lebong-palembang` | Rute Lebong–Palembang (Hiace) |
| `/travel-curup-lebong` | Rute Curup–Lebong (Innova) |
| `/sewa-hiace-curup` | Sewa/charter Hiace harian |

## Setup & Deploy

### 1. Clone & Install
```bash
git clone https://github.com/USERNAME/travel-curup.git
cd travel-curup
npm install
```

### 2. Jalankan Lokal
```bash
npm run dev
# buka http://localhost:3000
```

### 3. Deploy ke Vercel
1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import Repository
3. Pilih repo `travel-curup`
4. Build Settings sudah otomatis terdeteksi (Next.js)
5. Klik **Deploy**

### 4. Hubungkan Domain
Di Vercel → Settings → Domains → tambahkan `travelcurup.biz.id`
Kemudian update DNS domain Anda sesuai instruksi Vercel.

## Kustomisasi Penting

Sebelum deploy, **ganti** nomor WhatsApp di file berikut:
- `components/Navbar.tsx` → `wa.me/6281234567890`
- `app/page.tsx` → link WhatsApp
- `app/travel-curup-palembang/page.tsx` → link WhatsApp
- `app/travel-lebong-palembang/page.tsx` → link WhatsApp
- `app/travel-curup-lebong/page.tsx` → link WhatsApp
- `app/sewa-hiace-curup/page.tsx` → link WhatsApp

Ganti `6281234567890` dengan nomor WhatsApp bisnis Anda (format: 62 + nomor tanpa 0).

## SEO

Setiap halaman memiliki:
- `metadata` (title, description, keywords, canonical, OG)
- JSON-LD Structured Data (Schema.org)
- `sitemap.ts` → otomatis generate `/sitemap.xml`
- `robots.ts` → otomatis generate `/robots.txt`
