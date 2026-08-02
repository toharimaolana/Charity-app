<script>
	const partners = [
		'Palang Merah Indonesia',
		'Badan Zakat Nasional',
		'Yayasan KitaBisa',
		'Relawan Nusantara',
		'Bank Syariah Indonesia',
		'Wahana Visi Indonesia'
	];
</script>

<section class="py-14 bg-[#F1F0F1] border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
		<div class="text-center">
			<span class="font-mono text-xs font-bold text-[#0E6A36] uppercase tracking-widest block">
				MITRA KOLABORASI & AUDITOR INDEPENDEN
			</span>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
			{#each partners as partner}
				<div class="px-5 py-2.5 rounded-xl bg-white border border-[#B5B3A9]/30 font-mono text-xs font-bold text-[#0D150F] shadow-2xs">
					{partner}
				</div>
			{/each}
		</div>
	</div>
</section>
