<script>
	import '../app.css';
</script>

<div class="min-h-screen pb-10 bg-hero-floating-cogs">
	<nav class="px-10 py-3 mb-10 bg-white shadow-xl">
		<ul class="flex justify-end gap-3">
			<li>
				<a class="block px-3 py-1 border rounded-md" href="/">Home</a>
			</li>
			<li>
				<a class="block px-3 py-1 border rounded-md" href="/blog">Blog</a>
			</li>
		</ul>
	</nav>

	<div class="px-10">
		<main class="bg-white mx-auto px-16 py-16 rounded-xl shadow-xl max-w-[960px]">
			<slot />
		</main>
	</div>
</div>
