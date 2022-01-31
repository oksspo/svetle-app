<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../tailwind.css';
</script>

<Header />

<main class="p-8 max-w-6xl mx-auto">
	<slot />
</main>