<script>
	let benefits = [
		{
			title: 'Connect with Like-Minded People',
			description: 'Build meaningful relationships with individuals who share your passion for making a positive impact in the world.',
			icon: 'users',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'Exclusive Events & Workshops',
			description: 'Access members-only events, skill-building workshops, and networking sessions with industry leaders.',
			icon: 'calendar',
			color: 'from-violet-500 to-purple-500'
		},
		{
			title: 'Share Your Impact Story',
			description: 'Inspire others by sharing your journey, challenges, and successes in creating positive change.',
			icon: 'megaphone',
			color: 'from-pink-500 to-rose-500'
		},
		{
			title: 'Learning Resources',
			description: 'Get access to exclusive content, guides, and resources to enhance your impact and leadership skills.',
			icon: 'book',
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'Volunteer Opportunities',
			description: 'Discover hands-on volunteer opportunities matched to your interests, skills, and availability.',
			icon: 'hand',
			color: 'from-orange-500 to-amber-500'
		},
		{
			title: 'Recognition & Rewards',
			description: 'Earn badges, certificates, and recognition for your contributions and milestone achievements.',
			icon: 'badge',
			color: 'from-indigo-500 to-blue-500'
		}
	];
</script>

<section class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-purple-600 font-semibold text-sm uppercase tracking-wide">Why Join Us</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				Benefits of Being Part of Our Community
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				When you join our community, you're not just a member—you're part of a global movement creating real change.
			</p>
		</div>

		<!-- Benefits Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each benefits as benefit}
				<div class="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
					<!-- Icon -->
					<div class="w-14 h-14 bg-gradient-to-br {benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
						{#if benefit.icon === 'users'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
							</svg>
						{:else if benefit.icon === 'calendar'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
							</svg>
						{:else if benefit.icon === 'megaphone'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
							</svg>
						{:else if benefit.icon === 'book'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
							</svg>
						{:else if benefit.icon === 'hand'}
							<svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clip-rule="evenodd"/>
							</svg>
						{:else if benefit.icon === 'badge'}
							<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
							</svg>
						{/if}
					</div>

					<!-- Content -->
					<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
						{benefit.title}
					</h3>
					<p class="text-gray-600 leading-relaxed">
						{benefit.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
