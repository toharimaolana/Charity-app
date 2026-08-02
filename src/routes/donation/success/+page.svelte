<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let externalId = $derived($page.url.searchParams.get('external_id'));
</script>

<svelte:head>
	<title>Donasi Berhasil — PeduliBersama</title>
</svelte:head>

<div class="min-h-screen bg-[#F1F0F1] font-sans flex flex-col justify-between">
	<Navbar />

	<section class="py-20 px-4">
		<div class="max-w-xl mx-auto text-center space-y-6">
			<!-- Success Icon -->
			<div class="inline-flex items-center justify-center w-20 h-20 bg-[#6FC052]/20 text-[#0E6A36] rounded-full border border-[#6FC052]/40 text-4xl mx-auto shadow-sm">
				🎉
			</div>

			<!-- Success Message -->
			<div class="space-y-2">
				<h1 class="text-3xl sm:text-4xl font-extrabold text-[#0D150F] tracking-tight">Terima Kasih Atas Kebaikan Anda!</h1>
				<p class="text-sm text-[#0D150F]/70 font-medium max-w-md mx-auto">
					Donasi Anda telah terverifikasi via Xendit dan langsung dicatat secara transparan pada kas publik.
				</p>
			</div>

			<!-- Info Card -->
			<div class="bg-white rounded-xl p-6 border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] text-left space-y-3 font-mono text-xs">
				<div class="flex justify-between items-center">
					<span class="text-[#0D150F]/60">ID TRANSAKSI XENDIT:</span>
					<span class="font-bold text-[#0D150F]">{externalId || 'DONATE-2026-OK'}</span>
				</div>
				<div class="flex justify-between items-center">
					<span class="text-[#0D150F]/60">STATUS PEMBAYARAN:</span>
					<span class="px-2.5 py-1 bg-[#6FC052]/20 text-[#0E6A36] border border-[#6FC052]/40 rounded-full font-bold">
						✓ PAID / TERPAYAR
					</span>
				</div>
				<div class="pt-3 border-t border-[#B5B3A9]/20 text-[11px] text-[#0D150F]/70 font-sans font-medium">
					📧 Bukti pembayaran resmi Xendit telah dikirimkan ke email Anda. Terima kasih atas kepedulian Anda!
				</div>
			</div>

			<!-- Actions -->
			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a
					href="/campaigns"
					class="bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm uppercase tracking-wider transition-all"
				>
					Jelajahi Kampanye Lain →
				</a>
				<a
					href="/"
					class="bg-white hover:bg-white/80 text-[#0D150F] font-bold text-xs py-3.5 px-6 rounded-xl border border-[#B5B3A9]/30 uppercase tracking-wider transition-all"
				>
					Kembali ke Beranda
				</a>
			</div>
		</div>
	</section>

	<Footer />
</div>
