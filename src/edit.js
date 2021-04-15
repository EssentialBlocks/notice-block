/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

import "./editor.scss";

/**
 * Internal depenencies
 */
import Inspector from "./inspector";

import {
	typoPrefix_text,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";
import {
	generateRandomNumber,
	softMinifyCssStrings,
	hasVal,
	isCssExists,
} from "./myUtil/helpers";

export default function Edit(props) {
	const { attributes, setAttributes, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,

		dismissible,
		// titleFontSize,
		// textFontSize,
		title,
		text,
		backgroundColor = backgroundColor ? backgroundColor : "#3074ff",
		titleColor = titleColor || "#fff",
		textColor = textColor || "#edf1f7",
		shadowColor = shadowColor || "#000",
		shadowHOffset = shadowHOffset || 0,
		shadowVOffset = shadowVOffset || 0,
		shadowBlur = shadowBlur || 0,
		shadowSpread = shadowSpread || 0,

		// margin padding attributes ⬇
		marginUnit,

		marginTop = marginTop || 0,
		marginRight = marginRight || 0,
		marginBottom = marginBottom || 0,
		marginLeft = marginLeft || 0,

		paddingUnit,

		paddingTop = paddingTop || 0,
		paddingRight = paddingRight || 0,
		paddingBottom = paddingBottom || 0,
		paddingLeft = paddingLeft || 0,

		TABmarginUnit = TABmarginUnit || marginUnit,

		TABmarginTop = TABmarginTop === 0
			? TABmarginTop
			: TABmarginTop || marginTop,
		TABmarginRight = TABmarginRight === 0
			? TABmarginRight
			: TABmarginRight || marginRight,
		TABmarginBottom = TABmarginBottom === 0
			? TABmarginBottom
			: TABmarginBottom || marginBottom,
		TABmarginLeft = TABmarginLeft === 0
			? TABmarginLeft
			: TABmarginLeft || marginLeft,

		TABpaddingUnit = TABpaddingUnit || paddingUnit,

		TABpaddingTop = TABpaddingTop === 0
			? TABpaddingTop
			: TABpaddingTop || paddingTop,
		TABpaddingRight = TABpaddingRight === 0
			? TABpaddingRight
			: TABpaddingRight || paddingRight,
		TABpaddingBottom = TABpaddingBottom === 0
			? TABpaddingBottom
			: TABpaddingBottom || paddingBottom,
		TABpaddingLeft = TABpaddingLeft === 0
			? TABpaddingLeft
			: TABpaddingLeft || paddingLeft,

		MOBmarginUnit = MOBmarginUnit || TABmarginUnit,

		MOBmarginTop = MOBmarginTop === 0
			? MOBmarginTop
			: MOBmarginTop || TABmarginTop,
		MOBmarginRight = MOBmarginRight === 0
			? MOBmarginRight
			: MOBmarginRight || TABmarginRight,
		MOBmarginBottom = MOBmarginBottom === 0
			? MOBmarginBottom
			: MOBmarginBottom || TABmarginBottom,
		MOBmarginLeft = MOBmarginLeft === 0
			? MOBmarginLeft
			: MOBmarginLeft || TABmarginLeft,

		MOBpaddingUnit = MOBpaddingUnit || TABpaddingUnit,

		MOBpaddingTop = MOBpaddingTop === 0
			? MOBpaddingTop
			: MOBpaddingTop || TABpaddingTop,
		MOBpaddingRight = MOBpaddingRight === 0
			? MOBpaddingRight
			: MOBpaddingRight || TABpaddingRight,
		MOBpaddingBottom = MOBpaddingBottom === 0
			? MOBpaddingBottom
			: MOBpaddingBottom || TABpaddingBottom,
		MOBpaddingLeft = MOBpaddingLeft === 0
			? MOBpaddingLeft
			: MOBpaddingLeft || TABpaddingLeft,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-notice";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		console.log({ all_blocks });

		if (
			all_blocks.filter((item) => item.attributes.blockId === blockId).length >
			1
		)
			setAttributes({ blockId: unique_id });
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here
	//
	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStylesForEdit = (
		prefixConstant,
		defaultFontSize = false
	) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily,
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize = defaultFontSize,
			[`${prefixConstant}SizeUnit`]: sizeUnit,
			[`${prefixConstant}LetterSpacing`]: letterSpacing,
			[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
			[`${prefixConstant}LineHeight`]: lineHeight,
			[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

			[`TAB${prefixConstant}FontSize`]: TABfontSize,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight,

			[`MOB${prefixConstant}FontSize`]: MOBfontSize = TABfontSize,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing = TABletterSpacing,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight = TABlineHeight,
		} = attributes;

		const typoStylesDesktop = `
			${fontFamily ? `font-family: ${fontFamily};` : " "}
			${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
			${hasVal(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : " "}
			${fontWeight ? `font-weight: ${fontWeight};` : " "}
			${textDecoration ? `text-decoration: ${textDecoration};` : " "}
			${textTransform ? `text-transform: ${textTransform};` : " "}
			${
				hasVal(letterSpacing)
					? `letter-spacing: ${letterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesTab = `
			${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${sizeUnit};` : " "}
			${
				hasVal(TABlineHeight)
					? `line-height: ${TABlineHeight}${lineHeightUnit};`
					: " "
			}
			${
				hasVal(TABletterSpacing)
					? `letter-spacing: ${TABletterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesMobile = `
			${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${sizeUnit};` : " "}
			${
				hasVal(MOBlineHeight)
					? `line-height: ${MOBlineHeight}${lineHeightUnit};`
					: " "
			}
			${
				hasVal(MOBletterSpacing)
					? `letter-spacing: ${MOBletterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

		return {
			typoStylesDesktop,
			typoStylesTab,
			typoStylesMobile,
		};
	};

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStylesForEdit(typoPrefix_title, 32);

	const {
		typoStylesDesktop: textTypoStylesDesktop,
		typoStylesTab: textTypoStylesTab,
		typoStylesMobile: textTypoStylesMobile,
	} = generateTypographyStylesForEdit(typoPrefix_text, 18);

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
	.${blockId}{

		margin: ${marginTop}${marginUnit} ${marginRight}${marginUnit} ${marginBottom}${marginUnit} ${marginLeft}${marginUnit};
		padding: ${paddingTop}${paddingUnit} ${paddingRight}${paddingUnit} ${paddingBottom}${paddingUnit} ${paddingLeft}${paddingUnit};

		background: ${backgroundColor};
		box-shadow: ${shadowHOffset}px ${shadowVOffset}px ${shadowBlur}px ${shadowSpread}px ${shadowColor};
		border-radius: 5px;
	}
	`;

	const wrapperStylesTab = `
	.${blockId}{

		margin: ${TABmarginTop}${TABmarginUnit} ${TABmarginRight}${TABmarginUnit} ${TABmarginBottom}${TABmarginUnit} ${TABmarginLeft}${TABmarginUnit};
		padding: ${TABpaddingTop}${TABpaddingUnit} ${TABpaddingRight}${TABpaddingUnit} ${TABpaddingBottom}${TABpaddingUnit} ${TABpaddingLeft}${TABpaddingUnit};
		
	}
	`;

	const wrapperStylesMobile = `
	.${blockId}{
		margin: ${MOBmarginTop}${MOBmarginUnit} ${MOBmarginRight}${MOBmarginUnit} ${MOBmarginBottom}${MOBmarginUnit} ${MOBmarginLeft}${MOBmarginUnit};
		padding: ${MOBpaddingTop}${MOBpaddingUnit} ${MOBpaddingRight}${MOBpaddingUnit} ${MOBpaddingBottom}${MOBpaddingUnit} ${MOBpaddingLeft}${MOBpaddingUnit};
	}
	`;

	//
	// titleWrapper styles css in strings ⬇
	const titleWrapperStylesDesktop = `
	.${blockId} .eb-notice-title-wrapper{
		display: flex;
		justify-content: space-between;
	}	
	`;

	// title styles css in strings ⬇
	const titleStylesDesktop = `
	.${blockId} .eb-notice-title{
		${titleTypoStylesDesktop}		
		color: ${titleColor};
	}
	`;

	const titleStylesTab = `
	.${blockId} .eb-notice-title{
		${titleTypoStylesTab}
	}
	`;

	const titleStylesMobile = `
	.${blockId} .eb-notice-title{
		${titleTypoStylesMobile}
	}
	`;

	// text styles css in strings ⬇
	const textStylesDesktop = `
	.${blockId} .eb-notice-text{
		${textTypoStylesDesktop}
		color: ${textColor};
	}
	`;

	const textStylesTab = `
	.${blockId} .eb-notice-text{
		${textTypoStylesTab}
	}
	`;

	const textStylesMobile = `
	.${blockId} .eb-notice-text{
		${textTypoStylesMobile}
	}
	`;

	// dismiss styles css in strings ⬇
	const dismissStylesDesktop = `
	.${blockId} .eb-notice-dismiss{
		color: ${textColor};
		display: ${dismissible ? "flex" : "none"};
	}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = `
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(titleWrapperStylesDesktop) ? titleWrapperStylesDesktop : " "}
		${isCssExists(dismissStylesDesktop) ? dismissStylesDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(textStylesDesktop) ? textStylesDesktop : " "}
	`;

	// all css styles for Tab in strings ⬇
	const tabAllStyles = `
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(textStylesTab) ? textStylesTab : " "}
	`;

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = `
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(textStylesMobile) ? textStylesMobile : " "}
	`;

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			["desktop"]: desktopAllStyles,
			["tab"]: tabAllStyles,
			["mobile"]: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && <Inspector {...props} />,

		//Edit view here
		<div {...blockProps}>
			<style>
				{`
				${softMinifyCssStrings(desktopAllStyles)}

				/*
					edit_mimmikcss_start
				*/

				${resOption === "tab" ? softMinifyCssStrings(tabAllStyles) : " "}
				${resOption === "mobile" ? softMinifyCssStrings(mobileAllStyles) : " "}

				/*
					edit_mimmikcss_end
				*/

				@media all and (max-width: 1024px) {				
					${softMinifyCssStrings(tabAllStyles)}
				}

				@media all and (max-width: 767px) {
					${softMinifyCssStrings(mobileAllStyles)}
				}
				`}
			</style>

			<div className={`eb-notice-wrapper ${blockId}`} data-id={blockId}>
				<div className="eb-notice-title-wrapper">
					<RichText
						className="eb-notice-title"
						value={title}
						onChange={(newTitle) => setAttributes({ title: newTitle })}
						placeholder="Add Title..."
						keepPlaceholderOnFocus
					/>
					<span className="eb-notice-dismiss" />
				</div>

				<div>
					<RichText
						className="eb-notice-text"
						value={text}
						onChange={(newText) => setAttributes({ text: newText })}
						placeholder="Add Text..."
						keepPlaceholderOnFocus
					/>
				</div>
			</div>
		</div>,
	];
}
