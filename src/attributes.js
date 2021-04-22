import * as prefixObjs from "./constants/typographyPrefixConstants";
import { generateTypographyAttributes } from "./helpers";

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
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
		// default: {
		// 	desktop: "",
		// 	tab: "",
		// 	mobile: "",
		// },
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

	// margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},

	marginTop: {
		type: "string",
	},
	marginRight: {
		type: "string",
	},
	marginBottom: {
		type: "string",
	},
	marginLeft: {
		type: "string",
	},

	paddingUnit: {
		type: "string",
		default: "px",
	},

	paddingTop: {
		type: "string",
		default: "65",
	},
	paddingRight: {
		type: "string",
		default: "60",
	},
	paddingBottom: {
		type: "string",
		default: "65",
	},
	paddingLeft: {
		type: "string",
		default: "60",
	},

	TABmarginUnit: {
		type: "string",
		default: "px",
	},

	TABmarginTop: {
		type: "string",
	},
	TABmarginRight: {
		type: "string",
	},
	TABmarginBottom: {
		type: "string",
	},
	TABmarginLeft: {
		type: "string",
	},

	TABpaddingUnit: {
		type: "string",
		default: "px",
	},

	TABpaddingTop: {
		type: "string",
	},
	TABpaddingRight: {
		type: "string",
	},
	TABpaddingBottom: {
		type: "string",
	},
	TABpaddingLeft: {
		type: "string",
	},

	MOBmarginUnit: {
		type: "string",
		default: "px",
	},

	MOBmarginTop: {
		type: "string",
	},
	MOBmarginRight: {
		type: "string",
	},
	MOBmarginBottom: {
		type: "string",
	},
	MOBmarginLeft: {
		type: "string",
	},

	MOBpaddingUnit: {
		type: "string",
		default: "px",
	},

	MOBpaddingTop: {
		type: "string",
	},
	MOBpaddingRight: {
		type: "string",
	},
	MOBpaddingBottom: {
		type: "string",
	},
	MOBpaddingLeft: {
		type: "string",
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
