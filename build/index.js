(window["webpackJsonp_notice"] = window["webpackJsonp_notice"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./util/typography-control/style.scss":
/*!********************************************!*\
  !*** ./util/typography-control/style.scss ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

/***/ "./src/components/edit.js":
/*!********************************!*\
  !*** ./src/components/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/components/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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


  var wrapperStylesDesktop = "\n\t.".concat(blockId, "{\n\t\t").concat(marginTop ? "margin-top: ".concat(parseFloat(marginTop)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginRight ? "margin-right: ".concat(parseFloat(marginRight)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginLeft ? "margin-left: ".concat(parseFloat(marginLeft)).concat(marginUnit, ";") : " ", "\n\t\t").concat(marginBottom ? "margin-bottom: ".concat(parseFloat(marginBottom)).concat(marginUnit, ";") : " ", "\n\t\tpadding:\n\t\t\t").concat(paddingTop || 0).concat(paddingUnit, "\n\t\t\t").concat(paddingRight || 0).concat(paddingUnit, "\n\t\t\t").concat(paddingBottom || 0).concat(paddingUnit, "\n\t\t\t").concat(paddingLeft || 0).concat(paddingUnit, ";\n\n\t\tbackground: ").concat(backgroundColor || "#3074ff", ";\n\n\t\t").concat(shadowColor ? "box-shadow:\n\t\t\t\t\t".concat(shadowHOffset || 0, "px\n\t\t\t\t\t").concat(shadowVOffset || 0, "px\n\t\t\t\t\t").concat(shadowBlur || 0, "px\n\t\t\t\t\t").concat(shadowSpread || 0, "px\n\t\t\t\t\t").concat(shadowColor, ";") : " ", "\n\n\t\tborder-radius: 5px;\n\t}\n\t");
  var wrapperStylesTab = "\n\t.".concat(blockId, "{\n\t\t").concat(TABmarginTop ? "margin-top: ".concat(parseFloat(TABmarginTop)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginRight ? "margin-right: ".concat(parseFloat(TABmarginRight)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginLeft ? "margin-left: ".concat(parseFloat(TABmarginLeft)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABmarginBottom ? "margin-bottom: ".concat(parseFloat(TABmarginBottom)).concat(TABmarginUnit, ";") : " ", "\n\t\t").concat(TABpaddingTop ? "padding-top: ".concat(parseFloat(TABpaddingTop)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingRight ? "padding-right: ".concat(parseFloat(TABpaddingRight)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingLeft ? "padding-left: ".concat(parseFloat(TABpaddingLeft)).concat(TABpaddingUnit, ";") : " ", "\n\t\t").concat(TABpaddingBottom ? "padding-bottom: ".concat(parseFloat(TABpaddingBottom)).concat(TABpaddingUnit, ";") : " ", "\n\t}\n\t");
  var wrapperStylesMobile = "\n\t.".concat(blockId, "{\n\t\t").concat(MOBmarginTop ? "margin-top: ".concat(parseFloat(MOBmarginTop)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginRight ? "margin-right: ".concat(parseFloat(MOBmarginRight)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginLeft ? "margin-left: ".concat(parseFloat(MOBmarginLeft)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBmarginBottom ? "margin-bottom: ".concat(parseFloat(MOBmarginBottom)).concat(MOBmarginUnit, ";") : " ", "\n\t\t").concat(MOBpaddingTop ? "padding-top: ".concat(parseFloat(MOBpaddingTop)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingRight ? "padding-right: ".concat(parseFloat(MOBpaddingRight)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingLeft ? "padding-left: ".concat(parseFloat(MOBpaddingLeft)).concat(MOBpaddingUnit, ";") : " ", "\n\t\t").concat(MOBpaddingBottom ? "padding-bottom: ".concat(parseFloat(MOBpaddingBottom)).concat(MOBpaddingUnit, ";") : " ", "\n\t}\n\t"); //
  // titleWrapper styles css in strings ⬇

  var titleWrapperStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-title-wrapper{\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t"); // title styles css in strings ⬇

  var titleStylesDesktop = "\n\t.".concat(blockId, " .eb-notice-title{\n\t\t").concat(titleTypoStylesDesktop, "\n\t\tcolor: ").concat(titleColor || "#fff", ";\n\t}\n\t");
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
  React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "tab" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\n\n\t\t\t\t\t/* tabcssStart */\n\t\t\t\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\n\n\t\t\t\t}\n\n\t\t\t\t@media all and (max-width: 767px) {\n\n\t\t\t\t\t/* mobcssStart */\n\t\t\t\t\t").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\n\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
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

/***/ "./src/components/inspector.js":
/*!*************************************!*\
  !*** ./src/components/inspector.js ***!
  \*************************************/
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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_typography_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/typography-control */ "./util/typography-control/index.js");
/* harmony import */ var _ResPanelBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ResPanelBody */ "./src/ResPanelBody.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
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
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["NOTICE_TYPES"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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
    unitTypes: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FONT_SIZE_UNITS"],
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

/***/ "./src/components/save.js":
/*!********************************!*\
  !*** ./src/components/save.js ***!
  \********************************/
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

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
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

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save */ "./src/components/save.js");
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
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _components_save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      })));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

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
var BaseControl = wp.components.BaseControl;

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
var Icon = /*#__PURE__*/React.createElement("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(3 3)"
}, /*#__PURE__*/React.createElement("path", {
  d: "m.995 16v2h16v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m8 0-5.5 14h2.25l1.12-3h6.25l1.12 3h2.25l-5.49-14zm-1.38 9 2.38-6.33 2.38 6.33z"
})));
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
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
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
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
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./util/typography-control/Icon.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./util/typography-control/style.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dropdown = _wp$components.Dropdown,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl;
var DOWN = wp.keycodes.DOWN;
/**
 * Internal dependencies
 */







