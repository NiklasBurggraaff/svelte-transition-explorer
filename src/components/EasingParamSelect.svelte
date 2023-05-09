<script lang="ts">
	import type { EasingFunction } from "svelte/transition";
	import { easings, easingNames } from "../utils/easings";

	export let defaultValue: { name: string; function: EasingFunction };
	export let value: { name: string; function: EasingFunction } | undefined = undefined;

	let easingType = easingNames.find((e) => {
		if (e === "linear") {
			return e === defaultValue.name;
		}
		return easings[e].variants.some((v) => v.name === defaultValue.name);
	})!;

	let easingFunctionName = defaultValue.name;

	function updateEasingType() {
		if (easingType === "linear") {
			easingFunctionName = easingType;
		} else {
			easingFunctionName = easings[easingType].variants[1].name;
		}
	}

	$: {
		value =
			easingFunctionName === defaultValue.name
				? undefined
				: easingType === "linear"
				? easings[easingType]
				: easings[easingType].variants.find((v) => v.name === easingFunctionName);
	}
</script>

<label class="pb-2">
	Select an
	<a href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank">easing function</a>
	<select
		class="rounded-md border border-input bg-transparent px-3 text-sm block w-full h-8"
		bind:value={easingType}
		on:change={updateEasingType}
	>
		{#each easingNames as easingName}
			<option value={easingName} selected={easingType === easingName}>{easingName}</option>
		{/each}
	</select>
</label>
{#if easingType !== "linear"}
	<label class="pb-2">
		Select a variant
		<select
			class="rounded-md border border-input bg-transparent px-3 text-sm block w-full h-8"
			bind:value={easingFunctionName}
		>
			{#each easings[easingType].variants as easingVariant}
				<option value={easingVariant.name} selected={easingFunctionName === easingVariant.name}>
					{easingVariant.name}
				</option>
			{/each}
		</select>
	</label>
{/if}
