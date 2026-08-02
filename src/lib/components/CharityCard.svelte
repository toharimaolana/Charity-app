<script>
	/**
	 * @typedef {Object} Campaign
	 * @property {string|number} id
	 * @property {string} title
	 * @property {string} [slug]
	 * @property {string} description
	 * @property {number} target
	 * @property {number} raised
	 * @property {string} [category]
	 * @property {string} image
	 * @property {string} [location]
	 * @property {number} [daysLeft]
	 * @property {boolean} [isUrgent]
	 * @property {number} [donorsCount]
	 */

	/** @type {{ campaign: Campaign }} */
	let { campaign } = $props();

	let percentage = $derived(
		Math.min(100, Math.round(((campaign.raised || 0) / (campaign.target || 1)) * 100))
	);

	function formatRupiah(number) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(number);
	}
</script>

<!-- Ultra-Modern Crowdfund Campaign Card -->
<div class="bg-white rounded-2xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] hover:border-[#6FC052]/80 hover:shadow-[0_8px_30px_-4px_rgba(14,106,54,0.12)] transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden font-sans">
	<div>
		<!-- Thumbnail Container -->
		<div class="relative h-48 overflow-hidden bg-slate-900">
			<img 
				src={campaign.image} 
				alt={campaign.title} 
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
				loading="lazy"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-[#0D150F]/75 via-transparent to-transparent"></div>

			<!-- Top Badges -->
			<div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
				<span class="bg-white/95 text-[#0E6A36] border border-[#6FC052]/40 font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-xs">
					{campaign.category || 'Kemanusiaan'}
				</span>
				{#if campaign.isUrgent}
					<span class="font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#BE123C] text-white uppercase tracking-wider shadow-xs animate-pulse">
						MENDESAK
					</span>
				{/if}
			</div>

			<!-- Location Tag -->
			{#if campaign.location}
				<div class="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold bg-[#0D150F]/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#6FC052]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
					<span>{campaign.location}</span>
				</div>
			{/if}
		</div>

		<!-- Card Body -->
		<div class="p-5 space-y-2">
			<h3 class="font-bold text-base text-[#0D150F] line-clamp-2 group-hover:text-[#0E6A36] transition-colors leading-snug">
				<a href="/campaigns/{campaign.slug || campaign.id}">{campaign.title}</a>
			</h3>

			<p class="text-[#0D150F]/70 text-xs line-clamp-2 leading-relaxed font-medium">
				{campaign.description}
			</p>
		</div>
	</div>

	<!-- Progress & Data Section -->
	<div class="p-5 pt-0 space-y-4">
		<div class="space-y-2 bg-[#F1F0F1] p-3 rounded-xl border border-[#B5B3A9]/30">
			<div class="flex justify-between items-center text-xs font-bold">
				<span class="text-[#0D150F]/60 text-[10px] uppercase font-mono tracking-wider">TERKUMPUL:</span>
				<span class="font-mono font-black text-[#0E6A36] text-xs bg-white px-2 py-0.5 rounded border border-[#6FC052]/40 shadow-2xs">{percentage}%</span>
			</div>
			
			<!-- Progress Line Bar -->
			<div class="w-full h-2 bg-white rounded-full overflow-hidden p-0.5 border border-[#B5B3A9]/30">
				<div 
					class="h-full bg-gradient-to-r from-[#6FC052] to-[#0E6A36] rounded-full transition-all duration-700 ease-out" 
					style="width: {percentage}%"
				></div>
			</div>

			<div class="flex items-center justify-between text-xs pt-0.5">
				<span class="font-mono font-black text-[#0D150F]">{formatRupiah(campaign.raised)}</span>
				<span class="text-[#0D150F]/60 font-medium text-[11px]">target <strong class="font-mono text-[#0D150F]">{formatRupiah(campaign.target)}</strong></span>
			</div>
		</div>

		<!-- Action Footer Row -->
		<div class="flex items-center justify-between pt-1">
			<div class="flex items-center gap-1.5 text-xs text-[#0D150F]/70 font-semibold font-mono">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#0E6A36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				<span>{campaign.daysLeft || 12} HARI LAGI</span>
			</div>

			<a 
				href="/campaigns/{campaign.slug || campaign.id}" 
				class="bg-[#0E6A36] hover:bg-[#0B542B] text-white rounded-xl font-bold text-xs px-4 py-2 flex items-center gap-1.5 shadow-sm transition-all group-hover:bg-[#0B542B]"
			>
				<span>Bantu</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</a>
		</div>
	</div>
</div>
