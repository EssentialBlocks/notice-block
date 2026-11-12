import { RichText, useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";
import { NoticeMedia, hasMedia } from "./media";

const save = ({ attributes }) => {
	const {
		blockId,
		showAfterDismiss,
		title,
		text,
		classHook,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div
					className={`eb-notice-wrapper ${blockId}`}
					data-id={blockId}
					data-show-again={showAfterDismiss}
				>
					<div
						className={classnames("eb-notice-title-wrapper", {
							"eb-notice-has-media": hasMedia(attributes),
						})}
					>
						<NoticeMedia attributes={attributes} />
						<RichText.Content
							tagName="div"
							className="eb-notice-title"
							value={title}
						/>
					</div>
					<span className="eb-notice-dismiss" style={{ cursor: "pointer" }} />
					<div>
						<RichText.Content
							tagName="div"
							className="eb-notice-text"
							value={text}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default save;
