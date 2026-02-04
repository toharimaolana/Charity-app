<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroAbout from '$lib/components/about/HeroAbout.svelte';
	import OurStory from '$lib/components/about/OurStory.svelte';
	import MissionVision from '$lib/components/about/MissionVision.svelte';
	import CoreValues from '$lib/components/about/CoreValues.svelte';
	import ImpactStats from '$lib/components/about/ImpactStats.svelte';
	// import TeamSection from '$lib/components/about/TeamSection.svelte';
	import Partners from '$lib/components/about/Partners.svelte';
	import CTASection from '$lib/components/about/CTASection.svelte';
</script>

<svelte:head>
	<title>About Us - Making Impact Together | Charity Platform</title>
	<meta name="description" content="Learn about our mission to create positive change in communities worldwide through transparent and impactful fundraising." />
</svelte:head>

<div class="min-h-screen bg-white">
	<Navbar />
	<HeroAbout />
	<OurStory />
	<MissionVision />
	<CoreValues />
	<ImpactStats />
	<!-- <TeamSection /> -->
	<Partners />
	<CTASection />
	<Footer />
</div>
