/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;
const { useEffect } = wp.element;

const { select } = wp.data;

/**
 * Internal depenencies
 */
import "./editor.scss";
import Inspector from "./inspector";

import {
	typoPrefix_text,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import {
	dimensionsMargin,
	dimensionsPadding,
} from "./constants/dimensionsNames";

import { wrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,

		dismissible,
		title,
		text,
		titleColor,
		textColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-notice";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
		defaultFontSize: 32,
	});

	const {
		typoStylesDesktop: textTypoStylesDesktop,
		typoStylesTab: textTypoStylesTab,
		typoStylesMobile: textTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_text,
		defaultFontSize: 18,
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: dimensionsMargin,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: dimensionsPadding,
		styleFor: "padding",
		attributes,
	});

	const {
		backgroundStylesDesktop,
		hoverBackgroundStylesDesktop,
		backgroundStylesTab,
		hoverBackgroundStylesTab,
		backgroundStylesMobile,
		hoverBackgroundStylesMobile,
		overlayStylesDesktop,
		hoverOverlayStylesDesktop,
		overlayStylesTab,
		hoverOverlayStylesTab,
		overlayStylesMobile,
		hoverOverlayStylesMobile,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: wrapBg,
	});

	const {
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHoverDesktop: bdShadowStylesHoverDesktop,
		stylesHoverTab: bdShadowStylesHoverTab,
		stylesHoverMobile: bdShadowStylesHoverMobile,
	} = generateBorderShadowStyles({
		controlName: wrpBdShadow,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `

	.eb-notice-wrapper.${blockId} > * {
		position: relative;
	}	

	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		${backgroundStylesDesktop}
		${bdShadowStyesDesktop}
		overflow: hidden;
		position: relative;
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesDesktop}
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesDesktop}
	}

	`;

	const wrapperStylesTab = `
	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}
		${backgroundStylesTab}
		${bdShadowStyesTab}		
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesTab}
		${bdShadowStylesHoverTab}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesTab}
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesTab}
	}

	`;

	const wrapperStylesMobile = `
	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesMobile}
		${wrapperPaddingStylesMobile}
		${backgroundStylesMobile}
		${bdShadowStyesMobile}
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesMobile}
		${bdShadowStylesHoverMobile}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesMobile}
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesMobile}
	}
	`;

	//
	// titleWrapper styles css in strings ⬇
	const titleWrapperStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-title-wrapper{
		display: flex;
		justify-content: space-between;
	}	
	`;

	// title styles css in strings ⬇
	const titleStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesDesktop}		
		color: ${titleColor || "#fff"};
	}
	`;

	const titleStylesTab = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesTab}
	}
	`;

	const titleStylesMobile = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesMobile}
	}
	`;

	// text styles css in strings ⬇
	const textStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesDesktop}
		color: ${textColor || "#edf1f7"};
	}
	`;

	const textStylesTab = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesTab}
	}
	`;

	const textStylesMobile = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesMobile}
	}
	`;

	// dismiss styles css in strings ⬇
	const dismissStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-dismiss{
		color: ${textColor || "#edf1f7"};
		display: ${dismissible ? "flex" : "none"};

		top: 0px;
		right: 0px;
		width: 24px;
		height: 24px;
		position: absolute;
		justify-content: center;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-dismiss:after{
		content: "\\00d7";
	}

	.entry-content
	> *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce) {
		margin-left: auto;
		margin-right: auto;
	}

	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(titleWrapperStylesDesktop) ? titleWrapperStylesDesktop : " "}
		${isCssExists(dismissStylesDesktop) ? dismissStylesDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(textStylesDesktop) ? textStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(textStylesTab) ? textStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(textStylesMobile) ? textStylesMobile : " "}
	`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && <Inspector {...props} />,

		//Edit view here
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div className={`eb-notice-wrapper ${blockId}`} data-id={blockId}>
				<div className="eb-notice-title-wrapper">
					<RichText
						className="eb-notice-title"
						value={title}
						onChange={(newTitle) => setAttributes({ title: newTitle })}
						placeholder="Add Title..."
						keepPlaceholderOnFocus
					/>
				</div>
				<span className="eb-notice-dismiss" />
				<div>
					<RichText
						className="eb-notice-text"
						value={text}
						onChange={(newText) => setAttributes({ text: newText })}
						placeholder="Add Text..."
						keepPlaceholderOnFocus
					/>
				</div>
			</div>
		</div>,
	];
}
