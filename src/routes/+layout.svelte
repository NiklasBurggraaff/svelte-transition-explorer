<script lang="ts">
	import "@skeletonlabs/skeleton/themes/theme-rocket.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import { AppShell, AppBar } from "@skeletonlabs/skeleton";

	// Code highlighting
	import hljs from "highlight.js";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";
	storeHighlightJs.set(hljs);
	import "highlight.js/styles/github-dark.css";
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Svelte Transition Explorer</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main class="p-8">
		<slot />
	</main>
</AppShell>
