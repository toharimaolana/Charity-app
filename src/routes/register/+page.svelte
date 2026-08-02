<script>
	let username = $state('');
	let email = $state('');
	let password = $state('');
	let role = $state('donor');
	let isLoading = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
			window.location.href = '/login';
		}, 800);
	}
</script>

<svelte:head>
	<title>Daftar Akun Baru — PeduliBersama</title>
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
			<h1 class="font-extrabold text-2xl sm:text-3xl text-[#0D150F]">Bergabung Bersama Kami</h1>
			<p class="text-[#0D150F]/70 text-xs font-medium">Buat akun untuk mulai menyalurkan donasi transparan atau penggalangan dana.</p>
		</div>

		<!-- Form -->
		<form onsubmit={handleSubmit} class="space-y-4">
			
			<!-- Role Toggle -->
			<div>
				<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-2">PERAN UTAMA ANDA</label>
				<div class="grid grid-cols-2 gap-2">
					<button 
						type="button" 
						onclick={() => role = 'donor'}
						class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
							role === 'donor' ? 'bg-[#0E6A36] border-[#0E6A36] text-white shadow-xs' : 'bg-[#F1F0F1] border-[#B5B3A9]/30 text-[#0D150F]'
						}"
					>
						💚 Saya Donatur
					</button>
					<button 
						type="button" 
						onclick={() => role = 'campaigner'}
						class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
							role === 'campaigner' ? 'bg-[#0E6A36] border-[#0E6A36] text-white shadow-xs' : 'bg-[#F1F0F1] border-[#B5B3A9]/30 text-[#0D150F]'
						}"
					>
						📢 Penggalang Dana
					</button>
				</div>
			</div>

			<div>
				<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">USERNAME</label>
				<input 
					type="text" 
					required
					placeholder="Pilih username..." 
					bind:value={username}
					class="w-full px-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
				/>
			</div>

			<div>
				<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">ALAMAT EMAIL</label>
				<input 
					type="email" 
					required
					placeholder="nama@email.com" 
					bind:value={email}
					class="w-full px-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
				/>
			</div>

			<div>
				<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">KATA SANDI</label>
				<input 
					type="password" 
					required
					placeholder="Minimal 8 karakter..." 
					bind:value={password}
					class="w-full px-4 py-2.5 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
				/>
			</div>

			<button 
				type="submit" 
				disabled={isLoading}
				class="w-full bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-4 rounded-xl shadow-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
			>
				{#if isLoading}
					<span class="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
					<span>Membuat Akun...</span>
				{:else}
					<span>Daftar Sekarang →</span>
				{/if}
			</button>
		</form>

		<div class="pt-4 border-t border-[#B5B3A9]/20 text-center">
			<p class="text-xs text-[#0D150F]/70 font-medium">
				Sudah memiliki akun? <a href="/login" class="font-bold text-[#0E6A36] hover:underline">Masuk di sini</a>
			</p>
		</div>

	</div>
</div>
