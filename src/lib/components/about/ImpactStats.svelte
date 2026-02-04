<script>
	import { onMount } from 'svelte';

	let stats = $state([
		{ label: 'Lives Impacted', value: 0, target: 250000, suffix: '+', prefix: '' },
		{ label: 'Communities Served', value: 0, target: 1500, suffix: '+', prefix: '' },
		{ label: 'Total Donations', value: 0, target: 30, suffix: 'M+', prefix: '$' },
		{ label: 'Success Rate', value: 0, target: 98, suffix: '%', prefix: '' }
	]);

	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					isVisible = true;
					animateStats();
				}
			},
			{ threshold: 0.3 }
		);

		const section = document.getElementById('impact-stats');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	function animateStats() {
		stats.forEach((stat, index) => {
			let current = 0;
			const increment = stat.target / 60;
			const timer = setInterval(() => {
				current += increment;
				if (current >= stat.target) {
					stats[index].value = stat.target;
					clearInterval(timer);
				} else {
					stats[index].value = Math.floor(current);
				}
			}, 30);
		});
	}
</script>

<section id="impact-stats" class="py-20 px-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 relative overflow-hidden">
	<!-- Decorative Background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
	</div>

	<div class="relative max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
				Our Impact in Numbers
			</h2>
			<p class="text-purple-100 text-lg max-w-2xl mx-auto">
				Real results from real people making a real difference in communities worldwide.
			</p>
		</div>

		<!-- Stats Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			{#each stats as stat}
				<div class="text-center group">
					<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
						<div class="text-4xl md:text-5xl font-bold text-white mb-2">
							{stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
						</div>
						<div class="text-purple-100 font-medium">
							{stat.label}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Info -->
		<div class="mt-16 text-center">
			<p class="text-white/90 text-lg mb-6">
				Join thousands of changemakers who are already making a difference
			</p>
			<a 
				href="/campaigns"
				class="inline-block px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
			>
				Start Your Impact Today
			</a>
		</div>
	</div>
</section>
