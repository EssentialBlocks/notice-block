import { RichText } from "@wordpress/block-editor";

import {
	typoPrefix_title,
	typoPrefix_text,
} from "./constants/typographyPrefixConstants";
import { hardMinifyCssStrings, isCssExists, hasVal } from "./myUtil/helpers";

const save = ({ attributes }) => {
	const {
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
		showAfterDismiss,
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
		justifyContent: "center",
		width: 24,
		height: 24,
		cursor: "pointer",
		alignItems: "center",
	};

	const generateTypographyStylesForSave = (
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

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
				TABsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
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
	} = generateTypographyStylesForSave(typoPrefix_title, 32);

	const {
		typoStylesDesktop: textTypoStylesDesktop,
		typoStylesTab: textTypoStylesTab,
		typoStylesMobile: textTypoStylesMobile,
	} = generateTypographyStylesForSave(typoPrefix_text, 18);

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

	return (
		<div
			className={`eb-notice-wrapper eb-notice-wrapper-${uniqueIdNumber}`}
			style={wrapperStyles}
			data-id={noticeId}
			data-show-again={showAfterDismiss}
		>
			<style>
				{`${hardMinifyCssStrings(
					desktopAllStyles
				)}@media all and (max-width: 1030px){${hardMinifyCssStrings(
					tabAllStyles
				)}}@media all and (max-width: 680px){${hardMinifyCssStrings(
					mobileAllStyles
				)}}`}
			</style>

			<div className="eb-notice-title-wrapper" style={titleWrapperStyles}>
				<RichText.Content
					tagName="div"
					className="eb-notice-title"
					value={title}
					style={titleStyles}
				/>
				<span className="eb-notice-dismiss" style={dismissStyles} />
			</div>
			<div style={textWrapperStyles}>
				<RichText.Content
					tagName="div"
					className="eb-notice-text"
					value={text}
					style={textStyles}
				/>
			</div>
		</div>
	);
};

export default save;
