<script>
	let selectedAmount = $state(100000);
	let selectedCategory = $state('pangan');

	const presets = [25000, 50000, 100000, 250000, 500000];

	const impactMap = {
		pangan: (amt) => {
			const portion = Math.floor(amt / 15000);
			return {
				title: `${portion} Porsi Makanan Bergizi`,
				desc: `Donasi Anda dapat menyediakan ${portion} porsi santapan hangat & sehat untuk anak-anak panti asuhan atau korban bencana.`,
				icon: '🍲'
			};
		},
		pendidikan: (amt) => {
			const books = Math.floor(amt / 25000);
			return {
				title: `${books} Paket Alat Tulis & Buku`,
				desc: `Donasi Anda memberikan ${books} set perlengkapan sekolah lengkap bagi anak-anak di daerah pelosok.`,
				icon: '📚'
			};
		},
		kesehatan: (amt) => {
			const kits = Math.floor(amt / 50000);
			return {
				title: `${kits} Paket Pertolongan Pertama (P3K)`,
				desc: `Menyediakan ${kits} kotak perlengkapan medis darurat dan obat-obatan dasar untuk keluarga pra-sejahtera.`,
				icon: '💊'
			};
		},
		air: (amt) => {
			const liters = Math.floor((amt / 10000) * 100);
			return {
				title: `${liters} Liter Air Bersih Sanitasi`,
				desc: `Mengalirkan ${liters} liter air bersih untuk kebutuhan minum & sanitasi warga di wilayah kekeringan.`,
				icon: '🚰'
			};
		}
	};

	let impact = $derived(impactMap[selectedCategory](selectedAmount));

	function formatRupiah(num) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(num);
	}
</script>

<div id="dampak" class="bg-[#0D150F] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-[#0E6A36]/40">
	<!-- Ambient Glow Background -->
	<div class="absolute -top-24 -right-24 w-80 h-80 bg-[#6FC052]/10 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0E6A36]/20 rounded-full blur-3xl pointer-events-none"></div>

	<div class="relative z-10 max-w-4xl mx-auto">
		<div class="text-center max-w-2xl mx-auto mb-8">
			<span class="font-mono inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6FC052]/15 border border-[#6FC052]/30 text-[#6FC052] font-bold text-xs uppercase tracking-wider mb-3">
				✨ Simulasi Dampak Realtime
			</span>
			<h2 class="font-bold text-2xl sm:text-4xl tracking-tight text-white mb-3">
				Hitung Kebaikan yang Kamu Ciptakan
			</h2>
			<p class="text-slate-300 text-sm font-medium">
				Setiap rupiah yang disalurkan langsung dikonversi menjadi bantuan nyata tanpa potongan tersembunyi.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131F17]/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-[#0E6A36]/30">
			
			<!-- Left Control Section -->
			<div class="lg:col-span-7 space-y-6">
				<!-- Category Selector -->
				<div>
					<label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">1. Pilih Sektor Bantuan</label>
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
						<button 
							type="button" 
							onclick={() => selectedCategory = 'pangan'} 
							class="px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 {selectedCategory === 'pangan' ? 'bg-[#6FC052] text-[#0D150F] border-[#6FC052] shadow-md' : 'bg-[#0D150F]/70 text-slate-300 border-slate-800 hover:border-[#0E6A36]'}"
						>
							<span>🍲 Pangan</span>
						</button>
						<button 
							type="button" 
							onclick={() => selectedCategory = 'pendidikan'} 
							class="px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 {selectedCategory === 'pendidikan' ? 'bg-[#6FC052] text-[#0D150F] border-[#6FC052] shadow-md' : 'bg-[#0D150F]/70 text-slate-300 border-slate-800 hover:border-[#0E6A36]'}"
						>
							<span>📚 Sekolah</span>
						</button>
						<button 
							type="button" 
							onclick={() => selectedCategory = 'kesehatan'} 
							class="px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 {selectedCategory === 'kesehatan' ? 'bg-[#6FC052] text-[#0D150F] border-[#6FC052] shadow-md' : 'bg-[#0D150F]/70 text-slate-300 border-slate-800 hover:border-[#0E6A36]'}"
						>
							<span>💊 Medis</span>
						</button>
						<button 
							type="button" 
							onclick={() => selectedCategory = 'air'} 
							class="px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 {selectedCategory === 'air' ? 'bg-[#6FC052] text-[#0D150F] border-[#6FC052] shadow-md' : 'bg-[#0D150F]/70 text-slate-300 border-slate-800 hover:border-[#0E6A36]'}"
						>
							<span>🚰 Air Bersih</span>
						</button>
					</div>
				</div>

				<!-- Amount Presets -->
				<div>
					<label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">2. Pilih Nominal Donasi</label>
					<div class="flex flex-wrap gap-2 mb-3">
						{#each presets as amt}
							<button 
								type="button" 
								onclick={() => selectedAmount = amt}
								class="px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all {selectedAmount === amt ? 'bg-[#6FC052] text-[#0D150F] border-[#6FC052] shadow-md scale-105' : 'bg-[#0D150F]/70 text-slate-300 border-slate-800 hover:border-[#0E6A36]'}"
							>
								{formatRupiah(amt)}
							</button>
						{/each}
					</div>

					<!-- Custom Slider -->
					<div class="space-y-1.5">
						<input 
							type="range" 
							min="10000" 
							max="1000000" 
							step="10000" 
							bind:value={selectedAmount}
							class="w-full accent-[#6FC052] cursor-pointer h-2 bg-slate-800 rounded-lg"
						/>
						<div class="flex justify-between text-xs font-mono font-semibold text-slate-400">
							<span>Rp 10.000</span>
							<span class="text-[#6FC052] font-extrabold text-sm">{formatRupiah(selectedAmount)}</span>
							<span>Rp 1.000.000</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Impact Output Card -->
			<div class="lg:col-span-5 bg-gradient-to-br from-[#0E6A36] to-[#0B542B] p-6 rounded-2xl border border-[#6FC052]/40 text-white shadow-xl flex flex-col justify-between h-full min-h-[220px]">
				<div>
					<div class="text-4xl mb-3">{impact.icon}</div>
					<span class="font-mono text-[#6FC052] text-xs font-bold uppercase tracking-wider">Hasil Konversi Dampak:</span>
					<h3 class="font-bold text-xl sm:text-2xl text-white mt-1 mb-2 leading-snug">
						{impact.title}
					</h3>
					<p class="text-slate-100 text-xs leading-relaxed font-medium">
						{impact.desc}
					</p>
				</div>

				<div class="pt-5 border-t border-white/20 flex items-center justify-between mt-4">
					<span class="text-xs text-slate-200 font-semibold">Bantu Wujudkan</span>
					<a href="/campaigns" class="btn-secondary text-xs px-4 py-2 flex items-center gap-1">
						<span>Salurkan Donasi</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
					</a>
				</div>
			</div>

		</div>
	</div>
</div>
