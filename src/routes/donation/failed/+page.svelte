<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Pembayaran Pending — PeduliBersama</title>
</svelte:head>

<div class="min-h-screen bg-[#F1F0F1] font-sans flex flex-col justify-between">
	<Navbar />

	<section class="py-20 px-4">
		<div class="max-w-xl mx-auto text-center space-y-6">
			<!-- Warning Icon -->
			<div class="inline-flex items-center justify-center w-20 h-20 bg-amber-100 text-amber-600 rounded-full border border-amber-300 text-3xl mx-auto shadow-sm">
				⏳
			</div>

			<div class="space-y-2">
				<h1 class="text-3xl font-extrabold text-[#0D150F] tracking-tight">Pembayaran Belum Selesai</h1>
				<p class="text-sm text-[#0D150F]/70 font-medium max-w-md mx-auto">
					Transaksi pembayaran Anda belum terselesaikan atau batas waktu invoice telah berakhir.
				</p>
			</div>

			<div class="bg-white rounded-xl p-6 border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] text-left space-y-3 text-xs text-[#0D150F]/80">
				<p class="font-bold text-[#0D150F]">Petunjuk Pembayaran Xendit:</p>
				<ul class="space-y-1.5 font-medium text-[#0D150F]/70">
					<li>• Periksa email Anda untuk instruksi kode Virtual Account / QRIS</li>
					<li>• Batas waktu pembayaran invoice Xendit berlaku selama 24 jam</li>
					<li>• Anda dapat mengulang transaksi kapan saja</li>
				</ul>
			</div>

			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a
					href="/campaigns"
					class="bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm uppercase tracking-wider transition-all"
				>
					Coba Lagi →
				</a>
				<a
					href="/"
					class="bg-white hover:bg-white/80 text-[#0D150F] font-bold text-xs py-3.5 px-6 rounded-xl border border-[#B5B3A9]/30 uppercase tracking-wider transition-all"
				>
					Kembali ke Beranda
				</a>
			</div>
		</div>
	</section>

	<Footer />
</div>
