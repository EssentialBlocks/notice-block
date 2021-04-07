/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	RangeControl,
	BaseControl,
	Button,
	Dropdown,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { NOTICE_TYPES } from "./constants";

import ColorControl from "../util/color-control";
import TypographyControl from "./myUtil/typography-component";

import {
	typoPrefix_text,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import ResPanelBody from "./myUtil/ResPanelBody";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		// responsive control attributes ⬇
		resOption,

		dismissible,
		noticeType,
		// titleFontSize,
		// textFontSize,
		backgroundColor,
		titleColor,
		textColor,
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

	const onTypeChange = (type) => {
		switch (type) {
			case "success":
				setAttributes({
					noticeType: type,
					backgroundColor: "#4caf50",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "info":
				setAttributes({
					noticeType: type,
					backgroundColor: "#2196f3",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "danger":
				setAttributes({
					noticeType: type,
					backgroundColor: "#f44336",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "warning":
				setAttributes({
					noticeType: type,
					backgroundColor: "#ffeb3b",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;

			case "default":
				setAttributes({
					noticeType: type,
					backgroundColor: "#d3d3d3",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;
		}
	};

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;
		// console.log("----log from inspector useEffect with empty []", {
		// 	bodyClasses,
		// });

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

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		const allCounterWrapper = document.querySelectorAll(
			".eb-guten-block-main-parrent-wrapper:not(.is-selected) > style"
		);

		console.log("---inspector", { allCounterWrapper });
		if (allCounterWrapper.length < 1) return;

		allCounterWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace = /(?<=edit_mimmikcss_start\s*\*\/).+(?=\/\*\s*edit_mimmikcss_end)/i;
			let newCssStrings = " ";

			if (resOption === "tab") {
				let tabCssMacth = minCss.match(
					/(?<=\@media\s+all\s+and\s+\(max-width\s*\:\s*1030px\s*\)\s*\{).+(?=\}\s*\@media\s+all)/i
				);
				let tabCssStrings = (tabCssMacth || [" "])[0];
				// console.log({
				// 	tabCssStrings: tabCssStrings,
				// });
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				let mobCssMacth = minCss.match(
					/(?<=\@media\s+all\s+and\s+\(max-width\s*\:\s*680px\s*\)\s*\{).+(?=(\}\s*)$)/i
				);
				let mobCssStrings = (mobCssMacth || [" "])[0];
				// console.log({
				// 	mobCssStrings: mobCssStrings,
				// });
				newCssStrings = minCss.replace(regexCssMimmikSpace, mobCssStrings);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}

			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

	const resRequiredProps = {
		setAttributes,
		resOption,
	};

	const generateTypographyAttributes = (prefixConstant) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily,
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize,
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
			[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight,
			[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
		} = attributes;

		return {
			fontFamily,
			fontWeight,
			textTransform,
			textDecoration,
			fontSize,
			sizeUnit,
			letterSpacing,
			letterSpacingUnit,
			lineHeight,
			lineHeightUnit,
			TABfontFamily,
			TABfontWeight,
			TABtextTransform,
			TABtextDecoration,
			TABfontSize,
			TABsizeUnit,
			TABletterSpacing,
			TABletterSpacingUnit,
			TABlineHeight,
			TABlineHeightUnit,
			MOBfontFamily,
			MOBfontWeight,
			MOBtextTransform,
			MOBtextDecoration,
			MOBfontSize,
			MOBsizeUnit,
			MOBletterSpacing,
			MOBletterSpacingUnit,
			MOBlineHeight,
			MOBlineHeightUnit,
		};
	};

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Notice Settings")}>
					<ToggleControl
						label={__("Dismissible")}
						checked={dismissible}
						onChange={() => setAttributes({ dismissible: !dismissible })}
					/>

					<ToggleControl
						label={__("Show After Dismiss")}
						checked={showAfterDismiss}
						onChange={() =>
							setAttributes({
								showAfterDismiss: !showAfterDismiss,
							})
						}
					/>

					<SelectControl
						label={__("Type")}
						value={noticeType}
						options={NOTICE_TYPES}
						onChange={(type) => onTypeChange(type)}
					/>
				</PanelBody>

				<ResPanelBody
					title={__("Typography")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					<TypographyControl
						baseLabel="Title"
						typographyPrefixConstant={typoPrefix_title}
						typographyAttributes={generateTypographyAttributes(
							typoPrefix_title
						)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
					<TypographyControl
						baseLabel="Text"
						typographyPrefixConstant={typoPrefix_text}
						typographyAttributes={generateTypographyAttributes(typoPrefix_text)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
				</ResPanelBody>

				<PanelColorSettings
					title={__("Color Settings")}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (newColor) =>
								setAttributes({ backgroundColor: newColor }),
							label: __("Background Color"),
						},
						{
							value: titleColor,
							onChange: (newColor) => setAttributes({ titleColor: newColor }),
							label: __("Title Color"),
						},
						{
							value: textColor,
							onChange: (newColor) => setAttributes({ textColor: newColor }),
							label: __("Text Color"),
						},
					]}
				/>

				<PanelBody title={__("Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						allowReset
						onChange={(shadowHOffset) => setAttributes({ shadowHOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						allowReset
						onChange={(shadowVOffset) => setAttributes({ shadowVOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						allowReset
						onChange={(shadowBlur) => setAttributes({ shadowBlur })}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						allowReset
						onChange={(shadowSpread) => setAttributes({ shadowSpread })}
						min={0}
						max={20}
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
}

export default Inspector;
