<script>
	let values = [
		{
			title: 'Transparency',
			description: 'Every donation is tracked and reported with complete visibility. We believe trust is built through openness.',
			icon: 'shield',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'Impact-Driven',
			description: 'We measure success by the lives we touch and the communities we transform, not just by funds raised.',
			icon: 'chart',
			color: 'from-violet-500 to-purple-500'
		},
		{
			title: 'Innovation',
			description: 'Leveraging cutting-edge technology to make giving more efficient, accessible, and meaningful for everyone.',
			icon: 'spark',
			color: 'from-orange-500 to-red-500'
		},
		{
			title: 'Inclusivity',
			description: 'Everyone deserves the opportunity to give and receive. We create solutions that work for all communities.',
			icon: 'people',
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'Accountability',
			description: 'We hold ourselves to the highest standards, ensuring every dollar makes a real difference in people\'s lives.',
			icon: 'check',
			color: 'from-pink-500 to-rose-500'
		},
		{
			title: 'Collaboration',
			description: 'Building partnerships with NGOs, donors, and communities to amplify our collective impact worldwide.',
			icon: 'hands',
			color: 'from-indigo-500 to-purple-500'
		}
	];
</script>

<section class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-violet-600 font-semibold text-sm uppercase tracking-wide">What Drives Us</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				Our Core Values
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				These principles guide every decision we make and every action we take.
			</p>
		</div>

		<!-- Values Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each values as value}
				<div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
					<!-- Icon Container -->
					<div class="w-14 h-14 bg-gradient-to-br {value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
						{#if value.icon === 'shield'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
							</svg>
						{:else if value.icon === 'chart'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
							</svg>
						{:else if value.icon === 'spark'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
							</svg>
						{:else if value.icon === 'people'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
							</svg>
						{:else if value.icon === 'check'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						{:else if value.icon === 'hands'}
							<svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
							</svg>
						{/if}
					</div>

					<!-- Content -->
					<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
						{value.title}
					</h3>
					<p class="text-gray-600 leading-relaxed">
						{value.description}
					</p>

					<!-- Decorative Corner -->
					<div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br {value.color} opacity-5 rounded-bl-full"></div>
				</div>
			{/each}
		</div>
	</div>
</section>
