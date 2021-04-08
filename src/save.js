import { RichText, useBlockProps } from "@wordpress/block-editor";

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
	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber}{

		margin: ${marginTop}${marginUnit} ${marginRight}${marginUnit} ${marginBottom}${marginUnit} ${marginLeft}${marginUnit};
		padding: ${paddingTop}${paddingUnit} ${paddingRight}${paddingUnit} ${paddingBottom}${paddingUnit} ${paddingLeft}${paddingUnit};

		background: ${backgroundColor};
		box-shadow: ${shadowHOffset}px ${shadowVOffset}px ${shadowBlur}px ${shadowSpread}px ${shadowColor};
		border-radius: 5px;
	}
	`;

	const wrapperStylesTab = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber}{

		margin: ${TABmarginTop}${TABmarginUnit} ${TABmarginRight}${TABmarginUnit} ${TABmarginBottom}${TABmarginUnit} ${TABmarginLeft}${TABmarginUnit};
		padding: ${TABpaddingTop}${TABpaddingUnit} ${TABpaddingRight}${TABpaddingUnit} ${TABpaddingBottom}${TABpaddingUnit} ${TABpaddingLeft}${TABpaddingUnit};
		
	}
	`;

	const wrapperStylesMobile = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber}{
		
		margin: ${MOBmarginTop}${MOBmarginUnit} ${MOBmarginRight}${MOBmarginUnit} ${MOBmarginBottom}${MOBmarginUnit} ${MOBmarginLeft}${MOBmarginUnit};
		padding: ${MOBpaddingTop}${MOBpaddingUnit} ${MOBpaddingRight}${MOBpaddingUnit} ${MOBpaddingBottom}${MOBpaddingUnit} ${MOBpaddingLeft}${MOBpaddingUnit};

	}
	`;

	//
	// titleWrapper styles css in strings ⬇
	const titleWrapperStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title-wrapper{
		display: flex;
		justify-content: space-between;
	}	
	`;

	//
	// title styles css in strings ⬇
	const titleStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesDesktop}		
		color: ${titleColor};
	}
	`;

	const titleStylesTab = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesTab}
	}
	`;

	const titleStylesMobile = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-title{
		${titleTypoStylesMobile}
	}
	`;

	//
	// text styles css in strings ⬇
	const textStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesDesktop}
		color: ${textColor};
	}
	`;

	const textStylesTab = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesTab}
	}
	`;

	const textStylesMobile = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-text{
		${textTypoStylesMobile}
	}
	`;

	//
	// dismiss styles css in strings ⬇
	const dismissStylesDesktop = `
	.eb-notice-wrapper.eb-notice-wrapper-${uniqueIdNumber} .eb-notice-dismiss{
		color: ${textColor};
		display: ${dismissible};
	}
	`;

	//
	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = `
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(titleWrapperStylesDesktop) ? titleWrapperStylesDesktop : " "}
		${isCssExists(dismissStylesDesktop) ? dismissStylesDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(textStylesDesktop) ? textStylesDesktop : " "}
	`;

	//
	// all css styles for Tab in strings ⬇
	const tabAllStyles = `
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(textStylesTab) ? textStylesTab : " "}
	`;

	//
	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = `
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(textStylesMobile) ? textStylesMobile : " "}
	`;

	return (
		<div {...useBlockProps.save()}>
			<style>
				{`${hardMinifyCssStrings(
					desktopAllStyles
				)}@media all and (max-width: 1030px){${hardMinifyCssStrings(
					tabAllStyles
				)}}@media all and (max-width: 680px){${hardMinifyCssStrings(
					mobileAllStyles
				)}}`}
			</style>

			<div
				className={`eb-notice-wrapper eb-notice-wrapper-${uniqueIdNumber}`}
				data-id={noticeId}
				data-show-again={showAfterDismiss}
			>
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
		</div>
	);
};

export default save;
