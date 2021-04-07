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
import uuid from "../util/uuid";

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
		// responsive control attribute ⬇
		resOption,

		// uniqueIdNumber attribute for making unique className
		uniqueIdNumber,

		dismissible,
		// titleFontSize,
		// textFontSize,
		title,
		text,
		backgroundColor,
		titleColor,
		textColor,
		noticeId,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
		// titleSizeUnit,
		// textSizeUnit,
		// titleFontFamily,
		// titleFontWeight,
		// titleTextTransform,
		// titleTextDecoration,
		// titleLineHeight,
		// titleLineHeightUnit,
		// titleLetterSpacing,
		// titleLetterSpacingUnit,
		// textFontFamily,
		// textFontWeight,
		// textTextTransform,
		// textTextDecoration,
		// textLineHeight,
		// textLineHeightUnit,
		// textLetterSpacing,
		// textLetterSpacingUnit,
	} = attributes;

	useEffect(() => {
		const noticeId = uuid().substr(0, 5);
		setAttributes({ noticeId });
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const genRandomNumber = generateRandomNumber();
		const anotherSameClassElements = document.querySelectorAll(
			`.eb-notice-wrapper-${uniqueIdNumber}`
		);
		if (!uniqueIdNumber || anotherSameClassElements[1]) {
			setAttributes({
				uniqueIdNumber: genRandomNumber,
			});
		}
	}, []);

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

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parrent-wrapper eb-notice-wrapper eb-notice-wrapper-${uniqueIdNumber}`,
	});

	const wrapperStyles = {
		background: backgroundColor ? backgroundColor : "#3074ff",
		padding: "65px 60px",
		boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
			shadowBlur || 0
		}px ${shadowSpread || 0}px ${shadowColor || "#000000"}`,
		borderRadius: "5px",
	};

	const titleWrapperStyles = {
		display: "flex",
		justifyContent: "space-between",
		// lineHeight: titleLineHeight
		// 	? `${titleLineHeight}${titleLineHeightUnit}`
		// 	: undefined,
	};

	const titleStyles = {
		// fontSize: `${titleFontSize || 32}${titleSizeUnit}`,
		// fontFamily: titleFontFamily,
		// fontWeight: titleFontWeight,
		// textDecoration: titleTextDecoration,
		// textTransform: titleTextTransform,
		// letterSpacing: titleLetterSpacing
		// 	? `${titleLetterSpacing}${titleLetterSpacingUnit}`
		// 	: undefined,
		color: titleColor || "#fff",
	};

	const textWrapperStyles = {
		// lineHeight: textLineHeight
		// 	? `${textLineHeight}${textLineHeightUnit}`
		// 	: undefined,
	};

	const textStyles = {
		// fontSize: `${textFontSize || 18}${textSizeUnit}`,
		// fontFamily: textFontFamily,
		// fontWeight: textFontWeight,
		// textDecoration: textTextDecoration,
		// textTransform: textTextTransform,
		// letterSpacing: textLetterSpacing
		// 	? `${textLetterSpacing}${textLetterSpacingUnit}`
		// 	: undefined,
		color: textColor || "#edf1f7",
	};

	const dismissStyles = {
		color: textColor || "#fff",
		display: dismissible ? "flex" : "none",
	};

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
			[`${prefixConstant}FontSize`]: fontSize = fontSize || defaultFontSize,
			[`${prefixConstant}SizeUnit`]: sizeUnit,
			[`${prefixConstant}LetterSpacing`]: letterSpacing,
			[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
			[`${prefixConstant}LineHeight`]: lineHeight,
			[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

			[`TAB${prefixConstant}FontFamily`]: TABfontFamily,
			[`TAB${prefixConstant}FontWeight`]: TABfontWeight,
			[`TAB${prefixConstant}TextTransform`]: TABtextTransform,
			[`TAB${prefixConstant}TextDecoration`]: TABtextDecoration,
			[`TAB${prefixConstant}FontSize`]: TABfontSize,
			[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit = TABsizeUnit || sizeUnit,
			[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = TABletterSpacingUnit ||
				letterSpacingUnit,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight,
			[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit = TABlineHeightUnit ||
				lineHeightUnit,

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily = MOBfontFamily ||
				TABfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight = MOBfontWeight ||
				TABfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform = MOBtextTransform ||
				TABtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration = MOBtextDecoration ||
				TABtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize = MOBfontSize ||
				TABfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
				TABsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing = MOBletterSpacing ||
				TABletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight = MOBlineHeight ||
				TABlineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
				TABlineHeightUnit,
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
			${TABfontFamily ? `font-family: ${TABfontFamily};` : " "}
			${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
			${
				hasVal(TABlineHeight)
					? `line-height: ${TABlineHeight}${TABlineHeightUnit};`
					: " "
			}
			${TABfontWeight ? `font-weight: ${TABfontWeight};` : " "}
			${TABtextDecoration ? `text-decoration: ${TABtextDecoration};` : " "}
			${TABtextTransform ? `text-transform: ${TABtextTransform};` : " "}
			${
				hasVal(TABletterSpacing)
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesMobile = `
			${MOBfontFamily ? `font-family: ${MOBfontFamily};` : " "}
			${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
			${
				hasVal(MOBlineHeight)
					? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};`
					: " "
			}
			${MOBfontWeight ? `font-weight: ${MOBfontWeight};` : " "}
			${MOBtextDecoration ? `text-decoration: ${MOBtextDecoration};` : " "}
			${MOBtextTransform ? `text-transform: ${MOBtextTransform};` : " "}
			${
				hasVal(MOBletterSpacing)
					? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};`
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

	//
	// Desktop styles in strings ⬇
	const titleStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesDesktop}
	}
	`;
	const textStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesDesktop}
	}
	`;

	//
	// Tab styles in strings ⬇
	const titleStylesTab = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesTab}
	}
	`;
	const textStylesTab = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesTab}
	}
	`;

	//
	// Mobile styles in strings ⬇
	const titleStylesMobile = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesMobile}
	}
	`;
	const textStylesMobile = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesMobile}
	}
	`;

	const desktopAllStyles = `
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(textStylesDesktop) ? textStylesDesktop : " "}
	`;

	const tabAllStyles = `
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(textStylesTab) ? textStylesTab : " "}
	`;

	const mobileAllStyles = `
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(textStylesMobile) ? textStylesMobile : " "}
	`;

	return [
		isSelected && <Inspector {...props} />,

		//Edit view here
		<div {...blockProps} style={wrapperStyles} data-id={noticeId}>
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

				@media all and (max-width: 1030px) {				
					${softMinifyCssStrings(tabAllStyles)}
				}

				@media all and (max-width: 680px) {
					${softMinifyCssStrings(mobileAllStyles)}
				}
				`}
			</style>
			<div className="eb-notice-title-wrapper" style={titleWrapperStyles}>
				<RichText
					className="eb-notice-title"
					style={titleStyles}
					value={title}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
					placeholder="Add Title..."
					keepPlaceholderOnFocus
				/>
				<span className="eb-notice-dismiss" style={dismissStyles} />
			</div>

			<div style={textWrapperStyles}>
				<RichText
					className="eb-notice-text"
					style={textStyles}
					value={text}
					onChange={(newText) => setAttributes({ text: newText })}
					placeholder="Add Text..."
					keepPlaceholderOnFocus
				/>
			</div>
		</div>,
	];
}
