<script>
	let email = $state('');
	let selectedInterests = $state([]);

	const interests = [
		'Environmental Action',
		'Education',
		'Healthcare',
		'Community Development',
		'Technology for Good',
		'Youth Empowerment'
	];

	function handleJoin() {
		if (!email) {
			alert('Please enter your email');
			return;
		}
		// Handle join logic here
		console.log('Joining with:', email, selectedInterests);
		alert('Welcome to the community! Check your email for next steps.');
	}

	function toggleInterest(interest) {
		if (selectedInterests.includes(interest)) {
			selectedInterests = selectedInterests.filter(i => i !== interest);
		} else {
			selectedInterests = [...selectedInterests, interest];
		}
	}
</script>

<section class="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
	<div class="max-w-4xl mx-auto">
		<div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
			<div class="grid md:grid-cols-2">
				<!-- Left Side - Form -->
				<div class="p-8 md:p-12">
					<!-- Icon -->
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
						<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
						</svg>
					</div>

					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Ready to Join Us?
					</h2>
					<p class="text-gray-600 mb-8 leading-relaxed">
						Become part of a global movement. Connect, learn, and create impact together with thousands of passionate changemakers.
					</p>

					<!-- Email Input -->
					<div class="mb-6">
						<label class="block text-sm font-semibold text-gray-700 mb-2">
							Email Address
						</label>
						<input 
							type="email"
							bind:value={email}
							placeholder="your@email.com"
							class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
						/>
					</div>

					<!-- Interests Selection -->
					<div class="mb-8">
						<label class="block text-sm font-semibold text-gray-700 mb-3">
							Your Interests (Optional)
						</label>
						<div class="flex flex-wrap gap-2">
							{#each interests as interest}
								<button
									onclick={() => toggleInterest(interest)}
									class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {selectedInterests.includes(interest) ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
								>
									{interest}
								</button>
							{/each}
						</div>
					</div>

					<!-- Submit Button -->
					<button
						onclick={handleJoin}
						class="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
					>
						Join the Community
					</button>

					<!-- Trust Indicators -->
					<div class="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
						<div class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span>Free Forever</span>
						</div>
						<div class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span>No Spam</span>
						</div>
					</div>
				</div>

				<!-- Right Side - Benefits Highlight -->
				<div class="bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-12 text-white flex flex-col justify-center">
					<h3 class="text-2xl font-bold mb-6">
						What You'll Get
					</h3>

					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div>
								<div class="font-semibold mb-1">Exclusive Events Access</div>
								<div class="text-purple-100 text-sm">Virtual meetups, workshops, and annual summit</div>
							</div>
						</li>

						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div>
								<div class="font-semibold mb-1">Networking Opportunities</div>
								<div class="text-purple-100 text-sm">Connect with 50,000+ changemakers worldwide</div>
							</div>
						</li>

						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div>
								<div class="font-semibold mb-1">Learning Resources</div>
								<div class="text-purple-100 text-sm">Guides, toolkits, and expert mentorship</div>
							</div>
						</li>

						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<div>
								<div class="font-semibold mb-1">Recognition & Rewards</div>
								<div class="text-purple-100 text-sm">Badges, certificates, and spotlight features</div>
							</div>
						</li>
					</ul>

					<!-- Member Count -->
					<div class="mt-8 pt-8 border-t border-white/20">
						<div class="flex items-center gap-3">
							<div class="flex -space-x-2">
								{#each Array(5) as _, i}
									<div class="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-bold">
										{String.fromCharCode(65 + i)}
									</div>
								{/each}
							</div>
							<div class="text-sm">
								<span class="font-bold">50,000+</span> members already joined!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
