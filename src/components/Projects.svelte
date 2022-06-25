<script>
	import { format } from 'date-fns';

	import Chip from './Chip.svelte';

	const items = [
		{
			name: 'Covid-SpiNGS pipeline',
			date: new Date(2022, 6, 1),
			url: null,
			description: '',
			technologies: [
				{
					name: 'Nextflow',
					url: 'https://www.nextflow.io'
				},
				{
					name: 'Minimap2',
					url: 'https://lh3.github.io/minimap2'
				},
				{
					name: 'Samtools',
					url: 'https://www.htslib.org'
				},
				{
					name: 'P.E.P.P.E.R.',
					url: 'https://github.com/kishwarshafin/pepper'
				}
			],
			repositories: [
				{
					name: 'Main',
					url: 'https://github.com/christophstach/covid-spings-pipeline'
				}
			]
		},
		{
			name: 'Current Website',
			date: new Date(2022, 6, 1),
			url: 'https://v2.christophstach.me',
			description: '',
			technologies: [
				{
					name: 'SvelteKit',
					url: 'https://kit.svelte.dev'
				},
				{
					name: 'Tailwind CSS',
					url: 'https://tailwindcss.com'
				}
			],
			repositories: [
				{
					name: 'Main',
					url: 'https://github.com/christophstach/christophstach-sveltekit-netlify'
				}
			]
		},
		{
			name: 'Tracky',
			date: new Date(2022, 3, 1),
			url: null,
			description: '',
			technologies: [
				{
					name: 'React',
					url: 'https://reactjs.org'
				},
				{
					name: 'Remix',
					url: 'https://remix.run'
				},
				{
					name: 'Mantine',
					url: 'https://mantine.dev'
				},
				{
					name: 'Prisma',
					url: 'https://www.prisma.io'
				}
			],
			repositories: [
				{
					name: 'Main',
					url: 'https://github.com/christophstach/tracky-remix-mantine'
				}
			]
		},

		{
			name: 'Style Transfer',
			date: new Date(2019, 3, 1),
			url: null,
			description: '',
			technologies: [
				{
					name: 'PyTorch',
					url: 'https://pytorch.org'
				},
				{
					name: 'Flask',
					url: 'https://palletsprojects.com/p/flask'
				},
				{
					name: 'Angular',
					url: 'https://mantine.dev'
				},
				{
					name: 'Bootstrap',
					url: 'https://www.prisma.io'
				}
			],
			repositories: [
				{
					name: 'Main',
					url: 'https://github.com/christophstach/style-transfer-project'
				},
				{
					name: 'Frontend',
					url: 'https://github.com/christophstach/style-transfer-frontend'
				}
			]
		},

		{
			name: 'Former Website',
			date: new Date(2018, 9, 1),
			url: 'https://christophstach.me',
			description: '',
			technologies: [
				{
					name: 'Angular',
					url: 'https://angular.io'
				},
				{
					name: 'Bootstrap',
					url: 'https://getbootstrap.com'
				}
			],
			repositories: [
				{
					name: 'Main',
					url: 'https://github.com/christophstach/cv-bug-free-carnival'
				}
			]
		}
	];
</script>

<h2 class="mb-4 border-b-2 border-black text-2xl">Projects</h2>

<div class="flex flex-wrap justify-center gap-5">
	{#each items as item}
		<div class="w-80 rounded border border-black p-3">
			<h3 class="text-lg">{item.name}</h3>
			<div>{format(item.date, 'MMMM yyyy')}</div>
			<p>{item.description}</p>

			<hr />

			<div class="flex flex-wrap gap-1 py-1">
				{#each item.technologies as technology}
					<a href={technology.url}><Chip>{technology.name}</Chip></a>
				{/each}
			</div>

			<ul class="list-inside list-disc">
				{#each item.repositories as repository}
					<li class="overflow-hidden overflow-ellipsis">
						{repository.name}:
						<a href={repository.url}>{repository.url}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
