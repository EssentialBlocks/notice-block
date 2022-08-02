/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, SelectControl, TabPanel } from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";
import { NOTICE_TYPES } from "./constants";

const {
	ResponsiveDimensionsControl,
	TypographyDropdown,
	BorderShadowControl,
	ColorControl,
	BackgroundControl,
	AdvancedControls,
} = window.EBNoticeControls;

const editorStoreForGettingPreivew =
	eb_conditional_localize.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

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
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

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
							title: "Style",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advanced",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Notice Settings", "essential-blocks")}>
										<ToggleControl
											label={__("Dismissible", "essential-blocks")}
											checked={dismissible}
											onChange={() =>
												setAttributes({ dismissible: !dismissible })
											}
										/>

										<ToggleControl
											label={__("Show After Dismiss", "essential-blocks")}
											checked={showAfterDismiss}
											onChange={() =>
												setAttributes({
													showAfterDismiss: !showAfterDismiss,
												})
											}
										/>

										<SelectControl
											label={__("Type", "essential-blocks")}
											value={noticeType}
											options={NOTICE_TYPES}
											onChange={(type) => onTypeChange(type)}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Title", "essential-blocks")}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color", "essential-blocks")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
									</PanelBody>

									<PanelBody title={__("text", "essential-blocks")}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_text}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color", "essential-blocks")}
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

									<PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
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

									<AdvancedControls attributes={attributes} setAttributes={setAttributes} />
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
