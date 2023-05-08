import { fade, blur, fly, slide, scale, draw, crossfade } from "svelte/transition";
import {
	linear,
	backIn,
	backOut,
	backInOut,
	bounceIn,
	bounceOut,
	bounceInOut,
	circIn,
	circOut,
	circInOut,
	cubicIn,
	cubicOut,
	cubicInOut,
	elasticIn,
	elasticOut,
	elasticInOut,
	expoIn,
	expoOut,
	expoInOut,
	quadIn,
	quadOut,
	quadInOut,
	quartIn,
	quartOut,
	quartInOut,
	quintIn,
	quintOut,
	quintInOut,
	sineIn,
	sineOut,
	sineInOut,
} from "svelte/easing";

const transitions = [
	{ name: "fly", transition: fly },
	{ name: "blur", transition: blur },
	{ name: "fade", transition: fade },
	{ name: "slide", transition: slide },
	{ name: "scale", transition: scale },
	{ name: "draw", transition: draw },
	{ name: "crossfade", transition: crossfade },
] as const;

// https://svelte.dev/examples/easing
const easings = [
	{ name: "linear", easing: linear },
	{
		name: "back",
		easings: [
			{ name: "in", easing: backIn },
			{ name: "out", easing: backOut },
			{ name: "inOut", easing: backInOut },
		],
	},
	{
		name: "bounce",
		easings: [
			{ name: "in", easing: bounceIn },
			{ name: "out", easing: bounceOut },
			{ name: "inOut", easing: bounceInOut },
		],
	},
	{
		name: "circ",
		easings: [
			{ name: "in", easing: circIn },
			{ name: "out", easing: circOut },
			{ name: "inOut", easing: circInOut },
		],
	},
	{
		name: "cubic",
		easings: [
			{ name: "in", easing: cubicIn },
			{ name: "out", easing: cubicOut },
			{ name: "inOut", easing: cubicInOut },
		],
	},
	{
		name: "elastic",
		easings: [
			{ name: "in", easing: elasticIn },
			{ name: "out", easing: elasticOut },
			{ name: "inOut", easing: elasticInOut },
		],
	},
	{
		name: "expo",
		easings: [
			{ name: "in", easing: expoIn },
			{ name: "out", easing: expoOut },
			{ name: "inOut", easing: expoInOut },
		],
	},
	{
		name: "quad",
		easings: [
			{ name: "in", easing: quadIn },
			{ name: "out", easing: quadOut },
			{ name: "inOut", easing: quadInOut },
		],
	},
	{
		name: "quart",
		easings: [
			{ name: "in", easing: quartIn },
			{ name: "out", easing: quartOut },
			{ name: "inOut", easing: quartInOut },
		],
	},
	{
		name: "quint",
		easings: [
			{ name: "in", easing: quintIn },
			{ name: "out", easing: quintOut },
			{ name: "inOut", easing: quintInOut },
		],
	},
	{
		name: "sine",
		easings: [
			{ name: "in", easing: sineIn },
			{ name: "out", easing: sineOut },
			{ name: "inOut", easing: sineInOut },
		],
	},
] as const;

export { transitions, easings };
