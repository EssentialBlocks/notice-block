const { RichText } = wp.blockEditor;

const save = ({ attributes }) => {
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
		justifyContent: "center",
		width: 24,
		height: 24,
		cursor: "pointer",
		alignItems: "center",
	};

	return (
		<div
			className="eb-notice-wrapper"
			style={wrapperStyles}
			data-id={noticeId}
			data-show-again={showAfterDismiss}
		>
			<div className="eb-notice-title-wrapper" style={titleWrapperStyles}>
				<RichText.Content
					tagName="div"
					className="eb-notice-title"
					value={title}
					style={titleStyles}
				/>
				<span className="eb-notice-dismiss" style={dismissStyles} />
			</div>
			<div style={textWrapperStyles}>
				<RichText.Content
					tagName="div"
					className="eb-notice-text"
					value={text}
					style={textStyles}
				/>
			</div>
		</div>
	);
};

export default save;