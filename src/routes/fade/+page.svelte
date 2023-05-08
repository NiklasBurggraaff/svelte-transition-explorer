<script lang="ts">
	import { fade, type EasingFunction } from "svelte/transition";
	import Duration from "../../components/Duration.svelte";
	import Delay from "../../components/Delay.svelte";
	import Code from "../../components/Code.svelte";
	import Easing from "../../components/Easing.svelte";

	let show = true;

	let duration: number | undefined = undefined;
	let delay: number | undefined = undefined;
	let easing: { name: string; function: EasingFunction } | undefined = undefined;

	$: fadeOptions = {
		duration,
		delay,
		easing: easing?.function,
	};

	$: formattedOptions = {
		duration,
		delay,
		easing: easing?.name,
	};

	const toggle = () => {
		show = !show;
	};
</script>

<div class="pb-8">
	<h1>Fade</h1>
	<p class="py-4">
		Animates the opacity of an element from 0 to the current opacity for <code>in</code> transitions
		and from the current opacity to 0 for <code>out</code> transitions.
	</p>
</div>

<div class="flex gap-16">
	<div>
		<h2 class="pb-4">Options</h2>
		<div>
			<Duration bind:duration />
			<Delay bind:delay />
			<Easing bind:easing />
		</div>
	</div>
	<div>
		<h2 class="pb-4">Preview</h2>
		<div
			class="border-2 rounded-xl h-96 w-96 border-surface-200 box-border flex justify-center items-center"
		>
			{#if show}
				<div transition:fade={fadeOptions} class="bg-primary-500 w-32 h-32" />
			{/if}
		</div>
		<div class="flex justify-center p-4">
			<button
				type="button"
				class="btn variant-filled-primary rounded-xl w-24"
				on:click={() => {
					toggle();
				}}
			>
				{show ? "Hide" : "Show"}
			</button>
		</div>
	</div>
	<div>
		<h2 class="pb-4">Code</h2>
		<Code transition={{ name: "fade", params: formattedOptions }} />
	</div>
</div>
