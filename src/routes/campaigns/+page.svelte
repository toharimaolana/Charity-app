<script>
	import CharityCard from '$lib/components/CharityCard.svelte';
	import { campaigns, categories } from '$lib/data/campaigns.js';

	let selectedCategory = $state('all');
	let searchQuery = $state('');
	let sortBy = $state('urgent');

	let filteredCampaigns = $derived(
		campaigns.filter((item) => {
			const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
			const matchesSearch =
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(item.location && item.location.toLowerCase().includes(searchQuery.toLowerCase()));
			return matchesCategory && matchesSearch;
		}).sort((a, b) => {
			if (sortBy === 'urgent') return b.isUrgent ? 1 : -1;
			if (sortBy === 'percentage') return (b.raised / b.target) - (a.raised / a.target);
			return 0;
		})
	);
</script>

<svelte:head>
	<title>Jelajahi Kampanye — PeduliBersama</title>
</svelte:head>

<div class="py-10 bg-[#F1F0F1] min-h-screen font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
		
		<!-- Header Banner -->
		<div class="bg-[#0D150F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-[#0E6A36]/40">
			<div class="relative z-10 max-w-2xl space-y-3">
				<div class="inline-flex items-center gap-2 bg-[#6FC052]/15 text-[#6FC052] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold">
					<span class="w-2 h-2 rounded-full bg-[#6FC052] animate-pulse"></span>
					<span>KATALOG KAMPANYE AKTIF</span>
				</div>
				<h1 class="font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
					Jelajahi & Salurkan Bantuan
				</h1>
				<p class="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
					Temukan kampanye kemanusiaan terverifikasi. Setiap kontribusi sekecil apapun dicatat secara transparan di buku kas publik.
				</p>
			</div>
		</div>

		<!-- Filter & Search Controls -->
		<div class="bg-white p-4 sm:p-6 rounded-2xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] space-y-4">
			
			<div class="flex flex-col sm:flex-row gap-4 justify-between items-center">
				<div class="relative w-full sm:w-96">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
					<input 
						type="text" 
						placeholder="Cari kampanye, lokasi, atau kata kunci..." 
						bind:value={searchQuery}
						class="w-full pl-10 pr-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-semibold text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
					/>
				</div>

				<div class="flex items-center gap-2 w-full sm:w-auto justify-end">
					<span class="text-xs text-[#0D150F]/60 font-semibold uppercase tracking-wider text-[10px] font-mono">URUTKAN:</span>
					<select 
						bind:value={sortBy} 
						class="bg-[#F1F0F1] border border-[#B5B3A9]/30 text-[#0D150F] text-xs font-bold py-2.5 px-3 rounded-xl focus:outline-none focus:border-[#0E6A36]"
					>
						<option value="urgent">Mendesak Dahulu</option>
						<option value="percentage">Persentase Tertinggi</option>
					</select>
				</div>
			</div>

			<!-- Category Pills with Dynamic Active & Inactive Button Styling -->
			<div class="flex items-center gap-2 overflow-x-auto pb-2">
				{#each categories as cat}
					<button 
						type="button" 
						onclick={() => selectedCategory = cat.id}
						class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border {selectedCategory === cat.id ? 'bg-[#0E6A36] text-white border-[#0E6A36] shadow-sm font-extrabold scale-105' : 'bg-[#F1F0F1] text-[#0D150F] border-[#B5B3A9]/40 hover:bg-white hover:border-[#0E6A36]/60'}"
					>
						<span>{cat.name}</span>
					</button>
				{/each}
			</div>

		</div>

		<!-- Campaign Grid Results -->
		{#if filteredCampaigns.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredCampaigns as item (item.id)}
					<CharityCard campaign={item} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-16 bg-white rounded-3xl border border-[#B5B3A9]/30 p-8 space-y-3">
				<h3 class="font-bold text-lg text-[#0D150F]">Kampanye tidak ditemukan</h3>
				<p class="text-[#0D150F]/60 text-xs max-w-sm mx-auto font-medium">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
				<button 
					onclick={() => { selectedCategory = 'all'; searchQuery = ''; }}
					class="mt-2 text-xs font-bold text-[#0E6A36] hover:underline"
				>
					Reset Semua Filter
				</button>
			</div>
		{/if}

	</div>
</div>
