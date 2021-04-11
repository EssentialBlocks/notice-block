// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
	const templateForTypographyAttributes = `{
		"_prefix_FontFamily":{
			"type":"string"
		},
		"_prefix_SizeUnit":{
			"type":"string",
			"default":"px"
		},
		"_prefix_FontSize":{
			"type":"number"
		},
		"_prefix_FontWeight":{
			"type":"string"
		},
		"_prefix_TextTransform":{
			"type":"string"
		},
		"_prefix_TextDecoration":{
			"type":"string"
		},
		"_prefix_LetterSpacingUnit":{
			"type":"string",
			"default":"px"
		},
		"_prefix_LetterSpacing":{
			"type":"number"
		},
		"_prefix_LineHeightUnit":{
			"type":"string",
			"default":"em"
		},
		"_prefix_LineHeight":{
			"type":"number"
		},
		"TAB_prefix_FontFamily":{
			"type":"string"
		},
		"TAB_prefix_SizeUnit":{
			"type":"string"
		},
		"TAB_prefix_FontSize":{
			"type":"number"
		},
		"TAB_prefix_FontWeight":{
			"type":"string"
		},
		"TAB_prefix_TextTransform":{
			"type":"string"
		},
		"TAB_prefix_TextDecoration":{
			"type":"string"
		},
		"TAB_prefix_LetterSpacingUnit":{
			"type":"string"
		},
		"TAB_prefix_LetterSpacing":{
			"type":"number"
		},
		"TAB_prefix_LineHeightUnit":{
			"type":"string"
		},
		"TAB_prefix_LineHeight":{
			"type":"number"
		},
		"MOB_prefix_FontFamily":{
			"type":"string"
		},
		"MOB_prefix_SizeUnit":{
			"type":"string"
		},
		"MOB_prefix_FontSize":{
			"type":"number"
		},
		"MOB_prefix_FontWeight":{
			"type":"string"
		},
		"MOB_prefix_TextTransform":{
			"type":"string"
		},
		"MOB_prefix_TextDecoration":{
			"type":"string"
		},
		"MOB_prefix_LetterSpacingUnit":{
			"type":"string"
		},
		"MOB_prefix_LetterSpacing":{
			"type":"number"
		},
		"MOB_prefix_LineHeightUnit":{
			"type":"string"
		},
		"MOB_prefix_LineHeight":{
			"type":"number"
		}
		
	}`;

	return prefixArray.reduce((total, current) => {
		const result = templateForTypographyAttributes.replace(
			/_prefix_/g,
			current
		);
		return {
			...total,
			...JSON.parse(result),
		};
	}, {});
};

// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown
export const textInsideForEdit = (value, isShowSeparator, separator) =>
	isShowSeparator
		? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
		: value.toString();

// generateRandomNumber function is for generating a random number
export const generateRandomNumber = () =>
	Math.floor(Math.random() * 1000000000);

// hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const hardMinifyCssStrings = (cssString) => {
	// console.log({ cssString });

	return (
		cssString
			.replace(/\s+/g, " ")
			.replace(/(?<=\:).+(?=\;)/g, function (match) {
				// console.log({ match, g1, offset, string });
				return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
			})
			// .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
			.replace(/\s+(?![\w\d\.\-\#]+\{)/g, "")
			.replace(/\s+/g, " ")
			.replace(/__s_p_a_c_e__/g, " ")
	);
};

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString) =>
	cssString.replace(/\s+/g, " ");

// check if css string is empty or not.
export const isCssExists = (cssString) =>
	/.+(?=\:(?!hover)(?!focus))/.test(cssString);

// check if range controller input numbers  has value
export const hasVal = (val) => val || val === 0;
