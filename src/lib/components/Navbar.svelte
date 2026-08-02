<script>
	import { page } from '$app/stores';

	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 20;
		});
	}

	let user = $derived($page.data?.user ?? null);
</script>

<header class="sticky top-0 z-50 transition-all duration-300 {isScrolled ? 'bg-[#F1F0F1]/90 backdrop-blur-md py-3 border-b border-[#B5B3A9]/40 shadow-xs' : 'bg-transparent py-4'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			
			<!-- Modern Clean Brand Logo -->
			<a href="/" class="flex items-center gap-2.5 group">
				<div class="w-9 h-9 rounded-xl bg-[#0E6A36] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#0B542B] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
						<path d="M12 7v10"/>
						<path d="M8 11l4-4 4 4"/>
					</svg>
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-lg tracking-tight text-[#0D150F]">
						Peduli<span class="text-[#0E6A36]">Bersama</span>
					</span>
					<span class="text-[9px] font-semibold text-[#6FC052] uppercase tracking-widest -mt-1 font-mono">MODERN CROWDFUND</span>
				</div>
			</a>

			<!-- Desktop Nav Links (Clean Pills) -->
			<nav class="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#B5B3A9]/30 shadow-2xs">
				<a href="/" class="px-4 py-1.5 rounded-full text-xs font-bold transition-all {$page.url.pathname === '/' ? 'bg-[#0E6A36] text-white' : 'text-[#0D150F]/80 hover:text-[#0E6A36] hover:bg-[#F1F0F1]'}">
					Beranda
				</a>
				<a href="/campaigns" class="px-4 py-1.5 rounded-full text-xs font-bold transition-all {$page.url.pathname.startsWith('/campaigns') ? 'bg-[#0E6A36] text-white' : 'text-[#0D150F]/80 hover:text-[#0E6A36] hover:bg-[#F1F0F1]'}">
					Jelajahi Kampanye
				</a>
				<a href="/about" class="px-4 py-1.5 rounded-full text-xs font-bold transition-all {$page.url.pathname === '/about' ? 'bg-[#0E6A36] text-white' : 'text-[#0D150F]/80 hover:text-[#0E6A36] hover:bg-[#F1F0F1]'}">
					Tentang Kami
				</a>
				<a href="/community" class="px-4 py-1.5 rounded-full text-xs font-bold transition-all {$page.url.pathname === '/community' ? 'bg-[#0E6A36] text-white' : 'text-[#0D150F]/80 hover:text-[#0E6A36] hover:bg-[#F1F0F1]'}">
					Komunitas
				</a>
			</nav>

			<!-- Action Buttons -->
			<div class="hidden md:flex items-center gap-3">
				{#if user}
					<a href="/dashboard" class="flex items-center gap-2 bg-[#6FC052]/15 text-[#0E6A36] hover:bg-[#6FC052]/25 px-4 py-2 rounded-xl font-bold text-xs transition-colors border border-[#6FC052]/30">
						<span class="w-2 h-2 rounded-full bg-[#6FC052] animate-pulse"></span>
						<span class="font-mono">{user.username}</span>
					</a>
				{:else}
					<a href="/login" class="text-xs font-bold text-[#0D150F]/80 hover:text-[#0E6A36] px-3.5 py-2">
						Masuk
					</a>
					<a href="/register" class="btn-primary text-xs px-5 py-2.5 shadow-sm flex items-center gap-1.5">
						<span>Mulai Galang Dana</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
					</a>
				{/if}
			</div>

			<!-- Mobile Toggle -->
			<button 
				onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
				aria-label="Toggle Menu"
				class="md:hidden w-9 h-9 rounded-xl bg-white border border-[#B5B3A9]/40 flex items-center justify-center text-[#0D150F]"
			>
				{#if isMobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
				{/if}
			</button>

		</div>
	</div>

	<!-- Mobile Menu Drawer -->
	{#if isMobileMenuOpen}
		<div class="md:hidden bg-white border-b border-[#B5B3A9]/30 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-lg">
			<a href="/" onclick={() => isMobileMenuOpen = false} class="block px-4 py-2.5 rounded-xl font-bold text-[#0D150F] hover:bg-[#F1F0F1]">Beranda</a>
			<a href="/campaigns" onclick={() => isMobileMenuOpen = false} class="block px-4 py-2.5 rounded-xl font-bold text-[#0D150F] hover:bg-[#F1F0F1]">Jelajahi Kampanye</a>
			<a href="/about" onclick={() => isMobileMenuOpen = false} class="block px-4 py-2.5 rounded-xl font-bold text-[#0D150F] hover:bg-[#F1F0F1]">Tentang Kami</a>
			<a href="/community" onclick={() => isMobileMenuOpen = false} class="block px-4 py-2.5 rounded-xl font-bold text-[#0D150F] hover:bg-[#F1F0F1]">Komunitas</a>
			<div class="pt-3 border-t border-[#B5B3A9]/20 flex flex-col gap-2">
				{#if user}
					<a href="/dashboard" class="w-full text-center bg-[#6FC052]/15 text-[#0E6A36] py-3 rounded-xl font-bold font-mono">Dashboard ({user.username})</a>
				{:else}
					<a href="/login" class="w-full text-center py-2.5 font-bold text-[#0D150F] border border-[#B5B3A9]/40 rounded-xl">Masuk</a>
					<a href="/register" class="w-full text-center btn-primary py-3 rounded-xl">Mulai Galang Dana</a>
				{/if}
			</div>
		</div>
	{/if}
</header>