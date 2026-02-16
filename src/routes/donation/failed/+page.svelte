<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Payment Pending | Charity Platform</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navbar />

	<section class="pt-32 pb-20 px-4">
		<div class="max-w-2xl mx-auto text-center">
			<!-- Warning Icon -->
			<div class="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-8">
				<svg class="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			</div>

			<h1 class="text-4xl font-bold text-gray-900 mb-4">Payment Incomplete</h1>
			<p class="text-lg text-gray-600 mb-8">
				Your payment was not completed. This could happen if the payment was cancelled or expired.
			</p>

			<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
				<p class="text-gray-700 mb-4">Don't worry! You can try again anytime.</p>
				<ul class="text-left text-sm text-gray-600 space-y-2">
					<li>• Check your email for payment instructions if you chose bank transfer</li>
					<li>• Payment links are valid for 24 hours</li>
					<li>• Contact us if you need help</li>
				</ul>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/campaigns"
					class="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
				>
					Try Again
				</a>
				<a
					href="/"
					class="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-purple-600 transition-colors"
				>
					Back to Home
				</a>
			</div>
		</div>
	</section>

	<Footer />
</div>
