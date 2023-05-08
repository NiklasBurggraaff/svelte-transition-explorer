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

export const transitions = [
	{ name: "fly", function: fly },
	{ name: "blur", function: blur },
	{ name: "fade", function: fade },
	{ name: "slide", function: slide },
	{ name: "scale", function: scale },
	{ name: "draw", function: draw },
	{ name: "crossfade", function: crossfade },
] as const;

// https://svelte.dev/examples/easing
export const easings = [
	{ name: "linear", function: linear },
	{
		name: "back",
		variants: [
			{ name: "backIn", function: backIn },
			{ name: "backOut", function: backOut },
			{ name: "backInOut", function: backInOut },
		],
	},
	{
		name: "bounce",
		variants: [
			{ name: "bounceIn", function: bounceIn },
			{ name: "bounceOut", function: bounceOut },
			{ name: "bounceInOut", function: bounceInOut },
		],
	},
	{
		name: "circ",
		variants: [
			{ name: "circIn", function: circIn },
			{ name: "circOut", function: circOut },
			{ name: "circInOut", function: circInOut },
		],
	},
	{
		name: "cubic",
		variants: [
			{ name: "cubicIn", function: cubicIn },
			{ name: "cubicOut", function: cubicOut },
			{ name: "cubicInOut", function: cubicInOut },
		],
	},
	{
		name: "elastic",
		variants: [
			{ name: "elasticIn", function: elasticIn },
			{ name: "elasticOut", function: elasticOut },
			{ name: "elasticInOut", function: elasticInOut },
		],
	},
	{
		name: "expo",
		variants: [
			{ name: "expoIn", function: expoIn },
			{ name: "expoOut", function: expoOut },
			{ name: "expoInOut", function: expoInOut },
		],
	},
	{
		name: "quad",
		variants: [
			{ name: "quadIn", function: quadIn },
			{ name: "quadOut", function: quadOut },
			{ name: "quadInOut", function: quadInOut },
		],
	},
	{
		name: "quart",
		variants: [
			{ name: "quartIn", function: quartIn },
			{ name: "quartOut", function: quartOut },
			{ name: "quartInOut", function: quartInOut },
		],
	},
	{
		name: "quint",
		variants: [
			{ name: "quintIn", function: quintIn },
			{ name: "quintOut", function: quintOut },
			{ name: "quintInOut", function: quintInOut },
		],
	},
	{
		name: "sine",
		variants: [
			{ name: "sineIn", function: sineIn },
			{ name: "sineOut", function: sineOut },
			{ name: "sineInOut", function: sineInOut },
		],
	},
] as const;
