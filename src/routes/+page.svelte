<script lang="ts">
	import TransitionExplorer from "../components/TransitionExplorer.svelte";
	import { transitions } from "../utils/transitions";
</script>

<div class="flex flex-wrap justify-between gap-8">
	{#each transitions as transition}
		<div class="flex flex-col gap-4">
			<!-- TODO: Add description under (i) icon -->
			<h2 title={transition.description}>{transition.name}</h2>
			<TransitionExplorer {transition} />
		</div>
	{/each}
</div>
