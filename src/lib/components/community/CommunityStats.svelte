<script>
	import { onMount } from 'svelte';

	let stats = $state([
		{ label: 'Active Members', value: 0, target: 50000, suffix: '+', prefix: '' },
		{ label: 'Countries Represented', value: 0, target: 120, suffix: '+', prefix: '' },
		{ label: 'Events Hosted', value: 0, target: 500, suffix: '+', prefix: '' },
		{ label: 'Volunteer Hours', value: 0, target: 2, suffix: 'M+', prefix: '' }
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

		const section = document.getElementById('community-stats');
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

<section id="community-stats" class="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
	<!-- Decorative Background -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
	</div>

	<div class="relative max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
				Community by the Numbers
			</h2>
			<p class="text-purple-100 text-lg max-w-2xl mx-auto">
				Together, we're building something extraordinary. Here's our collective impact.
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
	</div>
</section>
