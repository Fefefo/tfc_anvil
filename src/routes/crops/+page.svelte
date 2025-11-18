<script lang="ts">
	import * as crop from '$lib/jsons/crops.json';

	interface Crop {
		name: string;
		temperature: {
			min: number;
			max: number;
		};
		hydration: {
			min: number;
			max: number;
		};
		nutrient: 'Nitrogen' | 'Phosphorus' | 'Potassium';
	}
	const { crops } = crop as { crops: Crop[] };
</script>

<main class="w-screen">
	<table class="w-full p-12">
		<thead class="m-4 text-center">
			<tr class="m-4 grid grid-cols-4 items-center justify-between text-lg font-black capitalize">
				<td>Name</td>
				<td class="flex flex-col">
					<div>temperature</div>
					<div class="grid grid-cols-2">
						<span>Min</span>
						<span>Max</span>
					</div>
				</td>
				<td class="flex flex-col">
					<div>Hydration</div>
					<div class="grid grid-cols-2">
						<span>Min</span>
						<span>Max</span>
					</div>
				</td>
				<td>Nutrient</td>
			</tr>
		</thead>
		<tbody class="m-4">
			{#each crops as { name, hydration, nutrient, temperature }}
				<tr
					class="m-4 grid grid-cols-4 items-center justify-between text-center font-semibold capitalize"
				>
					<td>{name}</td>
					<td class="flex flex-col">
						<div class="grid grid-cols-2">
							<span class="text-center">{temperature.min}</span>
							<span class="text-center">{temperature.max}</span>
						</div>
					</td>
					<td class="flex flex-col">
						<div class="grid grid-cols-2">
							<span>{hydration.min}</span>
							<span>{hydration.max}</span>
						</div>
					</td>
					<td class="text-center">{nutrient}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	td {
		border: thick 3px solid re d;
	}
</style>
