(window["webpackJsonp_notice"] = window["webpackJsonp_notice"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_notice"] = window["webpackJsonp_notice"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ResPanelBody.js":
/*!*****************************!*\
  !*** ./src/ResPanelBody.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


function ResPanelBody(props) {
  // console.log("----------ResPanelBody", { props });
  var title = props.title,
      initialOpen = props.initialOpen,
      children = props.children,
      resRequiredProps = props.resRequiredProps;
  var resOption = resRequiredProps.resOption,
      setAttributes = resRequiredProps.setAttributes;

  var handleDesktopBtnClick = function handleDesktopBtnClick() {
    document.body.classList.add("eb-res-option-desktop");
    document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
    setAttributes({
      resOption: "desktop"
    });
  };

  var handleTabBtnClick = function handleTabBtnClick() {
    document.body.classList.add("eb-res-option-tab");
    document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
    setAttributes({
      resOption: "tab"
    });
  };

  var handleMobileBtnClick = function handleMobileBtnClick() {
    document.body.classList.add("eb-res-option-mobile");
    document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
    setAttributes({
      resOption: "mobile"
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["PanelBody"], {
    title: title,
    initialOpen: initialOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-resButtons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-desktop ".concat(resOption == "desktop" && "active"),
    onClick: handleDesktopBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-desktop"
  })), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-tab ".concat(resOption == "tab" && "active"),
    onClick: handleTabBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-tablet"
  })), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-mobile ".concat(resOption == "mobile" && "active"),
    onClick: handleMobileBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-smartphone"
  }))), children));
}

/* harmony default export */ __webpack_exports__["default"] = (ResPanelBody);

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var attributes = _objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "desktop"
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
  }
}, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), {}, {
  // margin padding attributes ⬇
  marginUnit: {
    type: "string",
    "default": "px"
  },
  marginTop: {
    type: "string"
  },
  marginRight: {
    type: "string"
  },
  marginBottom: {
    type: "string"
  },
  marginLeft: {
    type: "string"
  },
  paddingUnit: {
    type: "string",
    "default": "px"
  },
  paddingTop: {
    type: "string",
    "default": "65"
  },
  paddingRight: {
    type: "string",
    "default": "60"
  },
  paddingBottom: {
    type: "string",
    "default": "65"
  },
  paddingLeft: {
    type: "string",
    "default": "60"
  },
  TABmarginUnit: {
    type: "string",
    "default": "px"
  },
  TABmarginTop: {
    type: "string"
  },
  TABmarginRight: {
    type: "string"
  },
  TABmarginBottom: {
    type: "string"
  },
  TABmarginLeft: {
    type: "string"
  },
  TABpaddingUnit: {
    type: "string",
    "default": "px"
  },
  TABpaddingTop: {
    type: "string"
  },
  TABpaddingRight: {
    type: "string"
  },
  TABpaddingBottom: {
    type: "string"
  },
  TABpaddingLeft: {
    type: "string"
  },
  MOBmarginUnit: {
    type: "string",
    "default": "px"
  },
  MOBmarginTop: {
    type: "string"
  },
  MOBmarginRight: {
    type: "string"
  },
  MOBmarginBottom: {
    type: "string"
  },
  MOBmarginLeft: {
    type: "string"
  },
  MOBpaddingUnit: {
    type: "string",
    "default": "px"
  },
  MOBpaddingTop: {
    type: "string"
  },
  MOBpaddingRight: {
    type: "string"
  },
  MOBpaddingBottom: {
    type: "string"
  },
  MOBpaddingLeft: {
    type: "string"
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
  },
  shadowColor: {
    type: "string"
  },
  shadowHOffset: {
    type: "number"
  },
  shadowVOffset: {
    type: "number"
  },
  shadowSpread: {
    type: "number"
  },
  shadowBlur: {
    type: "number"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: NOTICE_TYPES, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION, FONT_SIZE_UNITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTICE_TYPES", function() { return NOTICE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZE_UNITS", function() { return FONT_SIZE_UNITS; });
var __ = wp.i18n.__;
var NOTICE_TYPES = [{
  label: __("Success"),
  value: "success"
}, {
  label: __("Info"),
  value: "info"
}, {
  label: __("Warning"),
  value: "warning"
}, {
  label: __("Danger"),
  value: "danger"
}, {
  label: __("Default"),
  value: "default"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: __("Lighter"),
  value: "lighter"
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}, {
  label: __("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
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

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: typoPrefix_title, typoPrefix_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_text", function() { return typoPrefix_text; });
var typoPrefix_title = "title";
var typoPrefix_text = "text";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */



/**
 * Internal depenencies
 */




function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      isSelected = props.isSelected;
  var blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      resOption = attributes.resOption,
      dismissible = attributes.dismissible,
      title = attributes.title,
      text = attributes.text,
      backgroundColor = attributes.backgroundColor,
      titleColor = attributes.titleColor,
      textColor = attributes.textColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      shadowColor = attributes.shadowColor,
      marginUnit = attributes.marginUnit,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingUnit = attributes.paddingUnit,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      TABmarginUnit = attributes.TABmarginUnit,
      TABmarginTop = attributes.TABmarginTop,
      TABmarginRight = attributes.TABmarginRight,
      TABmarginBottom = attributes.TABmarginBottom,
      TABmarginLeft = attributes.TABmarginLeft,
      TABpaddingUnit = attributes.TABpaddingUnit,
      TABpaddingTop = attributes.TABpaddingTop,
      TABpaddingRight = attributes.TABpaddingRight,
      TABpaddingBottom = attributes.TABpaddingBottom,
      TABpaddingLeft = attributes.TABpaddingLeft,
      MOBmarginUnit = attributes.MOBmarginUnit,
      MOBmarginTop = attributes.MOBmarginTop,
      MOBmarginRight = attributes.MOBmarginRight,
      MOBmarginBottom = attributes.MOBmarginBottom,
      MOBmarginLeft = attributes.MOBmarginLeft,
      MOBpaddingUnit = attributes.MOBpaddingUnit,
      MOBpaddingTop = attributes.MOBpaddingTop,
      MOBpaddingRight = attributes.MOBpaddingRight,
      MOBpaddingBottom = attributes.MOBpaddingBottom,
      MOBpaddingLeft = attributes.MOBpaddingLeft; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var bodyClasses = document.body.className;

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for creating a unique id for each block's unique className by a random unique number

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // const current_block_id = attributes.blockId;
    var BLOCK_PREFIX = "eb-notice";
    var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
    /**
     * Define and Generate Unique Block ID
     */

    if (!blockId) {
      setAttributes({
        blockId: unique_id
      });
    }
    /**
     * Assign New Unique ID when duplicate BlockId found
     * Mostly happens when User Duplicate a Block
     */


    var all_blocks = wp.data.select("core/block-editor").getBlocks(); // console.log({ all_blocks });

    var duplicateFound = false;

    var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
      if (duplicateFound) return;

      var _iterator = _createForOfIteratorHelper(blocks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var innerBlocks = item.innerBlocks;

          if (item.attributes.blockId === blockId) {
            if (item.clientId !== clientId) {
              setAttributes({
                blockId: unique_id
              }); // console.log("found a duplicate");

              duplicateFound = true;
              return;
            } else if (innerBlocks.length > 0) {
              fixDuplicateBlockId(innerBlocks);
            }
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    fixDuplicateBlockId(all_blocks); // console.log({ blockId });
  }, []);
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["useBlockProps"])({
    className: "eb-guten-block-main-parent-wrapper"
  }); //
  // CSS/styling Codes Starts from Here

  var _generateTypographySt = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_title"],
    defaultFontSize: 32
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_text"],
    defaultFontSize: 18
  }),
      textTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      textTypoStylesTab = _generateTypographySt2.typoStylesTab,
      textTypoStylesMobile = _generateTypographySt2.typoStylesMobile; // wrapper styles css in strings ⬇


  var wrapperStylesDesktop = "\n\t.".concat(blockId, "{\n\t\t").concat(marginTop ? "margin-top: ".concat(parseFloat(marginTop)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginRight ? "margin-right: ".concat(parseFloat(marginRight)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginLeft ? "margin-left: ".concat(parseFloat(marginLeft)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginBottom ? "margin-bottom: ".concat(parseFloat(marginBottom)).concat(marginUnit, ";") : " ", "\n\t\tpadding: \n\t\t\t").concat(paddingTop || 0).concat(paddingUnit, " \n\t\t\t").concat(paddingRight || 0).concat(paddingUnit, " \n\t\t\t").concat(paddingBottom || 0).concat(paddingUnit, " \n\t\t\t").concat(paddingLeft || 0).concat(paddingUnit, ";\n\n\t\tbackground: ").concat(backgroundColor || "#3074ff", ";\n\t\t\t\n\t\t").concat(shadowColor ? "box-shadow: \n\t\t\t\t\t".concat(shadowHOffset || 0, "px \n\t\t\t\t\t").concat(shadowVOffset || 0, "px \n\t\t\t\t\t").concat(shadowBlur || 0, "px \n\t\t\t\t\t").concat(shadowSpread || 0, "px \n\t\t\t\t\t").concat(shadowColor, ";") : " ", "\n\n\t\tborder-radius: 5px;\n\t}\n\t");
  var wrapperStylesTab = "\n\t.".concat(blockId, "{\n\t\t").concat(TABmarginTop ? "margin-top: ".concat(parseFloat(TABmarginTop)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginRight ? "margin-right: ".concat(parseFloat(TABmarginRight)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginLeft ? "margin-left: ".concat(parseFloat(TABmarginLeft)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginBottom ? "margin-bottom: ".concat(parseFloat(TABmarginBottom)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABpaddingTop ? "padding-top: ".concat(parseFloat(TABpaddingTop)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingRight ? "padding-right: ".concat(parseFloat(TABpaddingRight)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingLeft ? "padding-left: ".concat(parseFloat(TABpaddingLeft)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingBottom ? "padding-bottom: ".concat(parseFloat(TABpaddingBottom)).concat(TABpaddingUnit, ";") : " ", "\n\t}\n\t");
  var wrapperStylesMobile = "\n\t.".concat(blockId, "{\n\t\t").concat(MOBmarginTop ? "margin-top: ".concat(parseFloat(MOBmarginTop)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginRight ? "margin-right: ".concat(parseFloat(MOBmarginRight)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginLeft ? "margin-left: ".concat(parseFloat(MOBmarginLeft)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginBottom ? "margin-bottom: ".concat(parseFloat(MOBmarginBottom)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBpaddingTop ? "padding-top: ".concat(parseFloat(MOBpaddingTop)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingRight ? "padding-right: ".concat(parseFloat(MOBpaddingRight)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingLeft ? "padding-left: ".concat(parseFloat(MOBpaddingLeft)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingBottom ? "padding-bottom: ".concat(parseFloat(MOBpaddingBottom)).concat(MOBpaddingUnit, ";") : " ", "\t\n\t}\n\t"); //
  // titleWrapper styles css in strings ⬇

  var titleWrapperStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-title-wrapper{\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\t\n\t"); // title styles css in strings ⬇

  var titleStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesDesktop, "\t\t\n\t\tcolor: ").concat(titleColor || "#fff", ";\n\t}\n\t");
  var titleStylesTab = "\n\t.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesTab, "\n\t}\n\t");
  var titleStylesMobile = "\n\t.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesMobile, "\n\t}\n\t"); // text styles css in strings ⬇

  var textStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesDesktop, "\n\t\tcolor: ").concat(textColor || "#edf1f7", ";\n\t}\n\t");
  var textStylesTab = "\n\t.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesTab, "\n\t}\n\t");
  var textStylesMobile = "\n\t.".concat(blockId, " .eb-notice-text{\n\t\t").concat(textTypoStylesMobile, "\n\t}\n\t"); // dismiss styles css in strings ⬇

  var dismissStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-dismiss{\n\t\tcolor: ").concat(textColor || "#edf1f7", ";\n\t\tdisplay: ").concat(dismissible ? "flex" : "none", ";\n\t}\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\n\t\t".concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesDesktop) ? wrapperStylesDesktop : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(titleWrapperStylesDesktop) ? titleWrapperStylesDesktop : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(dismissStylesDesktop) ? dismissStylesDesktop : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(titleStylesDesktop) ? titleStylesDesktop : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(textStylesDesktop) ? textStylesDesktop : " ", "\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\n\t\t".concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesTab) ? wrapperStylesTab : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(titleStylesTab) ? titleStylesTab : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(textStylesTab) ? textStylesTab : " ", "\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\n\t\t".concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesMobile) ? wrapperStylesMobile : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(titleStylesMobile) ? titleStylesMobile : " ", "\n\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(textStylesMobile) ? textStylesMobile : " ", "\n\t")); // Set All Style in "blockMeta" Attribute

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], props),
  /*#__PURE__*/
  //Edit view here
  React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "tab" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-wrapper ".concat(blockId),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-title-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
    className: "eb-notice-title",
    value: title,
    onChange: function onChange(newTitle) {
      return setAttributes({
        title: newTitle
      });
    },
    placeholder: "Add Title...",
    keepPlaceholderOnFocus: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-notice-dismiss"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
    className: "eb-notice-text",
    value: text,
    onChange: function onChange(newText) {
      return setAttributes({
        text: newText
      });
    },
    placeholder: "Add Text...",
    keepPlaceholderOnFocus: true
  }))))];
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: generateTypographyAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, hasVal, generateTypographyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate typography attributes for multiple typography control based on the array of prefix
var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _defineProperty(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {}); // console.log({ typoAttrs });

  return typoAttrs;
}; // helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown

var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  // console.log({ cssString });
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    // console.log({ match, g1, offset, string });
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
}; // check if range controller input numbers  has value

var hasVal = function hasVal(val) {
  return val || val === 0;
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref) {
  var prefixConstant = _ref.prefixConstant,
      defaultFontSize = _ref.defaultFontSize,
      attributes = _ref.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n\t\t\t".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n\t\t\t").concat(hasVal(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n\t\t\t").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n\t\t\t").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n\t\t\t").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n\t\t\t").concat(hasVal(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesTab = "\n\t\t\t".concat(hasVal(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesMobile = "\n\t\t\t".concat(hasVal(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n\t\t");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "359",
    viewBox: "0 0 256 359",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-notice",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C111.09568,0 97.28,13.815678 97.28,30.72 L97.28,40.96 L15.36,40.96 C6.9377536,40.96 0,47.8977536 0,56.32 L0,343.04 C0,351.462246 6.9377536,358.4 15.36,358.4 L240.64,358.4 C249.062246,358.4 256,351.462246 256,343.04 L256,56.32 C256,47.8977536 249.062246,40.96 240.64,40.96 L158.72,40.96 L158.72,30.72 C158.72,13.815678 144.90432,0 128,0 Z M128,10.24 C139.36832,10.24 148.48,19.351682 148.48,30.72 L148.48,66.56 C148.48,69.4529536 146.252954,71.68 143.36,71.68 L112.64,71.68 C109.747046,71.68 107.52,69.4529536 107.52,66.56 L107.52,30.72 C107.52,19.351682 116.63168,10.24 128,10.24 Z M128,25.6 C125.172302,25.6 122.88,27.8923021 122.88,30.72 C122.88,33.5476979 125.172302,35.84 128,35.84 C130.827698,35.84 133.12,33.5476979 133.12,30.72 C133.12,27.8923021 130.827698,25.6 128,25.6 Z M15.36,51.2 L97.28,51.2 L97.28,61.44 L92.16,61.44 C80.9096499,61.44 71.68,70.6696499 71.68,81.92 L71.68,87.04 L72.72,87.04 C75.0565325,95.7765786 82.7207987,102.4 92.16,102.4 L163.84,102.4 C173.279201,102.4 180.943468,95.7765786 183.28,87.04 L184.32,87.04 L184.32,81.92 C184.32,70.6696499 175.09035,61.44 163.84,61.44 L158.72,61.44 L158.72,51.2 L240.64,51.2 C243.532954,51.2 245.76,53.4270464 245.76,56.32 L245.76,343.04 C245.76,345.932954 243.532954,348.16 240.64,348.16 L15.36,348.16 C12.4670464,348.16 10.24,345.932954 10.24,343.04 L10.24,56.32 C10.24,53.4270464 12.4670464,51.2 15.36,51.2 Z M35.84,71.68 C33.0123021,71.68 30.72,73.9723021 30.72,76.8 C30.72,79.6276979 33.0123021,81.92 35.84,81.92 C38.6676979,81.92 40.96,79.6276979 40.96,76.8 C40.96,73.9723021 38.6676979,71.68 35.84,71.68 Z M92.16,71.68 L98.24,71.68 C100.376924,77.6054835 106.01919,81.92 112.64,81.92 L143.36,81.92 C149.98081,81.92 155.623076,77.6054835 157.76,71.68 L163.84,71.68 C169.55733,71.68 174.08,76.2026701 174.08,81.92 C174.08,87.6373299 169.55733,92.16 163.84,92.16 L92.16,92.16 C86.4426701,92.16 81.92,87.6373299 81.92,81.92 C81.92,76.2026701 86.4426701,71.68 92.16,71.68 Z M35.84,92.16 C33.0123021,92.16 30.72,94.4523021 30.72,97.28 C30.72,100.107698 33.0123021,102.4 35.84,102.4 C38.6676979,102.4 40.96,100.107698 40.96,97.28 C40.96,94.4523021 38.6676979,92.16 35.84,92.16 Z M35.84,112.64 C33.0123021,112.64 30.72,114.932302 30.72,117.76 C30.72,120.587698 33.0123021,122.88 35.84,122.88 C38.6676979,122.88 40.96,120.587698 40.96,117.76 C40.96,114.932302 38.6676979,112.64 35.84,112.64 Z M35.84,133.12 C33.0123021,133.12 30.72,135.412302 30.72,138.24 C30.72,141.067698 33.0123021,143.36 35.84,143.36 C38.6676979,143.36 40.96,141.067698 40.96,138.24 C40.96,135.412302 38.6676979,133.12 35.84,133.12 Z M35.84,153.6 C33.0123021,153.6 30.72,155.892302 30.72,158.72 C30.72,161.547698 33.0123021,163.84 35.84,163.84 C38.6676979,163.84 40.96,161.547698 40.96,158.72 C40.96,155.892302 38.6676979,153.6 35.84,153.6 Z M117.76,153.6 L121.180001,242.349998 L134.819999,242.349998 L138.24,153.6 L117.76,153.6 Z M35.84,174.08 C33.0123021,174.08 30.72,176.372302 30.72,179.2 C30.72,182.027698 33.0123021,184.32 35.84,184.32 C38.6676979,184.32 40.96,182.027698 40.96,179.2 C40.96,176.372302 38.6676979,174.08 35.84,174.08 Z M35.84,194.56 C33.0123021,194.56 30.72,196.852302 30.72,199.68 C30.72,202.507698 33.0123021,204.8 35.84,204.8 C38.6676979,204.8 40.96,202.507698 40.96,199.68 C40.96,196.852302 38.6676979,194.56 35.84,194.56 Z M35.84,215.04 C33.0123021,215.04 30.72,217.332302 30.72,220.16 C30.72,222.987698 33.0123021,225.28 35.84,225.28 C38.6676979,225.28 40.96,222.987698 40.96,220.16 C40.96,217.332302 38.6676979,215.04 35.84,215.04 Z M35.84,235.52 C33.0123021,235.52 30.72,237.812302 30.72,240.64 C30.72,243.467698 33.0123021,245.76 35.84,245.76 C38.6676979,245.76 40.96,243.467698 40.96,240.64 C40.96,237.812302 38.6676979,235.52 35.84,235.52 Z M35.84,256 C33.0123021,256 30.72,258.292302 30.72,261.12 C30.72,263.947698 33.0123021,266.24 35.84,266.24 C38.6676979,266.24 40.96,263.947698 40.96,261.12 C40.96,258.292302 38.6676979,256 35.84,256 Z M128,256.860001 C122.344604,256.860001 117.76,261.444605 117.76,267.100001 C117.76,272.755397 122.344604,277.340001 128,277.340001 C133.655396,277.340001 138.24,272.755397 138.24,267.100001 C138.24,261.444605 133.655396,256.860001 128,256.860001 Z M35.84,276.48 C33.0123021,276.48 30.72,278.772302 30.72,281.6 C30.72,284.427698 33.0123021,286.72 35.84,286.72 C38.6676979,286.72 40.96,284.427698 40.96,281.6 C40.96,278.772302 38.6676979,276.48 35.84,276.48 Z M35.84,296.96 C33.0123021,296.96 30.72,299.252302 30.72,302.08 C30.72,304.907698 33.0123021,307.2 35.84,307.2 C38.6676979,307.2 40.96,304.907698 40.96,302.08 C40.96,299.252302 38.6676979,296.96 35.84,296.96 Z M35.84,317.44 C33.0123021,317.44 30.72,319.732302 30.72,322.56 C30.72,325.387698 33.0123021,327.68 35.84,327.68 C38.6676979,327.68 40.96,325.387698 40.96,322.56 C40.96,319.732302 38.6676979,317.44 35.84,317.44 Z",
    id: "Shape"
  }))));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("notice-block/notice", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Notice", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Put Spotlight On News, Announcements & Let The Visitors Find It Easily", "block"),
  category: "widgets",
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("EB notice", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("notice", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("notice block", "essential-blocks")],
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_typography_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/typography-control */ "./util/typography-control/index.js");
/* harmony import */ var _ResPanelBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ResPanelBody */ "./src/ResPanelBody.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */









function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
      dismissible = attributes.dismissible,
      noticeType = attributes.noticeType,
      backgroundColor = attributes.backgroundColor,
      titleColor = attributes.titleColor,
      textColor = attributes.textColor,
      showAfterDismiss = attributes.showAfterDismiss,
      shadowColor = attributes.shadowColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      marginUnit = attributes.marginUnit,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingUnit = attributes.paddingUnit,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      TABmarginUnit = attributes.TABmarginUnit,
      TABmarginTop = attributes.TABmarginTop,
      TABmarginRight = attributes.TABmarginRight,
      TABmarginBottom = attributes.TABmarginBottom,
      TABmarginLeft = attributes.TABmarginLeft,
      TABpaddingUnit = attributes.TABpaddingUnit,
      TABpaddingTop = attributes.TABpaddingTop,
      TABpaddingRight = attributes.TABpaddingRight,
      TABpaddingBottom = attributes.TABpaddingBottom,
      TABpaddingLeft = attributes.TABpaddingLeft,
      MOBmarginUnit = attributes.MOBmarginUnit,
      MOBmarginTop = attributes.MOBmarginTop,
      MOBmarginRight = attributes.MOBmarginRight,
      MOBmarginBottom = attributes.MOBmarginBottom,
      MOBmarginLeft = attributes.MOBmarginLeft,
      MOBpaddingUnit = attributes.MOBpaddingUnit,
      MOBpaddingTop = attributes.MOBpaddingTop,
      MOBpaddingRight = attributes.MOBpaddingRight,
      MOBpaddingBottom = attributes.MOBpaddingBottom,
      MOBpaddingLeft = attributes.MOBpaddingLeft;

  var onTypeChange = function onTypeChange(type) {
    switch (type) {
      case "success":
        setAttributes({
          noticeType: type,
          backgroundColor: "#4caf50",
          titleColor: "#ffffff",
          textColor: "#ffffff"
        });
        break;

      case "info":
        setAttributes({
          noticeType: type,
          backgroundColor: "#2196f3",
          titleColor: "#ffffff",
          textColor: "#ffffff"
        });
        break;

      case "danger":
        setAttributes({
          noticeType: type,
          backgroundColor: "#f44336",
          titleColor: "#ffffff",
          textColor: "#ffffff"
        });
        break;

      case "warning":
        setAttributes({
          noticeType: type,
          backgroundColor: "#ffeb3b",
          titleColor: "#000000",
          textColor: "#000000"
        });
        break;

      case "default":
        setAttributes({
          noticeType: type,
          backgroundColor: "#d3d3d3",
          titleColor: "#000000",
          textColor: "#000000"
        });
        break;
    }
  }; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var bodyClasses = document.body.className; // console.log("----log from inspector useEffect with empty []", {
    // 	bodyClasses,
    // });

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var allEbBlocksWrapper = document.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"); // console.log("---inspector", { allEbBlocksWrapper });

    if (allEbBlocksWrapper.length < 1) return;
    allEbBlocksWrapper.forEach(function (styleTag) {
      var cssStrings = styleTag.textContent;
      var minCss = cssStrings.replace(/\s+/g, " ");
      var regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
      var newCssStrings = " ";

      if (resOption === "tab") {
        var tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
      } else if (resOption === "mobile") {
        var _tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0];
        var mobCssStrings = (minCss.match(/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings, mobCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, "".concat(_tabCssStrings, " ").concat(mobCssStrings));
      } else {
        newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
      }

      styleTag.textContent = newCssStrings;
    });
  }, [resOption]);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption
  };
  var typoRequiredProps = {
    attributes: attributes,
    setAttributes: setAttributes,
    resOption: resOption
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
    key: "controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Notice Settings")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dismissible"),
    checked: dismissible,
    onChange: function onChange() {
      return setAttributes({
        dismissible: !dismissible
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Show After Dismiss"),
    checked: showAfterDismiss,
    onChange: function onChange() {
      return setAttributes({
        showAfterDismiss: !showAfterDismiss
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Type"),
    value: noticeType,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["NOTICE_TYPES"],
    onChange: function onChange(type) {
      return onTypeChange(type);
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_typography_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    baseLabel: "Title",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["typoPrefix_title"],
    typoRequiredProps: typoRequiredProps
  }), /*#__PURE__*/React.createElement(_util_typography_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    baseLabel: "Text",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["typoPrefix_text"],
    typoRequiredProps: typoRequiredProps
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Color Settings"),
    initialOpen: false,
    colorSettings: [{
      value: backgroundColor,
      onChange: function onChange(newColor) {
        return setAttributes({
          backgroundColor: newColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Color")
    }, {
      value: titleColor,
      onChange: function onChange(newColor) {
        return setAttributes({
          titleColor: newColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title Color")
    }, {
      value: textColor,
      onChange: function onChange(newColor) {
        return setAttributes({
          textColor: newColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Color")
    }]
  }), /*#__PURE__*/React.createElement(_ResPanelBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin & Padding"),
    initialOpen: false,
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: marginUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(marginUnit) {
      return setAttributes({
        marginUnit: marginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
    onChange: function onChange(_ref) {
      var top = _ref.top,
          right = _ref.right,
          bottom = _ref.bottom,
          left = _ref.left;
      return setAttributes({
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: paddingUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(paddingUnit) {
      return setAttributes({
        paddingUnit: paddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
    onChange: function onChange(_ref2) {
      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes({
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left
      });
    }
  })), resOption == "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: TABmarginUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(TABmarginUnit) {
      return setAttributes({
        TABmarginUnit: TABmarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: TABmarginTop,
    right: TABmarginRight,
    bottom: TABmarginBottom,
    left: TABmarginLeft,
    onChange: function onChange(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes({
        TABmarginTop: top,
        TABmarginRight: right,
        TABmarginBottom: bottom,
        TABmarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: TABpaddingUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(TABpaddingUnit) {
      return setAttributes({
        TABpaddingUnit: TABpaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: TABpaddingTop,
    right: TABpaddingRight,
    bottom: TABpaddingBottom,
    left: TABpaddingLeft,
    onChange: function onChange(_ref4) {
      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes({
        TABpaddingTop: top,
        TABpaddingRight: right,
        TABpaddingBottom: bottom,
        TABpaddingLeft: left
      });
    }
  })), resOption == "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: MOBmarginUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(MOBmarginUnit) {
      return setAttributes({
        MOBmarginUnit: MOBmarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: MOBmarginTop,
    right: MOBmarginRight,
    bottom: MOBmarginBottom,
    left: MOBmarginLeft,
    onChange: function onChange(_ref5) {
      var top = _ref5.top,
          right = _ref5.right,
          bottom = _ref5.bottom,
          left = _ref5.left;
      return setAttributes({
        MOBmarginTop: top,
        MOBmarginRight: right,
        MOBmarginBottom: bottom,
        MOBmarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedUnit: MOBpaddingUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
    onClick: function onClick(MOBpaddingUnit) {
      return setAttributes({
        MOBpaddingUnit: MOBpaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: MOBpaddingTop,
    right: MOBpaddingRight,
    bottom: MOBpaddingBottom,
    left: MOBpaddingLeft,
    onChange: function onChange(_ref6) {
      var top = _ref6.top,
          right = _ref6.right,
          bottom = _ref6.bottom,
          left = _ref6.left;
      return setAttributes({
        MOBpaddingTop: top,
        MOBpaddingRight: right,
        MOBpaddingBottom: bottom,
        MOBpaddingLeft: left
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color"),
    color: shadowColor,
    onChange: function onChange(shadowColor) {
      return setAttributes({
        shadowColor: shadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
    value: shadowHOffset,
    allowReset: true,
    onChange: function onChange(shadowHOffset) {
      return setAttributes({
        shadowHOffset: shadowHOffset
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
    value: shadowVOffset,
    allowReset: true,
    onChange: function onChange(shadowVOffset) {
      return setAttributes({
        shadowVOffset: shadowVOffset
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur"),
    value: shadowBlur,
    allowReset: true,
    onChange: function onChange(shadowBlur) {
      return setAttributes({
        shadowBlur: shadowBlur
      });
    },
    min: 0,
    max: 20
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spread"),
    value: shadowSpread,
    allowReset: true,
    onChange: function onChange(shadowSpread) {
      return setAttributes({
        shadowSpread: shadowSpread
      });
    },
    min: 0,
    max: 20
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var save = function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      showAfterDismiss = attributes.showAfterDismiss,
      title = attributes.title,
      text = attributes.text;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["useBlockProps"].save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-wrapper ".concat(blockId),
    "data-id": blockId,
    "data-show-again": showAfterDismiss
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-notice-title-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    tagName: "div",
    className: "eb-notice-title",
    value: title
  }), /*#__PURE__*/React.createElement("span", {
    className: "eb-notice-dismiss"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    tagName: "div",
    className: "eb-notice-text",
    value: text
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  var colorStyles = {
    padding: 2,
    borderRadius: 0,
    background: "white",
    border: "1px solid #ebebeb"
  };
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: color && colorStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 16,
          width: 16,
          borderRadius: "0%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      label = _ref.label,
      onChange = _ref.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _defineProperty({}, name, value));
      });
    } // console.log({ dimensions });

  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(dimensions); // console.log("---inside useEffect", { dimensions });
  }, [dimensions]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dimention-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dimention-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, "Top")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, "Right")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, "Bottom")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, "Left")), /*#__PURE__*/React.createElement("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl; // import { __ } from "@wordpress/i18n";
// import { withInstanceId } from "@wordpress/compose";
// import { BaseControl } from "@wordpress/components";

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/Icon.js":
/*!*****************************************!*\
  !*** ./util/typography-control/Icon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TypographyIcon = function TypographyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyIcon);

/***/ }),

/***/ "./util/typography-control/WithResButtons.js":
/*!***************************************************!*\
  !*** ./util/typography-control/WithResButtons.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typoHelpers */ "./util/typography-control/typoHelpers.js");

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "resIcons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("100"),
  value: "100"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("200"),
  value: "200"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("300"),
  value: "300"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("400"),
  value: "400"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("500"),
  value: "500"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("600"),
  value: "600"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("700"),
  value: "700"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("800"),
  value: "800"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lowercase"),
  value: "lowercase"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Capitalize"),
  value: "capitalize"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "initial"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overline"),
  value: "overline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Through"),
  value: "line-through"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline"),
  value: "underline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline Oveline"),
  value: "underline overline"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control/index.js":
/*!******************************************!*\
  !*** ./util/typography-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-control */ "./util/typography-control/unit-control.js");
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./util/typography-control/Icon.js");
/* harmony import */ var _WithResButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WithResButtons */ "./util/typography-control/WithResButtons.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      typoRequiredProps = _ref.typoRequiredProps;
  var attributes = typoRequiredProps.attributes,
      setAttributes = typoRequiredProps.setAttributes,
      resOption = typoRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_FontPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forFontSize",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLetterSpacing",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLineHeight",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/typography-control/typoHelpers.js":
/*!************************************************!*\
  !*** ./util/typography-control/typoHelpers.js ***!
  \************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};
var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};
var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

/***/ }),

/***/ "./util/typography-control/unit-control.js":
/*!*************************************************!*\
  !*** ./util/typography-control/unit-control.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map