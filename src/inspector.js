/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TextControl,
    TextareaControl,
    RangeControl,
    Button,
    TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";
import WidthControl from "./width-control";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";
import {
    NOTICE_TYPES,
    NOTICE_ALIGNMENT,
    MEDIA_ALIGNMENT,
    NOTICE_WIDTH,
    NOTICE_BOX_ALIGNS,
    TITLE_ALIGNMENT,
    DESC_ALIGNMENT,
    TEXT_ALIGN,
    MEDIA_TYPES,
    MEDIA_POSITIONS,
} from "./constants";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ColorControl,
    BackgroundControl,
    ResponsiveAlignControl,
    AdvancedControls,
    EBIconPicker,
} = window.EBNoticeControls;

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
        mediaType,
        mediaIcon,
        mediaImageUrl,
        mediaVideoUrl,
        mediaPosition,
        mediaSize,
        mediaGap,
        mediaColor,
        mediaRadius,
        title,
        text,
        noticeBoxAlign,
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
                                    <PanelBody
                                        title={__("Title", "essential-blocks")}
                                    >
                                        <TextControl
                                            label={__(
                                                "Title Text",
                                                "essential-blocks"
                                            )}
                                            value={title}
                                            onChange={(title) =>
                                                setAttributes({ title })
                                            }
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Text", "essential-blocks")}
                                    >
                                        <TextareaControl
                                            label={__(
                                                "Description Text",
                                                "essential-blocks"
                                            )}
                                            value={text}
                                            rows={4}
                                            onChange={(text) =>
                                                setAttributes({ text })
                                            }
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Notice Settings",
                                            "essential-blocks"
                                        )}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Dismissible",
                                                "essential-blocks"
                                            )}
                                            checked={dismissible}
                                            onChange={() =>
                                                setAttributes({
                                                    dismissible: !dismissible,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Show After Dismiss",
                                                "essential-blocks"
                                            )}
                                            checked={showAfterDismiss}
                                            onChange={() =>
                                                setAttributes({
                                                    showAfterDismiss: !showAfterDismiss,
                                                })
                                            }
                                        />

                                        <SelectControl
                                            label={__(
                                                "Type",
                                                "essential-blocks"
                                            )}
                                            value={noticeType}
                                            options={NOTICE_TYPES}
                                            onChange={(type) =>
                                                onTypeChange(type)
                                            }
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Icon / Image / Video",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Media Type",
                                                "essential-blocks"
                                            )}
                                            value={mediaType}
                                            options={MEDIA_TYPES}
                                            onChange={(mediaType) =>
                                                setAttributes({ mediaType })
                                            }
                                        />

                                        {mediaType === "icon" && (
                                            <EBIconPicker
                                                value={mediaIcon}
                                                onChange={(mediaIcon) =>
                                                    setAttributes({ mediaIcon })
                                                }
                                            />
                                        )}

                                        {mediaType === "image" && (
                                            <MediaUploadCheck>
                                                {mediaImageUrl && (
                                                    <div className="eb-notice-image-preview">
                                                        <img
                                                            src={mediaImageUrl}
                                                            alt=""
                                                            style={{
                                                                maxWidth: "100%",
                                                                display: "block",
                                                                marginBottom: 8,
                                                            }}
                                                        />
                                                        <Button
                                                            variant="link"
                                                            isDestructive
                                                            onClick={() =>
                                                                setAttributes({
                                                                    mediaImageUrl: undefined,
                                                                    mediaImageId: undefined,
                                                                    mediaImageAlt: "",
                                                                })
                                                            }
                                                        >
                                                            {__(
                                                                "Remove Image",
                                                                "essential-blocks"
                                                            )}
                                                        </Button>
                                                    </div>
                                                )}
                                                <MediaUpload
                                                    onSelect={(media) =>
                                                        setAttributes({
                                                            mediaImageUrl:
                                                                media.url,
                                                            mediaImageId:
                                                                media.id,
                                                            mediaImageAlt:
                                                                media.alt || "",
                                                        })
                                                    }
                                                    allowedTypes={["image"]}
                                                    value={attributes.mediaImageId}
                                                    render={({ open }) => (
                                                        <Button
                                                            variant="secondary"
                                                            onClick={open}
                                                        >
                                                            {mediaImageUrl
                                                                ? __(
                                                                      "Replace Image",
                                                                      "essential-blocks"
                                                                  )
                                                                : __(
                                                                      "Upload Image",
                                                                      "essential-blocks"
                                                                  )}
                                                        </Button>
                                                    )}
                                                />
                                            </MediaUploadCheck>
                                        )}

                                        {mediaType === "video" && (
                                            <MediaUploadCheck>
                                                {mediaVideoUrl && (
                                                    <div className="eb-notice-video-preview">
                                                        <video
                                                            src={mediaVideoUrl}
                                                            muted
                                                            loop
                                                            autoPlay
                                                            playsInline
                                                            style={{
                                                                maxWidth: "100%",
                                                                display: "block",
                                                                marginBottom: 8,
                                                            }}
                                                        />
                                                        <Button
                                                            variant="link"
                                                            isDestructive
                                                            onClick={() =>
                                                                setAttributes({
                                                                    mediaVideoUrl: undefined,
                                                                    mediaVideoId: undefined,
                                                                })
                                                            }
                                                        >
                                                            {__(
                                                                "Remove Video",
                                                                "essential-blocks"
                                                            )}
                                                        </Button>
                                                    </div>
                                                )}
                                                <MediaUpload
                                                    onSelect={(media) =>
                                                        setAttributes({
                                                            mediaVideoUrl:
                                                                media.url,
                                                            mediaVideoId:
                                                                media.id,
                                                        })
                                                    }
                                                    allowedTypes={["video"]}
                                                    value={attributes.mediaVideoId}
                                                    render={({ open }) => (
                                                        <Button
                                                            variant="secondary"
                                                            onClick={open}
                                                        >
                                                            {mediaVideoUrl
                                                                ? __(
                                                                      "Replace Video",
                                                                      "essential-blocks"
                                                                  )
                                                                : __(
                                                                      "Upload Video",
                                                                      "essential-blocks"
                                                                  )}
                                                        </Button>
                                                    )}
                                                />
                                                <p style={{ fontSize: 12, color: "#757575" }}>
                                                    {__(
                                                        "Plays automatically, muted and looped. Use a small, short MP4/WebM.",
                                                        "essential-blocks"
                                                    )}
                                                </p>
                                            </MediaUploadCheck>
                                        )}

                                        {mediaType !== "none" && (
                                            <>
                                                <SelectControl
                                                    label={__(
                                                        "Position",
                                                        "essential-blocks"
                                                    )}
                                                    value={mediaPosition}
                                                    options={MEDIA_POSITIONS}
                                                    onChange={(mediaPosition) =>
                                                        setAttributes({
                                                            mediaPosition,
                                                        })
                                                    }
                                                />
                                                {mediaPosition === "top" ? (
                                                    <ResponsiveAlignControl
                                                        baseLabel={__(
                                                            "Alignment",
                                                            "essential-blocks"
                                                        )}
                                                        controlName={MEDIA_ALIGNMENT}
                                                        resRequiredProps={resRequiredProps}
                                                        options={TEXT_ALIGN}
                                                        resOption={resOption}
                                                    />
                                                ) : (
                                                    <p style={{ fontSize: 12, color: "#757575" }}>
                                                        {__(
                                                            "Beside the title, the icon/image moves with the Title alignment (Style tab).",
                                                            "essential-blocks"
                                                        )}
                                                    </p>
                                                )}
                                                <RangeControl
                                                    label={__(
                                                        "Size",
                                                        "essential-blocks"
                                                    )}
                                                    value={mediaSize}
                                                    onChange={(mediaSize) =>
                                                        setAttributes({
                                                            mediaSize,
                                                        })
                                                    }
                                                    min={8}
                                                    max={200}
                                                />
                                                <RangeControl
                                                    label={__(
                                                        "Gap",
                                                        "essential-blocks"
                                                    )}
                                                    value={mediaGap}
                                                    onChange={(mediaGap) =>
                                                        setAttributes({
                                                            mediaGap,
                                                        })
                                                    }
                                                    min={0}
                                                    max={100}
                                                />
                                            </>
                                        )}

                                        {mediaType === "icon" && (
                                            <ColorControl
                                                label={__(
                                                    "Icon Color",
                                                    "essential-blocks"
                                                )}
                                                color={mediaColor}
                                                onChange={(mediaColor) =>
                                                    setAttributes({
                                                        mediaColor,
                                                    })
                                                }
                                            />
                                        )}

                                        {(mediaType === "image" || mediaType === "video") && (
                                            <RangeControl
                                                label={__(
                                                    "Border Radius",
                                                    "essential-blocks"
                                                )}
                                                value={mediaRadius}
                                                onChange={(mediaRadius) =>
                                                    setAttributes({
                                                        mediaRadius,
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Notice", "essential-blocks")}
                                    >
                                        <ResponsiveAlignControl
                                            baseLabel={__(
                                                "Overall Alignment",
                                                "essential-blocks"
                                            )}
                                            controlName={NOTICE_ALIGNMENT}
                                            resRequiredProps={resRequiredProps}
                                            options={TEXT_ALIGN}
                                            resOption={resOption}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Width", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <WidthControl
                                            baseLabel={__(
                                                "Custom Width",
                                                "essential-blocks"
                                            )}
                                            controlName={NOTICE_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <SelectControl
                                            label={__(
                                                "Box Position",
                                                "essential-blocks"
                                            )}
                                            value={noticeBoxAlign}
                                            options={NOTICE_BOX_ALIGNS}
                                            onChange={(noticeBoxAlign) =>
                                                setAttributes({ noticeBoxAlign })
                                            }
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Title", "essential-blocks")}
                                    >
                                        <ResponsiveAlignControl
                                            baseLabel={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                            controlName={TITLE_ALIGNMENT}
                                            resRequiredProps={resRequiredProps}
                                            options={TEXT_ALIGN}
                                            resOption={resOption}
                                        />

                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={titleColor}
                                            onChange={(titleColor) =>
                                                setAttributes({ titleColor })
                                            }
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Text", "essential-blocks")}
                                    >
                                        <ResponsiveAlignControl
                                            baseLabel={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                            controlName={DESC_ALIGNMENT}
                                            resRequiredProps={resRequiredProps}
                                            options={TEXT_ALIGN}
                                            resOption={resOption}
                                        />

                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefix_text
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={textColor}
                                            onChange={(textColor) =>
                                                setAttributes({ textColor })
                                            }
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

                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={wrapBg}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={wrpBdShadow}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
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
