<script lang="ts">
	export let defaultValue: number;
	export let minValue: number;
	export let maxValue: number;
	export let step: number;

	export let label: string;
	export let unit: string | undefined = undefined;
	export let title: string | undefined = undefined;

	let actualValue: number = defaultValue;

	export let value: number | undefined = undefined;
	$: {
		value = actualValue === defaultValue ? undefined : actualValue;
	}
</script>

<label {title}>
	{label}
	{#if unit}
		<span class="text-xs text-surface-300"> ({unit})</span>
	{/if}
	<div class="flex justify-between items-center">
		<input
			class="flex h-8 w-32 rounded-md border border-input bg-transparent px-3 text-sm"
			type="number"
			bind:value={actualValue}
			min={minValue}
			max={maxValue}
			{step}
		/>
		<button
			type="button"
			class="btn btn-sm"
			on:click={() => (actualValue = defaultValue)}
			title={`Reset to ${defaultValue}`}>Reset</button
		>
	</div>
	<input
		class="flex h-8 w-full rounded-md border border-input bg-transparent text-sm"
		type="range"
		bind:value={actualValue}
		min={minValue}
		max={maxValue}
		{step}
	/>
</label>
