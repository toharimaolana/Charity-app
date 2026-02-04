<script>
	let milestones = [
		{
			year: '2020',
			title: 'The Beginning',
			description: 'Founded with a vision to make charitable giving more accessible and transparent for everyone.',
			icon: 'rocket'
		},
		{
			year: '2021',
			title: 'First Million',
			description: 'Reached our first $1 million in donations, supporting 50+ campaigns across education and healthcare.',
			icon: 'trophy'
		},
		{
			year: '2022',
			title: 'Global Expansion',
			description: 'Expanded operations to 25 countries, partnering with local NGOs and community organizations.',
			icon: 'globe'
		},
		{
			year: '2023',
			title: 'Technology Innovation',
			description: 'Launched AI-powered matching system to connect donors with causes that align with their values.',
			icon: 'lightbulb'
		},
		{
			year: '2024',
			title: 'Community Milestone',
			description: 'Welcomed our 50,000th donor and celebrated $20M in total contributions to meaningful causes.',
			icon: 'users'
		},
		{
			year: '2026',
			title: 'Impact at Scale',
			description: 'Today, we continue to innovate and scale our impact, reaching communities in over 100 countries.',
			icon: 'heart'
		}
	];
</script>

<section id="our-story" class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-violet-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				A Story of Impact & Growth
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				From a small idea to a global movement, here's how we've grown together with our community.
			</p>
		</div>

		<!-- Timeline -->
		<div class="relative">
			<!-- Center Line (hidden on mobile) -->
			<div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-400 to-purple-600"></div>

			<!-- Milestones -->
			<div class="space-y-12">
				{#each milestones as milestone, index}
					<div class="relative flex items-center {index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
						<!-- Content Card -->
						<div class="w-full md:w-5/12 {index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}">
							<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-1">
								<!-- Year Badge -->
								<div class="inline-block px-4 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-bold mb-4">
									{milestone.year}
								</div>
								
								<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
									{milestone.title}
								</h3>
								<p class="text-gray-600 leading-relaxed">
									{milestone.description}
								</p>
							</div>
						</div>

						<!-- Center Icon -->
						<div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full items-center justify-center shadow-lg ring-8 ring-gray-50">
							{#if milestone.icon === 'rocket'}
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
								</svg>
							{:else if milestone.icon === 'trophy'}
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
								</svg>
							{:else if milestone.icon === 'globe'}
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							{:else if milestone.icon === 'lightbulb'}
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
								</svg>
							{:else if milestone.icon === 'users'}
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
								</svg>
							{:else if milestone.icon === 'heart'}
								<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
								</svg>
							{/if}
						</div>

						<!-- Empty space for alternating layout -->
						<div class="hidden md:block w-5/12"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
