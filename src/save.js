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
		backgroundColor = backgroundColor ? backgroundColor : "#3074ff",
		titleColor = titleColor || "#fff",
		textColor = textColor || "#edf1f7",
		noticeId,
		shadowColor = shadowColor || "#000",
		shadowHOffset = shadowHOffset || 0,
		shadowVOffset = shadowVOffset || 0,
		shadowBlur = shadowBlur || 0,
		shadowSpread = shadowSpread || 0,

		showAfterDismiss,
	} = attributes;

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
	const wrapperStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber}{
		background: ${backgroundColor};
		padding: 65px 60px;
		box-shadow: ${shadowHOffset}px ${shadowVOffset}px ${shadowBlur}px ${shadowSpread}px ${shadowColor};
		border-radius: 5px;
	}
	`;

	const titleWrapperStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title-wrapper{
		display: flex;
		justify-content: space-between;
	}	
	`;

	const dismissStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-dismiss{
		color: ${textColor};
		display: ${dismissible};
	}
	`;

	const titleStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesDesktop}		
		color: ${titleColor};
	}
	`;
	const textStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesDesktop}
		color: ${textColor};
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
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(titleWrapperStylesDesktop) ? titleWrapperStylesDesktop : " "}
		${isCssExists(dismissStylesDesktop) ? dismissStylesDesktop : " "}
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

			<div className="eb-notice-title-wrapper">
				<RichText.Content
					tagName="div"
					className="eb-notice-title"
					value={title}
				/>
				<span className="eb-notice-dismiss" />
			</div>
			<div>
				<RichText.Content
					tagName="div"
					className="eb-notice-text"
					value={text}
				/>
			</div>
		</div>
	);
};

export default save;
