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

export const easingNames = [
	"linear",
	"back",
	"bounce",
	"circ",
	"cubic",
	"elastic",
	"expo",
	"quad",
	"quart",
	"quint",
	"sine",
] as const;

export type LinearEasing = {
	name: "linear";
	function: (x: number) => number;
};
export type VariantEasing = {
	variants: {
		name: string;
		function: (x: number) => number;
	}[];
};
export type Easing = LinearEasing | VariantEasing;

export const easings = {
	linear: {
		name: "linear",
		function: linear,
	} as LinearEasing,
	back: {
		variants: [
			{ name: "backIn", function: backIn },
			{ name: "backOut", function: backOut },
			{ name: "backInOut", function: backInOut },
		],
	} as VariantEasing,
	bounce: {
		variants: [
			{ name: "bounceIn", function: bounceIn },
			{ name: "bounceOut", function: bounceOut },
			{ name: "bounceInOut", function: bounceInOut },
		],
	} as VariantEasing,
	circ: {
		variants: [
			{ name: "circIn", function: circIn },
			{ name: "circOut", function: circOut },
			{ name: "circInOut", function: circInOut },
		],
	} as VariantEasing,
	cubic: {
		variants: [
			{ name: "cubicIn", function: cubicIn },
			{ name: "cubicOut", function: cubicOut },
			{ name: "cubicInOut", function: cubicInOut },
		],
	} as VariantEasing,
	elastic: {
		variants: [
			{ name: "elasticIn", function: elasticIn },
			{ name: "elasticOut", function: elasticOut },
			{ name: "elasticInOut", function: elasticInOut },
		],
	} as VariantEasing,
	expo: {
		variants: [
			{ name: "expoIn", function: expoIn },
			{ name: "expoOut", function: expoOut },
			{ name: "expoInOut", function: expoInOut },
		],
	} as VariantEasing,
	quad: {
		variants: [
			{ name: "quadIn", function: quadIn },
			{ name: "quadOut", function: quadOut },
			{ name: "quadInOut", function: quadInOut },
		],
	} as VariantEasing,
	quart: {
		variants: [
			{ name: "quartIn", function: quartIn },
			{ name: "quartOut", function: quartOut },
			{ name: "quartInOut", function: quartInOut },
		],
	} as VariantEasing,
	quint: {
		variants: [
			{ name: "quintIn", function: quintIn },
			{ name: "quintOut", function: quintOut },
			{ name: "quintInOut", function: quintInOut },
		],
	} as VariantEasing,
	sine: {
		variants: [
			{ name: "sineIn", function: sineIn },
			{ name: "sineOut", function: sineOut },
			{ name: "sineInOut", function: sineInOut },
		],
	} as VariantEasing,
} as const;
