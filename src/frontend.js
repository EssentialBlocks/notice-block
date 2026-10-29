function initNotices() {
	let notices = document.querySelectorAll(".eb-notice-wrapper");

	for (let i = 0; i < notices.length; i++) {
		let notice = notices[i];
		let dismissButton = notice.querySelector(".eb-notice-dismiss");

		// Skip notices without a dismiss button, the rest still need setup
		if (!dismissButton) {
			continue;
		}

		notice.style.position = "relative";
		dismissButton.style.position = "absolute";
		dismissButton.style.right = "0px";
		dismissButton.style.top = "0px";

		// Make the dismiss control usable with keyboard and screen readers.
		// Done here rather than in save() so existing notices keep their markup.
		dismissButton.setAttribute("role", "button");
		dismissButton.setAttribute("tabindex", "0");
		dismissButton.setAttribute("aria-label", "Dismiss notice");

		// Hide notice if it's already closed
		let noticeId = notice.getAttribute("data-id");
		let showAgain = notice.getAttribute("data-show-again");
		let alreadyHidden = readStorage(`eb-notice-hidden-${noticeId}`);

		showAgain === "true" && showNoticeAgain(noticeId);
		if (showAgain === "false" && alreadyHidden === "1") {
			removeNotice(notice);
			continue;
		}

		dismissButton.addEventListener("click", function() {
			onButtonClick(notice);
		});
		dismissButton.addEventListener("keydown", function(event) {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onButtonClick(notice);
			}
		});
	}
}

// The script is loaded in the footer, so DOMContentLoaded may already have fired
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initNotices);
} else {
	initNotices();
}

// localStorage can throw (private mode, blocked site data); the notice should
// still work, it just won't be remembered.
function readStorage(key) {
	try {
		return window.localStorage.getItem(key);
	} catch (e) {
		return null;
	}
}

function hidePermanently(noticeId) {
	try {
		window.localStorage.setItem(`eb-notice-hidden-${noticeId}`, "1");
	} catch (e) {}
}

function showNoticeAgain(noticeId) {
	try {
		window.localStorage.removeItem(`eb-notice-hidden-${noticeId}`);
	} catch (e) {}
}

function removeNotice(notice) {
	notice.remove();
}

// Dismiss button click handler. Hide notice when clicked, hide permanently if
// 'Show After Dismiss' toggle is enabled
function onButtonClick(notice) {
	let noticeId = notice.getAttribute("data-id");
	let showAgain = notice.getAttribute("data-show-again");

	showAgain === "true" && showNoticeAgain(noticeId);
	showAgain === "false" && hidePermanently(noticeId);
	removeNotice(notice);
}
