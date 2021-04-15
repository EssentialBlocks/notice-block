// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
	const typoAttrs = prefixArray.reduce((total, current) => {
		const result = {
			[`${current}FontFamily`]: {
				type: "string",
			},
			[`${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}FontSize`]: {
				type: "number",
			},
			[`${current}FontWeight`]: {
				type: "string",
			},
			[`${current}TextTransform`]: {
				type: "string",
			},
			[`${current}TextDecoration`]: {
				type: "string",
			},
			[`${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}LetterSpacing`]: {
				type: "number",
			},
			[`${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`${current}LineHeight`]: {
				type: "number",
			},
			[`TAB${current}FontSize`]: {
				type: "number",
			},
			[`TAB${current}LetterSpacing`]: {
				type: "number",
			},
			[`TAB${current}LineHeight`]: {
				type: "number",
			},
			[`MOB${current}FontSize`]: {
				type: "number",
			},
			[`MOB${current}LetterSpacing`]: {
				type: "number",
			},
			[`MOB${current}LineHeight`]: {
				type: "number",
			},
		};
		return {
			...total,
			...result,
		};
	}, {});

	console.log({ typoAttrs });
	return typoAttrs;
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
