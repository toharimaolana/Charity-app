<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import CharityCard from '$lib/components/CharityCard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// data campaigns
	import { campaigns } from '$lib/data/campaigns.js';

	let campaignsWithProgress = $derived(
		campaigns.map((campaign) => ({
			...campaign,
			progress: Math.round((campaign.raised / campaign.target) * 100)
		}))
	);
</script>

<svelte:head>
	<title>Charity Platform - Make a Difference Today</title>
	<meta
		name="description"
		content="Join thousands of donors in making a positive impact. Support education, healthcare, and community development projects worldwide."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navbar />
	<Hero />
	<StatsSection />

	<!-- Charity Campaigns Section -->
	<section class="py-16 px-4 max-w-7xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
			<p class="text-gray-600 max-w-2xl mx-auto">
				Every donation makes a difference. Choose a cause you care about and help us create
				positive change in communities around the world.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
			{#each campaignsWithProgress as campaign (campaign.id)}
				<CharityCard {campaign} />
			{/each}
		</div>

		<div class="text-center mt-12">
			<a
				href="/campaigns"
				class="inline-block px-8 py-3 bg-white border-2 border-violet-600 text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition-colors duration-200"
			>
				View All Campaigns
			</a>
		</div>
	</section>

	<Footer />
</div>
