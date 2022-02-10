/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

document.addEventListener("DOMContentLoaded", function (event) {
  var notices = document.querySelectorAll(".eb-notice-wrapper");

  var _loop = function _loop(i) {
    var dismissButton = notices[i].querySelector(".eb-notice-dismiss"); // Return if there is no dismiss button

    if (!dismissButton) {
      return {
        v: void 0
      };
    }

    notices[i].style.position = "relative";
    dismissButton.style.position = "absolute";
    dismissButton.style.right = "0px";
    dismissButton.style.top = "0px"; // Hide notice if it's already closed

    var noticeId = notices[i].getAttribute("data-id");
    var showAgain = notices[i].getAttribute("data-show-again");
    var alreadyHidden = localStorage.getItem("eb-notice-hidden-".concat(noticeId));
    showAgain === "true" && showNoticeAgain(noticeId);
    showAgain === "false" && alreadyHidden === "1" && removeNotice(notices[i]); // Add click listener

    (function (i) {
      dismissButton.addEventListener("click", function () {
        onButtonClick(notices[i]);
      });
    })(i);
  };

  for (var i = 0; i < notices.length; i++) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }
});

function hidePermanently(noticeId) {
  localStorage.setItem("eb-notice-hidden-".concat(noticeId), "1");
}

function showNoticeAgain(noticeId) {
  localStorage.hasOwnProperty("eb-notice-hidden-".concat(noticeId)) && localStorage.removeItem("eb-notice-hidden-".concat(noticeId));
}

function removeNotice(notice) {
  notice.remove();
} // Dismiss button click handler. Hide notice when clicked, hide permanently if
// 'Show After Dismiss' toggle is enabled


function onButtonClick(notice) {
  var noticeId = notice.getAttribute("data-id");
  var showAgain = notice.getAttribute("data-show-again");
  showAgain === "true" && showNoticeAgain(noticeId);
  showAgain === "false" && hidePermanently(noticeId);
  removeNotice(notice);
}
/******/ })()
;
//# sourceMappingURL=index.js.map