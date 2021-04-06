const { RichText } = wp.blockEditor;

const save = ({ attributes }) => {

	const {
		blockId,
		dismissible,
		titleFontSize,
		textFontSize,
		title,
		text,
		backgroundColor,
		titleColor,
		textColor,
		noticeId,
		showAfterDismiss,
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


	return (
		<div
			className= {blockId + " eb-notice-wrapper"}
			data-id={blockId}
			data-show-again={showAfterDismiss}
		>
			<div className="eb-notice-title-wrapper">
				<RichText.Content
					tagName="div"
					className="eb-notice-title"
					value={title}
					// style={titleStyles}
				/>
				<span className="eb-notice-dismiss" />
			</div>
			<div>
				<RichText.Content
					tagName="div"
					className="eb-notice-text"
					value={text}
				/>
			</div>
		</div>
	);
};

export default save;