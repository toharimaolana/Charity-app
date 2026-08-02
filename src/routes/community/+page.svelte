<script>
	import HeroCommunity from '$lib/components/community/HeroCommunity.svelte';
	import CommunityBenefits from '$lib/components/community/CommunityBenefits.svelte';
	import ActivitiesList from '$lib/components/community/ActivitiesList.svelte';
	import PastEvents from '$lib/components/community/PastEvents.svelte';
	import Testimonials from '$lib/components/community/Testimonials.svelte';
	import CommunityStats from '$lib/components/community/CommunityStats.svelte';
	import JoinCTA from '$lib/components/community/JoinCTA.svelte';
</script>

<svelte:head>
	<title>Komunitas & Relawan — PeduliBersama</title>
	<meta name="description" content="Bergabunglah bersama ribuan relawan dan agen kebaikan dalam gerakan sosial transparan PeduliBersama." />
</svelte:head>

<div>
	<HeroCommunity />
	<CommunityBenefits />
	<ActivitiesList />
	<PastEvents />
	<Testimonials />
	<CommunityStats />
	<JoinCTA />
</div>

