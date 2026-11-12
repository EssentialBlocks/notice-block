// getIconClass is not part of this plugin's controls bundle (config/entries.js),
// so the same logic lives here.
const getIconClass = (value) => {
	if (!value) {
		return "";
	}
	if (!value.includes("fa-")) {
		return "dashicon dashicons " + value;
	}
	return value;
};

/**
 * Renders the optional icon / image shown beside the notice title.
 * Returns null when no media is selected so existing notices keep their markup.
 */
export const NoticeMedia = ({ attributes }) => {
	const {
		mediaType,
		mediaIcon,
		mediaImageUrl,
		mediaImageAlt,
		mediaVideoUrl,
	} = attributes;

	if (mediaType === "icon" && mediaIcon) {
		return (
			<span className="eb-notice-media eb-notice-icon">
				<i className={getIconClass(mediaIcon)} />
			</span>
		);
	}

	if (mediaType === "image" && mediaImageUrl) {
		return (
			<span className="eb-notice-media eb-notice-image">
				<img src={mediaImageUrl} alt={mediaImageAlt || ""} />
			</span>
		);
	}

	if (mediaType === "video" && mediaVideoUrl) {
		return (
			<span className="eb-notice-media eb-notice-video">
				<video
					src={mediaVideoUrl}
					autoPlay
					muted
					loop
					playsInline
					aria-hidden="true"
				/>
			</span>
		);
	}

	return null;
};

export const hasMedia = ({
	mediaType,
	mediaIcon,
	mediaImageUrl,
	mediaVideoUrl,
}) =>
	(mediaType === "icon" && !!mediaIcon) ||
	(mediaType === "image" && !!mediaImageUrl) ||
	(mediaType === "video" && !!mediaVideoUrl);
