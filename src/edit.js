/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal depenencies
 */
import Inspector from "./inspector";
import uuid from "../util/uuid";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, isSelected } = props;
	const {
		dismissible,
		titleFontSize,
		textFontSize,
		title,
		text,
		backgroundColor,
		titleColor,
		textColor,
		noticeId,
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

	const blockProps = useBlockProps({
		className: "eb-guten-block-main-parrent-wrapper eb-notice-wrapper",
	});

	useEffect(() => {
		const noticeId = uuid().substr(0, 5);
		setAttributes({ noticeId });
	}, []);

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
		isSelected && <Inspector {...props} />,

		//Edit view here
		<div {...blockProps} style={wrapperStyles} data-id={noticeId}>
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
