<script>
	let username = $state('');
	let password = $state('');
	let isLoading = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
			window.location.href = '/';
		}, 800);
	}
</script>

<svelte:head>
	<title>Masuk ke Akun — PeduliBersama</title>
</svelte:head>

<div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F1F0F1] font-sans">
	<div class="bg-white max-w-md w-full p-8 sm:p-10 rounded-xl shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] border border-[#B5B3A9]/30 space-y-6">
		
		<!-- Header -->
		<div class="text-center space-y-2">
			<a href="/" class="inline-flex items-center gap-2.5 mb-2 group">
				<div class="w-10 h-10 rounded-xl bg-[#0E6A36] text-white flex items-center justify-center font-bold text-xl shadow-xs group-hover:bg-[#0B542B] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
						<path d="M12 7v10"/>
						<path d="M8 11l4-4 4 4"/>
					</svg>
				</div>
			</a>
			<h1 class="font-extrabold text-2xl sm:text-3xl text-[#0D150F]">Selamat Datang Kembali</h1>
			<p class="text-[#0D150F]/70 text-xs font-medium">Masuk ke akun Anda untuk memantau jejak donasi di kas publik.</p>
		</div>

		<!-- Form -->
		<form onsubmit={handleSubmit} class="space-y-4">
			<div>
				<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">USERNAME / EMAIL</label>
				<input 
					type="text" 
					required
					placeholder="Masukkan username atau email..." 
					bind:value={username}
					class="w-full px-4 py-3 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
				/>
			</div>

			<div>
				<div class="flex justify-between items-center mb-1">
					<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider">KATA SANDI</label>
					<a href="/#" class="text-[11px] font-bold text-[#0E6A36] hover:underline">Lupa kata sandi?</a>
				</div>
				<input 
					type="password" 
					required
					placeholder="••••••••" 
					bind:value={password}
					class="w-full px-4 py-3 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
				/>
			</div>

			<button 
				type="submit" 
				disabled={isLoading}
				class="w-full bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-4 rounded-xl shadow-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
			>
				{#if isLoading}
					<span class="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
					<span>Memproses...</span>
				{:else}
					<span>Masuk Sekarang →</span>
				{/if}
			</button>
		</form>

		<div class="pt-4 border-t border-[#B5B3A9]/20 text-center">
			<p class="text-xs text-[#0D150F]/70 font-medium">
				Belum memiliki akun? <a href="/register" class="font-bold text-[#0E6A36] hover:underline">Daftar sekarang</a>
			</p>
		</div>

	</div>
</div>
