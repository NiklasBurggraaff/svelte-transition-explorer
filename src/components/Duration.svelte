<script lang="ts">
	import Integer from "./shared/Integer.svelte";

	const initialDuration = 400;
	const minDuration = 0;
	const maxDuration = 2000;

	export let duration: number | undefined;
</script>

<Integer
	initialValue={initialDuration}
	minValue={minDuration}
	maxValue={maxDuration}
	label="Duration"
	unit="ms"
	bind:value={duration}
/>
