<script>
	let testimonials = [
		{
			name: 'Sarah Mitchell',
			role: 'Community Member since 2023',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=SM',
			content: 'Joining this community was life-changing. I\'ve met incredible people, learned so much, and finally found a place where my passion for helping others is truly valued and supported.',
			rating: 5
		},
		{
			name: 'Ahmad Fadli',
			role: 'Volunteer Coordinator',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=AF',
			content: 'The workshops and mentorship programs have helped me develop leadership skills I never knew I had. Now I\'m leading my own local initiatives and inspiring others to join.',
			rating: 5
		},
		{
			name: 'Maria Santos',
			role: 'Impact Advocate',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=MS',
			content: 'What I love most is the genuine connection. Everyone here truly cares about making a difference. It\'s not just about donations—it\'s about building a movement together.',
			rating: 5
		},
		{
			name: 'David Chen',
			role: 'Tech for Good Enthusiast',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=DC',
			content: 'The community events are always well-organized and impactful. I\'ve participated in 15+ activities this year alone, and each one has been meaningful and rewarding.',
			rating: 5
		},
		{
			name: 'Priya Sharma',
			role: 'Education Advocate',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=PS',
			content: 'I was hesitant at first, but the welcoming atmosphere made me feel at home immediately. Now I can\'t imagine my life without this amazing community of changemakers.',
			rating: 5
		},
		{
			name: 'James Wilson',
			role: 'Environmental Activist',
			avatar: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=JW',
			content: 'The resources and support I\'ve received here are incredible. From grant opportunities to skill-building workshops, everything I need to maximize my impact is right here.',
			rating: 5
		}
	];
</script>

<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-purple-600 font-semibold text-sm uppercase tracking-wide">Member Stories</span>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
				What Our Community Says
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto text-lg">
				Real stories from real members who are making a difference every day.
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<div class="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
					<!-- Rating Stars -->
					<div class="flex gap-1 mb-4">
						{#each Array(testimonial.rating) as _}
							<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
							</svg>
						{/each}
					</div>

					<!-- Content -->
					<p class="text-gray-700 leading-relaxed mb-6 italic">
						"{testimonial.content}"
					</p>

					<!-- Author -->
					<div class="flex items-center gap-4">
						<img 
							src={testimonial.avatar} 
							alt={testimonial.name}
							class="w-12 h-12 rounded-full ring-4 ring-white shadow-md"
						/>
						<div>
							<div class="font-bold text-gray-900">{testimonial.name}</div>
							<div class="text-sm text-gray-600">{testimonial.role}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
