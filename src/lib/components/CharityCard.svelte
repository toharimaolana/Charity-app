<script>
	let { campaign } = $props();

	// Format currency to IDR
	function formatCurrency(amount) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	}
</script>

<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
	<!-- Image -->
	<div class="relative overflow-hidden h-56">
		<img
			src={campaign.image}
			alt={campaign.title}
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
		/>
		<div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-violet-600">
			{campaign.daysLeft} days left
		</div>
	</div>

	<!-- Content -->
	<div class="p-6">
		<h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
			{campaign.title}
		</h3>
		<p class="text-gray-600 text-sm mb-4 line-clamp-2">
			{campaign.description}
		</p>

		<!-- Progress Bar -->
		<div class="mb-4">
			<div class="flex justify-between text-sm mb-2">
				<span class="font-semibold text-gray-900">
					{formatCurrency(campaign.raised)}
				</span>
				<span class="text-gray-600">
					{campaign.progress}%
				</span>
			</div>
			<div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
				<div
					class="bg-gradient-to-r from-violet-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
					style="width: {campaign.progress}%"
				></div>
			</div>
			<div class="text-sm text-gray-500 mt-2">
				Target: {formatCurrency(campaign.target)}
			</div>
		</div>

		<!-- Stats -->
		<div class="flex items-center justify-between pt-4 border-t border-gray-100">
			<div class="flex items-center text-gray-600 text-sm">
				<svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
				</svg>
				{campaign.donors} donors
			</div>
			<button
				class="px-6 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors duration-200"
			>
				Donate
			</button>
		</div>
	</div>
</div>
