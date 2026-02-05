<script>
	let events = [
		{
			title: 'Global Impact Summit 2025',
			date: 'December 15, 2025',
			location: 'Jakarta, Indonesia',
			attendees: 5000,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Summit+2025',
			description: 'Our biggest annual gathering with keynote speakers, workshops, and networking sessions.',
			highlights: ['50+ Speakers', '100+ Workshops', '30+ Countries']
		},
		{
			title: 'Beach Cleanup Campaign',
			date: 'November 20, 2025',
			location: 'Bali, Indonesia',
			attendees: 1200,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Beach+Cleanup',
			description: 'Community-led environmental action collecting over 2 tons of plastic waste from coastal areas.',
			highlights: ['2 Tons Collected', '15 Beaches', '1000+ Volunteers']
		},
		{
			title: 'Education Drive for Rural Kids',
			date: 'October 10, 2025',
			location: 'West Java, Indonesia',
			attendees: 800,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Education+Drive',
			description: 'Distributed school supplies and books to 20 schools in underserved rural communities.',
			highlights: ['5000+ Books', '20 Schools', '3000+ Students']
		},
		{
			title: 'Virtual Fundraising Marathon',
			date: 'September 5, 2025',
			location: 'Online Event',
			attendees: 3000,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Fundraising+Marathon',
			description: '24-hour online event raising funds for healthcare initiatives across Southeast Asia.',
			highlights: ['$500K Raised', '24 Hours', '50+ Countries']
		},
		{
			title: 'Community Kitchen Program',
			date: 'August 15, 2025',
			location: 'Multiple Cities',
			attendees: 2000,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Community+Kitchen',
			description: 'Served over 10,000 meals to families in need across 15 cities nationwide.',
			highlights: ['10K+ Meals', '15 Cities', '500+ Volunteers']
		},
		{
			title: 'Youth Leadership Workshop',
			date: 'July 20, 2025',
			location: 'Yogyakarta, Indonesia',
			attendees: 500,
			image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Youth+Workshop',
			description: 'Empowering the next generation of changemakers through intensive leadership training.',
			highlights: ['200+ Youth', '10 Mentors', '3-Day Program']
		}
	];
</script>

<section class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-purple-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				Past Events & Achievements
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				Look back at the incredible moments we've shared and the impact we've created together as a community.
			</p>
		</div>

		<!-- Events Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each events as event}
				<div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
					<!-- Image -->
					<div class="relative overflow-hidden h-56">
						<img 
							src={event.image} 
							alt={event.title}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						/>
						<!-- Overlay Badge -->
						<div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
							<svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
							</svg>
							<span class="text-sm font-bold text-gray-900">{event.attendees.toLocaleString()}</span>
						</div>
					</div>

					<!-- Content -->
					<div class="p-6">
						<!-- Date & Location -->
						<div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
							<div class="flex items-center gap-1">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
								</svg>
								<span>{event.date}</span>
							</div>
							<div class="flex items-center gap-1">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
								</svg>
								<span>{event.location}</span>
							</div>
						</div>

						<!-- Title -->
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
							{event.title}
						</h3>

						<!-- Description -->
						<p class="text-gray-600 text-sm leading-relaxed mb-4">
							{event.description}
						</p>

						<!-- Highlights -->
						<div class="flex flex-wrap gap-2">
							{#each event.highlights as highlight}
								<span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
									{highlight}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- View More Button -->
		<div class="text-center mt-12">
			<button class="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200">
				View All Events
			</button>
		</div>
	</div>
</section>
