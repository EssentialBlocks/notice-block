const { __ } = wp.i18n;

export const NOTICE_TYPES = [
	{ label: __("Default"), value: "default" },
	{ label: __("Success"), value: "success" },
	{ label: __("Info"), value: "info" },
	{ label: __("Warning"), value: "warning" },
	{ label: __("Danger"), value: "danger" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const FONT_SIZE_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "%", value: "%" },
];
