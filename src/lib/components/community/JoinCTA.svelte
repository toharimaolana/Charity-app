<script>
	let name = $state('');
	let email = $state('');
	let province = $state('DKI Jakarta');
	let isSubmitted = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		isSubmitted = true;
	}
</script>

<section id="join-form" class="py-16 sm:py-24 bg-[#F1F0F1] font-sans">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-white p-8 sm:p-12 rounded-xl border border-[#B5B3A9]/30 shadow-[0_4px_20px_-2px_rgba(14,106,54,0.05)] space-y-6">
			
			<div class="text-center max-w-xl mx-auto space-y-2">
				<span class="bg-[#6FC052]/15 text-[#0E6A36] border border-[#6FC052]/30 rounded-full font-mono text-xs px-3.5 py-1 font-bold inline-block">
					FORMULIR RELAWAN
				</span>
				<h2 class="font-extrabold text-3xl sm:text-4xl text-[#0D150F]">
					Daftarkan Dirimu Sebagai Relawan
				</h2>
				<p class="text-[#0D150F]/70 text-xs sm:text-sm font-medium">
					Isi data singkat berikut untuk bergabung ke jaringan relawan daerah PeduliBersama.
				</p>
			</div>

			{#if isSubmitted}
				<div class="bg-[#6FC052]/15 border border-[#6FC052]/30 rounded-xl p-6 text-center space-y-2">
					<span class="font-mono text-2xl">🎉</span>
					<h3 class="font-bold text-lg text-[#0E6A36]">Pendaftaran Berhasil!</h3>
					<p class="text-xs text-[#0D150F]/80 font-medium">
						Tim koordinator wilayah <strong class="font-mono text-[#0E6A36]">{province}</strong> akan menghubungi Anda melalui WhatsApp/Email dalam 1x24 jam.
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-4 max-w-xl mx-auto">
					<div>
						<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">NAMA LENGKAP</label>
						<input 
							type="text" 
							required
							placeholder="Masukkan nama lengkap..." 
							bind:value={name}
							class="w-full px-4 py-3 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
						/>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">ALAMAT EMAIL</label>
							<input 
								type="email" 
								required
								placeholder="nama@email.com" 
								bind:value={email}
								class="w-full px-4 py-3 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-medium text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
							/>
						</div>

						<div>
							<label class="block text-xs font-mono font-bold text-[#0D150F]/70 uppercase tracking-wider mb-1">DOMISILI PROVINSI</label>
							<select 
								bind:value={province} 
								class="w-full px-4 py-3 bg-[#F1F0F1] border border-[#B5B3A9]/30 rounded-xl text-xs font-bold text-[#0D150F] focus:outline-none focus:border-[#0E6A36]"
							>
								<option value="DKI Jakarta">DKI Jakarta</option>
								<option value="Jawa Barat">Jawa Barat</option>
								<option value="Jawa Tengah">Jawa Tengah</option>
								<option value="Jawa Timur">Jawa Timur</option>
								<option value="Sumatera Utara">Sumatera Utara</option>
								<option value="Lampung">Lampung</option>
								<option value="Lainnya">Provinsi Lainnya</option>
							</select>
						</div>
					</div>

					<button 
						type="submit" 
						class="w-full bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-3.5 rounded-xl shadow-sm uppercase tracking-wider transition-all"
					>
						Kirim Pendaftaran Relawan →
					</button>
				</form>
			{/if}

			<div class="pt-4 border-t border-[#B5B3A9]/20 flex items-center justify-between text-[10px] font-mono text-[#0D150F]/50 font-bold">
				<span>CONFIDENTIAL: VOLUNTEER REGISTRY</span>
				<span>SECURE RSA-2048</span>
			</div>

		</div>
	</div>
</section>
