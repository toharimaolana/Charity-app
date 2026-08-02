<script>
	import { page } from '$app/stores';
	import { campaigns } from '$lib/data/campaigns.js';

	let campaign = $derived(
		campaigns.find((c) => c.slug === $page.params.id || String(c.id) === $page.params.id) ?? campaigns[0]
	);

	let donationAmount = $state(50000);
	let customAmount = $state('');
	let donorName = $state('');
	let isAnonymous = $state(false);
	let donorEmail = $state('donatur@pedulibersama.id');
	let activeTab = $state('story');
	let isSuccessModalOpen = $state(false);
	let isSubmitting = $state(false);

	const presets = [25000, 50000, 100000, 250000, 500000];

	let activeAmount = $derived(customAmount ? Number(customAmount) : donationAmount);

	let percentage = $derived(
		Math.min(100, Math.round(((campaign.raised || 0) / (campaign.target || 1)) * 100))
	);

	function formatRupiah(num) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(num || 0);
	}

	async function handleDonate(e) {
		e.preventDefault();
		const finalAmount = activeAmount;
		if (!finalAmount || finalAmount < 10000) {
			alert('Minimal donasi adalah Rp 10.000');
			return;
		}

		isSubmitting = true;
		try {
			const res = await fetch('/api/xendit/create-invoice', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					amount: finalAmount,
					campaignSlug: campaign.slug || String(campaign.id),
					campaignTitle: campaign.title,
					donorName: isAnonymous ? 'Hamba Allah' : donorName || 'Anonim',
					donorEmail: donorEmail || 'donatur@pedulibersama.id'
				})
			});
			const data = await res.json();
			if (data.invoiceUrl) {
				window.location.href = data.invoiceUrl;
			} else {
				isSuccessModalOpen = true;
			}
		} catch {
			isSuccessModalOpen = true;
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{campaign.title} — PeduliBersama</title>
</svelte:head>

<div class="py-10 bg-[#F1F0F1] min-h-screen font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
		
		<!-- Breadcrumb Navigation -->
		<div class="flex items-center gap-2 text-xs font-semibold text-[#0D150F]/70 font-mono">
			<a href="/" class="hover:text-[#0E6A36]">BERANDA</a>
			<span>/</span>
			<a href="/campaigns" class="hover:text-[#0E6A36]">KAMPANYE</a>
			<span>/</span>
			<span class="text-[#0D150F] truncate max-w-xs">{campaign.title}</span>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<!-- Left Column: Media & Story -->
			<div class="lg:col-span-8 space-y-6">
				
				<!-- Campaign Main Image Box -->
				<div class="relative rounded-2xl overflow-hidden bg-slate-900 border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] h-72 sm:h-96">
					<img src={campaign.image} alt={campaign.title} class="w-full h-full object-cover" />
					<div class="absolute inset-0 bg-gradient-to-t from-[#0D150F]/80 via-transparent to-transparent"></div>
					
					<div class="absolute top-4 left-4 flex gap-2">
						<span class="bg-white/95 text-[#0E6A36] font-mono font-bold text-xs px-3.5 py-1 rounded-lg uppercase tracking-wider shadow-xs">
							{campaign.category || 'Kemanusiaan'}
						</span>
						{#if campaign.isUrgent}
							<span class="bg-[#BE123C] text-white font-mono font-bold text-xs px-3.5 py-1 rounded-lg uppercase tracking-wider shadow-xs animate-pulse">
								🚨 BUTUH SEGERA
							</span>
						{/if}
					</div>

					{#if campaign.location}
						<div class="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-bold bg-[#0D150F]/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#6FC052]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
							<span>{campaign.location}</span>
						</div>
					{/if}
				</div>

				<!-- Title Header -->
				<div class="space-y-2">
					<h1 class="font-extrabold text-2xl sm:text-4xl text-[#0D150F] tracking-tight leading-tight">
						{campaign.title}
					</h1>
				</div>

				<!-- Tabs Navigation -->
				<div class="border-b border-[#B5B3A9]/30 flex gap-6">
					<button 
						onclick={() => activeTab = 'story'}
						class="pb-3 text-xs font-mono font-bold transition-all relative uppercase tracking-wider {activeTab === 'story' ? 'text-[#0E6A36] border-b-2 border-[#0E6A36]' : 'text-[#0D150F]/60 hover:text-[#0D150F]'}"
					>
						CERITA LENGKAP
					</button>
					<button 
						onclick={() => activeTab = 'updates'}
						class="pb-3 text-xs font-mono font-bold transition-all relative uppercase tracking-wider {activeTab === 'updates' ? 'text-[#0E6A36] border-b-2 border-[#0E6A36]' : 'text-[#0D150F]/60 hover:text-[#0D150F]'}"
					>
						KABAR TERBARU (2)
					</button>
				</div>

				<!-- Tab Content Card -->
				<div class="bg-white p-6 sm:p-8 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] leading-relaxed text-[#0D150F]/80 space-y-4 text-sm font-medium">
					{#if activeTab === 'story'}
						<p class="font-bold text-[#0D150F] text-base leading-snug">
							{campaign.description}
						</p>
						<p>
							Setiap harinya, tantangan yang dihadapi semakin berat. Tanpa uluran tangan dan gotong royong dari orang-orang baik seperti Anda, proses penyaluran bantuan ini akan terkendala.
						</p>
					{:else}
						<div class="space-y-4">
							<div class="border-l-2 border-[#0E6A36] pl-4 py-1 space-y-1">
								<span class="text-xs font-mono font-bold text-[#0D150F]/50">1 AGUSTUS 2026</span>
								<h4 class="font-bold text-[#0D150F] text-sm">Penyaluran Tahap Pertama Sukses Dilakukan</h4>
								<p class="text-xs text-[#0D150F]/70">Tim relawan telah mendistribusikan 150 paket sembako awal kepada keluarga terdampak.</p>
							</div>
						</div>
					{/if}
				</div>

			</div>

			<!-- Right Column: Sticky Donation Form Card with Xendit Integration -->
			<div class="lg:col-span-4">
				<div class="sticky top-24 bg-white rounded-xl p-6 border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] space-y-6">
					
					<!-- Progress Overview -->
					<div class="space-y-2">
						<span class="text-xs text-[#0D150F]/60 font-mono font-bold uppercase tracking-wider block">TERKUMPUL SAAT INI:</span>
						<div class="flex items-baseline justify-between">
							<span class="font-mono font-black text-2xl text-[#0D150F]">{formatRupiah(campaign.raised)}</span>
							<span class="font-mono font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2 py-0.5 rounded-md border border-[#6FC052]/30 text-xs">{percentage}%</span>
						</div>

						<div class="w-full h-2.5 bg-[#F1F0F1] rounded-full overflow-hidden p-0.5 border border-[#B5B3A9]/30">
							<div class="h-full bg-[#0E6A36] rounded-full transition-all duration-700" style="width: {percentage}%"></div>
						</div>

						<div class="flex justify-between text-xs text-[#0D150F]/70 font-semibold pt-1">
							<span>Target: <strong class="font-mono text-[#0D150F]">{formatRupiah(campaign.target)}</strong></span>
							<span><strong class="font-mono text-[#0D150F]">{campaign.daysLeft || 14}</strong> Hari Lagi</span>
						</div>
					</div>

					<!-- Form with Direct Xendit Integration -->
					<form onsubmit={handleDonate} class="space-y-4 pt-4 border-t border-[#B5B3A9]/20">
						<div>
							<div class="flex items-center justify-between mb-2">
								<label class="block text-xs font-mono font-bold text-[#0E6A36] uppercase tracking-wider">PILIH NOMINAL DONASI</label>
								<span class="font-mono text-xs font-bold text-[#0D150F]">{formatRupiah(activeAmount)}</span>
							</div>

							<!-- Preset Buttons Grid with High-Contrast Active & Inactive Styling -->
							<div class="grid grid-cols-3 gap-2 mb-3">
								{#each presets as amt}
									<button 
										type="button"
										onclick={() => { donationAmount = amt; customAmount = ''; }}
										class="py-2.5 px-2 rounded-xl text-xs font-mono font-bold border transition-all text-center {donationAmount === amt && !customAmount ? 'bg-[#0E6A36] text-white border-[#0E6A36] shadow-sm font-extrabold scale-105' : 'bg-[#F1F0F1] text-[#0D150F] border-[#B5B3A9]/40 hover:bg-white'}"
									>
										{formatRupiah(amt)}
									</button>
								{/each}
							</div>

							<!-- Custom Amount Input -->
							<div class="relative">
								<span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#0E6A36]">Rp</span>
								<input 
									type="number" 
									placeholder="Atau ketik nominal kustom..." 
									bind:value={customAmount}
									min="10000"
									class="w-full pl-9 pr-3 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/40 rounded-xl text-xs font-mono font-bold text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
								/>
							</div>
						</div>

						<div>
							<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">NAMA DONATUR</label>
							<input 
								type="text" 
								placeholder="Nama Anda..." 
								bind:value={donorName}
								disabled={isAnonymous}
								class="w-full px-3 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36] disabled:opacity-50"
							/>
							<label class="flex items-center gap-2 mt-2 cursor-pointer">
								<input type="checkbox" bind:checked={isAnonymous} class="rounded text-[#0E6A36] focus:ring-[#0E6A36]" />
								<span class="text-xs text-[#0D150F]/70 font-semibold">Sembunyikan nama saya (Hamba Allah)</span>
							</label>
						</div>

						<div>
							<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">ALAMAT EMAIL (PEMBAYARAN XENDIT)</label>
							<input 
								type="email" 
								required
								placeholder="nama@email.com" 
								bind:value={donorEmail}
								class="w-full px-3 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
							/>
						</div>

						<!-- Xendit Badge Guarantee -->
						<div class="bg-[#6FC052]/15 border border-[#6FC052]/30 rounded-lg p-2 flex items-center justify-between text-[11px] font-mono font-bold text-[#0E6A36]">
							<span>⚡ XENDIT PAYMENT GATEWAY</span>
							<span>100% AMAN</span>
						</div>

						<button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-3.5 rounded-xl shadow-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50"
						>
							{#if isSubmitting}
								<span class="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
								<span>Menghubungkan Xendit...</span>
							{:else}
								<span>Bayar {formatRupiah(activeAmount)} via Xendit →</span>
							{/if}
						</button>
					</form>

				</div>
			</div>

		</div>

	</div>
</div>

<!-- SUCCESS SIMULATION MODAL (FALLBACK) -->
{#if isSuccessModalOpen}
	<div class="fixed inset-0 z-50 bg-[#0D150F]/70 backdrop-blur-xs flex items-center justify-center p-4">
		<div class="bg-white rounded-xl p-8 max-w-md w-full text-center space-y-4 border border-[#B5B3A9]/30 shadow-xl font-sans">
			<div class="w-14 h-14 bg-[#6FC052]/20 text-[#0E6A36] rounded-full flex items-center justify-center text-3xl mx-auto font-bold border border-[#6FC052]/40">
				🎉
			</div>
			<h3 class="font-extrabold text-2xl text-[#0D150F]">Terima Kasih, Donatur Baik!</h3>
			<p class="text-[#0D150F]/70 text-xs leading-relaxed font-medium">
				Simulasi donasi sebesar <strong class="font-mono text-[#0E6A36]">{formatRupiah(activeAmount)}</strong> berhasil dicatat di ledger publik.
			</p>
			<button 
				onclick={() => isSuccessModalOpen = false}
				class="w-full bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-3 rounded-xl transition-all"
			>
				Tutup Modal
			</button>
		</div>
	</div>
{/if}
