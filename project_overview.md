# 🌱 Gambaran Besar Proyek `app-charity`

Web aplikasi donasi/kebaikan publik modern berbasis **Svelte 5 + SvelteKit 2 + TailwindCSS v4 + Vite v7** yang dirancang dengan **100% prinsip transparansi, interaktif, dan visual playful non-AI generic**.

---

## 📌 Ringkasan Eksekutif & Identitas Visual

Proyek ini menghadirkan antarmuka platform penggalangan dana yang hangat, responsif, dan kaya fitur interaktif:

- **Typography**: Google Fonts `Outfit` (Headings) + `Plus Jakarta Sans` (Body).
- **Palet Warna**: Emerald Hope (`#059669`), Sunburst Amber (`#F59E0B`), dan Warm Coral (`#F43F5E`).
- **Prinsip UI/UX**: Bento grid layout, animated progress bar, glassmorphism cards, live donor ticker, dan kalkulator dampak langsung.

---

## 🛠️ Komponen & Halaman Yang Berhasil Di-Makeover

```
d:\development\app-charity/
├── src/
│   ├── app.html                       # Google fonts (Outfit & Plus Jakarta Sans) + Meta tags
│   ├── routes/
│   │   ├── layout.css                 # Design tokens Tailwind v4 & animations
│   │   ├── +layout.svelte             # Root layout (Navbar & Footer wrapper)
│   │   ├── +page.svelte               # Homepage (Hero, Bento Grid, Impact Calc, Audit)
│   │   ├── campaigns/
│   │   │   ├── +page.svelte           # Eksplorasi Kampanye (Filter, Search, Sort)
│   │   │   └── [id]/+page.svelte      # Detail Kampanye & Sticky Donation Sidebar
│   │   ├── login/+page.svelte         # Auth Login
│   │   ├── register/+page.svelte      # Auth Register (Role: Donatur / Campaigner)
│   │   └── dashboard/+page.svelte     # Dashboard Donatur & Lencana Pencapaian
│   └── lib/
│       ├── components/
│       │   ├── Navbar.svelte          # Navigation Bar + Mobile Drawer
│       │   ├── Hero.svelte            # Hero Section + Quick 1-Click Donation
│       │   ├── CharityCard.svelte     # Bento Campaign Card + Animated Progress
│       │   ├── ImpactCalculator.svelte# Interactive Impact Simulator
│       │   ├── LiveDonationFeed.svelte# Live Donor Activity Ticker
│       │   └── Footer.svelte          # Footer + Transparency Counters
│       ├── data/
│       │   └── campaigns.js           # Mock data kampanye & kategori
│       └── server/db/
│           └── schema.js              # Database Schema Drizzle ORM
```

---

## ✨ Fitur-Fitur Unggulan

1. **⚡ Donasi Kilat 1-Klik di Hero Section**  
   Pengguna dapat memilih preset nominal langsung di halaman depan dan melakukan aksi bantuan secara instan.

2. **✨ Interactive Impact Calculator (`ImpactCalculator.svelte`)**  
   Pengguna memilih nominal donasi & sektor bantuan (Pangan, Sekolah, Medis, Air Bersih), lalu melihat konversi dampak nyata secara real-time (contoh: *Rp 100.000 = 6 Porsi Makanan Bergizi*).

3. **💚 Live Donor Activity Feed (`LiveDonationFeed.svelte`)**  
   Toast ticker yang menampilkan donatur terbaru untuk membangun kehangatan komunitas & *social proof*.

4. **🍱 Bento Campaign Cards (`CharityCard.svelte`)**  
   Kartu kampanye dengan indikator progress bar animasi, sisa hari, lokasi, dan badge urgensi (*Mendesak*).

5. **🔍 Filter & Search Kampanye**  
   Kemampuan mencari kampanye berdasarkan kata kunci, lokasi, filter pills kategori, dan pengurutan (*Urgent/Persentase*).

6. **🏆 Dashboard Donatur & Lencana**  
   Halaman khusus bagi donatur untuk memantau total dana yang telah disalurkan dan lencana penghargaan kebaikan.
