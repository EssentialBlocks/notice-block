/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
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

/**
 * Internal dependencies
 */
import {
	NOTICE_TYPES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	onTypeChange = (type) => {
		switch (type) {
			case "success":
				this.props.setAttributes({
					noticeType: type,
					backgroundColor: "#4caf50",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "info":
				this.props.setAttributes({
					noticeType: type,
					backgroundColor: "#2196f3",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "danger":
				this.props.setAttributes({
					noticeType: type,
					backgroundColor: "#f44336",
					titleColor: "#ffffff",
					textColor: "#ffffff",
				});
				break;

			case "warning":
				this.props.setAttributes({
					noticeType: type,
					backgroundColor: "#ffeb3b",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;

			case "default":
				this.props.setAttributes({
					noticeType: type,
					backgroundColor: "#d3d3d3",
					titleColor: "#000000",
					textColor: "#000000",
				});
				break;
		}
	};
	render = () => {
		const { attributes, setAttributes } = this.props;
		const {
			dismissible,
			noticeType,
			titleFontSize,
			textFontSize,
			backgroundColor,
			titleColor,
			textColor,
			showAfterDismiss,
			shadowColor,
			shadowHOffset,
			shadowVOffset,
			shadowBlur,
			shadowSpread,
			titleSizeUnit,
			textSizeUnit,
			titleFontFamily,
			titleFontWeight,
			titleTextTransform,
			titleTextDecoration,
			titleLineHeight,
			titleLineHeightUnit,
			titleLetterSpacing,
			titleLetterSpacingUnit,
			textFontFamily,
			textFontWeight,
			textTextTransform,
			textTextDecoration,
			textLineHeight,
			textLineHeightUnit,
			textLetterSpacing,
			textLetterSpacingUnit,
		} = attributes;

		const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
		const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;

		const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
		const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

		const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
		const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

		const TEXT_SIZE_STEP = textSizeUnit === "em" ? 0.1 : 1;
		const TEXT_SIZE_MAX = textSizeUnit === "em" ? 10 : 100;

		const TEXT_LINE_HEIGHT_STEP = textLineHeightUnit === "em" ? 0.1 : 1;
		const TEXT_LINE_HEIGHT_MAX = textLineHeightUnit === "em" ? 10 : 100;

		const TEXT_SPACING_STEP = textLetterSpacingUnit === "em" ? 0.1 : 1;
		const TEXT_SPACING_MAX = textLetterSpacingUnit === "em" ? 10 : 100;

		return (
			<InspectorControls key="controls">
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
						onChange={(type) => this.onTypeChange(type)}
					/>

					<BaseControl
						label={__("Title Typography")}
						className="eb-typography-base"
					>
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={titleFontFamily}
										onChange={(titleFontFamily) =>
											setAttributes({ titleFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={titleSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleSizeUnit) =>
											setAttributes({ titleSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={titleFontSize}
										onChange={(titleFontSize) =>
											setAttributes({ titleFontSize })
										}
										step={TITLE_SIZE_STEP}
										min={0}
										max={TITLE_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={titleFontWeight}
										options={FONT_WEIGHTS}
										onChange={(titleFontWeight) =>
											setAttributes({ titleFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={titleTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(titleTextTransform) =>
											setAttributes({ titleTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={titleTextDecoration}
										options={TEXT_DECORATION}
										onChange={(titleTextDecoration) =>
											setAttributes({ titleTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={titleLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleLetterSpacingUnit) =>
											setAttributes({ titleLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={titleLetterSpacing}
										onChange={(titleLetterSpacing) =>
											setAttributes({ titleLetterSpacing })
										}
										min={0}
										max={TITLE_SPACING_MAX}
										step={TITLE_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={titleLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleLineHeightUnit) =>
											setAttributes({ titleLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={titleLineHeight}
										onChange={(titleLineHeight) =>
											setAttributes({ titleLineHeight })
										}
										min={0}
										max={TITLE_LINE_HEIGHT_MAX}
										step={TITLE_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl
						label={__("Text Typography")}
						className="eb-typography-base"
					>
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={textFontFamily}
										onChange={(textFontFamily) =>
											setAttributes({ textFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={textSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(textSizeUnit) => setAttributes({ textSizeUnit })}
									/>

									<RangeControl
										label={__("Font Size")}
										value={textFontSize}
										onChange={(textFontSize) => setAttributes({ textFontSize })}
										step={TEXT_SIZE_STEP}
										min={0}
										max={TEXT_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={textFontWeight}
										options={FONT_WEIGHTS}
										onChange={(textFontWeight) =>
											setAttributes({ textFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={textTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(textTextTransform) =>
											setAttributes({ textTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={textTextDecoration}
										options={TEXT_DECORATION}
										onChange={(textTextDecoration) =>
											setAttributes({ textTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={textLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(textLetterSpacingUnit) =>
											setAttributes({ textLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={textLetterSpacing}
										onChange={(textLetterSpacing) =>
											setAttributes({ textLetterSpacing })
										}
										min={0}
										max={TEXT_SPACING_MAX}
										step={TEXT_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={textLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(textLineHeightUnit) =>
											setAttributes({ textLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={textLineHeight}
										onChange={(textLineHeight) =>
											setAttributes({ textLineHeight })
										}
										min={0}
										max={TEXT_LINE_HEIGHT_MAX}
										step={TEXT_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>
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
			</InspectorControls>
		);
	};
}

export default Inspector;
