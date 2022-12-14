import type { Config } from "stylelint";

// https://github.com/hudochenkov/stylelint-order
const config: Partial<Config> = {
	plugins: ["stylelint-order"],

	rules: {
		"order/order": ["custom-properties", "declarations"],
		"order/properties-order": [
			"content",
			"display",
			"flex",
			"flex-basis",
			"flex-flow",
			"flex-grow",
			"flex-shrink",
			"flex-wrap",
			"flex-direction",
			"align-items",
			"align-content",
			"align-self",
			"justify-content",
			"order",
			"grid",
			"grid-area",
			"grid-auto-columns",
			"grid-auto-flow",
			"grid-auto-rows",
			"grid-template",
			"grid-template-areas",
			"grid-template-columns",
			"grid-template-rows",
			"grid-column",
			"grid-column-end",
			"grid-column-gap",
			"grid-column-start",
			"grid-row",
			"grid-row-end",
			"grid-row-gap",
			"grid-row-start",
			"grid-gap",
			"gap",
			"position",
			"top",
			"right",
			"bottom",
			"left",
			"z-index",
			"pointer-events",
			"cursor",
			"width",
			"min-width",
			"max-width",
			"height",
			"min-height",
			"max-height",
			"margin",
			"margin-top",
			"margin-right",
			"margin-bottom",
			"margin-left",
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
			"float",
			"clear",
			"clip",
			"columns",
			"column-gap",
			"column-fill",
			"column-rule",
			"column-span",
			"column-count",
			"column-width",
			"vertical-align",
			"border",
			"border-top",
			"border-right",
			"border-bottom",
			"border-left",
			"border-width",
			"border-top-width",
			"border-right-width",
			"border-bottom-width",
			"border-left-width",
			"border-style",
			"border-top-style",
			"border-right-style",
			"border-bottom-style",
			"border-left-style",
			"border-radius",
			"border-top-left-radius",
			"border-top-right-radius",
			"border-bottom-left-radius",
			"border-bottom-right-radius",
			"border-color",
			"border-top-color",
			"border-right-color",
			"border-bottom-color",
			"border-left-color",
			"border-collapse",
			"border-spacing",
			"outline",
			"outline-color",
			"outline-offset",
			"outline-style",
			"outline-width",
			"background",
			"background-attachment",
			"background-blend-mode",
			"background-clip",
			"background-color",
			"background-image",
			"background-repeat",
			"background-position",
			"background-size",
			"fill",
			"fill-rule",
			"stroke",
			"stroke-width",
			"box-shadow",
			"box-sizing",
			"caption-side",
			"empty-cells",
			"filter",
			"quotes",
			"speak",
			"table-layout",
			"user-select",
			"vertical-align",
			"color",
			"font",
			"font-family",
			"src",
			"font-size",
			"font-smoothing",
			"font-style",
			"font-variant",
			"font-weight",
			"font-feature-settings",
			"letter-spacing",
			"line-height",
			"list-style",
			"text-align",
			"text-decoration",
			"text-indent",
			"text-overflow",
			"text-rendering",
			"text-shadow",
			"text-transform",
			"text-wrap",
			"white-space",
			"word-spacing",
			"animation",
			"animation-name",
			"animation-duration",
			"animation-timing-function",
			"animation-iteration-count",
			"animation-direction",
			"animation-delay",
			"transform",
			"transform-box",
			"transform-origin",
			"transform-style",
			"translate",
			"rotate",
			"scale",
			"transition",
			"transition-delay",
			"transition-duration",
			"transition-property",
			"transition-timing-function",
			"overflow",
			"overflow-x",
			"overflow-y",
			"backface-visibility",
			"will-change",
			"visibility",
			"opacity",
		],
	},
};

export default config;
