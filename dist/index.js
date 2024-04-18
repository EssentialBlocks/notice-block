/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

var _window$EBNoticeContr = window.EBNoticeControls,
  generateDimensionsAttributes = _window$EBNoticeContr.generateDimensionsAttributes,
  generateTypographyAttributes = _window$EBNoticeContr.generateTypographyAttributes,
  generateBackgroundAttributes = _window$EBNoticeContr.generateBackgroundAttributes,
  generateBorderShadowAttributes = _window$EBNoticeContr.generateBorderShadowAttributes,
  generateResponsiveAlignAttributes = _window$EBNoticeContr.generateResponsiveAlignAttributes;



var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  dismissible: {
    type: "boolean",
    "default": false
  },
  noticeType: {
    type: "string",
    "default": "default"
  },
  titleFontSize: {
    type: "number"
  },
  textFontSize: {
    type: "number"
  },
  title: {
    type: "string",
    source: "text",
    selector: ".eb-notice-title",
    "default": "Save 20%"
  },
  text: {
    type: "string",
    source: "text",
    selector: ".eb-notice-text",
    "default": "Free shipping on all orders"
  },
  backgroundColor: {
    type: "string"
  },
  titleColor: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  noticeId: {
    type: "string"
  },
  showAfterDismiss: {
    type: "boolean",
    "default": false
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsMargin)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsPadding, {
  top: 65,
  bottom: 65,
  right: 60,
  left: 60,
  isLinked: false
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.wrpBdShadow, {
  // bdrDefaults: {
  // 	top: 0,
  // 	bottom: 0,
  // 	right: 0,
  // 	left: 0,
  // },
  // rdsDefaults: {
  // 	top: 0,
  // 	bottom: 50,
  // 	right: 500,
  // 	left: 1000,
  // },
  // noShadow: true,
  // noBorder: true,
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.wrapBg, {
  defaultFillColor: "#3074ff",
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
})), generateResponsiveAlignAttributes(_constants__WEBPACK_IMPORTED_MODULE_4__.NOTICE_ALIGNMENT, {
  defaultAlign: "left",
  defaultTabAlign: "left",
  defaultMobileAlign: "left"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_SIZE_UNITS: () => (/* binding */ FONT_SIZE_UNITS),
/* harmony export */   FONT_WEIGHTS: () => (/* binding */ FONT_WEIGHTS),
/* harmony export */   NOTICE_ALIGNMENT: () => (/* binding */ NOTICE_ALIGNMENT),
/* harmony export */   NOTICE_TYPES: () => (/* binding */ NOTICE_TYPES),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TEXT_DECORATION: () => (/* binding */ TEXT_DECORATION),
/* harmony export */   TEXT_TRANSFORM: () => (/* binding */ TEXT_TRANSFORM)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var NOTICE_ALIGNMENT = "textAlign";
var NOTICE_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Success", "essential-blocks"),
  value: "success"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Info", "essential-blocks"),
  value: "info"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warning", "essential-blocks"),
  value: "warning"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Danger", "essential-blocks"),
  value: "danger"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "essential-blocks"),
  value: "lighter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "essential-blocks"),
  value: "normal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "essential-blocks"),
  value: "bold"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "essential-blocks"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
  value: "underline overline"
}];
var FONT_SIZE_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "%",
  value: "%"
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}];

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrapBg: () => (/* binding */ wrapBg)
/* harmony export */ });
// each and every const here has to be totally unique from one another
var wrapBg = "wrp_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrpBdShadow: () => (/* binding */ wrpBdShadow)
/* harmony export */ });
var wrpBdShadow = "wrp_";

/***/ }),

/***/ "./src/constants/dimensionsNames.js":
/*!******************************************!*\
  !*** ./src/constants/dimensionsNames.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensionsMargin: () => (/* binding */ dimensionsMargin),
/* harmony export */   dimensionsPadding: () => (/* binding */ dimensionsPadding)
/* harmony export */ });
// the consts defined here should be unique from one another
var dimensionsMargin = "margin";
var dimensionsPadding = "padding";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typoPrefix_text: () => (/* binding */ typoPrefix_text),
/* harmony export */   typoPrefix_title: () => (/* binding */ typoPrefix_title)
/* harmony export */ });
// the consts defined here should be unique from one another
var typoPrefix_title = "title";
var typoPrefix_text = "text";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */


var deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var blockId = attributes.blockId,
      showAfterDismiss = attributes.showAfterDismiss,
      title = attributes.title,
      text = attributes.text;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-notice-wrapper ".concat(blockId),
      "data-id": blockId,
      "data-show-again": showAfterDismiss
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-notice-title-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "div",
      className: "eb-notice-title",
      value: title
    })), /*#__PURE__*/React.createElement("span", {
      className: "eb-notice-dismiss",
      style: {
        cursor: "pointer"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "div",
      className: "eb-notice-text",
      value: text
    }))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/style.js");
/**
 * WordPress dependencies
 */




/**
 * Internal depenencies
 */



var duplicateBlockIdFix = window.EBNoticeControls.duplicateBlockIdFix;
function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId,
    isSelected = props.isSelected,
    name = props.name;
  var blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    resOption = attributes.resOption,
    title = attributes.title,
    text = attributes.text,
    classHook = attributes.classHook;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // const current_block_id = attributes.blockId;

    var BLOCK_PREFIX = "eb-notice";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select,
      clientId: clientId
    });
  }, []);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["default"], props), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-wrapper ".concat(blockId),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-title-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    className: "eb-notice-title",
    value: title,
    onChange: function onChange(newTitle) {
      return setAttributes({
        title: newTitle
      });
    },
    placeholder: "Add Title..."
  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-notice-dismiss"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    className: "eb-notice-text",
    value: text,
    onChange: function onChange(newText) {
      return setAttributes({
        text: newText
      });
    },
    placeholder: "Add Text..."
  }))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var example = {
  attributes: {
    noticeType: "default"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticeIcon: () => (/* binding */ NoticeIcon)
/* harmony export */ });
var NoticeIcon = function NoticeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "57",
    height: "60",
    fill: "none",
    viewBox: "0 0 57 60"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#6C3BFF",
    d: "M28.286 0c-2.829 0-5.143 2.314-5.143 5.143v1.714H9.429c-1.372 0-2.572 1.2-2.572 2.572v48C6.857 58.8 8.057 60 9.43 60h37.714c1.371 0 2.571-1.2 2.571-2.571v-48c0-1.372-1.2-2.572-2.571-2.572H33.429V5.143C33.429 2.314 31.114 0 28.286 0zm0 1.714a3.439 3.439 0 013.428 3.429v6c0 .514-.342.857-.857.857h-5.143c-.514 0-.857-.343-.857-.857v-6a3.439 3.439 0 013.429-3.429zm0 2.572c-.515 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zM9.429 8.57h13.714v1.715h-.857a3.439 3.439 0 00-3.429 3.428v.857h.172c.428 1.458 1.714 2.572 3.257 2.572h12c1.543 0 2.828-1.114 3.257-2.572h.171v-.857a3.439 3.439 0 00-3.428-3.428h-.857V8.57h13.714c.514 0 .857.343.857.858v48c0 .514-.343.857-.857.857H9.429c-.515 0-.858-.343-.858-.857v-48c0-.515.343-.858.858-.858zM12.857 12c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zm9.429 0h1.028a2.497 2.497 0 002.4 1.714h5.143a2.497 2.497 0 002.4-1.714h1.029A1.72 1.72 0 0136 13.714a1.72 1.72 0 01-1.714 1.715h-12a1.72 1.72 0 01-1.715-1.715A1.72 1.72 0 0122.287 12zm-9.429 3.429c-.514 0-.857.342-.857.857 0 .514.343.857.857.857s.857-.343.857-.857c0-.515-.343-.857-.857-.857zm0 3.428c-.514 0-.857.343-.857.857 0 .515.343.857.857.857s.857-.342.857-.857c0-.514-.343-.857-.857-.857zm0 3.429c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zm0 3.428c-.514 0-.857.343-.857.857 0 .515.343.858.857.858s.857-.343.857-.858c0-.514-.343-.857-.857-.857zm13.715 0l.6 14.829h2.314L30 25.714h-3.428zm-13.715 3.429c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zm0 3.428c-.514 0-.857.343-.857.858 0 .514.343.857.857.857s.857-.343.857-.857c0-.515-.343-.858-.857-.858zm0 3.429c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zm0 3.429c-.514 0-.857.342-.857.857 0 .514.343.857.857.857s.857-.343.857-.857c0-.515-.343-.857-.857-.857zm0 3.428c-.514 0-.857.343-.857.857 0 .515.343.857.857.857s.857-.342.857-.857c0-.514-.343-.857-.857-.857zm15.429.172a1.72 1.72 0 00-1.715 1.714 1.72 1.72 0 001.715 1.714A1.72 1.72 0 0030 44.743a1.72 1.72 0 00-1.714-1.714zm-15.429 3.257c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857zm0 3.428c-.514 0-.857.343-.857.857 0 .515.343.858.857.858s.857-.343.857-.858c0-.514-.343-.857-.857-.857zm0 3.429c-.514 0-.857.343-.857.857s.343.857.857.857.857-.343.857-.857-.343-.857-.857-.857z"
  }));
};

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var _window$EBNoticeContr = window.EBNoticeControls,
  ResponsiveDimensionsControl = _window$EBNoticeContr.ResponsiveDimensionsControl,
  TypographyDropdown = _window$EBNoticeContr.TypographyDropdown,
  BorderShadowControl = _window$EBNoticeContr.BorderShadowControl,
  ColorControl = _window$EBNoticeContr.ColorControl,
  BackgroundControl = _window$EBNoticeContr.BackgroundControl,
  ResponsiveAlignControl = _window$EBNoticeContr.ResponsiveAlignControl,
  AdvancedControls = _window$EBNoticeContr.AdvancedControls;




