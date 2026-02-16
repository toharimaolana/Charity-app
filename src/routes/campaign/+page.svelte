<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CharityCard from '$lib/components/CharityCard.svelte';

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
	<title>All Campaigns | Charity Platform</title>
	<meta
		name="description"
		content="Browse all active charity campaigns and choose a cause to support."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navbar />

	<!-- Hero Section -->
	<section class="pt-28 pb-12 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
		<div class="max-w-7xl mx-auto">
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
				All Campaigns
			</h1>
			<p class="text-purple-100 text-base md:text-lg max-w-2xl">
				Explore all active fundraising campaigns and support the causes that matter most to you.
			</p>
		</div>
	</section>

	<!-- Campaign List -->
	<section class="py-14 px-4 max-w-7xl mx-auto">
		<!-- Info row -->
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
			<p class="text-gray-600 text-sm md:text-base">
				Showing <span class="font-semibold text-gray-900">{campaignsWithProgress.length}</span> active campaigns.
			</p>
		</div>

		<!-- Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each campaignsWithProgress as campaign (campaign.id)}
				<CharityCard {campaign} />
			{/each}
		</div>
	</section>

	<Footer />
</div>
