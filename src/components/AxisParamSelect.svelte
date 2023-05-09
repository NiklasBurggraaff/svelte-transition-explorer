<script lang="ts">
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

	export let defaultValue: "x" | "y";

	export let value: "x" | "y" | undefined = undefined;

	let axis = defaultValue;

	$: {
		value = axis === defaultValue ? undefined : axis;
	}
</script>

<div class="flex flex-col" title="the axis of motion along which the transition occurs">
	Select an axis
	<RadioGroup class="w-min">
		<RadioItem bind:group={axis} name="justify" value={"x"}>x</RadioItem>
		<RadioItem bind:group={axis} name="justify" value={"y"}>y</RadioItem>
	</RadioGroup>
</div>
