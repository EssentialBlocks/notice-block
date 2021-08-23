/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl, SelectControl, TabPanel } = wp.components;
const { useEffect } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import { NOTICE_TYPES } from "./constants";

import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ColorControl from "../util/color-control";
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
		titleColor,
		textColor,
		showAfterDismiss,
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
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Notice Settings")}>
										<ToggleControl
											label={__("Dismissible")}
											checked={dismissible}
											onChange={() =>
												setAttributes({ dismissible: !dismissible })
											}
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
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Title")}>
										<TypographyDropdown
											baseLabel="typography"
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
									</PanelBody>

									<PanelBody title={__("text")}>
										<TypographyDropdown
											baseLabel="typography"
											typographyPrefixConstant={typoPrefix_text}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={textColor}
											onChange={(textColor) => setAttributes({ textColor })}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody title={__("Margin & Padding")}>
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

									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={wrapBg}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={wrpBdShadow}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
