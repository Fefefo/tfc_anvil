<script lang="ts">
	const alloys = [
		{
			name: 'bronze',
			alloys: [
				{
					name: 'copper',
					min: 88,
					max: 92
				},
				{
					name: 'tin',
					min: 8,
					max: 12
				}
			]
		}
	];

	// in ingots (1 ingot = 100ml)
	let wanted = $state(12);
</script>

<main class="min-h-screen w-full bg-black/80 p-4">
	<div class="rounded-4xl bg-white p-8">
		{#each alloys as item}
			{@const amountML = wanted * 100}
			<h1>{item.name}</h1>
			<input type="number" bind:value={wanted} placeholder="Number of ingots" />
			{#each item.alloys as { name, min, max }}
				<div class="flex gap-4">
					<p>{name} {min}-{max}%</p>
					<p>
						{((amountML / 100) * min).toFixed(0)}
						-
						{((amountML / 100) * max).toFixed(0)}
					</p>
				</div>
			{/each}
		{/each}
	</div>
</main>
