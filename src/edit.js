/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

import "./editor.scss";

/**
 * Internal depenencies
 */
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
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
		shadowColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

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

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-notice";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		// console.log({ all_blocks });

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						// console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);

		// console.log({ blockId });
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
		backgroundStylesTab,
		backgroundStylesMobile,
		overlyStyles,
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
	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		${backgroundStylesDesktop}
		${bdShadowStyesDesktop}
		overflow: hidden;
		position: relative;
	}

	.eb-notice-wrapper.${blockId}:hover{
		${bdShadowStylesHoverDesktop}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlyStyles}
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
		${bdShadowStylesHoverTab}
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
		${bdShadowStylesHoverMobile}
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

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

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
					<span className="eb-notice-dismiss" />
				</div>

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
