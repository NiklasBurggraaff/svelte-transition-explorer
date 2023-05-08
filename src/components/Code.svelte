<script lang="ts">
	import { CodeBlock } from "@skeletonlabs/skeleton";
	import {
		type BlurParams,
		type SlideParams,
		type ScaleParams,
		type DrawParams,
		type CrossfadeParams,
		type FlyParams,
		fade,
	} from "svelte/transition";

	export let transition:
		| {
				name: "fade";
				params: {
					duration?: number;
					delay?: number;
					easing?: string;
				};
		  }
		| {
				name: "blur";
				params: BlurParams;
		  }
		| {
				name: "fly";
				params: FlyParams;
		  }
		| {
				name: "slide";
				params: SlideParams;
		  }
		| {
				name: "scale";
				params: ScaleParams;
		  }
		| {
				name: "draw";
				params: DrawParams;
		  }
		| {
				name: "crossfade";
				params: CrossfadeParams;
		  };

	function formatEasingParam(easing: string | undefined) {
		if (easing === undefined) {
			return "";
		}

		return `easing: ${easing}`;
	}

	function formatParams(params: typeof transition.params) {
		if (params === undefined) {
			return [];
		}

		return Object.entries(params)
			.map(([key, value]) => {
				if (value === undefined) {
					return "";
				}

				if (key === "easing") {
					return formatEasingParam(value);
				}

				return `${key}: ${value}`;
			})
			.filter((param) => param !== "");
	}

	$: {
		console.log(formatParams(transition.params));
	}

	$: transitionImport = `import { ${transition.name} } from "svelte/transition";`;

	$: imports =
		transition.params.easing === undefined
			? [transitionImport]
			: [transitionImport, `import { ${transition.params.easing} } from "svelte/easing";`];

	$: transitionParams = formatParams(transition.params);
	$: transitionCode =
		transition === undefined
			? ""
			: transitionParams.length == 0
			? `transition:${transition.name}`
			: `transition:${transition.name}={{ ${transitionParams.join(", ")} }}`;
	$: attributesCode = transitionCode;

	const showVar = "let show = true;";
	$: previewScript = `\<script lang="ts"\>
	${imports.join("\n\t")}

	${showVar}
\</script\>`;

	const previewStyle = `\tdiv \{
		background-color\: \#00f\;
		height\: 8rem\;
		width\: 8rem\;
	\}\n\</style\>`;

	$: previewCode = `${previewScript}

<button on:click={() => show = !show}>Toggle</button>
{#if show}
	<div ${attributesCode} class="bg-primary-500 w-32 h-32" />
{/if}

${"<style>"}
${previewStyle}
`;
</script>

{#if imports.length > 0}
	Imports (in script tag):
	<CodeBlock language="ts" code={imports.join("\n")} />

	<br />
{/if}

Attributes (for element):
<CodeBlock language="ts" code={attributesCode} />

<br />

Example component:
<CodeBlock language="ts" code={previewCode} />
