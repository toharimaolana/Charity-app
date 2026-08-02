<script>
	let milestones = [
		{
			year: '2024',
			title: 'Gagasan Awal',
			description: 'Diinisiasi oleh kelompok relawan muda yang gelisah akan minimnya transparansi penggunaan dana donasi publik di daerah.',
			badgeColor: 'bg-[#0D150F] text-white'
		},
		{
			year: '2025',
			title: 'Pengembangan Ledger Terbuka',
			description: 'Meluncurkan sistem pencatatan donasi publik pertama berbasis audit real-time dan konversi dampak bantuan langsung.',
			badgeColor: 'bg-[#0E6A36] text-white'
		},
		{
			year: '2026',
			title: 'Jaringan Relawan Lapangan',
			description: 'Membangun jejaring verifikator independen di 34 provinsi untuk memvalidasi setiap kampanye kemanusiaan secara fisik.',
			badgeColor: 'bg-[#6FC052]/20 text-[#0E6A36] border border-[#6FC052]/40'
		},
		{
			year: 'Masa Depan',
			title: 'Ekosistem Kebaikan Berkelanjutan',
			description: 'Terus mendampingi komunitas lokal membangun kemandirian ekonomi dan sosial jangka panjang.',
			badgeColor: 'bg-[#BE123C] text-white'
		}
	];
</script>

<section id="our-story" class="py-16 sm:py-24 bg-[#F1F0F1] border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		<!-- Section Header -->
		<div class="text-center max-w-2xl mx-auto space-y-3">
			<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
				PERJALANAN KAMI
			</span>
			<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Jejak Langkah Gotong Royong
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">
				Dari gagasan akar rumput menjadi platform transparansi publik terpercaya.
			</p>
		</div>

		<!-- Milestones Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each milestones as item}
				<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] flex flex-col justify-between space-y-4">
					<div>
						<div class="flex items-center justify-between mb-4">
							<span class="font-mono text-xs font-bold px-3 py-1 rounded-lg shadow-2xs {item.badgeColor}">
								{item.year}
							</span>
							<span class="w-2.5 h-2.5 rounded-full bg-[#6FC052]"></span>
						</div>

						<h3 class="font-bold text-xl text-[#0D150F] mb-2">
							{item.title}
						</h3>

						<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
							{item.description}
						</p>
					</div>

					<div class="pt-4 border-t border-[#B5B3A9]/20 text-[10px] font-mono text-[#0E6A36] uppercase font-bold">
						VERIFIED MILESTONE
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
