<script>
	import Navigation from '$components/Navigation.svelte';
	import '../app.css';
</script>

<div class="min-h-screen pb-10 bg-hero-floating-cogs">
	<Navigation />

	<div class="px-10">
		<main class="bg-white mx-auto px-16 py-16 rounded-xl shadow-xl max-w-[960px]">
			<slot />
		</main>
	</div>
</div>
