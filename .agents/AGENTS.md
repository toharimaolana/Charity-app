# 🤖 AGENTS.md — Workspace AI Agent Rules

> **Project**: PeduliBersama (`d:\development\app-charity`)  
> **Framework**: Svelte 5 (Runes), SvelteKit 2, Tailwind v4

---

## 📌 MANDATORY DIRECTIVES FOR ALL AI AGENTS

1. **Design System Adherence**: All UI components created or edited in this codebase MUST strictly follow the design system documented in [DESIGN.md](file:///d:/development/app-charity/DESIGN.md).
2. **Color Palette Enforcement**: Only use the 5 official brand tokens:
   - Primary Accent: `#6FC052`
   - Deep Primary: `#0E6A36`
   - Canvas Background: `#F1F0F1`
   - Neutral Slate / Border: `#B5B3A9`
   - Midnight Dark Neutral: `#0D150F`
3. **Typography Enforcement**:
   - Primary Text & Headlines: `font-sans` (Plus Jakarta Sans/Inter) with `tracking-tight` (-0.03em) for H1.
   - Numbers, IDR Amounts, Percentages, Timestamps, Countdown, Audit Codes: `font-mono` (JetBrains Mono).
4. **Absolute Prohibitions**:
   - 🛑 NO serif / Fraunces / italic koran.
   - 🛑 NO `#FDFBF7` parchment background.
   - 🛑 NO dot background pattern.
   - 🛑 NO ticket-stub perforation / gerigi tiket.
   - 🛑 NO violet / purple / pink / neon AI colors.
   - 🛑 NO `rounded-3xl` or `rounded-2xl` on buttons (buttons MUST use max `rounded-xl` or `rounded-lg`).
5. **Svelte 5 Runes**: Always use Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`).
