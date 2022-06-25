<script>
	import imageOfMe from '../images/me.jpg';
</script>

<svelte:head>
	<title>Christoph Stach</title>
</svelte:head>

<h2 class="mb-4 border-b-2 border-black text-2xl">Hi there!</h2>

<div>
	<img class="float-left mr-5 mb-5 w-48 rounded-xl" src={imageOfMe} alt="That's me" />

	<div class="prose prose-xl  max-w-none">
		<p>
			My name is Christoph Stach. I am a professional software engineer. I started coding at the age
			of 12 and helped to develop the school's website. From there on, my programming journey
			started. I gained multiple years of work experience as a full stack engineer. Back in the
			days, PHP was the tool of choice. Over the years, I shifted more to frontend development.
			Which is my main focus now. Anyway, I am in general really interested several kinds of
			programming and new technologies. I have also worked on more scientific projects like deep
			learning. Also, for a while I worked on a pipeline to analyze DNA sequences, a topic which is
			more under the hood of bio informatics.
		</p>
	</div>

	<div class="clear-both" />
</div>
