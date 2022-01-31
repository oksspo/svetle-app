<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<nav class="bg-gray-600 border-gray-200 px-2">
	<div class="container mx-auto flex flex-wrap items-center justify-between">
		<a href="https://kit.svelte.dev" class="flex">
			<img class="w-9" src={logo} alt="SvelteKit" />
		</a>
		<div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
			<ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
				<li class:active={$page.path === '/'}>
					<a sveltekit:prefetch href="/"
					   class="text-white uppercase font-bold hover:text-blue-400 no-underline hover:no-underline block pl-3 pr-4 py-4" aria-current="page">
						Home
					</a>
				</li>
				<li class:active={$page.path.includes('/users') }>
					<a sveltekit:prefetch href="/users"
					   class="text-white uppercase font-bold hover:text-blue-400 no-underline hover:no-underline block pl-3 pr-4 py-4">
						Users
					</a>
				</li>
				<li class:active={$page.path === '/animations'}>
					<a sveltekit:prefetch href="/animations"
					   class="text-white uppercase font-bold hover:text-blue-400 no-underline hover:no-underline block pl-3 pr-4 py-4">
						Animations
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.active {
		border-bottom: 4px solid #60a5f9;
	}

	:global(li) {
		/* These styles are global */
	}
</style>