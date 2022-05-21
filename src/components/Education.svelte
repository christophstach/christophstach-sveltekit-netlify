<script>
	import dayjs from 'dayjs';

	const educationItems = [
		{
			title: 'M. Sc. Angewandte Informatik ',
			institution: 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin',
			description:
				'At HTW Berlin I am studying applied computer science (Angewandte Informatik). I am currently in the end of my masters. During the time on this university I did serveal projects in the area of bio informatics, deep learning and data science.',
			bullets: [
				'Generative adverserial networks to generate pictures of human faces',
				'On demand next generation sequencing pipeline for the Covid-SpiNGS project'
			],
			from: dayjs('2020-10-01'),
			to: dayjs('2023-09-30')
		}
	];
</script>

<h2 class="mb-4 border-b-2 border-black text-2xl">Experience</h2>

{#each educationItems as item}
	<div>
		<div class="flex">
			<div class="flex-1">
				<h3 class="text-lg">{item.title}</h3>
				<h4 class="mb-4 text-sm">{item.institution}</h4>
			</div>
			<div class="text-xs text-gray-500">
				{item.from.format('MMMM YYYY')} -

				{#if item.to.isAfter(dayjs(), 'month')}
					Present
				{:else}
					{item.to.format('MMMM YYYY')}
				{/if}
			</div>
		</div>

		<p class="my-2 text-sm">{item.description}</p>

		{#if item.bullets.length > 0}
			<ul class="list-disc text-sm">
				{#each item.bullets as bullet}
					<li class="ml-5">{bullet}</li>
				{/each}
			</ul>
		{/if}
	</div>
{/each}
