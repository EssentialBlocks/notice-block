/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { Component } = wp.element;
const { withSelect } = wp.data;

/**
 * Internal depenencies
 */
import Inspector from "./inspector";
import uuid from "../util/uuid";

class Edit extends Component {

	componentDidMount() {
		const BLOCK_PREFIX = "eb-notice";
		const unique_id = BLOCK_PREFIX+ "-" + uuid().substr(0, 5);
		const current_block_id = this.props.attributes.blockId;

		/**
		 * If No BlockId found in props, Unique ID set
		*/
		if ( !current_block_id) {
			this.props.setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		*/
		const all_blocks = wp.data.select("core/block-editor").getBlocks();
        let blockIdCount = 0;
        all_blocks.forEach((item) => {
			if (item.attributes.blockId === current_block_id && item.attributes.blockRoot === 'essential_block' && item.name === 'block/notice-block' ) {
				blockIdCount++;
				if (blockIdCount > 1) {
					this.props.setAttributes({ blockId: unique_id });
				}
			}
        });
	}

	render() {
		const { attributes, setAttributes, isSelected } = this.props;
		const {
			blockId,
			blockMeta,
			dismissible,
			titleFontSize,
			textFontSize,
			title,
			text,
			backgroundColor,
			titleColor,
			textColor,
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

		const wrapperStyles = {
			background: backgroundColor ? backgroundColor : "#3074ff",
			padding: "65px 60px",
			boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
				shadowBlur || 0
			}px ${shadowSpread || 0}px ${shadowColor || "#000000"}`,
			borderRadius: "5px",
		};

		const titleWrapperStyles = {
			display: "flex",
			justifyContent: "space-between",
			lineHeight: titleLineHeight
				? `${titleLineHeight}${titleLineHeightUnit}`
				: undefined,
		};

		const titleStyles = {
			fontSize: `${titleFontSize || 32}${titleSizeUnit}`,
			fontFamily: titleFontFamily,
			fontWeight: titleFontWeight,
			textDecoration: titleTextDecoration,
			textTransform: titleTextTransform,
			letterSpacing: titleLetterSpacing
				? `${titleLetterSpacing}${titleLetterSpacingUnit}`
				: undefined,
			color: titleColor || "#fff",
		};

		const textWrapperStyles = {
			lineHeight: textLineHeight
				? `${textLineHeight}${textLineHeightUnit}`
				: undefined,
		};

		const textStyles = {
			fontSize: `${textFontSize || 18}${textSizeUnit}`,
			fontFamily: textFontFamily,
			fontWeight: textFontWeight,
			textDecoration: textTextDecoration,
			textTransform: textTextTransform,
			letterSpacing: textLetterSpacing
				? `${textLetterSpacing}${textLetterSpacingUnit}`
				: undefined,
			color: textColor || "#edf1f7",
		};

		const dismissStyles = {
			color: textColor || "#fff",
			display: dismissible ? "flex" : "none",
		};

		//Set All Style in "blockMeta" Attribute
		const styleObject = {
			[blockId]: wrapperStyles,
			[blockId + " .eb-notice-title-wrapper"]: titleWrapperStyles,
			[blockId + " .eb-notice-title"]: titleStyles,
			[blockId + " .eb-notice-dismiss"]: dismissStyles,
			[blockId + " .eb-notice-text-wrapper"]: textWrapperStyles,
			[blockId + " .eb-notice-text"]: textStyles,
		};
		const parsedStyles = styleObject;//JSON.stringify(styleObject);
		if (blockMeta !== parsedStyles) {
			setAttributes({ blockMeta: parsedStyles });
		}

		return [
			isSelected && <Inspector {...this.props} />,

			//Edit view here
			<div
				id={blockId}
				className="eb-notice-wrapper"
				style={wrapperStyles}
				data-id={blockId}
			>
				<div className="eb-notice-title-wrapper" style={titleWrapperStyles}>
					<RichText
						className="eb-notice-title"
						style={titleStyles}
						value={title}
						onChange={(newTitle) => setAttributes({ title: newTitle })}
						placeholder="Add Title..."
						keepPlaceholderOnFocus
					/>
					<span className="eb-notice-dismiss" style={dismissStyles} />
				</div>

				<div className="eb-notice-text-wrapper" style={textWrapperStyles}>
					<RichText
						className="eb-notice-text"
						style={textStyles}
						value={text}
						onChange={(newText) => setAttributes({ text: newText })}
						placeholder="Add Text..."
						keepPlaceholderOnFocus
					/>
				</div>
			</div>,
		];
	}
}

export default Edit;