var TypographyControl = /*#__PURE__*/function (_Component) {
  _inherits(TypographyControl, _Component);

  var _super = _createSuper(TypographyControl);

  function TypographyControl() {
    var _this;

    _classCallCheck(this, TypographyControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onFontChange", function (value, onClose) {
      var _this$props$attribute = _this.props.attributes,
          fontFamily = _this$props$attribute.fontFamily,
          fontWeight = _this$props$attribute.fontWeight;

      _this.props.setAttributes({
        fontFamily: value
      });

      if (typeof _constants__WEBPACK_IMPORTED_MODULE_3__["FONTS"][value] !== "undefined" && typeof _constants__WEBPACK_IMPORTED_MODULE_3__["FONTS"][value].weight !== "undefined") {
        if (fontWeight && Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__["FONTS"][fontFamily].weight).indexOf(fontWeight) < 0) {
          _this.props.setAttributes({
            fontWeight: ""
          });
        }
      }

      onClose();
    });

    return _this;
  }

  _createClass(TypographyControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var fontFamily = attributes.fontFamily,
          fontSize = attributes.fontSize,
          fontSizeUnit = attributes.fontSizeUnit,
          fontWeight = attributes.fontWeight,
          textTransform = attributes.textTransform,
          lineHeight = attributes.lineHeight,
          letterSpacing = attributes.letterSpacing;
      var SIZE_STEP = fontSizeUnit === "em" ? 0.1 : 1;
      var SIZE_MAX = fontSizeUnit === "em" ? 10 : 100;
      return /*#__PURE__*/React.createElement(Dropdown, {
        className: "components-dropdown-menu components-eb-typography-dropdown",
        position: "top right",
        renderToggle: function renderToggle(_ref) {
          var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;

          var onArrowDown = function onArrowDown(event) {
            if (!isOpen && event.keyCode === DOWN) {
              event.preventDefault();
              event.stopPropagation();
              onToggle();
            }
          };

          return /*#__PURE__*/React.createElement(Button, {
            className: "components-dropdown-menu__toggle",
            icon: _Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
            onClick: onToggle,
            onKeyDown: onArrowDown,
            "aria-haspopup": "true",
            label: "Open",
            tooltip: "Here it is "
          }, /*#__PURE__*/React.createElement("span", {
            className: "components-dropdown-menu__indicator"
          }));
        },
        renderContent: function renderContent(_ref2) {
          var onClose = _ref2.onClose;
          return /*#__PURE__*/React.createElement("div", {
            className: "eb-typography-wrapper"
          }, /*#__PURE__*/React.createElement(_FontPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
            label: __("Font"),
            value: fontFamily || null,
            onChange: function onChange(nextFontFamily) {
              return _this2.onFontChange(nextFontFamily, onClose);
            },
            className: "components-base-control--with-flex"
          }), /*#__PURE__*/React.createElement(SelectControl, {
            label: __("Weight"),
            value: fontWeight || null,
            options: _constants__WEBPACK_IMPORTED_MODULE_3__["WEIGHTS"],
            onChange: function onChange(fontWeight) {
              return setAttributes({
                fontWeight: fontWeight
              });
            }
          }), /*#__PURE__*/React.createElement(BaseControl, {
            label: __("Transform")
          }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_3__["TRANSFORMS"].map(function (item) {
            return /*#__PURE__*/React.createElement(Button, {
              isPrimary: textTransform === item.value,
              isSecondary: textTransform !== item.value,
              onClick: function onClick() {
                return setAttributes({
                  textTransform: item.value
                });
              }
            }, item.label);
          }))), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
            selectedUnit: fontSizeUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }, {
              label: "%",
              value: "%"
            }],
            onClick: function onClick(fontSizeUnit) {
              return setAttributes({
                fontSizeUnit: fontSizeUnit
              });
            }
          }), /*#__PURE__*/React.createElement(RangeControl, {
            label: __("Size"),
            value: fontSize || null,
            onChange: function onChange(fontSize) {
              return setAttributes({
                fontSize: fontSize
              });
            },
            min: 0,
            max: SIZE_MAX,
            step: SIZE_STEP
          }), /*#__PURE__*/React.createElement(RangeControl, {
            label: __("Line Height"),
            value: lineHeight || null,
            onChange: function onChange(lineHeight) {
              return setAttributes({
                lineHeight: lineHeight
              });
            },
            min: -1,
            max: 4,
            step: 0.1
          }), /*#__PURE__*/React.createElement(RangeControl, {
            label: __("Letter Spacing"),
            value: letterSpacing || null,
            onChange: function onChange(letterSpacing) {
              return setAttributes({
                letterSpacing: letterSpacing
              });
            },
            min: 0,
            max: 4,
            step: 0.1
          }));
        }
      });
    }
  }]);

  return TypographyControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (TypographyControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");



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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map