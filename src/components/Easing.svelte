<script lang="ts">
	import type { EasingFunction } from "svelte/transition";
	import { easings } from "../utils/main";

	let easingType: (typeof easings)[number] = easings[0];

	export let initialEasingFunction: { name: string; function: EasingFunction } = easings[0];

	let easingFunction: { name: string; function: EasingFunction } = initialEasingFunction;

	function updateEasingType() {
		if ("variants" in easingType) {
			easingFunction = easingType.variants[0];
		} else {
			easingFunction = easingType;
		}
	}

	export let easing: { name: string; function: EasingFunction } | undefined = undefined;

	$: {
		easing = easingFunction === initialEasingFunction ? undefined : easingFunction;
	}
</script>

<label>
	Select an
	<a href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank">easing function</a>
	<select
		class="rounded-md border border-input bg-transparent px-3 py-2 text-sm block w-full h-10"
		bind:value={easingType}
		on:change={updateEasingType}
	>
		{#each easings as easing}
			<option value={easing}>{easing.name}</option>
		{/each}
	</select>
</label>
{#if "variants" in easingType}
	<label>
		Select a variant
		<select
			class="rounded-md border border-input bg-transparent px-3 py-2 text-sm block w-full h-10"
			bind:value={easingFunction}
		>
			{#each easingType.variants as easingVariant}
				<option value={easingVariant}>{easingVariant.name}</option>
			{/each}
		</select>
	</label>
{/if}
