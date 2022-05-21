<script>
	import dayjs from 'dayjs';

	const educationItems = [
		{
			title: 'M. Sc. Angewandte Informatik ',
			institution: 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin',
			description:
				'At <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a> I am studying applied computer science (Angewandte Informatik). I am currently in the end of my masters. During the time on this university I did serveal projects in the area of bio informatics, deep learning and data science.',
			bullets: [
				'Generative adverserial networks to generate pictures of human faces',
				'Member of the <a target="_blank" href="https://campus-stories.htw-berlin.de/en/jahr/2022/in-drei-stunden-das-virus-identifizieren/">Covid-SpiNGS</a> project, developing a on-demand next generation sequencing pipeline for COVID-19 detection',
				'Exchange year in Taipei, Taiwan at the <a target="_blank" href="https://www.ntust.edu.tw/">National Taiwan University of science and technologies (NTUST)</a>'
			],
			from: dayjs('2019-10-01'),
			to: dayjs('2023-09-30')
		},

		{
			title: 'B. Sc. Angewandte Informatik ',
			institution: 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin',
			description:
				'I graduated from <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a> with a Bachelor in applied computer science. During this time I specialized in data science with deep learning.',
			bullets: [
				'Exchange semester in Cuernavaca, Mexico at <a target="_blank" href="https://uninter.edu.mx/">Universidad Internacional (UNINTER)</a>',
				'Bachelor thesis about style transfer of paintings to photos with methods of deep learning'
			],
			from: dayjs('2016-04-01'),
			to: dayjs('2019-09-30')
		}
	];
</script>

<h2 class="mb-4 border-b-2 border-black text-2xl">Experience</h2>

{#each educationItems as item}
	<div class="mb-10">
		<div class="md:flex">
			<div class="md:flex-1">
				<h3 class="text-lg">{item.title}</h3>
				<h4 class="text-sm ">{item.institution}</h4>
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

		<p class="prose prose-sm prose-indigo mb-5 mt-4 max-w-none">{@html item.description}</p>

		{#if item.bullets.length > 0}
			<ul class="list-disc text-sm">
				{#each item.bullets as bullet}
					<li class="prose prose-sm prose-indigo ml-5 max-w-none">{@html bullet}</li>
				{/each}
			</ul>
		{/if}
	</div>
{/each}
