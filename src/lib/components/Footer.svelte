<script>
	// Footer - Modern Crowdfund UI
</script>

<footer class="bg-[#0D150F] text-slate-300 pt-16 pb-12 relative overflow-hidden mt-16 border-t border-[#0D150F] font-sans">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
			
			<!-- Brand & Impact Summary -->
			<div class="lg:col-span-2 space-y-4">
				<div class="flex items-center gap-2.5">
					<div class="w-9 h-9 rounded-xl bg-[#0E6A36] text-white flex items-center justify-center font-bold text-lg shadow-sm">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
							<path d="M12 7v10"/>
							<path d="M8 11l4-4 4 4"/>
						</svg>
					</div>
					<div class="flex flex-col">
						<span class="font-bold text-xl tracking-tight text-white">
							Peduli<span class="text-[#6FC052]">Bersama</span>
						</span>
						<span class="text-[9px] font-semibold text-[#6FC052] uppercase tracking-widest -mt-1 font-mono">MODERN CROWDFUND</span>
					</div>
				</div>

				<p class="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
					Platform crowdfund publik terpercaya. Mengedepankan transparansi mutlak, pencatatan kas terbuka real-time, dan penyaluran 100% langsung.
				</p>

				<div class="pt-2 flex items-center gap-3">
					<div class="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800 space-y-0.5">
						<span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Total Tersalurkan</span>
						<span class="font-mono font-black text-[#6FC052] text-lg">Rp 1.48B+</span>
					</div>
					<div class="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800 space-y-0.5">
						<span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Penerima Bantuan</span>
						<span class="font-mono font-black text-[#6FC052] text-lg">12,450+</span>
					</div>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono">NAVIGASI</h3>
				<ul class="space-y-2.5 text-xs font-semibold text-slate-400">
					<li><a href="/campaigns" class="hover:text-[#6FC052] transition-colors">Jelajahi Kampanye</a></li>
					<li><a href="/#dampak" class="hover:text-[#6FC052] transition-colors">Kalkulator Dampak</a></li>
					<li><a href="/#transparansi" class="hover:text-[#6FC052] transition-colors">Audit & Transparansi</a></li>
					<li><a href="/login" class="hover:text-[#6FC052] transition-colors">Masuk Donatur</a></li>
				</ul>
			</div>

			<!-- Program Categories -->
			<div>
				<h3 class="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono">KATEGORI BANTUAN</h3>
				<ul class="space-y-2.5 text-xs font-semibold text-slate-400">
					<li><a href="/campaigns?category=bencana" class="hover:text-[#6FC052] transition-colors">Tanggap Bencana</a></li>
					<li><a href="/campaigns?category=pendidikan" class="hover:text-[#6FC052] transition-colors">Pendidikan Anak</a></li>
					<li><a href="/campaigns?category=kesehatan" class="hover:text-[#6FC052] transition-colors">Bantuan Kesehatan</a></li>
					<li><a href="/campaigns?category=panti" class="hover:text-[#6FC052] transition-colors">Panti Asuhan & Lansia</a></li>
				</ul>
			</div>

			<!-- Newsletter & Guarantee -->
			<div>
				<h3 class="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono">WARTA KEBAIKAN</h3>
				<p class="text-slate-400 text-xs mb-3 font-medium leading-relaxed">Dapatkan buletin laporan audit kas terbuka publik langsung ke inbox Anda.</p>
				<form onsubmit={(e) => e.preventDefault()} class="flex flex-col gap-2">
					<input 
						type="email" 
						placeholder="Alamat email Anda..." 
						class="w-full bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#0E6A36] font-medium"
					/>
					<button type="submit" class="bg-[#0E6A36] hover:bg-[#0B542B] text-white font-bold text-xs py-2.5 rounded-xl transition-all uppercase tracking-wider">
						Berlangganan Warta
					</button>
				</form>
			</div>

		</div>

		<div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
			<p>© {new Date().getFullYear()} PeduliBersama — Platform Crowdfund & Donasi Publik Modern.</p>
			<div class="flex gap-6 font-mono text-[11px]">
				<a href="/#" class="hover:text-slate-300">PRIVACY</a>
				<a href="/#" class="hover:text-slate-300">TERMS</a>
				<a href="/#" class="hover:text-slate-300">PUBLIC LEDGER</a>
			</div>
		</div>
	</div>
</footer>
