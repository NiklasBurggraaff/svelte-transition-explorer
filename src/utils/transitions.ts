import {
	fade,
	blur,
	fly,
	slide,
	scale,
	type FadeParams,
	type TransitionConfig,
} from "svelte/transition";
import { cubicInOut, cubicOut, linear } from "svelte/easing";

const delayParam = {
	name: "delay",
	defaultValue: 0,
	type: "number",
	componentProps: {
		label: "Delay",
		unit: "ms",
		title: "milliseconds before starting",
		minValue: 0,
		maxValue: 1000,
		step: 50,
	},
} as const;

const durationParam = {
	name: "duration",
	defaultValue: 400,
	type: "number",
	componentProps: {
		label: "Duration",
		unit: "ms",
		title: "milliseconds the transition lasts",
		minValue: 0,
		maxValue: 2000,
		step: 50,
	},
} as const;

const linearEasingParam = {
	name: "linear",
	function: linear,
} as const;
const cubicOutEasingParam = {
	name: "cubicOut",
	function: cubicOut,
} as const;
const cubicInOutEasingParam = {
	name: "cubicInOut",
	function: cubicInOut,
} as const;

function getEasingParam(defaultValue: { name: string; function: (x: any) => any }) {
	return {
		name: "easing",
		defaultValue,
		type: "easing",
	} as const;
}

function getOffsetParam(axis: "x" | "y") {
	return {
		name: axis,
		defaultValue: 0,
		type: "number",
		componentProps: {
			label: axis.toUpperCase(),
			unit: "px",
			title: `the ${axis} offset to animate out to and in from`,
			minValue: -128,
			maxValue: 128,
			step: 4,
		},
	} as const;
}

const opacityParam = {
	name: "opacity",
	defaultValue: 0,
	type: "number",
	componentProps: {
		label: "Opacity",
		title: "the opacity value to animate out to and in from",
		minValue: 0,
		maxValue: 1,
		step: 0.05,
	},
} as const;

export const transitions = [
	{
		name: "fade",
		description:
			"Animates the opacity of an element from 0 to the current opacity for in transitions and from the current opacity to 0 for out transitions.",
		function: fade,
		parameters: [delayParam, durationParam, getEasingParam(linearEasingParam)],
	},
	{
		name: "blur",
		description: "Animates a blur filter alongside an element's opacity.",
		function: blur,
		parameters: [
			delayParam,
			durationParam,
			getEasingParam(cubicInOutEasingParam),
			opacityParam,
			{
				name: "amount",
				defaultValue: 5,
				type: "number",
				componentProps: {
					label: "Amount",
					unit: "px",
					title: "the size of the blur",
					minValue: 0,
					maxValue: 64,
					step: 2,
				},
			},
		],
	},
	{
		name: "fly",
		description:
			"Animates the x and y positions and the opacity of an element. in transitions animate from the provided values, passed as parameters to the element's default values. out transitions animate from the element's default values to the provided values.",
		function: fly,
		parameters: [
			delayParam,
			durationParam,
			getEasingParam(cubicOutEasingParam),
			getOffsetParam("x"),
			getOffsetParam("y"),
			opacityParam,
		],
	},
	{
		name: "slide",
		description: "Slides an element in and out.",
		function: slide,
		parameters: [
			delayParam,
			durationParam,
			getEasingParam(cubicOutEasingParam),
			{
				name: "axis",
				defaultValue: "y",
				type: "axis",
			},
		],
	},
	{
		name: "scale",
		function: scale,
		description:
			"Animates the opacity and scale of an element. in transitions animate from an element's current (default) values to the provided values, passed as parameters. out transitions animate from the provided values to an element's default values",
		parameters: [
			delayParam,
			durationParam,
			getEasingParam(cubicOutEasingParam),
			{
				name: "start",
				defaultValue: 0,
				type: "number",
				componentProps: {
					label: "Start",
					title: "the scale to animate out to and in from",
					minValue: 0,
					maxValue: 2,
					step: 0.05,
				},
			},
			opacityParam,
		],
	},
] as const;

// TODO: Draw and crossfade transitions
