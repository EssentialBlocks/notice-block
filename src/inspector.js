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
import { NOTICE_TYPES, FONT_SIZE_UNITS } from "./constants";

import ColorControl from "../util/color-control";
import UnitControl from "../util/unit-control";
import DimensionsControl from "./myUtil/dimensions-control";
import TypographyDropdown from "./myUtil/typography-component";
import ResPanelBody from "./myUtil/ResPanelBody";

import {
	typoPrefix_text,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		// responsive control attributes ⬇
		resOption,

		dismissible,
		noticeType,
		backgroundColor,
		titleColor,
		textColor,
		showAfterDismiss,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,

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

		MOBmarginUnit = MOBmarginUnit || TABmarginUnit || marginUnit,

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

		MOBpaddingUnit = MOBpaddingUnit || TABpaddingUnit || paddingUnit,

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

	const typoRequiredProps = {
		attributes,
		setAttributes,
		resOption,
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

				<PanelBody title={__("Typography")}>
					<TypographyDropdown
						baseLabel="Title"
						typographyPrefixConstant={typoPrefix_title}
						typoRequiredProps={typoRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Text"
						typographyPrefixConstant={typoPrefix_text}
						typoRequiredProps={typoRequiredProps}
					/>
				</PanelBody>

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

				<ResPanelBody
					title={__("Margin & Padding")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<UnitControl
								selectedUnit={marginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(marginUnit) => setAttributes({ marginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={marginTop}
								right={marginRight}
								bottom={marginBottom}
								left={marginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										marginTop: top,
										marginRight: right,
										marginBottom: bottom,
										marginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={paddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(paddingUnit) => setAttributes({ paddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={paddingTop}
								right={paddingRight}
								bottom={paddingBottom}
								left={paddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										paddingTop: top,
										paddingRight: right,
										paddingBottom: bottom,
										paddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "tab" && (
						<>
							<UnitControl
								selectedUnit={TABmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABmarginUnit) => setAttributes({ TABmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={TABmarginTop}
								right={TABmarginRight}
								bottom={TABmarginBottom}
								left={TABmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABmarginTop: top,
										TABmarginRight: right,
										TABmarginBottom: bottom,
										TABmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={TABpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABpaddingUnit) => setAttributes({ TABpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={TABpaddingTop}
								right={TABpaddingRight}
								bottom={TABpaddingBottom}
								left={TABpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABpaddingTop: top,
										TABpaddingRight: right,
										TABpaddingBottom: bottom,
										TABpaddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<UnitControl
								selectedUnit={MOBmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBmarginUnit) => setAttributes({ MOBmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={MOBmarginTop}
								right={MOBmarginRight}
								bottom={MOBmarginBottom}
								left={MOBmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBmarginTop: top,
										MOBmarginRight: right,
										MOBmarginBottom: bottom,
										MOBmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={MOBpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBpaddingUnit) => setAttributes({ MOBpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={MOBpaddingTop}
								right={MOBpaddingRight}
								bottom={MOBpaddingBottom}
								left={MOBpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBpaddingTop: top,
										MOBpaddingRight: right,
										MOBpaddingBottom: bottom,
										MOBpaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</ResPanelBody>

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
