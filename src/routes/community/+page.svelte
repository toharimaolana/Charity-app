<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroCommunity from '$lib/components/community/HeroCommunity.svelte';
	import CommunityBenefits from '$lib/components/community/CommunityBenefits.svelte';
	import ActivitiesList from '$lib/components/community/ActivitiesList.svelte';
	import PastEvents from '$lib/components/community/PastEvents.svelte';
	import Testimonials from '$lib/components/community/Testimonials.svelte';
	import CommunityStats from '$lib/components/community/CommunityStats.svelte';
	import JoinCTA from '$lib/components/community/JoinCTA.svelte';
</script>

<svelte:head>
	<title>Join Our Community - Connect, Share, Make Impact | Charity Platform</title>
	<meta name="description" content="Join thousands of changemakers in our vibrant community. Participate in events, share experiences, and amplify your impact together." />
</svelte:head>

<div class="min-h-screen bg-white">
	<Navbar />
	<HeroCommunity />
	<CommunityBenefits />
	<ActivitiesList />
	<PastEvents />
	<Testimonials />
	<CommunityStats />
	<JoinCTA />
	<Footer />
</div>
