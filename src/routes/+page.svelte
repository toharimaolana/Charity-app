<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import CharityCard from '$lib/components/CharityCard.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Dummy data untuk charity campaigns
	let campaigns = $state([
		{
			id: 1,
			title: 'Education for Underprivileged Children',
			description: 'Help provide quality education and learning materials for children in remote areas.',
			image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Education',
			raised: 15000000,
			target: 30000000,
			donors: 234,
			daysLeft: 15
		},
		{
			id: 2,
			title: 'Clean Water for Rural Communities',
			description: 'Build water wells and sanitation facilities for communities without access to clean water.',
			image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Clean+Water',
			raised: 22000000,
			target: 40000000,
			donors: 456,
			daysLeft: 22
		},
		{
			id: 3,
			title: 'Medical Aid for Emergency Relief',
			description: 'Provide medical supplies and healthcare services to disaster-affected areas.',
			image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Medical+Aid',
			raised: 35000000,
			target: 50000000,
			donors: 789,
			daysLeft: 8
		},
		{
			id: 4,
			title: 'Food Security Program',
			description: 'Distribute nutritious meals and food packages to families in need.',
			image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Food+Security',
			raised: 18000000,
			target: 25000000,
			donors: 345,
			daysLeft: 30
		}
	]);

	// Computed percentage for progress bars
	let campaignsWithProgress = $derived(
		campaigns.map((campaign) => ({
			...campaign,
			progress: Math.round((campaign.raised / campaign.target) * 100)
		}))
	);
</script>

<svelte:head>
	<title>Charity Platform - Make a Difference Today</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navbar />
	<Hero />
	<StatsSection />

	<!-- Charity Campaigns Section -->
	<section class="py-16 px-4 max-w-7xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Featured Campaigns
			</h2>
			<p class="text-gray-600 max-w-2xl mx-auto">
				Every donation makes a difference. Choose a cause you care about and help us create positive change in communities around the world.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
			{#each campaignsWithProgress as campaign (campaign.id)}
				<CharityCard {campaign} />
			{/each}
		</div>

		<div class="text-center mt-12">
			<button class="px-8 py-3 bg-white border-2 border-violet-600 text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition-colors duration-200">
				View All Campaigns
			</button>
		</div>
	</section>

	<Footer />
</div>
