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

	// margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},

	marginTop: {
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},

	paddingUnit: {
		type: "string",
		default: "px",
	},

	paddingTop: {
		type: "number",
		default: 65,
	},
	paddingRight: {
		type: "number",
		default: 60,
	},
	paddingBottom: {
		type: "number",
		default: 65,
	},
	paddingLeft: {
		type: "number",
		default: 60,
	},

	TABmarginUnit: {
		type: "string",
	},

	TABmarginTop: {
		type: "number",
	},
	TABmarginRight: {
		type: "number",
	},
	TABmarginBottom: {
		type: "number",
	},
	TABmarginLeft: {
		type: "number",
	},

	TABpaddingUnit: {
		type: "string",
	},

	TABpaddingTop: {
		type: "number",
	},
	TABpaddingRight: {
		type: "number",
	},
	TABpaddingBottom: {
		type: "number",
	},
	TABpaddingLeft: {
		type: "number",
	},

	MOBmarginUnit: {
		type: "string",
	},

	MOBmarginTop: {
		type: "number",
	},
	MOBmarginRight: {
		type: "number",
	},
	MOBmarginBottom: {
		type: "number",
	},
	MOBmarginLeft: {
		type: "number",
	},

	MOBpaddingUnit: {
		type: "string",
	},

	MOBpaddingTop: {
		type: "number",
	},
	MOBpaddingRight: {
		type: "number",
	},
	MOBpaddingBottom: {
		type: "number",
	},
	MOBpaddingLeft: {
		type: "number",
	},

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
