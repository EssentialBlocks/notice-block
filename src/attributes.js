import * as prefixObjs from "./constants/typographyPrefixConstants";
import { generateTypographyAttributes } from "./myUtil/helpers";

const attributes = {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// uniqueIdNumber attribute for making unique className
	uniqueIdNumber: {
		type: "number",
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

	dismissible: {
		type: "boolean",
		default: false,
	},
	noticeType: {
		type: "string",
		default: "default",
	},
	titleFontSize: {
		type: "number",
	},
	textFontSize: {
		type: "number",
	},
	title: {
		type: "string",
		source: "text",
		selector: ".eb-notice-title",
		default: "Save 20%",
	},
	text: {
		type: "string",
		source: "text",
		selector: ".eb-notice-text",
		default: "Free shipping on all orders",
	},
	backgroundColor: {
		type: "string",
	},
	titleColor: {
		type: "string",
	},
	textColor: {
		type: "string",
	},
	noticeId: {
		type: "string",
	},
	showAfterDismiss: {
		type: "boolean",
		default: false,
	},
	shadowColor: {
		type: "string",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
};

export default attributes;
