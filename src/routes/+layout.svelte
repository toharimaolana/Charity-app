<script>
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-white bg-[#FAF8F5]">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
