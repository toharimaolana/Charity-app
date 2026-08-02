<script>
	let events = [
		{
			title: 'Aksi Tanggap Darurat Erupsi Gunung Marapi',
			location: 'Sumatera Barat',
			impact: '500 Paket Logistik Tersalurkan',
			date: 'Mei 2026'
		},
		{
			title: 'Operasi Katarak Gratis 100 Lansia',
			location: 'Garut, Jawa Barat',
			impact: '104 Pasien Berhasil Dioperasi',
			date: 'Maret 2026'
		},
		{
			title: 'Pembangunan 3 Sumur Air Bersih',
			location: 'Gunungkidul, DIY',
			impact: '1.200 Warga Terbebas Kekeringan',
			date: 'Januari 2026'
		}
	];
</script>

<section class="py-16 sm:py-24 bg-[#F1F0F1] border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		<div class="text-center max-w-2xl mx-auto space-y-3">
			<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
				REKAP DOKUMENTASI
			</span>
			<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Arsip Aksi Lapangan Selesai
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">
				Bukti nyata gotong royong komunitas relawan di berbagai pelosok daerah.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each events as item}
				<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] space-y-4 flex flex-col justify-between">
					<div class="space-y-3">
						<div class="flex items-center justify-between font-mono text-xs text-[#0D150F]/60 font-bold">
							<span>📍 {item.location}</span>
							<span>{item.date}</span>
						</div>

						<h3 class="font-bold text-xl text-[#0D150F] leading-snug">
							{item.title}
						</h3>
					</div>

					<div class="pt-4 border-t border-[#B5B3A9]/20 space-y-1">
						<span class="text-[10px] font-mono font-bold text-[#0E6A36] uppercase block">HASIL DAMPAK:</span>
						<span class="font-mono font-bold text-xs text-[#0E6A36] block bg-[#6FC052]/15 p-2 rounded-lg border border-[#6FC052]/30">
							✓ {item.impact}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
