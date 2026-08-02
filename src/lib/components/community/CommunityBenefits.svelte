<script>
	let benefits = [
		{
			title: 'Aksi Lapangan Langsung',
			desc: 'Terun langsung menyalurkan bantuan logistik, medis, dan pendidikan ke lokasi yang paling membutuhkan.',
			badge: 'FIELD WORK',
			badgeColor: 'bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30'
		},
		{
			title: 'Jaringan Koneksi Sosial',
			desc: 'Memperluas jaringan relasi dengan ribuan profesional, mahasiswa, dan penggerak sosial dari seluruh Indonesia.',
			badge: 'NETWORKING',
			badgeColor: 'bg-[#0E6A36] text-white'
		},
		{
			title: 'Pelatihan Kebencanaan & P3K',
			desc: 'Mendapatkan pembekalan sertifikasi gratis tanggap darurat bencana dan manajemen bantuan kemanusiaan.',
			badge: 'CERTIFIED TRAINING',
			badgeColor: 'bg-[#BE123C] text-white'
		},
		{
			title: 'Akses Audit Kas Realtime',
			desc: 'Menjadi bagian dari tim independen yang memiliki kewenangan memverifikasi nota dan transparansi buku kas publik.',
			badge: 'PUBLIC AUDITOR',
			badgeColor: 'bg-[#0D150F] text-white'
		}
	];
</script>

<section class="py-16 sm:py-24 bg-[#F1F0F1] border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		<div class="text-center max-w-2xl mx-auto space-y-3">
			<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
				NILAI TAMBAH RELAWAN
			</span>
			<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Mengapa Bergabung Bersama Kami?
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">
				Lebih dari sekadar menjadi donatur — Anda menjadi pilar perubahan langsung di masyarakat.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each benefits as item}
				<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] flex flex-col justify-between space-y-4">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-bold px-3 py-1 rounded-md shadow-2xs {item.badgeColor}">
								{item.badge}
							</span>
							<span class="w-2.5 h-2.5 rounded-full bg-[#6FC052]"></span>
						</div>

						<h3 class="font-bold text-xl text-[#0D150F]">
							{item.title}
						</h3>

						<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
							{item.desc}
						</p>
					</div>

					<div class="pt-4 border-t border-[#B5B3A9]/20 text-[10px] font-mono text-[#0E6A36] uppercase font-bold">
						BENEFIT CODE: VOL-994
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
