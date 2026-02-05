<script>
	let activities = [
		{
			title: 'Monthly Virtual Meetups',
			description: 'Connect with members globally through our monthly online gatherings. Share experiences, learn from each other, and build lasting friendships.',
			frequency: 'Every 1st Saturday',
			participants: '500+ members',
			category: 'Networking',
			icon: 'video',
			color: 'bg-blue-100 text-blue-600'
		},
		{
			title: 'Skill-Building Workshops',
			description: 'Hands-on workshops covering fundraising strategies, community organizing, digital marketing, and leadership development.',
			frequency: 'Bi-weekly',
			participants: '200+ members',
			category: 'Learning',
			icon: 'lightbulb',
			color: 'bg-violet-100 text-violet-600'
		},
		{
			title: 'Community Service Days',
			description: 'Organized volunteer activities in your local area. From beach cleanups to food drives, make a direct impact in your community.',
			frequency: 'Monthly',
			participants: '1,000+ volunteers',
			category: 'Volunteer',
			icon: 'hand',
			color: 'bg-green-100 text-green-600'
		},
		{
			title: 'Impact Sharing Sessions',
			description: 'Present your projects, share success stories, and inspire others with your journey. Open mic for all community members.',
			frequency: 'Weekly',
			participants: '150+ members',
			category: 'Storytelling',
			icon: 'mic',
			color: 'bg-pink-100 text-pink-600'
		},
		{
			title: 'Mentorship Programs',
			description: 'Get paired with experienced changemakers who guide you in your impact journey. Both group and 1-on-1 sessions available.',
			frequency: 'Ongoing',
			participants: '300+ pairs',
			category: 'Mentorship',
			icon: 'people',
			color: 'bg-orange-100 text-orange-600'
		},
		{
			title: 'Annual Impact Summit',
			description: 'Our flagship event bringing together thousands of members for keynotes, workshops, and networking. A celebration of collective impact.',
			frequency: 'Yearly',
			participants: '5,000+ attendees',
			category: 'Conference',
			icon: 'trophy',
			color: 'bg-indigo-100 text-indigo-600'
		}
	];
</script>

<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-purple-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				Community Activities & Programs
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				From virtual meetups to hands-on volunteering, there's always something happening in our vibrant community.
			</p>
		</div>

		<!-- Activities List -->
		<div class="space-y-6">
			{#each activities as activity, index}
				<div class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
					<div class="flex flex-col md:flex-row gap-6 items-start">
						<!-- Icon & Category -->
						<div class="flex-shrink-0">
							<div class="w-16 h-16 {activity.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
								{#if activity.icon === 'video'}
									<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
									</svg>
								{:else if activity.icon === 'lightbulb'}
									<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
									</svg>
								{:else if activity.icon === 'hand'}
									<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clip-rule="evenodd"/>
									</svg>
								{:else if activity.icon === 'mic'}
									<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
									</svg>
								{:else if activity.icon === 'people'}
									<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
									</svg>
								{:else if activity.icon === 'trophy'}
									<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
									</svg>
								{/if}
							</div>
						</div>

						<!-- Content -->
						<div class="flex-grow">
							<div class="flex flex-wrap items-center gap-3 mb-3">
								<h3 class="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
									{activity.title}
								</h3>
								<span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold uppercase">
									{activity.category}
								</span>
							</div>

							<p class="text-gray-600 leading-relaxed mb-4">
								{activity.description}
							</p>

							<!-- Meta Info -->
							<div class="flex flex-wrap gap-6 text-sm">
								<div class="flex items-center gap-2 text-gray-500">
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
									<span class="font-medium">{activity.frequency}</span>
								</div>
								<div class="flex items-center gap-2 text-gray-500">
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
									</svg>
									<span class="font-medium">{activity.participants}</span>
								</div>
							</div>
						</div>

						<!-- Action Button -->
						<div class="flex-shrink-0">
							<button class="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 whitespace-nowrap">
								Learn More
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
