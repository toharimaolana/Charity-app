<script>
	// Ultra-Sleek Edge-to-Edge Marquee Stream (Without Outer White Card Wrapper)
	const incomingDonations = [
		{ id: 1, name: 'Siti Rahma', amount: 150000, time: '2 mnt lalu', avatar: 'SR', note: 'Semoga segera pulih saudara kita! ❤️' },
		{ id: 2, name: 'Budi Santoso', amount: 500000, time: '5 mnt lalu', avatar: 'BS', note: 'Untuk pendidikan anak-anak penerus bangsa.' },
		{ id: 3, name: 'Dr. Anita Wijaya', amount: 250000, time: '8 mnt lalu', avatar: 'AW', note: 'Lekas sembuh untuk para lansia.' },
		{ id: 4, name: 'Hamba Allah', amount: 100000, time: '12 mnt lalu', avatar: 'HA', note: 'Semoga berkah untuk semua.' },
		{ id: 5, name: 'Rian Hidayat', amount: 300000, time: '15 mnt lalu', avatar: 'RH', note: 'Semangat para relawan di lapangan!' }
	];

	const outgoingDisbursements = [
		{ id: 'out-1', code: 'TRX #OUT-1048B', title: 'Logistik Sembako Lamsel', amount: 350000, time: '17:15 WIB', location: 'Lampung' },
		{ id: 'out-2', code: 'TRX #OUT-1047B', title: 'Kit Medis & P3K Lansia', amount: 200000, time: '16:45 WIB', location: 'Garut' },
		{ id: 'out-3', code: 'TRX #OUT-1046B', title: '50 Set Seragam Sekolah', amount: 500000, time: '15:30 WIB', location: 'Jambi' },
		{ id: 'out-4', code: 'TRX #OUT-1045B', title: 'Ambulans Siaga Bencana', amount: 150000, time: '14:20 WIB', location: 'Bogor' }
	];

	function formatRupiah(num) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(num);
	}
</script>

<div class="w-full font-sans space-y-4 overflow-hidden">
	
	<!-- Minimalist Header Strip -->
	<div class="flex items-center justify-between pb-1">
		<div class="flex items-center gap-2">
			<span class="w-2.5 h-2.5 rounded-full bg-[#6FC052] animate-pulse"></span>
			<span class="font-mono text-xs font-bold text-[#0E6A36] uppercase tracking-wider">LIVESTREAM DONASI & AUDIT KAS TERBUKA</span>
		</div>

		<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-[11px] px-3 py-1 font-bold">
			LIVE FEED
		</span>
	</div>

	<!-- Track 1: Donasi Masuk (Seamless Floating Pills) -->
	<div class="relative overflow-hidden group">
		<div class="flex gap-3 w-max animate-marquee group-hover:[animation-play-state:paused]">
			{#each [...incomingDonations, ...incomingDonations] as item}
				<div class="bg-white px-4 py-2.5 rounded-full border border-[#B5B3A9]/30 hover:border-[#0E6A36] shadow-2xs transition-all flex items-center gap-3 shrink-0">
					<div class="w-6 h-6 rounded-full bg-[#0E6A36] text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
						{item.avatar}
					</div>
					
					<div class="flex items-center gap-2 text-xs">
						<span class="font-bold text-[#0D150F]">{item.name}</span>
						<span class="text-[#0D150F]/50 font-mono text-[10px]">• {item.time}</span>
					</div>

					<span class="font-mono font-black text-xs text-[#0E6A36] bg-[#6FC052]/15 px-2.5 py-0.5 rounded-full border border-[#6FC052]/30">
						+{formatRupiah(item.amount)}
					</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Track 2: Penyaluran Kas Lapangan (Reverse Seamless Floating Pills) -->
	<div class="relative overflow-hidden group">
		<div class="flex gap-3 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
			{#each [...outgoingDisbursements, ...outgoingDisbursements] as item}
				<div class="bg-white px-4 py-2.5 rounded-full border border-[#B5B3A9]/30 hover:border-[#0E6A36] shadow-2xs transition-all flex items-center gap-3 shrink-0">
					<span class="font-mono text-[10px] font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2.5 py-0.5 rounded-full border border-[#6FC052]/30">
						{item.code}
					</span>

					<div class="flex items-center gap-2 text-xs">
						<span class="font-bold text-[#0D150F]">{item.title}</span>
						<span class="font-mono text-[10px] text-[#0D150F]/60">📍 {item.location}</span>
					</div>

					<span class="font-mono font-black text-xs text-[#BE123C] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
						-{formatRupiah(item.amount)}
					</span>
				</div>
			{/each}
		</div>
	</div>

</div>

<style>
	@keyframes marquee {
		0% { transform: translateX(0%); }
		100% { transform: translateX(-50%); }
	}
	@keyframes marquee-reverse {
		0% { transform: translateX(-50%); }
		100% { transform: translateX(0%); }
	}
	.animate-marquee {
		animation: marquee 25s linear infinite;
	}
	.animate-marquee-reverse {
		animation: marquee-reverse 25s linear infinite;
	}
</style>
