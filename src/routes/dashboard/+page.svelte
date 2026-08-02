<script>
	let activeTab = $state('donations');

	const myDonations = [
		{ id: 'd1', campaignTitle: 'Bantu Pak Mamat Bangun Kembali Rumah Pasca Banjir', amount: 150000, date: '28 Juli 2026', status: 'Terverifikasi & Tersalurkan' },
		{ id: 'd2', campaignTitle: 'Beasiswa Alat Tulis & Seragam untuk 500 Anak Rimba', amount: 250000, date: '15 Juli 2026', status: 'Terverifikasi & Tersalurkan' },
		{ id: 'd3', campaignTitle: 'Operasi Pemulihan Jantung Dik Kenzo', amount: 100000, date: '02 Juni 2026', status: 'Terverifikasi & Tersalurkan' }
	];

	function formatRupiah(num) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(num);
	}
</script>

<svelte:head>
	<title>Dashboard Saya — PeduliBersama</title>
</svelte:head>

<div class="py-10 bg-[#F1F0F1] min-h-screen font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
		
		<!-- Profile Header Banner -->
		<div class="bg-[#0D150F] text-white rounded-3xl p-6 sm:p-8 border border-[#0E6A36]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
			<div class="flex items-center gap-4">
				<div class="w-16 h-16 rounded-2xl bg-[#0E6A36] text-white font-mono font-bold text-2xl flex items-center justify-center shadow-md border border-[#6FC052]/40">
					SB
				</div>
				<div>
					<div class="flex items-center gap-2">
						<h1 class="font-extrabold text-2xl text-white">Siti Baik</h1>
						<span class="bg-[#6FC052]/15 text-[#6FC052] border border-[#6FC052]/30 rounded-full font-mono text-[10px] px-3 py-1 font-bold">
							PAHLAWAN KEBAIKAN
						</span>
					</div>
					<p class="text-slate-400 text-xs mt-1 font-mono">ID DONATUR: #PB-9942A • TERVERIFIKASI</p>
				</div>
			</div>

			<div class="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6">
				<div>
					<span class="block text-[10px] text-slate-400 font-mono font-bold uppercase">TOTAL KONTRIBUSI</span>
					<span class="font-mono font-black text-[#6FC052] text-2xl">{formatRupiah(500000)}</span>
				</div>
				<div>
					<span class="block text-[10px] text-slate-400 font-mono font-bold uppercase">AKSI TERBANTU</span>
					<span class="font-mono font-black text-white text-2xl">3 Program</span>
				</div>
			</div>
		</div>

		<!-- Dashboard Navigation & Content -->
		<div class="space-y-6">
			<div class="flex gap-2 border-b border-[#B5B3A9]/20 pb-2 font-mono text-xs">
				<button 
					onclick={() => activeTab = 'donations'} 
					class="px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
						activeTab === 'donations' ? 'bg-[#0E6A36] text-white border-[#0E6A36] shadow-xs' : 'bg-white text-[#0D150F] border-[#B5B3A9]/30 hover:bg-[#F1F0F1]'
					}"
				>
					Riwayat Donasi ({myDonations.length})
				</button>
				<button 
					onclick={() => activeTab = 'badges'} 
					class="px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
						activeTab === 'badges' ? 'bg-[#0E6A36] text-white border-[#0E6A36] shadow-xs' : 'bg-white text-[#0D150F] border-[#B5B3A9]/30 hover:bg-[#F1F0F1]'
					}"
				>
					Lencana & Pencapaian 🏆
				</button>
			</div>

			{#if activeTab === 'donations'}
				<div class="bg-white rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] overflow-hidden">
					<div class="divide-y divide-[#B5B3A9]/20">
						{#each myDonations as item (item.id)}
							<div class="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F1F0F1]/50 transition-colors">
								<div class="space-y-1">
									<span class="font-mono text-[10px] text-[#0D150F]/60 font-semibold">{item.date}</span>
									<h3 class="font-bold text-[#0D150F] text-base">{item.campaignTitle}</h3>
									<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-[10px] px-2.5 py-0.5 font-bold inline-block">
										✓ {item.status}
									</span>
								</div>

								<div class="text-right">
									<span class="font-mono font-black text-[#0E6A36] text-lg sm:text-xl">{formatRupiah(item.amount)}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
					<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] text-center space-y-3">
						<div class="text-4xl">🌱</div>
						<h4 class="font-bold text-[#0D150F] text-base">Donatur Pertama</h4>
						<p class="text-[#0D150F]/70 text-xs font-medium">Memulai langkah awal kebaikanmu di buku kas publik.</p>
					</div>
					<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] text-center space-y-3">
						<div class="text-4xl">🦸‍♀️</div>
						<h4 class="font-bold text-[#0D150F] text-base">Tanggap Bencana</h4>
						<p class="text-[#0D150F]/70 text-xs font-medium">Mendukung kampanye darurat bencana alam.</p>
					</div>
					<div class="bg-white p-6 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] text-center space-y-3 opacity-50">
						<div class="text-4xl">⭐</div>
						<h4 class="font-bold text-[#0D150F] text-base">Donatur Setia 10x</h4>
						<p class="text-[#0D150F]/70 text-xs font-medium">Salurkan 10x donasi untuk membuka lencana ini.</p>
					</div>
				</div>
			{/if}
		</div>

	</div>
</div>
