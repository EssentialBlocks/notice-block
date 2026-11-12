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
    NOTICE_ALIGNMENT,
    MEDIA_ALIGNMENT,
    TITLE_ALIGNMENT,
    DESC_ALIGNMENT,
    NOTICE_WIDTH,
} from "./constants";

const {
    //
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateResponsiveAlignStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBNoticeControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
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
        classHook,
        mediaPosition,
        mediaSize = 32,
        mediaGap = 12,
        mediaColor,
        mediaRadius = 0,
        noticeBoxAlign,
    } = attributes;

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
        alignStylesDesktop: noticeAlignDesktop,
        alignStylesTab: noticeAlignTab,
        alignStylesMobile: noticeAlignMobile,
    } = generateResponsiveAlignStyles({
        controlName: NOTICE_ALIGNMENT,
        property: "text-align",
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
        bgTransitionStyle,
        ovlTransitionStyle,
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
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: wrpBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        rangeStylesDesktop: noticeWidthDesktop,
        rangeStylesTab: noticeWidthTab,
        rangeStylesMobile: noticeWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: NOTICE_WIDTH,
        property: "width",
        attributes,
    });

    // horizontal position of the box, useful once a custom width is set
    const boxAlignStyles =
        noticeBoxAlign === "center"
            ? "margin-left: auto; margin-right: auto;"
            : noticeBoxAlign === "right"
            ? "margin-left: auto; margin-right: 0;"
            : noticeBoxAlign === "left"
            ? "margin-left: 0; margin-right: auto;"
            : "";

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
		transition:${bgTransitionStyle}, ${bdShadowTransitionStyle};
		overflow: hidden;
		position: relative;
		${noticeAlignDesktop}
		${noticeWidthDesktop}
		${(noticeWidthDesktop || noticeWidthTab || noticeWidthMobile) ? "max-width: 100%; box-sizing: border-box;" : ""}
		${boxAlignStyles}
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesDesktop}
		transition:${ovlTransitionStyle};
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
		${noticeAlignTab}
		${noticeWidthTab}
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
		${noticeAlignMobile}
		${noticeWidthMobile}
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
		// display: flex;
		justify-content: space-between;
	}
	`;

    // icon / image styles css in strings ⬇
    const mediaFlexDirection =
        mediaPosition === "right"
            ? "row-reverse"
            : mediaPosition === "top"
            ? "column"
            : "row";

    // Alignment for media / title / text. Each one falls back to the overall
    // "Text Align" when it has no value of its own, and tablet/mobile fall back
    // to the larger screen, the same way the CSS cascade would.
    const ALIGN_TO_FLEX = { left: "flex-start", center: "center", right: "flex-end" };
    const FLIPPED = { left: "right", center: "center", right: "left" };
    const pick = (...vals) => vals.find(Boolean);
    const devicesOf = (name) => ({
        desktop: attributes[name],
        tab: attributes[`TAB${name}`],
        mobile: attributes[`MOB${name}`],
    });
    const resolveAlign = (own, wrap) => ({
        desktop: pick(own.desktop, wrap.desktop),
        tab: pick(own.tab, own.desktop) || pick(wrap.tab, wrap.desktop),
        mobile:
            pick(own.mobile, own.tab, own.desktop) ||
            pick(wrap.mobile, wrap.tab, wrap.desktop),
    });
    const wrapAlign = devicesOf(NOTICE_ALIGNMENT);
    const mediaAlignEff = resolveAlign(devicesOf(MEDIA_ALIGNMENT), wrapAlign);
    const titleAlignEff = resolveAlign(devicesOf(TITLE_ALIGNMENT), wrapAlign);
    const descAlignEff = resolveAlign(devicesOf(DESC_ALIGNMENT), wrapAlign);

    const isMediaRow = mediaPosition !== "top";
    const isMediaReversed = mediaPosition === "right";
    const alignStyles = (device) => {
        const title = titleAlignEff[device];
        const desc = descAlignEff[device];
        const media = mediaAlignEff[device];
        // beside the title: media + title move together, following the title alignment
        const rowJustify = title
            ? ALIGN_TO_FLEX[isMediaReversed ? FLIPPED[title] : title]
            : "";
        // above the title: media has its own alignment
        const mediaSelf = media ? ALIGN_TO_FLEX[media] : "";
        return `
	${title ? `.eb-notice-wrapper.${blockId} .eb-notice-title{ text-align: ${title}; }` : ""}
	${desc ? `.eb-notice-wrapper.${blockId} .eb-notice-text{ text-align: ${desc}; }` : ""}
	${isMediaRow && rowJustify ? `.eb-notice-wrapper.${blockId} .eb-notice-title-wrapper.eb-notice-has-media{ justify-content: ${rowJustify}; }` : ""}
	${!isMediaRow && mediaSelf ? `.eb-notice-wrapper.${blockId} .eb-notice-media{ align-self: ${mediaSelf}; }` : ""}
	`;
    };

    const mediaStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-title-wrapper.eb-notice-has-media{
		display: flex;
		flex-direction: ${mediaFlexDirection};
		align-items: ${isMediaRow ? "center" : "stretch"};
		gap: ${mediaGap}px;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-media{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-icon{
		color: ${mediaColor || titleColor || "#fff"};
	}

	.eb-notice-wrapper.${blockId} .eb-notice-icon i{
		font-size: ${mediaSize}px;
		width: ${mediaSize}px;
		height: ${mediaSize}px;
		line-height: ${mediaSize}px;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-icon i:before{
		font-size: ${mediaSize}px;
		line-height: ${mediaSize}px;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-image img,
	.eb-notice-wrapper.${blockId} .eb-notice-video video{
		width: ${mediaSize}px;
		height: ${mediaSize}px;
		object-fit: cover;
		border-radius: ${mediaRadius}px;
		display: block;
	}
	${alignStyles("desktop")}
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
		${wrapperStylesDesktop}
		${titleWrapperStylesDesktop}
		${mediaStylesDesktop}
		${dismissStylesDesktop}
		${titleStylesDesktop}
		${textStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${alignStyles("tab")}
		${titleStylesTab}
		${textStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${alignStyles("mobile")}
		${titleStylesMobile}
		${textStylesMobile}
	`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
