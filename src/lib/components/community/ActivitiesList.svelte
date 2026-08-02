<script>
	let activities = [
		{
			id: 'act-1',
			title: 'Ekspedisi Penyaluran Logistik Banjir Bandar Lampung',
			date: '15 Agustus 2026',
			location: 'Bandar Lampung',
			category: 'Tanggap Bencana',
			quota: '15 Relawan Tersisa',
			badgeColor: 'bg-[#BE123C] text-white'
		},
		{
			id: 'act-2',
			title: 'Mengajar & Distribusi Paket Alat Tulis Anak Rimba',
			date: '22 Agustus 2026',
			location: 'Sarolangun, Jambi',
			category: 'Pendidikan',
			quota: '8 Relawan Tersisa',
			badgeColor: 'bg-[#0E6A36] text-white'
		},
		{
			id: 'act-3',
			title: 'Pemeriksaan Kesehatan & Nutrisi Gratis Lansia',
			date: '05 September 2026',
			location: 'Bogor, Jawa Barat',
			category: 'Kesehatan',
			quota: '20 Relawan Tersisa',
			badgeColor: 'bg-[#6FC052]/20 text-[#0E6A36] border border-[#6FC052]/40'
		}
	];
</script>

<section id="kegiatan" class="py-16 sm:py-24 bg-white border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#B5B3A9]/20 pb-4">
			<div>
				<div class="flex items-center gap-2 mb-1.5">
					<span class="w-2.5 h-2.5 rounded-full bg-[#6FC052] animate-pulse"></span>
					<span class="font-mono text-xs font-bold text-[#0E6A36] uppercase tracking-widest">AGENDA TERDEKAT</span>
				</div>
				<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
					Agenda Aksi Lapangan Mendatang
				</h2>
			</div>

			<span class="font-mono text-xs font-bold text-[#0D150F]/60">
				SHOWING {activities.length} UPCOMING EVENTS
			</span>
		</div>

		<div class="space-y-4">
			{#each activities as item}
				<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] flex flex-col md:flex-row md:items-center justify-between gap-6">
					<div class="space-y-2 max-w-2xl">
						<div class="flex flex-wrap items-center gap-2">
							<span class="font-mono text-xs font-bold px-3 py-1 rounded-md shadow-2xs {item.badgeColor}">
								{item.category}
							</span>
							<span class="font-mono text-xs text-[#0D150F]/60 font-bold">• {item.date}</span>
							<span class="font-mono text-xs text-[#0D150F]/60 font-bold">• 📍 {item.location}</span>
						</div>

						<h3 class="font-bold text-xl text-[#0D150F] leading-snug">
							{item.title}
						</h3>
					</div>

					<div class="flex items-center justify-between md:justify-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-[#B5B3A9]/20">
						<span class="font-mono text-xs font-bold text-[#0E6A36] bg-[#6FC052]/15 px-3 py-1.5 rounded-lg border border-[#6FC052]/30">
							{item.quota}
						</span>

						<a 
							href="#join-form" 
							class="bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs px-5 py-2.5 rounded-xl uppercase tracking-wider whitespace-nowrap transition-all"
						>
							Daftar Aksi →
						</a>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>
