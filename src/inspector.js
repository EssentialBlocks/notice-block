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
	Button,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { NOTICE_TYPES } from "./constants";

import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";

import {
	dimensionsMargin,
	dimensionsPadding,
} from "./constants/dimensionsNames";

import {
	typoPrefix_text,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import { wrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		// responsive control attributes ⬇
		resOption,

		dismissible,
		noticeType,
		[`${wrapBg}backgroundColor`]: backgroundColor,
		titleColor,
		textColor,
		showAfterDismiss,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
	} = attributes;

	const onTypeChange = (type) => {
		switch (type) {
			case "success":
				setAttributes({
					noticeType: type,
					[`${wrapBg}backgroundColor`]: "#4caf50",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "info":
				setAttributes({
					noticeType: type,
					[`${wrapBg}backgroundColor`]: "#d3d3d3",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;

			case "danger":
				setAttributes({
					noticeType: type,
					[`${wrapBg}backgroundColor`]: "#f44336",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "warning":
				setAttributes({
					noticeType: type,
					[`${wrapBg}backgroundColor`]: "#ffeb3b",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;

			case "default":
				setAttributes({
					noticeType: type,
					[`${wrapBg}backgroundColor`]: "#2196f3",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;
		}
	};

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
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
		const allEbBlocksWrapper = document.querySelectorAll(
			".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
		);
		// console.log("---inspector", { allEbBlocksWrapper });
		if (allEbBlocksWrapper.length < 1) return;
		allEbBlocksWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
			let newCssStrings = " ";
			if (resOption === "tab") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];
				// console.log({ tabCssStrings });
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];

				const mobCssStrings = (minCss.match(
					/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
				) || [" "])[0];

				// console.log({ tabCssStrings, mobCssStrings });

				newCssStrings = minCss.replace(
					regexCssMimmikSpace,
					`${tabCssStrings} ${mobCssStrings}`
				);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}
			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
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

				<PanelBody title={__("Typography")} initialOpen={false}>
					<TypographyDropdown
						baseLabel="Title"
						typographyPrefixConstant={typoPrefix_title}
						resRequiredProps={resRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Text"
						typographyPrefixConstant={typoPrefix_text}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Color Settings")}
					initialOpen={false}
					colorSettings={[
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

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={dimensionsMargin}
						baseLabel="Margin"
					/>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={dimensionsPadding}
						baseLabel="Padding"
					/>
				</PanelBody>

				<PanelBody title={__("Notice Background")} initialOpen={false}>
					<BackgroundControl
						controlName={wrapBg}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<PanelBody title={__("Notice Border & Shadow")} initialOpen={false}>
					<BorderShadowControl
						controlName={wrpBdShadow}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
}

export default Inspector;
