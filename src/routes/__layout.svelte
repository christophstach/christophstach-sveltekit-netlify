<script>
	import Navigation from '$components/Navigation.svelte';
	import '../app.css';
</script>

<div class="min-h-screen pb-10 bg-hero-floating-cogs">
	<Navigation />

	<div class="px-10">
		<main class="mx-auto max-w-[960px] overflow-auto rounded-xl bg-white p-16 shadow-xl">
			<slot />
		</main>
	</div>
</div>
