import {
	BaseControl,
	Button,
	Dropdown,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import UnitControl from "../../../util/unit-control";
import FontPicker from "./FontPicker";
import { TypographyIcon } from "./icons";

function TypographyDropdown({
	baseLabel,
	typographyPrefixConstant,
	typoRequiredProps,
}) {
	const { attributes, setAttributes, resOption } = typoRequiredProps;

	const {
		[`${typographyPrefixConstant}FontFamily`]: fontFamily,
		[`${typographyPrefixConstant}FontWeight`]: fontWeight,
		[`${typographyPrefixConstant}TextTransform`]: textTransform,
		[`${typographyPrefixConstant}TextDecoration`]: textDecoration,
		[`${typographyPrefixConstant}FontSize`]: fontSize,
		[`${typographyPrefixConstant}SizeUnit`]: sizeUnit,
		[`${typographyPrefixConstant}LetterSpacing`]: letterSpacing,
		[`${typographyPrefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
		[`${typographyPrefixConstant}LineHeight`]: lineHeight,
		[`${typographyPrefixConstant}LineHeightUnit`]: lineHeightUnit,

		[`TAB${typographyPrefixConstant}FontFamily`]: TABfontFamily = fontFamily,
		[`TAB${typographyPrefixConstant}FontWeight`]: TABfontWeight = fontWeight,
		[`TAB${typographyPrefixConstant}TextTransform`]: TABtextTransform = textTransform,
		[`TAB${typographyPrefixConstant}TextDecoration`]: TABtextDecoration = textDecoration,
		[`TAB${typographyPrefixConstant}FontSize`]: TABfontSize = fontSize,
		[`TAB${typographyPrefixConstant}SizeUnit`]: TABsizeUnit = sizeUnit,
		[`TAB${typographyPrefixConstant}LetterSpacing`]: TABletterSpacing = letterSpacing,
		[`TAB${typographyPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = letterSpacingUnit,
		[`TAB${typographyPrefixConstant}LineHeight`]: TABlineHeight = lineHeight,
		[`TAB${typographyPrefixConstant}LineHeightUnit`]: TABlineHeightUnit = lineHeightUnit,

		[`MOB${typographyPrefixConstant}FontFamily`]: MOBfontFamily = TABfontFamily,
		[`MOB${typographyPrefixConstant}FontWeight`]: MOBfontWeight = TABfontWeight,
		[`MOB${typographyPrefixConstant}TextTransform`]: MOBtextTransform = TABtextTransform,
		[`MOB${typographyPrefixConstant}TextDecoration`]: MOBtextDecoration = TABtextDecoration,
		[`MOB${typographyPrefixConstant}FontSize`]: MOBfontSize = TABfontSize,
		[`MOB${typographyPrefixConstant}SizeUnit`]: MOBsizeUnit = TABsizeUnit,
		[`MOB${typographyPrefixConstant}LetterSpacing`]: MOBletterSpacing = TABletterSpacing,
		[`MOB${typographyPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = TABletterSpacingUnit,
		[`MOB${typographyPrefixConstant}LineHeight`]: MOBlineHeight = TABlineHeight,
		[`MOB${typographyPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit = TABlineHeightUnit,
	} = attributes;

	return (
		<>
			{resOption == "desktop" && (
				<BaseControl label={__(baseLabel)} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
								<TypographyIcon />
							</Button>
						)}
						renderContent={() => (
							<div
								className="eb-panel-control eb-typography-component-panel"
								style={{ padding: "0.2rem" }}
							>
								<FontPicker
									label={__("Font Family")}
									value={fontFamily}
									onChange={(FontFamily) => {
										setAttributes({
											[`${typographyPrefixConstant}FontFamily`]: FontFamily,
										});
									}}
								/>

								<UnitControl
									selectedUnit={sizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(SizeUnit) =>
										setAttributes({
											[`${typographyPrefixConstant}SizeUnit`]: SizeUnit,
										})
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={fontSize}
									onChange={(FontSize) =>
										setAttributes({
											[`${typographyPrefixConstant}FontSize`]: FontSize,
										})
									}
									step={sizeUnit === "em" ? 0.1 : 1}
									min={0}
									max={sizeUnit === "em" ? 10 : 300}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={fontWeight}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("100"), value: "100" },
										{ label: __("200"), value: "200" },
										{ label: __("300"), value: "300" },
										{ label: __("400"), value: "400" },
										{ label: __("500"), value: "500" },
										{ label: __("600"), value: "600" },
										{ label: __("700"), value: "700" },
										{ label: __("800"), value: "800" },
										{ label: __("900"), value: "900" },
									]}
									onChange={(FontWeight) =>
										setAttributes({
											[`${typographyPrefixConstant}FontWeight`]: FontWeight,
										})
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={textTransform}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "none" },
										{ label: __("Lowercase"), value: "lowercase" },
										{ label: __("Capitalize"), value: "capitalize" },
										{ label: __("Uppercase"), value: "uppercase" },
									]}
									onChange={(TextTransform) =>
										setAttributes({
											[`${typographyPrefixConstant}TextTransform`]: TextTransform,
										})
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={textDecoration}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "initial" },
										{ label: __("Overline"), value: "overline" },
										{ label: __("Line Through"), value: "line-through" },
										{ label: __("Underline"), value: "underline" },
										{
											label: __("Underline Oveline"),
											value: "underline overline",
										},
									]}
									onChange={(TextDecoration) =>
										setAttributes({
											[`${typographyPrefixConstant}TextDecoration`]: TextDecoration,
										})
									}
								/>

								<UnitControl
									selectedUnit={letterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LetterSpacingUnit) =>
										setAttributes({
											[`${typographyPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit,
										})
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={letterSpacing}
									onChange={(LetterSpacing) =>
										setAttributes({
											[`${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
										})
									}
									min={0}
									max={letterSpacingUnit === "em" ? 10 : 100}
									step={letterSpacingUnit === "em" ? 0.1 : 1}
								/>

								<UnitControl
									selectedUnit={lineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LineHeightUnit) =>
										setAttributes({
											[`${typographyPrefixConstant}LineHeightUnit`]: LineHeightUnit,
										})
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={lineHeight}
									onChange={(LineHeight) =>
										setAttributes({
											[`${typographyPrefixConstant}LineHeight`]: LineHeight,
										})
									}
									min={0}
									max={lineHeightUnit === "em" ? 10 : 600}
									step={lineHeightUnit === "em" ? 0.1 : 1}
								/>
							</div>
						)}
					/>
				</BaseControl>
			)}
			{resOption == "tab" && (
				<BaseControl label={__(baseLabel)} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
								<TypographyIcon />
							</Button>
						)}
						renderContent={() => (
							<div
								className="eb-panel-control eb-typography-component-panel"
								style={{ padding: "0.2rem" }}
							>
								<FontPicker
									label={__("Font Family")}
									value={TABfontFamily}
									onChange={(FontFamily) => {
										setAttributes({
											[`TAB${typographyPrefixConstant}FontFamily`]: FontFamily,
										});
									}}
								/>

								<UnitControl
									selectedUnit={TABsizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(SizeUnit) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}SizeUnit`]: SizeUnit,
										})
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={TABfontSize}
									onChange={(FontSize) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}FontSize`]: FontSize,
										})
									}
									step={TABsizeUnit === "em" ? 0.1 : 1}
									min={0}
									max={TABsizeUnit === "em" ? 10 : 300}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={TABfontWeight}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("100"), value: "100" },
										{ label: __("200"), value: "200" },
										{ label: __("300"), value: "300" },
										{ label: __("400"), value: "400" },
										{ label: __("500"), value: "500" },
										{ label: __("600"), value: "600" },
										{ label: __("700"), value: "700" },
										{ label: __("800"), value: "800" },
										{ label: __("900"), value: "900" },
									]}
									onChange={(FontWeight) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}FontWeight`]: FontWeight,
										})
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={TABtextTransform}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "none" },
										{ label: __("Lowercase"), value: "lowercase" },
										{ label: __("Capitalize"), value: "capitalize" },
										{ label: __("Uppercase"), value: "uppercase" },
									]}
									onChange={(TextTransform) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}TextTransform`]: TextTransform,
										})
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={TABtextDecoration}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "initial" },
										{ label: __("Overline"), value: "overline" },
										{ label: __("Line Through"), value: "line-through" },
										{ label: __("Underline"), value: "underline" },
										{
											label: __("Underline Oveline"),
											value: "underline overline",
										},
									]}
									onChange={(TextDecoration) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}TextDecoration`]: TextDecoration,
										})
									}
								/>

								<UnitControl
									selectedUnit={TABletterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LetterSpacingUnit) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit,
										})
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={TABletterSpacing}
									onChange={(LetterSpacing) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
										})
									}
									min={0}
									max={TABletterSpacingUnit === "em" ? 10 : 100}
									step={TABletterSpacingUnit === "em" ? 0.1 : 1}
								/>

								<UnitControl
									selectedUnit={TABlineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LineHeightUnit) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}LineHeightUnit`]: LineHeightUnit,
										})
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={TABlineHeight}
									onChange={(LineHeight) =>
										setAttributes({
											[`TAB${typographyPrefixConstant}LineHeight`]: LineHeight,
										})
									}
									min={0}
									max={TABlineHeightUnit === "em" ? 10 : 600}
									step={TABlineHeightUnit === "em" ? 0.1 : 1}
								/>
							</div>
						)}
					/>
				</BaseControl>
			)}
			{resOption == "mobile" && (
				<BaseControl label={__(baseLabel)} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
								<TypographyIcon />
							</Button>
						)}
						renderContent={() => (
							<div
								className="eb-panel-control eb-typography-component-panel"
								style={{ padding: "0.2rem" }}
							>
								<FontPicker
									label={__("Font Family")}
									value={MOBfontFamily}
									onChange={(FontFamily) => {
										setAttributes({
											[`MOB${typographyPrefixConstant}FontFamily`]: FontFamily,
										});
									}}
								/>

								<UnitControl
									selectedUnit={MOBsizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(SizeUnit) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}SizeUnit`]: SizeUnit,
										})
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={MOBfontSize}
									onChange={(FontSize) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}FontSize`]: FontSize,
										})
									}
									step={MOBsizeUnit === "em" ? 0.1 : 1}
									min={0}
									max={MOBsizeUnit === "em" ? 10 : 300}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={MOBfontWeight}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("100"), value: "100" },
										{ label: __("200"), value: "200" },
										{ label: __("300"), value: "300" },
										{ label: __("400"), value: "400" },
										{ label: __("500"), value: "500" },
										{ label: __("600"), value: "600" },
										{ label: __("700"), value: "700" },
										{ label: __("800"), value: "800" },
										{ label: __("900"), value: "900" },
									]}
									onChange={(FontWeight) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}FontWeight`]: FontWeight,
										})
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={MOBtextTransform}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "none" },
										{ label: __("Lowercase"), value: "lowercase" },
										{ label: __("Capitalize"), value: "capitalize" },
										{ label: __("Uppercase"), value: "uppercase" },
									]}
									onChange={(TextTransform) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}TextTransform`]: TextTransform,
										})
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={MOBtextDecoration}
									options={[
										{ label: __("Default"), value: "" },
										{ label: __("None"), value: "none" },
										{ label: __("Overline"), value: "overline" },
										{ label: __("Line Through"), value: "line-through" },
										{ label: __("Underline"), value: "underline" },
										{
											label: __("Underline Oveline"),
											value: "underline overline",
										},
									]}
									onChange={(TextDecoration) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}TextDecoration`]: TextDecoration,
										})
									}
								/>

								<UnitControl
									selectedUnit={MOBletterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LetterSpacingUnit) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit,
										})
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={MOBletterSpacing}
									onChange={(LetterSpacing) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
										})
									}
									min={0}
									max={MOBletterSpacingUnit === "em" ? 10 : 100}
									step={MOBletterSpacingUnit === "em" ? 0.1 : 1}
								/>

								<UnitControl
									selectedUnit={MOBlineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(LineHeightUnit) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}LineHeightUnit`]: LineHeightUnit,
										})
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={MOBlineHeight}
									onChange={(LineHeight) =>
										setAttributes({
											[`MOB${typographyPrefixConstant}LineHeight`]: LineHeight,
										})
									}
									min={0}
									max={MOBlineHeightUnit === "em" ? 10 : 600}
									step={MOBlineHeightUnit === "em" ? 0.1 : 1}
								/>
							</div>
						)}
					/>
				</BaseControl>
			)}
		</>
	);
}

export default TypographyDropdown;
