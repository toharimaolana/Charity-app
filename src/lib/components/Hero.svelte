<script>
	let selectedAmount = $state(50000);
	let customAmount = $state('');

	const presets = [
		{ amount: 20000, label: 'Rp 20k' },
		{ amount: 50000, label: 'Rp 50k' },
		{ amount: 100000, label: 'Rp 100k' },
		{ amount: 250000, label: 'Rp 250k' }
	];

	let activeAmount = $derived(customAmount ? Number(customAmount) : selectedAmount);

	const featured = {
		title: 'Bantu Pak Mamat Bangun Rumah Pasca Banjir Bandar Lampung',
		raised: 112500000,
		target: 150000000,
		donors: 1420,
		daysLeft: '12 HARI LAGI',
		category: 'TANGGAP BENCANA',
		image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1000&auto=format&fit=crop&q=80'
	};

	let progressPercent = $derived(
		Math.min(100, Math.round((featured.raised / featured.target) * 100))
	);

	function formatRupiah(num) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(num || 0);
	}

	function getImpactBadge(amt) {
		const val = amt || 0;
		if (val >= 250000) return { icon: '🏠', text: 'Bantuan Hunian & Material' };
		if (val >= 100000) return { icon: '💊', text: 'Paket Obatan Medis P3K' };
		if (val >= 50000) return { icon: '🎒', text: 'Paket Alat Tulis Sekolah' };
		return { icon: '🍲', text: '5 Porsi Makanan Bergizi' };
	}

	let activeImpact = $derived(getImpactBadge(activeAmount));
</script>

