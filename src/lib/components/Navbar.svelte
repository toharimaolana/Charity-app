<script>
  import { navigating } from "$app/stores";
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  let showMobileMenu = false;
  let activeSection = "home"; // For active link highlighting (can be updated with intersection observer if needed)

  // Dummy logo, replace with actual SVG or image
  const Logo = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-violet-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10l-2 1V6l2-1zm14 0l-2 1V6l2-1h2V7h-2zm-6 0v10H8V7h4zm0 1h-2v8h2V8zm8 0l-2 1v8l2 1h2V8h-2z" />
  </svg>`;

  // Function to toggle mobile menu
  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }

  // Close mobile menu on navigation
  $: if ($navigating) {
    showMobileMenu = false;
  }
</script>

<nav class="bg-white shadow-lg sticky top-0 z-50">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="text-2xl font-bold text-gray-800 flex items-center">
        {@html Logo}
        <span class="ml-2">CharityApp</span>
      </a>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-6">
      <a href="/" class="text-gray-600 hover:text-violet-accent transition duration-300">Home</a>
      <a href="/campaign" class="text-gray-600 hover:text-violet-accent transition duration-300">Campaign</a>
      <a href="/community" class="text-gray-600 hover:text-violet-accent transition duration-300">Community</a>
      <button class="bg-violet-accent text-gray-800 px-6 py-2 rounded-full hover:bg-violet-700 transition duration-300 shadow-md">Donasi Sekarang</button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center">
      <button on:click={toggleMobileMenu} class="text-gray-600 focus:outline-none focus:text-violet-accent">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Content -->
  {#if showMobileMenu}
    <div transition:slide={{ duration: 300, easing: quintOut }} class="md:hidden bg-white shadow-lg py-2">
      <a href="/" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
      <a href="/campaign" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Campaign</a>
      <a href="/community" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Community</a>
      <div class="px-4 py-2">
        <button class="w-full bg-violet-accent text-gray-800 px-6 py-2 rounded-full hover:bg-violet-700 transition duration-300 shadow-md">Donasi Sekarang</button>
      </div>
    </div>
  {/if}
</nav>