<script>
	import { page } from '$app/stores';
	import { campaigns, getCampaignBySlug } from '$lib/data/campaigns.js';

	let selectedCampaign = $state(null);
	let donationAmount = $state(100000);
	let customAmount = $state('');
	let donorName = $state('');
	let donorEmail = $state('');
	let isCreatingPayment = $state(false);

	const presets = [50000, 100000, 250000, 500000];

	let activeAmount = $derived(customAmount ? Number(customAmount) : donationAmount);

	// Ambil campaign berdasarkan slug di URL
	$effect(() => {
		const slug = $page.params.slug;
		selectedCampaign = getCampaignBySlug ? getCampaignBySlug(slug) ?? campaigns[0] : campaigns[0];
	});

	// Hitung progress
	let progressPercent = $derived(
		selectedCampaign
			? Math.min(
					100,
					Math.round((selectedCampaign.raised / selectedCampaign.target) * 100)
			  )
			: 0
	);

	// Format currency IDR
	function formatIDR(value) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(value || 0);
	}

	// Handle donate (call API Xendit)
	async function handleDonate() {
		if (!selectedCampaign) return;

		const finalAmount = activeAmount;

		if (!finalAmount || finalAmount < 10000) {
			alert('Minimal donasi adalah Rp 10.000');
			return;
		}

		if (!donorEmail || !donorEmail.includes('@')) {
			alert('Mohon masukkan email yang valid');
			return;
		}

		isCreatingPayment = true;

		try {
			const response = await fetch('/api/xendit/create-invoice', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					amount: finalAmount,
					campaignSlug: selectedCampaign.slug,
					campaignTitle: selectedCampaign.title,
					donorName: donorName || 'Anonymous',
					donorEmail
				})
			});

			const data = await response.json();

			if (!response.ok) {
				let msg = data.error || 'Gagal membuat invoice';
				if (data.detail) msg += `\n\nDetail: ${data.detail}`;
				throw new Error(msg);
			}

			if (!data.invoiceUrl) {
				throw new Error('Invoice URL tidak ditemukan');
			}

			window.location.href = data.invoiceUrl;
		} catch (error) {
			console.error('❌ Error:', error);
			alert('Terjadi kesalahan saat membuat pembayaran:\n\n' + error.message);
		} finally {
			isCreatingPayment = false;
		}
	}
</script>

<svelte:head>
	<title>{selectedCampaign ? selectedCampaign.title : 'Kampanye'} — PeduliBersama</title>
</svelte:head>