<!-- Layout Style Alternatif: Centered Minimalist Stage with Asymmetric Dual Feature Showcase -->
<section class="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#F1F0F1] overflow-hidden border-b border-[#B5B3A9]/30 font-sans">
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
		
		<!-- Centered Minimalist Typography & Headline -->
		<div class="text-center max-w-3xl mx-auto space-y-5">
			
			<!-- Accent Badge -->
			<div class="inline-flex items-center gap-2 bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-4 py-1.5 font-bold shadow-xs">
				<span class="w-2 h-2 rounded-full bg-[#6FC052] animate-pulse"></span>
				<span>PLATFORM CROWDFUND PUBLIK MODERN</span>
			</div>

			<!-- Headline -->
			<h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0D150F] tracking-tight leading-[1.08]">
				Transparansi Kebaikan Publik <br />
				<span class="text-[#0E6A36]">Tanpa Potongan Tersembunyi.</span>
			</h1>

			<!-- Subtitle -->
			<p class="text-[#0D150F]/75 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
				Setiap rupiah yang disalurkan melalui PeduliBersama dicatat secara terbuka pada kas publik. Langsung berdampak bagi yang berjuang.
			</p>

			<!-- Action Button Row -->
			<div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
				<a 
					href="/campaigns" 
					class="bg-[#0E6A36] hover:bg-[#0B542B] text-white rounded-xl font-bold text-sm px-8 py-3.5 shadow-sm transition-all flex items-center gap-2.5 group"
				>
					<span>Mulai Donasi Now</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</a>

				<a 
					href="#transparansi" 
					class="bg-white hover:bg-white/80 text-[#0D150F] font-bold text-sm px-6 py-3.5 rounded-xl border border-[#B5B3A9]/30 shadow-xs transition-all"
				>
					Audit Kas Terbuka
				</a>
			</div>

		</div>

		<!-- Asymmetric Dual Feature Showcase (Minimalist Card Stage) -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
			
			<!-- Left Showcase: Campaign Cover & Progress Card -->
			<div class="lg:col-span-7 bg-white rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] p-5 space-y-4">
				<div class="relative h-60 sm:h-64 rounded-lg overflow-hidden bg-slate-900">
					<img src={featured.image} alt={featured.title} class="w-full h-full object-cover" />
					
					<div class="absolute top-3 left-3">
						<span class="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-white text-[#0E6A36] shadow-xs uppercase tracking-wider">
							{featured.category}
						</span>
					</div>

					<div class="absolute top-3 right-3">
						<span class="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-[#BE123C] text-white shadow-xs uppercase tracking-wider">
							⏳ {featured.daysLeft}
						</span>
					</div>
				</div>

				<div class="space-y-3 px-1">
					<h3 class="font-bold text-base sm:text-lg text-[#0D150F] line-clamp-1">
						{featured.title}
					</h3>

					<div class="space-y-1.5">
						<div class="flex justify-between items-baseline text-xs font-bold">
							<span class="font-mono font-black text-[#0D150F] text-base sm:text-lg">{formatRupiah(featured.raised)}</span>
							<span class="font-mono font-black text-[#0E6A36] bg-[#6FC052]/15 px-2 py-0.5 rounded-md border border-[#6FC052]/30">{progressPercent}%</span>
						</div>

						<div class="w-full h-2.5 bg-[#F1F0F1] rounded-full overflow-hidden p-0.5 border border-[#B5B3A9]/30">
							<div class="h-full bg-[#0E6A36] rounded-full transition-all duration-700" style="width: {progressPercent}%"></div>
						</div>

						<div class="flex justify-between text-[11px] text-[#0D150F]/70 font-semibold pt-0.5">
							<span>Target: <strong class="font-mono text-[#0D150F]">{formatRupiah(featured.target)}</strong></span>
							<span><strong class="font-mono text-[#0D150F]">{featured.donors}</strong> Donatur</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Showcase: Quick Donation Console & Impact Converter -->
			<div class="lg:col-span-5 bg-white rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] p-5 flex flex-col justify-between space-y-5">
				
				<div class="space-y-4">
					<div class="flex items-center justify-between border-b border-[#B5B3A9]/20 pb-3">
						<span class="font-mono text-xs font-bold text-[#0E6A36] uppercase tracking-wider">DONASI INSTAN 1-KLIK</span>
						<span class="font-mono text-xs font-bold text-[#0D150F]/60">{formatRupiah(activeAmount)}</span>
					</div>

					<div class="grid grid-cols-2 gap-2">
						{#each presets as item}
							<button 
								type="button" 
								onclick={() => { selectedAmount = item.amount; customAmount = ''; }}
								class="py-2.5 px-3 rounded-xl text-xs font-mono font-bold border transition-all text-center {activeAmount === item.amount && !customAmount ? 'bg-[#0E6A36] text-white border-[#0E6A36]' : 'bg-[#F1F0F1] text-[#0D150F] border-[#B5B3A9]/30 hover:bg-white'}"
							>
								{item.label}
							</button>
						{/each}
					</div>

					<!-- Custom Input -->
					<div class="relative">
						<span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-[#0E6A36]">Rp</span>
						<input 
							type="number" 
							placeholder="Atau ketik nominal..." 
							bind:value={customAmount}
							min="10000"
							class="w-full pl-10 pr-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-mono font-bold text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
						/>
					</div>

					<!-- Dynamic Impact Badge -->
					<div class="bg-[#6FC052]/15 border border-[#6FC052]/30 rounded-xl p-3 space-y-1">
						<span class="block text-[10px] font-mono font-bold text-[#0E6A36] uppercase">ESTIMASI DAMPAK NYATA:</span>
						<div class="flex items-center gap-2 text-xs font-bold text-[#0D150F]">
							<span class="text-base">{activeImpact.icon}</span>
							<span>{activeImpact.text}</span>
						</div>
					</div>
				</div>

				<a 
					href="/campaigns" 
					class="bg-[#0E6A36] hover:bg-[#0B542B] text-white rounded-xl font-bold text-xs py-3.5 px-4 text-center block shadow-sm uppercase tracking-wider transition-all"
				>
					Salurkan Donasi →
				</a>

			</div>

		</div>

		<!-- Financial Metrics Strip Below Stage -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#B5B3A9]/30 max-w-5xl mx-auto">
			<div class="bg-white p-4 rounded-xl border border-[#B5B3A9]/30 text-center shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]">
				<span class="block font-mono font-black text-2xl text-[#0D150F]">Rp 1.48B+</span>
				<span class="text-[#0D150F]/60 text-[10px] font-bold uppercase tracking-wider block mt-0.5">Total Dana Tersalurkan</span>
			</div>
			<div class="bg-white p-4 rounded-xl border border-[#B5B3A9]/30 text-center shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]">
				<span class="block font-mono font-black text-2xl text-[#0E6A36]">12,450+</span>
				<span class="text-[#0D150F]/60 text-[10px] font-bold uppercase tracking-wider block mt-0.5">Penerima Bantuan</span>
			</div>
			<div class="bg-white p-4 rounded-xl border border-[#B5B3A9]/30 text-center shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]">
				<span class="block font-mono font-black text-2xl text-[#6FC052]">100%</span>
				<span class="text-[#0D150F]/60 text-[10px] font-bold uppercase tracking-wider block mt-0.5">Audit Kas Terbuka</span>
			</div>
		</div>

	</div>
</section>
