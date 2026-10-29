/**
 * Title and text are saved as rich text (HTML). The sidebar fields edit
 * them as plain text, so typed characters such as "<" or "&" are escaped
 * and the saved markup stays valid.
 */

/**
 * Rich text to plain text: <br> becomes a line break, tags are dropped and
 * entities are decoded.
 *
 * @param {string} html
 * @returns {string}
 */
export const toPlainText = (html) => {
	if (!html) {
		return "";
	}
	// Wrapped in a div so the parser keeps leading whitespace.
	const doc = new window.DOMParser().parseFromString(
		"<div>" + String(html).replace(/<br\s*\/?>/gi, "\n") + "</div>",
		"text/html"
	);
	return doc.body.textContent || "";
};

/**
 * Plain text to rich text: &, < and > are escaped and line breaks become
 * <br>.
 *
 * @param {string} text
 * @param {boolean} multiline Keep line breaks as <br>; otherwise drop them.
 * @returns {string}
 */
export const fromPlainText = (text, multiline = false) => {
	const escaped = String(text || "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
	return multiline
		? escaped.replace(/\r?\n/g, "<br>")
		: escaped.replace(/[\r\n]+/g, " ");
};
