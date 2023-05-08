<script lang="ts">
	import Integer from "./shared/Integer.svelte";

	const initialDelay = 0;
	const minDelay = 0;
	const maxDelay = 1000;

	export let delay: number | undefined;
</script>

<Integer
	initialValue={initialDelay}
	minValue={minDelay}
	maxValue={maxDelay}
	label="Delay"
	unit="ms"
	bind:value={delay}
/>
