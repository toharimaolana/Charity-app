<script>
	let values = [
		{
			title: 'Transparansi Mutlak',
			description: 'Buku kas publik dibuka secara online 24/7. Setiap rupiah yang masuk dan keluar tercatat beserta nota verifikasi fisik.',
			badge: 'AUDITED LEDGER',
			badgeClass: 'bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30'
		},
		{
			title: 'Berbasis Impact Nyata',
			description: 'Tolak sekadar statistik angka nominal. Kami mengukur keberhasilan dari jumlah porsi makanan, obat-obatan, dan sekolah yang terbangun.',
			badge: 'REAL IMPACT',
			badgeClass: 'bg-[#0E6A36] text-white'
		},
		{
			title: 'Aksi Tanggap Kilat',
			description: 'Tim relawan lapangan kami siaga 24 jam untuk melakukan verifikasi cepat pada situasi bencana alam & bantuan medis urgen.',
			badge: 'RAPID RESPONSE',
			badgeClass: 'bg-[#BE123C] text-white'
		},
		{
			title: 'Inklusivitas Sosial',
			description: 'Bantuan disalurkan tanpa memandang suku, agama, ras, maupun latar belakang politik. Murni berdasarkan kebutuhan kemanusiaan.',
			badge: 'HUMANITY FIRST',
			badgeClass: 'bg-[#0D150F] text-white'
		},
		{
			title: 'Akuntabilitas Lapangan',
			description: 'Relawan lokal memverifikasi penerima manfaat secara tatap muka sebelum penggalangan dana diizinkan terbit.',
			badge: 'FIELD VERIFIED',
			badgeClass: 'bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30'
		},
		{
			title: 'Gotong Royong Komunitas',
			description: 'Membangun ekosistem bersama antara donatur, mitra NGO lokal, dan relawan daerah untuk saling menguatkan.',
			badge: 'COMMUNITY POWER',
			badgeClass: 'bg-[#0E6A36] text-white'
		}
	];
</script>

<section class="py-16 sm:py-24 bg-[#F1F0F1] border-b border-[#B5B3A9]/30 font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		<!-- Section Header -->
		<div class="text-center max-w-2xl mx-auto space-y-3">
			<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
				PRINSIP UTAMA
			</span>
			<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F] tracking-tight">
				Nilai-Nilai Integritas Kami
			</h2>
			<p class="text-[#0D150F]/70 text-sm font-medium">
				Prinsip etik yang menuntun setiap keputusan dan langkah kerja tim PeduliBersama.
			</p>
		</div>

		<!-- Values Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each values as value}
				<div class="bg-white p-7 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] flex flex-col justify-between space-y-4">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-bold px-3 py-1 rounded-md shadow-2xs {value.badgeClass}">
								{value.badge}
							</span>
							<span class="w-2.5 h-2.5 rounded-full bg-[#6FC052]"></span>
						</div>

						<h3 class="font-bold text-xl text-[#0D150F]">
							{value.title}
						</h3>

						<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
							{value.description}
						</p>
					</div>

					<div class="pt-3 border-t border-[#B5B3A9]/20 text-[10px] font-mono text-[#0E6A36] font-bold uppercase">
						STANDARD CODE: REF-9942
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
