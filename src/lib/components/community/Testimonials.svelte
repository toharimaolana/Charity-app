<script>
	let testimonials = [
		{
			name: 'Rian Hidayat',
			role: 'Relawan Lapangan Bandar Lampung',
			quote: 'Bisa melihat langsung nota belanja dan bantuan sampai ke tangan Pak Mamat tanpa potongan memberikan rasa bangga luar biasa.',
			avatar: 'RH'
		},
		{
			name: 'Dr. Anita Wijaya',
			role: 'Tim Medis Operasi Katarak Garut',
			quote: 'Transparansi dana dari PeduliBersama membuat seluruh tim medis bekerja dengan tenang karena alokasi obat dan fasilitas sangat akuntabel.',
			avatar: 'AW'
		},
		{
			name: 'Siti Rahma',
			role: 'Donatur Rutin & Anggota Audit',
			quote: 'Setiap bulan saya selalu menerima laporan warta audit kas terbuka. Sangat jarang ada platform donasi yang seluar biasa ini transparansinya.',
			avatar: 'SR'
		}
	];
</script>

<section class="py-16 sm:py-24 bg-white border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		<div class="text-center max-w-2xl mx-auto space-y-3">
			<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
				SUARA ANGGOTA KOMUNITAS
			</span>
			<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Apa Kata Mereka yang Terlibat?
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">
				Pengalaman langsung para relawan dan donatur dalam menjaga keterbukaan publik.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each testimonials as item}
				<div class="bg-white p-7 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] flex flex-col justify-between space-y-6">
					<div class="space-y-3">
						<span class="text-3xl text-[#0E6A36] font-bold leading-none">“</span>
						<p class="text-[#0D150F]/80 text-xs sm:text-sm leading-relaxed font-medium">
							{item.quote}
						</p>
					</div>

					<div class="flex items-center gap-3 pt-4 border-t border-[#B5B3A9]/20">
						<div class="w-9 h-9 rounded-lg bg-[#0E6A36] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
							{item.avatar}
						</div>
						<div>
							<h4 class="font-bold text-sm text-[#0D150F]">{item.name}</h4>
							<span class="font-mono text-[10px] text-[#0D150F]/60 font-semibold block">{item.role}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
