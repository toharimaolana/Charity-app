<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { campaigns, getCampaignBySlug } from '$lib/data/campaigns.js';

	let selectedCampaign = $state(null);
	let amount = $state(100000);
	let donorName = $state('');
	let donorEmail = $state('');
	let isCreatingPayment = $state(false);

	// Ambil campaign berdasarkan slug di URL
	$effect(() => {
		const slug = $page.params.slug;
		selectedCampaign = getCampaignBySlug(slug) ?? campaigns[0];
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
		}).format(value);
	}

	// Handle donate (call API Xendit)
	async function handleDonate() {
		if (!selectedCampaign) return;

		if (!amount || amount < 10000) {
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
					amount,
					campaignSlug: selectedCampaign.slug,
					campaignTitle: selectedCampaign.title,
					donorName: donorName || 'Anonymous',
					donorEmail
				})
			});

			const data = await response.json();
			console.log('📥 Response from server:', data);

			if (!response.ok) {
				let msg = data.error || 'Gagal membuat invoice';
				if (data.detail) msg += `\n\nDetail: ${data.detail}`;
				throw new Error(msg);
			}

			if (!data.invoiceUrl) {
				throw new Error('Invoice URL tidak ditemukan');
			}

			// Redirect ke hosted payment page Xendit
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
	<title>{selectedCampaign ? selectedCampaign.title : 'Campaign'} | Charity Platform</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navbar />

	{#if selectedCampaign}
		<!-- Hero + main content -->
		<section class="pt-24 pb-16 px-4">
			<div class="max-w-7xl mx-auto">
				<!-- Breadcrumb -->
				<div class="flex items-center gap-2 text-sm text-gray-600 mb-6">
					<a href="/" class="hover:text-purple-600">Home</a>
					<span>/</span>
					<a href="/campaign" class="hover:text-purple-600">Campaign</a>
					<span>/</span>
					<span class="text-gray-900 font-medium line-clamp-1">
						{selectedCampaign.title}
					</span>
				</div>

				<div class="grid lg:grid-cols-3 gap-10">
					<!-- Left: Image + description -->
					<div class="lg:col-span-2 space-y-8">
						<!-- Image -->
						<div class="relative rounded-2xl overflow-hidden shadow-2xl group">
							<img
								src={selectedCampaign.image}
								alt={selectedCampaign.title}
								class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<!-- Category badge -->
							<div
								class="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/95 text-purple-600 font-semibold text-sm shadow"
							>
								{selectedCampaign.category}
							</div>
							<!-- Days left badge -->
							<div
								class="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 text-orange-600 font-semibold text-sm shadow"
							>
								{selectedCampaign.daysLeft} days left
							</div>
						</div>

						<!-- Title + meta -->
						<div>
							<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								{selectedCampaign.title}
							</h1>
							<p class="text-lg text-gray-700 mb-6">
								{selectedCampaign.shortDescription}
							</p>

							<div class="flex flex-wrap gap-4 text-sm">
								<div class="flex items-center gap-2 text-gray-600">
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span>{selectedCampaign.location}</span>
								</div>

								<div class="flex items-center gap-2 text-gray-600">
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span>{selectedCampaign.donors.toLocaleString()} donors</span>
								</div>
							</div>
						</div>

						<!-- About / Highlights / Usage -->
						<div class="bg-white rounded-2xl p-8 shadow border border-gray-100 space-y-6">
							<div>
								<h2 class="text-xl font-bold text-gray-900 mb-3">About This Campaign</h2>
								<p class="text-gray-700 leading-relaxed">
									{selectedCampaign.longDescription}
								</p>
							</div>

							<div>
								<h3 class="text-lg font-semibold text-gray-900 mb-3">
									Impact Highlights
								</h3>
								<ul class="space-y-2 text-gray-700">
									{#each selectedCampaign.highlights as highlight}
										<li class="flex gap-2">
											<span class="text-purple-600 mt-1">•</span>
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div>
								<h3 class="text-lg font-semibold text-gray-900 mb-3">
									How Your Donation is Used
								</h3>
								<div class="space-y-4">
									{#each selectedCampaign.usageBreakdown as item}
										<div>
											<div class="flex justify-between text-sm mb-1">
												<span class="font-medium text-gray-800">{item.label}</span>
												<span class="text-purple-600 font-semibold">
													{item.percent}%
												</span>
											</div>
											<div class="w-full bg-gray-200 rounded-full h-2">
												<div
													class="h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
													style={`width: ${item.percent}%`}
												/>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<!-- Right: Donation card -->
					<div class="lg:sticky lg:top-24 h-fit">
						<div class="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
							<!-- Progress -->
							<div class="mb-6">
								<div class="flex justify-between items-end mb-2">
									<span class="text-2xl font-bold text-gray-900">
										{formatIDR(selectedCampaign.raised)}
									</span>
									<span class="text-xs text-gray-600">
										of {formatIDR(selectedCampaign.target)}
									</span>
								</div>
								<div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
									<div
										class="h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
										style={`width: ${progressPercent}%`}
									/>
								</div>
								<p class="text-sm text-gray-600">
									<span class="font-semibold text-purple-600">{progressPercent}%</span>
									&nbsp;funded
								</p>
							</div>

							<!-- Donation form -->
							<form
								onsubmit={(e) => {
									e.preventDefault();
									handleDonate();
								}}
								class="space-y-4"
							>
								<div>
									<label class="block text-sm font-semibold text-gray-700 mb-2">
										Donation Amount (IDR)
									</label>
									<input
										type="number"
										min="10000"
										step="1000"
										bind:value={amount}
										required
										class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 text-lg font-semibold"
										placeholder="100000"
									/>
								</div>

								<div class="grid grid-cols-2 gap-2">
									{#each [50000, 100000, 250000, 500000] as preset}
										<button
											type="button"
											class={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
												amount == preset
													? 'bg-purple-600 text-white border-purple-600'
													: 'bg-white text-gray-700 border-gray-200 hover:border-purple-400'
											}`}
											onclick={() => (amount = preset)}
										>
											{formatIDR(preset)}
										</button>
									{/each}
								</div>

								<div>
									<label class="block text-sm font-semibold text-gray-700 mb-2">
										Your Name <span class="text-gray-400 font-normal">(optional)</span>
									</label>
									<input
										type="text"
										bind:value={donorName}
										class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600"
										placeholder="Anonymous"
									/>
								</div>

								<div>
									<label class="block text-sm font-semibold text-gray-700 mb-2">
										Email Address <span class="text-red-500">*</span>
									</label>
									<input
										type="email"
										bind:value={donorEmail}
										required
										class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600"
										placeholder="you@example.com"
									/>
								</div>

								<button
									type="submit"
									disabled={isCreatingPayment}
									class="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{#if isCreatingPayment}
										<span class="flex items-center justify-center gap-2">
											<svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
												<circle
													class="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													stroke-width="4"
												></circle>
												<path
													class="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Creating payment link...
										</span>
									{:else}
										Donate Now
									{/if}
								</button>

								<p class="text-xs text-gray-500 pt-1">
									Payments are processed securely via Xendit. You can pay using bank transfer,
									e-wallet, virtual account, and more.
								</p>
							</form>

							<!-- Organizer info -->
							<div class="mt-6 pt-6 border-t border-gray-200">
								<div class="flex items-start gap-3">
									<div
										class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg"
									>
										{selectedCampaign.organizer.name.charAt(0)}
									</div>
									<div class="flex-1">
										<div class="flex items-center gap-2">
											<h4 class="font-bold text-gray-900">
												{selectedCampaign.organizer.name}
											</h4>
											{#if selectedCampaign.organizer.verified}
												<svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>
											{/if}
										</div>
										<p class="text-xs text-gray-600">
											{selectedCampaign.organizer.totalCampaigns} campaigns •
											&nbsp;{formatIDR(selectedCampaign.organizer.totalRaised)} raised
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else}
		<section class="pt-32 pb-20 px-4">
			<div class="max-w-3xl mx-auto text-center">
				<h1 class="text-3xl font-bold text-gray-900 mb-4">Campaign not found</h1>
				<p class="text-gray-600 mb-6">
					The campaign you are looking for does not exist or may have been removed.
				</p>
				<a
					href="/campaign"
					class="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
				>
					Back to All Campaigns
				</a>
			</div>
		</section>
	{/if}

	<Footer />
</div>
