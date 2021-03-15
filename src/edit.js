/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { Component } = wp.element;

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

		const meta = this.props.attributes.blockMeta;
		this.meta_styles = meta ? JSON.parse(meta) : {};

		if ( !current_block_id) {
			this.props.setAttributes({ blockId: unique_id });
		}

		const all_blocks = wp.data.select("core/editor").getBlocks();
		// const current_block = wp.data.select("core/editor").getBlock(this.props.clientId);
		// let this_block_count = 0;
		// all_blocks.forEach((item) => {
		// 	if (item.name == current_block.name && item.attributes.blockId == current_block_id ) {
		// 		this_block_count++;
		// 		if (this_block_count > 1) {
		// 			this.props.setAttributes({ blockId: unique_id });
		// 		}
		// 	}
		// });
		// console.log("Current Block ID:", current_block_id);
		// console.log("Block Meta: ", meta);

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

				<div style={textWrapperStyles}>
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
