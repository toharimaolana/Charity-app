# 🤖 AGENTS.md — AI Agent Execution Rules & Guidelines

> **Project**: PeduliBersama — Modern Crowdfund & Public Ledger Platform  
> **Tech Stack**: Svelte 5 (Runes), SvelteKit 2, TailwindCSS v4, Vite, dan motion.  
> **Repository Path**: `d:\development\app-charity`

---

## 📌 1. EXECUTIVE MISSION

AI Agent bertindak sebagai **Senior Creative Developer & UI/UX Specialist** (standar Vercel, Linear, & Stripe). Setiap kode yang dibuat atau diubah WAJIB mematuhi panduan di dokumen ini dan [DESIGN.md](file:///d:/development/app-charity/DESIGN.md).

Tujuan utama adalah membangun website crowdfund publik yang **modern, minimalist, akuntabel, dan 100% bebas dari kesan AI-generic / template murah**.

---

## ⚙️ 2. TECHNICAL STACK & CONVENTIONS

### A. Svelte 5 Standards (Runes Mandatory)
1. **State Management**: WAJIB menggunakan Svelte 5 Runes:
   - State reaktif: `$state(initialValue)`
   - Computed/Derived values: `$derived(expression)`
   - Props declaration: `let { propName } = $props()`
   - Side effects: `$effect(() => { ... })`
2. **Syntax Control Flow**:
   - Conditionals: `{#if condition}...{:else}...{/if}`
   - Loops: `{#each list as item (item.id)}...{/each}`
3. **Event Handlers**: Gunakan atribut lower-case bawaan HTML/Svelte 5 (`onclick={handleClick}`, `onsubmit={handleSubmit}`).

### B. TailwindCSS v4 Rules
- Gunakan utility class Tailwind yang merujuk pada sistem variabel CSS di [layout.css](file:///d:/development/app-charity/src/routes/layout.css).
- Gunakan arbitrary values presisi (misal `bg-[#0E6A36]`, `border-[#B5B3A9]/30`) sesuai token di `DESIGN.md`.

---

## 🎯 3. AI AGENT DO'S AND DON'TS

### ✅ DO'S (WAJIB DILAKUKAN)
1. **Patuhi Design System**: Selalu cek [DESIGN.md](file:///d:/development/app-charity/DESIGN.md) sebelum mengubah atau membuat komponen UI baru.
2. **Gunakan Font Presisi**:
   - `font-sans` (Plus Jakarta Sans/Inter) untuk headline & body text.
   - `font-mono` (JetBrains Mono) untuk angka nominal rupiah, persentase progress, timestamp, countdown, & kode audit.
3. **Komponen Responsif**: Pastikan setiap UI dapat tampil rapi di viewport mobile (375px), tablet (768px), & desktop (1024px+).
4. **Verifikasi Build**: Setelah melakukan perubahan signifikan, jalankan perintah verifikasi `npm run build` untuk memastikan tidak ada kesalahan sintaks Svelte.

---

### ❌ DON'TS (DILARANG KERAS)
1. 🛑 **DILARANG** menggunakan font serif / Fraunces / gaya majalah/koran lama.
2. 🛑 **DILARANG** menggunakan background warna cokelat parchment (`#FDFBF7`) atau craft paper.
3. 🛑 **DILARANG** menggunakan efek ticket-stub gerigi tiket / garis putus-putus koran.
4. 🛑 **DILARANG** menggunakan warna violet, purple, pink, atau neon glow AI pasaran.
5. 🛑 **DILARANG** menggunakan `shadow-2xl` tebal atau `backdrop-blur-md` yang berlebihan.
6. 🛑 **DILARANG** menggunakan radius tombol di atas `rounded-xl` (tombol WAJIB `rounded-xl` atau `rounded-lg`).

---

## 📋 4. WORKFLOW PEMBANGUNAN KOMPONEN BARU

Setiap kali menambah/mengubah komponen:
1. **Baca Token Design**: Konsultasikan palet warna & typography dari `DESIGN.md`.
2. **Impor Data Terstruktur**: Gunakan data dari `src/lib/data/campaigns.js`.
3. **Terapkan Card & Button Specs**:
   - Card container: `bg-white p-5 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]`
   - Primary Button: `bg-[#0E6A36] hover:bg-[#0B542B] text-white rounded-xl font-bold`
   - Secondary Button: `bg-[#6FC052] hover:bg-[#61ac46] text-[#0D150F] rounded-xl font-bold`
   - Accent Badge: `bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3 py-1 font-bold`

---

## 🛠️ 5. VERIFIKASI SEBELUM COMMIT

```bash
# Cek build error
npm run build

# Cek dev server lokal
npm run dev -- --port 5174
```
