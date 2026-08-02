# 🎨 DESIGN.md — Modern Crowdfund Design System & Guidelines

> **Project**: PeduliBersama — Platform Crowdfund & Donasi Publik Modern  
> **Aesthetic Theme**: Modern Minimalist Crowdfund (inspired by Stripe, Linear, Vercel, Apple Configurator)

---

## 🎨 1. OFFICIAL COLOR PALETTE SYSTEM

Setiap komponen WAJIB menggunakan palet warna 5-token resmi di bawah ini. Dilarang menggunakan warna lain di luar palet ini.

| Token Role | Hex Code | Visual Name | Tailwind Usage | Exact Description & Application |
|---|---|---|---|---|
| **Primary Accent** | `#6FC052` | Vibrant Leaf | `bg-[#6FC052]`, `text-[#6FC052]`, `border-[#6FC052]` | Highlight donasi, progress bar accent, badge aktif, kursor ring, & secondary button |
| **Deep Primary** | `#0E6A36` | Forest Deep | `bg-[#0E6A36]`, `text-[#0E6A36]`, `border-[#0E6A36]` | Background tombol utama (`hover:bg-[#0B542B]`), brand accent, badge border, & text link penting |
| **Canvas Background** | `#F1F0F1` | Soft Mist White | `bg-[#F1F0F1]` | Surface background utama website (dingin, bersih, modern, non-glare) |
| **Neutral Slate / Border** | `#B5B3A9` | Stone Slate | `border-[#B5B3A9]/30`, `text-[#B5B3A9]` | Border halus (`border border-[#B5B3A9]/30`), divider, subtitle text |
| **Midnight Dark Neutral** | `#0D150F` | Midnight Shade | `text-[#0D150F]`, `bg-[#0D150F]` | Text H1-H3 (pengganti hitam legam agar smooth) & dark section accent |
| **Card Surface** | `#FFFFFF` | Pure White | `bg-white` | Elevated card background dengan border halus & subtle shadow |

---

## 🔤 2. TYPOGRAPHY SYSTEM (STRICT SANS & MONO ONLY)

### A. Font Families
- **Primary Font**: `font-sans` (`Plus Jakarta Sans` / `Inter`)  
  Gunakan `tracking-tight` (-0.03em) untuk headline H1 & H2. Dilarang keras menggunakan font serif.
- **Data / Metrics Font**: `font-mono` (`JetBrains Mono` / `Space Grotesk`)  
  **WAJIB** digunakan untuk nominal rupiah (`Rp 150.000`), persentase (`91%`), statistik, timer countdown (`⏳ 12 HARI LAGI`), timestamp, dan kode audit (`TRX-9942A`).

### B. Type Scale
| Level | Font Family | Size | Weight | Color Token |
|---|---|---|---|---|
| **H1 Display** | `font-sans` | `4xl` (36px) s/d `6xl` (60px) | `font-extrabold` | `#0D150F` & aksen `#0E6A36` |
| **H2 Section** | `font-sans` | `3xl` (30px) s/d `4xl` (36px) | `font-extrabold` | `#0D150F` |
| **H3 Card Title** | `font-sans` | `lg` (18px) s/d `xl` (20px) | `font-bold` | `#0D150F` |
| **Body Large** | `font-sans` | `base` (16px) s/d `lg` (18px) | `font-medium` | `#0D150F`/75 |
| **Body Text** | `font-sans` | `xs` (12px) s/d `sm` (14px) | `font-medium` | `#0D150F`/70 |
| **Data / Numbers** | `font-mono` | `sm` (14px) s/d `3xl` (30px) | `font-black` | `#0D150F` / `#0E6A36` |
| **Badges / Captions**| `font-mono` | `[10px]` s/d `xs` (12px) | `font-bold` | `#0E6A36` |

---

## 🧱 3. EXACT COMPONENT SPECIFICATIONS

### A. Cards
```html
<!-- Mandatory Card Structure -->
<div class="bg-white p-5 sm:p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]">
  <!-- Card Content -->
</div>
```

### B. Buttons
- **Primary Button**:
  ```html
  <button class="bg-[#0E6A36] hover:bg-[#0B542B] text-white rounded-xl font-bold text-sm px-7 py-3.5 shadow-sm transition-all">
    Salurkan Donasi
  </button>
  ```
- **Secondary Button**:
  ```html
  <button class="bg-[#6FC052] hover:bg-[#61ac46] text-[#0D150F] rounded-xl font-bold text-xs py-3.5 px-4 uppercase tracking-wider transition-all">
    Donasi Instan
  </button>
  ```
- **Outline Button**:
  ```html
  <button class="bg-white hover:bg-white/80 text-[#0D150F] rounded-xl border border-[#B5B3A9]/30 font-bold text-sm px-6 py-3.5 transition-all">
    Audit Kas Terbuka
  </button>
  ```

### C. Pill Badges
```html
<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1.5 font-bold">
  VERIFIED CAMPAIGN • 100% TRANSPARAN
</span>
```

### D. Progress Bars
```html
<!-- Track -->
<div class="w-full h-2.5 bg-[#F1F0F1] rounded-full overflow-hidden p-0.5 border border-[#B5B3A9]/30">
  <!-- Fill -->
  <div class="h-full bg-[#0E6A36] rounded-full transition-all duration-700" style="width: 75%"></div>
</div>
```

---

## 🛑 4. ABSOLUTE PROHIBITED ELEMENTS (STRICT RULES)

1. ❌ **DILARANG** menggunakan font serif (`font-serif`, Fraunces, Georgia, atau Times).
2. ❌ **DILARANG** menggunakan background warna cokelat parchment (`#FDFBF7`) atau craft paper.
3. ❌ **DILARANG** menggunakan background bintik/dot pattern (`radial-gradient`).
4. ❌ **DILARANG** menggunakan efek ticket-stub gerigi tiket / garis putus-putus koran.
5. ❌ **DILARANG** menggunakan warna violet, purple, pink, atau neon glow AI pasaran.
6. ❌ **DILARANG** menggunakan `shadow-2xl` tebal atau `backdrop-blur-md` yang berlebihan.
7. ❌ **DILARANG** menggunakan radius tombol di atas `rounded-xl` (`rounded-3xl` / `rounded-2xl` pada tombol dilarang).

---

## 📐 5. LAYOUT & SPACING SYSTEM

- **Canvas Container**: `bg-[#F1F0F1]`
- **Max Width Grid**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-12 lg:py-20`
- **Grid Gaps**: `gap-6` (cards) atau `gap-10 lg:gap-12` (hero 2-column)
