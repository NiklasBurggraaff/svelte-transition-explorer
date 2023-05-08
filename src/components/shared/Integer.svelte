<script lang="ts">
	export let initialValue: number;
	export let minValue: number;
	export let maxValue: number;

	export let label: string;
	export let unit: string | undefined = undefined;

	let actualValue: number = initialValue;

	export let value: number | undefined = undefined;
	$: {
		value = actualValue === initialValue ? undefined : actualValue;
	}
</script>

<label>
	{label}
	{#if unit}
		<span class="text-xs text-surface-300"> ({unit})</span>
	{/if}
	<div class="flex justify-between items-center">
		<input
			class="flex h-10 w-32 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
			type="number"
			bind:value={actualValue}
			min={minValue}
			max={maxValue}
		/>
		<button
			type="button"
			class="btn btn-sm"
			on:click={() => (actualValue = initialValue)}
			title={`Reset to ${initialValue}`}>Reset</button
		>
	</div>
	<input
		class="flex h-10 w-full rounded-md border border-input bg-transparent py-2 text-sm"
		type="range"
		bind:value={actualValue}
		min={minValue}
		max={maxValue}
	/>
</label>
