const attributes = {
	blockId: {
		type: "string"
	},
	blockMeta: {
		type: 'string',
        source: 'meta',
        meta: 'eb_css'
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
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	textSizeUnit: {
		type: "string",
		default: "px",
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleTextTransform: {
		type: "string",
	},
	titleTextDecoration: {
		type: "string",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	textFontFamily: {
		type: "string",
	},
	textFontWeight: {
		type: "string",
		default: "normal",
	},
	textTextTransform: {
		type: "string",
	},
	textTextDecoration: {
		type: "string",
	},
	textLetterSpacing: {
		type: "number",
	},
	textLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	textLineHeight: {
		type: "number",
	},
	textLineHeightUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
