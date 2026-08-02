<script>
	import HeroAbout from '$lib/components/about/HeroAbout.svelte';
	import OurStory from '$lib/components/about/OurStory.svelte';
	import MissionVision from '$lib/components/about/MissionVision.svelte';
	import CoreValues from '$lib/components/about/CoreValues.svelte';
	import ImpactStats from '$lib/components/about/ImpactStats.svelte';
	import Partners from '$lib/components/about/Partners.svelte';
	import CTASection from '$lib/components/about/CTASection.svelte';
</script>

<svelte:head>
	<title>Tentang Kami — PeduliBersama</title>
	<meta name="description" content="Pelajari misi kami dalam menciptakan dampak sosial positif yang terukur melalui transparansi mutlak dan gotong royong." />
</svelte:head>

<div>
	<HeroAbout />
	<OurStory />
	<MissionVision />
	<CoreValues />
	<ImpactStats />
	<Partners />
	<CTASection />
</div>

