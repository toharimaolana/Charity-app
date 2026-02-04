<script>
	let partners = [
		{ name: 'UNICEF', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=UNICEF' },
		{ name: 'Red Cross', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=Red+Cross' },
		{ name: 'WHO', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=WHO' },
		{ name: 'Save the Children', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=STC' },
		{ name: 'WWF', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=WWF' },
		{ name: 'Oxfam', logo: 'https://via.placeholder.com/200x80/6b7280/ffffff?text=Oxfam' }
	];
</script>

<section class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Trusted by Leading Organizations
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto">
				Proud to partner with NGOs and foundations making a global impact
			</p>
		</div>

		<!-- Logos Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
			{#each partners as partner}
				<div class="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0">
					<img 
						src={partner.logo} 
						alt={partner.name}
						class="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
					/>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center mt-12">
			<p class="text-gray-700 mb-4 font-medium">Interested in partnering with us?</p>
			<a 
				href="/contact"
				class="inline-block px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors duration-200"
			>
				Get in Touch
			</a>
		</div>
	</div>
</section>
