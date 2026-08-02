<script>
	import Hero from '$lib/components/Hero.svelte';
	import CharityCard from '$lib/components/CharityCard.svelte';
	import ImpactCalculator from '$lib/components/ImpactCalculator.svelte';
	import LiveDonationFeed from '$lib/components/LiveDonationFeed.svelte';
	import { campaigns } from '$lib/data/campaigns.js';
</script>

<svelte:head>
	<title>PeduliBersama — Platform Crowdfund & Donasi Publik Modern</title>
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- Live Activity Feed & Urgent Campaigns Section -->
<section class="py-14 bg-[#F1F0F1] border-b border-[#B5B3A9]/30">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		
		<!-- Live Feed Guestbook Component (Full 7xl Width Container) -->
		<div class="w-full">
			<LiveDonationFeed />
		</div>

		<!-- Bento Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#B5B3A9]/30 pb-4">
			<div>
				<div class="flex items-center gap-2 mb-1.5">
					<span class="w-2.5 h-2.5 rounded-full bg-[#BE123C] animate-pulse"></span>
					<span class="font-mono text-xs font-bold text-[#BE123C] uppercase tracking-widest">KAMPANYE MENDESAK</span>
				</div>
				<h2 class="font-bold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
					Butuh Penyaluran Segera
				</h2>
			</div>

			<a href="/campaigns" class="btn-outline text-[#0E6A36] font-bold text-xs px-4 py-2 flex items-center gap-1.5 uppercase tracking-wider bg-white">
				<span>Lihat Semua Kampanye (<strong class="font-mono">{campaigns.length}</strong>)</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</a>
		</div>

		<!-- Bento Grid of Campaigns -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each campaigns as item (item.id)}
				<CharityCard campaign={item} />
			{/each}
		</div>

	</div>
</section>

<!-- Impact Calculator Section -->
<section class="py-16 bg-[#F1F0F1]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ImpactCalculator />
	</div>
</section>

<!-- Audited Public Financial Ledger Section -->
<section id="transparansi" class="py-16 bg-white border-t border-[#B5B3A9]/30">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
			<span class="badge-modern inline-block mb-2">
				100% PUBLIC AUDIT LEDGER
			</span>
			<h2 class="font-bold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Prinsip Transparansi & Akuntabilitas
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">Setiap dana masyarakat dikelola dengan keterbukaan finansial tanpa kompromi.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			
			<div class="modern-card p-7 space-y-3">
				<span class="font-mono text-xs font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2.5 py-1 rounded-md border border-[#6FC052]/30 inline-block">AUDIT #01</span>
				<h3 class="font-bold text-xl text-[#0D150F]">Ledger Kas Terbuka</h3>
				<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
					Setiap rupiah yang masuk dan disalurkan tercatat secara otomatis di buku kas publik yang dapat diaudit siapa saja secara berkala.
				</p>
			</div>

			<div class="modern-card p-7 space-y-3">
				<span class="font-mono text-xs font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2.5 py-1 rounded-md border border-[#6FC052]/30 inline-block">VERIFICATION #02</span>
				<h3 class="font-bold text-xl text-[#0D150F]">Verifikasi Lapangan Langsung</h3>
				<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
					Tim relawan kami memverifikasi langsung kondisi lapangan dan identitas penerima manfaat sebelum penggalangan dana dibuka.
				</p>
			</div>

			<div class="modern-card p-7 space-y-3">
				<span class="font-mono text-xs font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2.5 py-1 rounded-md border border-[#6FC052]/30 inline-block">DOCUMENTATION #03</span>
				<h3 class="font-bold text-xl text-[#0D150F]">Dokumentasi Resi & Nota</h3>
				<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
					Donatur menerima kabar penyaluran lengkap berupa foto, video, dan nota belanja barang bantuan secara bertahap.
				</p>
			</div>

		</div>
	</div>
</section>

<!-- Call to Action Banner -->
<section class="py-16 bg-[#F1F0F1]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-[#0D150F] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#0E6A36]/40">
			
			<div class="max-w-xl space-y-3">
				<span class="font-mono bg-[#6FC052] text-[#0D150F] font-bold text-[10px] px-3 py-1 rounded-md uppercase tracking-widest">INISIATIF CROWDFUND</span>
				<h2 class="font-bold text-3xl sm:text-4xl text-white tracking-tight">
					Ingin Menggalang Dana untuk Orang Sekitarmu?
				</h2>
				<p class="text-slate-300 text-sm leading-relaxed font-medium">
					Buat kampanye donasi gratis dalam kurang dari 3 menit. Tim verifikator lapangan kami siap membantu penerbitan audit publik.
				</p>
			</div>

			<a href="/register" class="btn-secondary text-xs py-4 px-8 uppercase tracking-wider whitespace-nowrap shadow-md">
				Mulai Galang Dana →
			</a>

		</div>
	</div>
</section>
