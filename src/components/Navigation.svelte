<script>
	const navItems = [
		{ label: 'Home', href: '/', exact: true },
		{ label: 'Blog', href: '/blog', exact: false },
		{ label: 'Education', href: '/education', exact: false },
		{ label: 'Experience', href: '/experience', exact: false },
		{ label: 'Projects', href: '/projects', exact: false },
		{ label: 'About me', href: '/about-me', exact: false },
		{ label: 'Skills', href: '/skills', exact: false },
		{ label: 'Contact', href: '/contact', exact: false }
	];
</script>

<nav class="mb-10 bg-white px-10 py-3 shadow-xl">
	<ul class="mx-auto flex max-w-[960px] justify-end gap-6">
		{#each navItems as navItem}
			<li>
				<a
					href={navItem.href}
					class="text-lg font-medium uppercase text-gray-500 hover:border-b-4 hover:border-gray-900 hover:text-gray-900"
				>
					{navItem.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