function Inspector(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
    dismissible = attributes.dismissible,
    noticeType = attributes.noticeType,
    titleColor = attributes.titleColor,
    textColor = attributes.textColor,
    showAfterDismiss = attributes.showAfterDismiss;
  var onTypeChange = function onTypeChange(type) {
    switch (type) {
      case "success":
        setAttributes(_defineProperty(_defineProperty(_defineProperty({
          noticeType: type
        }, "".concat(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg, "backgroundColor"), "#4caf50"), "titleColor", "#ffffff"), "textColor", "#ffffff"));
        break;
      case "info":
        setAttributes(_defineProperty(_defineProperty(_defineProperty({
          noticeType: type
        }, "".concat(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg, "backgroundColor"), "#d3d3d3"), "titleColor", "#000000"), "textColor", "#000000"));
        break;
      case "danger":
        setAttributes(_defineProperty(_defineProperty(_defineProperty({
          noticeType: type
        }, "".concat(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg, "backgroundColor"), "#f44336"), "titleColor", "#ffffff"), "textColor", "#ffffff"));
        break;
      case "warning":
        setAttributes(_defineProperty(_defineProperty(_defineProperty({
          noticeType: type
        }, "".concat(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg, "backgroundColor"), "#ffeb3b"), "titleColor", "#000000"), "textColor", "#000000"));
        break;
      case "default":
        setAttributes(_defineProperty(_defineProperty(_defineProperty({
          noticeType: type
        }, "".concat(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg, "backgroundColor"), "#2196f3"), "titleColor", "#ffffff"), "textColor", "#ffffff"));
        break;
    }
  };
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notice Settings", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dismissible", "essential-blocks"),
      checked: dismissible,
      onChange: function onChange() {
        return setAttributes({
          dismissible: !dismissible
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show After Dismiss", "essential-blocks"),
      checked: showAfterDismiss,
      onChange: function onChange() {
        return setAttributes({
          showAfterDismiss: !showAfterDismiss
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Type", "essential-blocks"),
      value: noticeType,
      options: _constants__WEBPACK_IMPORTED_MODULE_6__.NOTICE_TYPES,
      onChange: function onChange(type) {
        return onTypeChange(type);
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notice", "essential-blocks")
    }, /*#__PURE__*/React.createElement(ResponsiveAlignControl, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Align", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NOTICE_ALIGNMENT,
      resRequiredProps: resRequiredProps,
      options: _constants__WEBPACK_IMPORTED_MODULE_6__.TEXT_ALIGN,
      resOption: resOption
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks")
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_title,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("text", "essential-blocks")
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_text,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: textColor,
      onChange: function onChange(textColor) {
        return setAttributes({
          textColor: textColor
        });
      }
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding")
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.dimensionsMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.dimensionsPadding,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapBg,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.wrpBdShadow,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

var save = function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    showAfterDismiss = attributes.showAfterDismiss,
    title = attributes.title,
    text = attributes.text,
    classHook = attributes.classHook;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-wrapper ".concat(blockId),
    "data-id": blockId,
    "data-show-again": showAfterDismiss
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-title-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "div",
    className: "eb-notice-title",
    value: title
  })), /*#__PURE__*/React.createElement("span", {
    className: "eb-notice-dismiss",
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "div",
    className: "eb-notice-text",
    value: text
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");





var _window$EBNoticeContr = window.EBNoticeControls,
  softMinifyCssStrings = _window$EBNoticeContr.softMinifyCssStrings,
  generateTypographyStyles = _window$EBNoticeContr.generateTypographyStyles,
  generateDimensionsControlStyles = _window$EBNoticeContr.generateDimensionsControlStyles,
  generateBackgroundControlStyles = _window$EBNoticeContr.generateBackgroundControlStyles,
  generateBorderShadowStyles = _window$EBNoticeContr.generateBorderShadowStyles,
  generateResponsiveAlignStyles = _window$EBNoticeContr.generateResponsiveAlignStyles,
  StyleComponent = _window$EBNoticeContr.StyleComponent;
function Style(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    name = props.name;
  var blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    resOption = attributes.resOption,
    dismissible = attributes.dismissible,
    title = attributes.title,
    text = attributes.text,
    titleColor = attributes.titleColor,
    textColor = attributes.textColor,
    classHook = attributes.classHook;

  //
  // CSS/styling Codes Starts from Here

  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__.typoPrefix_title,
      defaultFontSize: 32
    }),
    titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    titleTypoStylesTab = _generateTypographySt.typoStylesTab,
    titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__.typoPrefix_text,
      defaultFontSize: 18
    }),
    textTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    textTypoStylesTab = _generateTypographySt2.typoStylesTab,
    textTypoStylesMobile = _generateTypographySt2.typoStylesMobile;
  var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsMargin,
      styleFor: "margin",
      attributes: attributes
    }),
    wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
    wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
    wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;
  var _generateResponsiveAl = generateResponsiveAlignStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.NOTICE_ALIGNMENT,
      property: "text-align",
      attributes: attributes
    }),
    noticeAlignDesktop = _generateResponsiveAl.alignStylesDesktop,
    noticeAlignTab = _generateResponsiveAl.alignStylesTab,
    noticeAlignMobile = _generateResponsiveAl.alignStylesMobile;
  var _generateBackgroundCo = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.wrapBg
    }),
    backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
    hoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
    backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
    hoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
    backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
    hoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
    overlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
    hoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
    overlayStylesTab = _generateBackgroundCo.overlayStylesTab,
    hoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
    overlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
    hoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
    bgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
    ovlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;
  var _generateBorderShadow = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.wrpBdShadow,
      attributes: attributes
      // noShadow: true,
      // noBorder: true,
    }),
    bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
    bdShadowStyesTab = _generateBorderShadow.styesTab,
    bdShadowStyesMobile = _generateBorderShadow.styesMobile,
    bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
    bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
    bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
    bdShadowTransitionStyle = _generateBorderShadow.transitionStyle;

  // wrapper styles css in strings ⬇
  var wrapperStylesDesktop = "\n\n\t.eb-notice-wrapper.".concat(blockId, " > * {\n\t\tposition: relative;\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, "{\n\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t").concat(backgroundStylesDesktop, "\n\t\t").concat(bdShadowStyesDesktop, "\n\t\ttransition:").concat(bgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t\toverflow: hidden;\n\t\tposition: relative;\n\t\t").concat(noticeAlignDesktop, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover{\n\t\t").concat(hoverBackgroundStylesDesktop, "\n\t\t").concat(bdShadowStylesHoverDesktop, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesDesktop, "\n\t\ttransition:").concat(ovlTransitionStyle, ";\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesDesktop, "\n\t}\n\n\t");
  var wrapperStylesTab = "\n\t.eb-notice-wrapper.".concat(blockId, "{\n\t\t").concat(wrapperMarginStylesTab, "\n\t\t").concat(wrapperPaddingStylesTab, "\n\t\t").concat(backgroundStylesTab, "\n\t\t").concat(bdShadowStyesTab, "\n\t\t").concat(noticeAlignTab, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover{\n\t\t").concat(hoverBackgroundStylesTab, "\n\t\t").concat(bdShadowStylesHoverTab, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesTab, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesTab, "\n\t}\n\n\t");
  var wrapperStylesMobile = "\n\t.eb-notice-wrapper.".concat(blockId, "{\n\t\t").concat(wrapperMarginStylesMobile, "\n\t\t").concat(wrapperPaddingStylesMobile, "\n\t\t").concat(backgroundStylesMobile, "\n\t\t").concat(bdShadowStyesMobile, "\n\t\t").concat(noticeAlignMobile, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover{\n\t\t").concat(hoverBackgroundStylesMobile, "\n\t\t").concat(bdShadowStylesHoverMobile, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesMobile, "\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesMobile, "\n\t}\n\t");

  //
  // titleWrapper styles css in strings ⬇
  var titleWrapperStylesDesktop = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-title-wrapper{\n\t\t// display: flex;\n\t\tjustify-content: space-between;\n\t}\n\t");

  // title styles css in strings ⬇
  var titleStylesDesktop = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesDesktop, "\n\t\tcolor: ").concat(titleColor || "#fff", ";\n\t}\n\t");
  var titleStylesTab = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesTab, "\n\t}\n\t");
  var titleStylesMobile = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesMobile, "\n\t}\n\t");

  // text styles css in strings ⬇
  var textStylesDesktop = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesDesktop, "\n\t\tcolor: ").concat(textColor || "#edf1f7", ";\n\t}\n\t");
  var textStylesTab = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesTab, "\n\t}\n\t");
  var textStylesMobile = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesMobile, "\n\t}\n\t");

  // dismiss styles css in strings ⬇
  var dismissStylesDesktop = "\n\t.eb-notice-wrapper.".concat(blockId, " .eb-notice-dismiss{\n\t\tcolor: ").concat(textColor || "#edf1f7", ";\n\t\tdisplay: ").concat(dismissible ? "flex" : "none", ";\n\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tposition: absolute;\n\t\tjustify-content: center;\n\t}\n\n\t.eb-notice-wrapper.").concat(blockId, " .eb-notice-dismiss:after{\n\t\tcontent: \"\\00d7\";\n\t}\n\n\t.entry-content\n\t> *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce) {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t");

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  var desktopAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesDesktop, "\n\t\t").concat(titleWrapperStylesDesktop, "\n\t\t").concat(dismissStylesDesktop, "\n\t\t").concat(titleStylesDesktop, "\n\t\t").concat(textStylesDesktop, "\n\t"));

  // all css styles for Tab in strings ⬇
  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\t\t").concat(titleStylesTab, "\n\t\t").concat(textStylesTab, "\n\t"));

  // all css styles for Mobile in strings ⬇
  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\t\t").concat(titleStylesMobile, "\n\t\t").concat(textStylesMobile, "\n\t"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyleComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyles: desktopAllStyles,
    tabAllStyles: tabAllStyles,
    mobileAllStyles: mobileAllStyles,
    blockName: name
  }));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"notice-block/notice","title":"Notice","category":"widgets","description":"Put Spotlight On News, Announcements & Let The Visitors Find It Easily","textdomain":"notice-block","supports":{"align":["wide","full"]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/**
 * WordPress dependeincies
 */



/**
 * Internal dependencies
 */







var _EBNoticeControls = EBNoticeControls,
  ebConditionalRegisterBlockType = _EBNoticeControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_5__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__.NoticeIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB notice", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("notice", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("alert ", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_7__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map