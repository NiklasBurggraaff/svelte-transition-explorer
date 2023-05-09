<script lang="ts">
	import type { transitions } from "../utils/transitions";
	import Code from "./Code.svelte";
	import AxisParamSelect from "./AxisParamSelect.svelte";
	import EasingParamSelect from "./EasingParamSelect.svelte";
	import NumberParamSelect from "./NumberParamSelect.svelte";

	export let transition: (typeof transitions)[number];

	let show = true;
	const toggle = () => {
		show = !show;
	};

	let unique = {};
	function restart() {
		unique = {};
	}

	$: transitionFunction = transition.function;

	let paramValues = Object.fromEntries(transition.parameters.map((p) => [p.name, undefined]));

	function getTransitionParamValue(key: any, value: any) {
		if (key === "easing") {
			return value?.function;
		}
		return value;
	}

	$: transitionParams = Object.fromEntries(
		Object.entries(paramValues).map(([key, value]) => [key, getTransitionParamValue(key, value)])
	);
	$: transitionParams, restart();

	function formatTransitionParamValue(key: any, value: any) {
		if (key === "easing") {
			return value?.name;
		}
		return value;
	}
	$: formattedOptions = Object.fromEntries(
		Object.entries(paramValues).map(([key, value]) => [key, formatTransitionParamValue(key, value)])
	);
</script>

<!-- TODO: Add autoplay feature -->
<div class="flex gap-16">
	<div>
		<h3 class="pb-4">Parameters</h3>
		<div class="overflow-y-auto">
			{#each transition.parameters as parameter}
				{#if parameter.type === "number"}
					<NumberParamSelect
						bind:value={paramValues[parameter.name]}
						defaultValue={parameter.defaultValue}
						{...parameter.componentProps}
					/>
				{:else if parameter.type === "easing"}
					<EasingParamSelect
						bind:value={paramValues[parameter.name]}
						defaultValue={parameter.defaultValue}
					/>
				{:else if parameter.type === "axis"}
					<AxisParamSelect
						bind:value={paramValues[parameter.name]}
						defaultValue={parameter.defaultValue}
					/>
				{:else}
					<p>Unknown parameter type</p>
				{/if}
			{/each}
		</div>
	</div>
	<div>
		<h3 class="pb-4">Preview</h3>
		<div
			class="border-2 rounded-xl h-96 w-96 border-surface-200 box-border flex justify-center items-center relative"
		>
			{#if show}
				{#key unique}
					<!-- TODO: Be smart with in and out to not cause double transition on unique -->
					<div
						transition:transitionFunction={transitionParams}
						class="bg-primary-500 absolute w-32 h-32"
					/>
				{/key}
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
	<div class="hidden">
		<h3 class="pb-4">Code</h3>
		<Code transition={{ name: transition.name, params: formattedOptions }} />
	</div>
</div>
