# Charity Donation Platform

Proyek web aplikasi donasi berbasis SvelteKit + Tailwind CSS dengan integrasi payment gateway Xendit untuk mendukung berbagai campaign sosial (pendidikan, lingkungan, bantuan pangan, dll).

## Tech Stack

- SvelteKit
- Tailwind CSS
- Xendit (Payment Gateway)
- Node 18+
- Git & GitHub

## Fitur Utama

- Landing page dengan hero, stats, dan featured campaigns
- Halaman list campaign: `/campaign`
- Halaman detail campaign: `/campaign/[slug]`
  - Progress bar dinamis (raised vs target)
  - Penjelasan program, highlights, penggunaan dana
  - Card donasi dengan preset nominal
- Payment flow:
  - Create invoice via Xendit (REST API)
  - Redirect ke Xendit Checkout (VA, e-wallet, kartu kredit, dll)
  - Success & failed payment page:
    - `/donation/success`
    - `/donation/failed`

## Struktur Routing

```txt
src/
└── routes/
    ├── +page.svelte                # Home
    ├── campaign/
    │   ├── +page.svelte           # List semua campaign
    │   └── [slug]/
    │       └── +page.svelte       # Detail campaign
    ├── donation/
    │   ├── success/
    │   │   └── +page.svelte
    │   └── failed/
    │       └── +page.svelte
    └── api/
        └── xendit/
            └── create-invoice/
                └── +server.js