<div class="py-10 bg-[#F1F0F1] min-h-screen font-sans">
	{#if selectedCampaign}
		<!-- Main content -->
		<section class="px-4">
			<div class="max-w-7xl mx-auto space-y-6">
				<!-- Breadcrumb -->
				<div class="flex items-center gap-2 text-xs font-mono font-semibold text-[#0D150F]/70">
					<a href="/" class="hover:text-[#0E6A36]">BERANDA</a>
					<span>/</span>
					<a href="/campaigns" class="hover:text-[#0E6A36]">KAMPANYE</a>
					<span>/</span>
					<span class="text-[#0D150F] font-medium truncate max-w-xs">
						{selectedCampaign.title}
					</span>
				</div>

				<div class="grid lg:grid-cols-3 gap-8 items-start">
					<!-- Left: Image + description -->
					<div class="lg:col-span-2 space-y-6">
						<!-- Image -->
						<div class="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] border border-[#B5B3A9]/30 h-80 sm:h-96 bg-slate-900">
							<img
								src={selectedCampaign.image}
								alt={selectedCampaign.title}
								class="w-full h-full object-cover"
							/>
							<div class="absolute top-4 left-4 font-mono text-xs font-bold px-3.5 py-1 rounded-lg bg-white/95 text-[#0E6A36] uppercase tracking-wider shadow-xs">
								{selectedCampaign.category || 'Kemanusiaan'}
							</div>
							<div class="absolute top-4 right-4 font-mono text-xs font-bold px-3.5 py-1 rounded-lg bg-[#BE123C] text-white uppercase tracking-wider shadow-xs">
								⏳ {selectedCampaign.daysLeft || 14} HARI LAGI
							</div>
						</div>

						<!-- Title + meta -->
						<div class="space-y-3">
							<h1 class="font-extrabold text-2xl sm:text-4xl text-[#0D150F] leading-tight">
								{selectedCampaign.title}
							</h1>
							<p class="text-[#0D150F]/80 text-sm sm:text-base font-medium leading-relaxed">
								{selectedCampaign.description}
							</p>
						</div>

						<!-- Usage -->
						<div class="bg-white rounded-xl p-6 sm:p-8 space-y-4 border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)]">
							<h3 class="font-bold text-xl text-[#0D150F]">
								Transparansi Penggunaan Dana
							</h3>
							<p class="text-[#0D150F]/70 text-xs font-medium leading-relaxed">
								Setiap rupiah yang disalurkan dicatat pada ledger publik dan dialokasikan 100% langsung untuk bantuan lapangan tanpa potongan tersembunyi.
							</p>
							<div class="w-full bg-[#F1F0F1] rounded-full h-2.5 overflow-hidden p-0.5 border border-[#B5B3A9]/30">
								<div
									class="h-full rounded-full bg-[#0E6A36] transition-all duration-700"
									style={`width: ${progressPercent}%`}
								></div>
							</div>
						</div>
					</div>

					<!-- Right: Donation card -->
					<div class="lg:sticky lg:top-24 h-fit">
						<div class="bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] border border-[#B5B3A9]/30">
							<!-- Progress -->
							<div class="space-y-2">
								<span class="text-xs text-[#0D150F]/60 font-mono font-bold uppercase tracking-wider block">DANA TERKUMPUL:</span>
								<div class="flex justify-between items-baseline">
									<span class="font-mono font-black text-2xl text-[#0D150F]">
										{formatIDR(selectedCampaign.raised)}
									</span>
									<span class="font-mono font-bold text-[#0E6A36] bg-[#6FC052]/15 px-2 py-0.5 rounded-md border border-[#6FC052]/30 text-xs">
										{progressPercent}%
									</span>
								</div>
								<p class="text-xs text-[#0D150F]/70 font-medium">
									dari target <strong class="font-mono text-[#0D150F]">{formatIDR(selectedCampaign.target)}</strong>
								</p>
							</div>

							<!-- Donation form -->
							<form
								onsubmit={(e) => {
									e.preventDefault();
									handleDonate();
								}}
								class="space-y-4 pt-4 border-t border-[#B5B3A9]/20"
							>
								<div>
									<div class="flex items-center justify-between mb-2">
										<label for="input-amount" class="block text-xs font-mono font-bold text-[#0E6A36] uppercase tracking-wider">
											PILIH NOMINAL DONASI
										</label>
										<span class="font-mono text-xs font-bold text-[#0D150F]">{formatIDR(activeAmount)}</span>
									</div>

									<div class="grid grid-cols-2 gap-2 mb-3">
										{#each presets as preset}
											<button
												type="button"
												class="py-2.5 px-3 text-xs font-mono font-bold rounded-xl border transition-all text-center {donationAmount === preset && !customAmount ? 'bg-[#0E6A36] text-white border-[#0E6A36] shadow-sm font-extrabold scale-105' : 'bg-[#F1F0F1] text-[#0D150F] border-[#B5B3A9]/40 hover:bg-white'}"
												onclick={() => { donationAmount = preset; customAmount = ''; }}
											>
												{formatIDR(preset)}
											</button>
										{/each}
									</div>

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
									<label for="input-donor-name" class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">
										NAMA DONATUR <span class="text-[#0D150F]/40 font-normal">(OPSIONAL)</span>
									</label>
									<input
										id="input-donor-name"
										type="text"
										bind:value={donorName}
										class="w-full px-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
										placeholder="Hamba Allah / Anonim"
									/>
								</div>

								<div>
									<label for="input-donor-email" class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">
										ALAMAT EMAIL <span class="text-[#BE123C]">*</span>
									</label>
									<input
										id="input-donor-email"
										type="email"
										bind:value={donorEmail}
										required
										class="w-full px-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
										placeholder="nama@email.com"
									/>
								</div>

								<button
									type="submit"
									disabled={isCreatingPayment}
									class="w-full py-4 bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs rounded-xl shadow-sm uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
								>
									{#if isCreatingPayment}
										<span class="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
										<span>Menghubungkan Xendit...</span>
									{:else}
										<span>Salurkan Donasi {formatIDR(activeAmount)} via Xendit →</span>
									{/if}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else}
		<section class="py-20 px-4">
			<div class="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] space-y-4">
				<h1 class="font-bold text-2xl text-[#0D150F]">Kampanye Tidak Ditemukan</h1>
				<p class="text-[#0D150F]/70 text-xs font-medium">
					Kampanye yang Anda cari tidak tersedia atau telah berakhir.
				</p>
				<a
					href="/campaigns"
					class="inline-block px-6 py-3 bg-[#0E6A36] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#0B542B] transition-all"
				>
					Kembali ke Daftar Kampanye
				</a>
			</div>
		</section>
	{/if}
</div>
