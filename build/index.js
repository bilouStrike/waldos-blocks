(window["webpackJsonp_waldos_blocks"] = window["webpackJsonp_waldos_blocks"] || []).push([["style-index"],{

/***/ "./src/block-extensions/style.scss":
/*!*****************************************!*\
  !*** ./src/block-extensions/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/first-block/style.scss":
/*!************************************!*\
  !*** ./src/first-block/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/team-block/style.scss":
/*!***********************************!*\
  !*** ./src/team-block/style.scss ***!
  \***********************************/
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
/******/ 	var jsonpArray = window["webpackJsonp_waldos_blocks"] = window["webpackJsonp_waldos_blocks"] || [];
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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/block-extensions/border-radius.js":
/*!***********************************************!*\
  !*** ./src/block-extensions/border-radius.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Core block extend.
 *
 * @package waldos-blocks
 */
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;
var _window$lodash = window.lodash,
    assign = _window$lodash.assign,
    isEmpty = _window$lodash.isEmpty;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;
var STEP = 1;
var MAX = 50;
/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */

var permittedBlocks = ['core/group'];
/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value New class Name.
 *
 * @return {string}
 */

var getNewClassNames = function getNewClassNames(className, value, prefix) {
  var existingClassNames = className ? className.split(' ') : []; // Remove existing class names with given prefix and extra class.

  var classNames = existingClassNames.filter(function (existingClassName) {
    return 0 !== existingClassName.indexOf(prefix + '-');
  });

  if (!value) {
    return classNames.join(' ');
  }

  classNames.push("".concat(prefix, "-").concat(value));
  return classNames.join(' ');
};
/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */


var addAdditionalAttributes = function addAdditionalAttributes(settings) {
  if ('undefined' !== settings.name && permittedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      borderRadius: {
        type: 'number',
        default: 0
      }
    });
  }

  return settings;
};
/**
 * Higher order component with inspector controls for extending core block.
 */


var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (!permittedBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var borderRadius = attributes.borderRadius,
        className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      id: "waldos-blocks-border-radius",
      title: __('Border Radius', 'waldos-blocks'),
      initialOpen: false,
      className: "has-range-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Border Radius (px)', 'waldos-blocks'),
      value: borderRadius,
      onChange: function onChange(value) {
        setAttributes({
          borderRadius: value,
          className: getNewClassNames(className, value, 'wf-border-radius')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    })))));
  };
}, 'withInspectorControl');
addFilter('blocks.registerBlockType', 'waldos-blocks/block-border-radius', addAdditionalAttributes);
addFilter('editor.BlockEdit', 'waldos-blocks/block-border-radius', withInspectorControls);

/***/ }),

/***/ "./src/block-extensions/columns-equal-height.js":
/*!******************************************************!*\
  !*** ./src/block-extensions/columns-equal-height.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Core block extend.
 *
 * @package waldos-blocks
 */
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;
var _window$lodash = window.lodash,
    assign = _window$lodash.assign,
    isEmpty = _window$lodash.isEmpty;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;
/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */

var permittedBlocks = ['core/columns'];
/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value New class Name.
 *
 * @return {string}
 */

var getNewClassNames = function getNewClassNames(className, value, prefix) {
  var existingClassNames = className ? className.split(' ') : []; // Remove existing class names with given prefix and extra class.

  var classNames = existingClassNames.filter(function (existingClassName) {
    return 0 !== existingClassName.indexOf(prefix + '-');
  });

  if (!value) {
    return classNames.join(' ');
  }

  classNames.push("".concat(prefix));
  return classNames.join(' ');
};
/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */


var addAdditionalAttributes = function addAdditionalAttributes(settings) {
  if ('undefined' !== settings.name && permittedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      equalHeight: {
        type: 'boolean',
        default: false
      }
    });
  }

  return settings;
};
/**
 * Higher order component with inspector controls for extending core block.
 */


var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (!permittedBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      id: "waldos-blocks-equal-columns",
      title: __('Equal Height Columns', 'waldos-blocks'),
      initialOpen: false,
      className: "has-range-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Set equal height columns', 'waldos-blocks'),
      checked: !!attributes.equalHeight,
      onChange: function onChange(value) {
        setAttributes({
          equalHeight: value,
          className: getNewClassNames(className, value, 'wf-columns-equal-height')
        });
      }
    })))));
  };
}, 'withInspectorControl');
addFilter('blocks.registerBlockType', 'waldos-blocks/block-equal-height', addAdditionalAttributes);
addFilter('editor.BlockEdit', 'waldos-blocks/block-equal-height', withInspectorControls);

/***/ }),

/***/ "./src/block-extensions/index.js":
/*!***************************************!*\
  !*** ./src/block-extensions/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/block-extensions/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/block-extensions/layout.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing */ "./src/block-extensions/spacing.js");
/* harmony import */ var _border_radius__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border-radius */ "./src/block-extensions/border-radius.js");
/* harmony import */ var _columns_equal_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./columns-equal-height */ "./src/block-extensions/columns-equal-height.js");
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



 //import './background-image';



/***/ }),

/***/ "./src/block-extensions/layout.js":
/*!****************************************!*\
  !*** ./src/block-extensions/layout.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Core block extend.
 *
 * @package waldos-blocks
 */
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;
var _window$lodash = window.lodash,
    assign = _window$lodash.assign,
    isEmpty = _window$lodash.isEmpty;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;
/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */

var permittedBlocks = ['core/group', 'core/columns', 'core/media-text'];
/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value New class Name.
 *
 * @return {string}
 */

var getNewClassNames = function getNewClassNames(className, value, prefix) {
  var existingClassNames = className ? className.split(' ') : []; // Remove existing class names with given prefix and extra class.

  var classNames = existingClassNames.filter(function (existingClassName) {
    return 0 !== existingClassName.indexOf(prefix + '-');
  });

  if (!value) {
    return classNames.join(' ');
  }

  classNames.push("".concat(prefix, "-").concat(value));
  return classNames.join(' ');
};
/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */


var addAdditionalAttributes = function addAdditionalAttributes(settings) {
  if ('undefined' !== settings.name && permittedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      layout: {
        type: 'string',
        default: ''
      }
    });
  }

  return settings;
};
/**
 * Higher order component with inspector controls for extending core block.
 */


var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (!permittedBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      id: "waldos-blocks-layout",
      title: __('Set Layout', 'waldos-blocks'),
      initialOpen: false,
      className: "has-range-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Select layout', 'waldos-blocks'),
      value: attributes.layout,
      options: [{
        value: '',
        label: __('None')
      }, {
        value: 'exsmall',
        label: __('Extra Small')
      }, {
        value: 'small',
        label: __('Small')
      }, {
        value: 'medium',
        label: __('Medium')
      }, {
        value: 'large',
        label: __('Large')
      }],
      onChange: function onChange(value) {
        setAttributes({
          layout: value,
          className: getNewClassNames(className, value, 'wf-layout')
        });
      }
    })))));
  };
}, 'withInspectorControl');
addFilter('blocks.registerBlockType', 'waldos-blocks/block-layout', addAdditionalAttributes);
addFilter('editor.BlockEdit', 'waldos-blocks/block-layout', withInspectorControls);

/***/ }),

/***/ "./src/block-extensions/spacing.js":
/*!*****************************************!*\
  !*** ./src/block-extensions/spacing.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Core block extend.
 *
 * @package waldos-blocks
 */
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;
var _window$lodash = window.lodash,
    assign = _window$lodash.assign,
    isEmpty = _window$lodash.isEmpty;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var getBlockDefaultClassName = wp.blocks.getBlockDefaultClassName;
var STEP = 8;
var MAX = 232;
/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value New class Name.
 *
 * @return {string}
 */

var getNewClassNames = function getNewClassNames(className, value, prefix) {
  var existingClassNames = className ? className.split(' ') : [];
  var extraClass = 'has-custom-spacing';
  var prefixes = ['mt-', 'mb-', 'pt-', 'pb-', 'mts-', 'mbs-', 'pts-', 'pbs-']; // Remove existing spacing class names with given prefix and extra class.

  var classNames = existingClassNames.filter(function (existingClassName) {
    return 0 !== existingClassName.indexOf(prefix + '-') && extraClass !== existingClassName;
  }); // If other spacing classes are present we would want to keep the extra class.

  var hasOtherSpacingClasses = existingClassNames.find(function (existingClassName) {
    var hasClass = false;
    prefixes.forEach(function (_prefix) {
      if (0 === existingClassNames.indexOf(_prefix)) {
        hasClass = true;
      }
    });
    return hasClass;
  });

  if (!value) {
    if (hasOtherSpacingClasses) {
      classNames.push(extraClass);
    }

    return classNames.join(' ');
  }

  classNames.push("".concat(prefix, "-").concat(value, " ").concat(extraClass));
  return classNames.join(' ');
};
/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */


var addAdditionalAttributes = function addAdditionalAttributes(settings) {
  if ('undefined' !== typeof settings.attributes) {
    settings.attributes = Object.assign(settings.attributes, {
      marginTop: {
        type: 'number',
        default: 0
      },
      marginBottom: {
        type: 'number',
        default: 0
      },
      paddingTop: {
        type: 'number',
        default: 0
      },
      paddingBottom: {
        type: 'number',
        default: 0
      },
      marginTopSmall: {
        type: 'number',
        default: 0
      },
      marginBottomSmall: {
        type: 'number',
        default: 0
      },
      paddingTopSmall: {
        type: 'number',
        default: 0
      },
      paddingBottomSmall: {
        type: 'number',
        default: 0
      }
    });
  }

  return settings;
};
/**
 * Higher order component with inspector controls for extending core block.
 */


var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var marginTop = attributes.marginTop,
        marginBottom = attributes.marginBottom,
        paddingTop = attributes.paddingTop,
        paddingBottom = attributes.paddingBottom,
        marginTopSmall = attributes.marginTopSmall,
        marginBottomSmall = attributes.marginBottomSmall,
        paddingTopSmall = attributes.paddingTopSmall,
        paddingBottomSmall = attributes.paddingBottomSmall,
        className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      id: "waldos-blocks-heading-font-size",
      title: __('Spacing', 'waldos-blocks'),
      initialOpen: false,
      className: "has-range-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Margin Top (px)', 'waldos-blocks'),
      value: marginTop,
      onChange: function onChange(value) {
        setAttributes({
          marginTop: value,
          className: getNewClassNames(className, value, 'mt')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Margin Bottom (px)', 'waldos-blocks'),
      value: marginBottom,
      onChange: function onChange(value) {
        setAttributes({
          marginBottom: value,
          className: getNewClassNames(className, value, 'mb')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Padding Top (px)', 'waldos-blocks'),
      value: paddingTop,
      onChange: function onChange(value) {
        setAttributes({
          paddingTop: value,
          className: getNewClassNames(className, value, 'pt')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Padding Bottom (px)', 'waldos-blocks'),
      value: paddingBottom,
      onChange: function onChange(value) {
        setAttributes({
          paddingBottom: value,
          className: getNewClassNames(className, value, 'pb')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      id: "waldos-blocks-mobile-spacings",
      title: __('Spacing - Mobile', 'waldos-blocks'),
      initialOpen: false,
      className: "has-range-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Margin Top (px)', 'waldos-blocks'),
      value: marginTopSmall,
      onChange: function onChange(value) {
        setAttributes({
          marginTopSmall: value,
          className: getNewClassNames(className, value, 'mts')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Margin Bottom (px)', 'waldos-blocks'),
      value: marginBottomSmall,
      onChange: function onChange(value) {
        setAttributes({
          marginBottomSmall: value,
          className: getNewClassNames(className, value, 'mbs')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Padding Top (px)', 'waldos-blocks'),
      value: paddingTopSmall,
      onChange: function onChange(value) {
        setAttributes({
          paddingTopSmall: value,
          className: getNewClassNames(className, value, 'pts')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Padding Bottom (px)', 'waldos-blocks'),
      value: paddingBottomSmall,
      onChange: function onChange(value) {
        setAttributes({
          paddingBottomSmall: value,
          className: getNewClassNames(className, value, 'pbs')
        });
      },
      min: 0,
      max: MAX,
      step: STEP
    })))));
  };
}, 'withInspectorControl');
addFilter('blocks.registerBlockType', 'waldos-blocks/block-spacing', addAdditionalAttributes);
addFilter('editor.BlockEdit', 'waldos-blocks/block-spacing', withInspectorControls);

/***/ }),

/***/ "./src/first-block/edit.js":
/*!*********************************!*\
  !*** ./src/first-block/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/first-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Waldos Blocks – hello from the editor!', 'waldos-blocks'));
}

/***/ }),

/***/ "./src/first-block/editor.scss":
/*!*************************************!*\
  !*** ./src/first-block/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/first-block/index.js":
/*!**********************************!*\
  !*** ./src/first-block/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/first-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/first-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/first-block/save.js");
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



var name = 'waldos-blocks/first-block';
var settings = {
  title: 'First Block',
  description: 'This is Waldo\'s Friends site\'s first block.',
  category: 'formatting',
  icon: 'image',
  Edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/first-block/save.js":
/*!*********************************!*\
  !*** ./src/first-block/save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Waldos Blocks – hello from the saved content!', 'waldos-blocks'));
}

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
/* harmony import */ var _block_extensions___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-extensions/ */ "./src/block-extensions/index.js");
/* harmony import */ var _first_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-block */ "./src/first-block/index.js");
/* harmony import */ var _team_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-block */ "./src/team-block/index.js");
/* harmony import */ var _video_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-block */ "./src/video-block/index.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-block */ "./src/tabs-block/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */






var blocks = [_first_block__WEBPACK_IMPORTED_MODULE_2__, _team_block__WEBPACK_IMPORTED_MODULE_3__, _video_block__WEBPACK_IMPORTED_MODULE_4__, _tabs_block__WEBPACK_IMPORTED_MODULE_5__];

function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, settings);
}

blocks.forEach(registerBlock);

/***/ }),

/***/ "./src/tabs-block/edit.js":
/*!********************************!*\
  !*** ./src/tabs-block/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/tabs-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./src/tabs-block/tabs.js");



function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    label: "Details"
  }, "See ya later, ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", null, "Alligator"), "!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    label: "Transcript"
  }, "After 'while, ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", null, "Crocodile"), "!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    label: "About the author"
  }, "Nothing to see here, this tab is ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", null, "extinct"), "!"));
}

/***/ }),

/***/ "./src/tabs-block/editor.scss":
/*!************************************!*\
  !*** ./src/tabs-block/editor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tabs-block/index.js":
/*!*********************************!*\
  !*** ./src/tabs-block/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/tabs-block/edit.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var name = 'waldos-blocks/tabs-block';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Tabs Block", "tabs-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Waldos Tabs block", "tabs-block"),
  category: "common",
  icon: "video",
  supports: {
    align: ['full']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'full'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
};

/***/ }),

/***/ "./src/tabs-block/tab.js":
/*!*******************************!*\
  !*** ./src/tabs-block/tab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Tab = function Tab(props) {
  var activeTab = props.activeTab,
      onClickTab = props.onClickTab,
      label = props.label;
  var className = "tabs-block__tabs-item";

  var onClick = function onClick() {
    onClickTab(label);
  };

  if (activeTab === label) {
    className += " tabs-block__tabs-item--active";
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: className,
    onClick: onClick
  }, label);
};

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./src/tabs-block/tabs.js":
/*!********************************!*\
  !*** ./src/tabs-block/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab */ "./src/tabs-block/tab.js");



var useState = wp.element.useState;

var Tabs = function Tabs(props) {
  var _props$children$, _props$children$$prop;

  var _useState = useState(props === null || props === void 0 ? void 0 : (_props$children$ = props.children[0]) === null || _props$children$ === void 0 ? void 0 : (_props$children$$prop = _props$children$.props) === null || _props$children$$prop === void 0 ? void 0 : _props$children$$prop.label),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var onClickTabItem = function onClickTabItem(tab) {
    setActiveTab(tab);
  };

  var children = props.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "tabs-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ol", {
    className: "tabs-block__tabs-list"
  }, children === null || children === void 0 ? void 0 : children.map(function (child) {
    var label = child.props.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeTab,
      key: label,
      label: label,
      onClickTab: onClickTabItem
    });
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "tabs-block__tabs-content"
  }, children.map(function (child) {
    if (child.props.label !== activeTab) return undefined;
    return child.props.children;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/team-block/assets/images/userProfile.svg":
/*!******************************************************!*\
  !*** ./src/team-block/assets/images/userProfile.svg ***!
  \******************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgUserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#EDEDED",
  d: "M0 0h290v360H0z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M208.401 236.438c0 .08 0 .08.081.161l-.081-.161zM98.567 96.581c.081 0 .081 0 0 0zm-9.822 41.248c-.081-.081-.081-.242-.163-.323 0-.08-.08-.161-.08-.322.162.403.324.806.486 1.128-.162-.161-.162-.322-.243-.483z",
  fill: "#AAA"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M250.045 175.049c.162-1.128-1.948-12.084-2.435-13.373-1.462-3.384-2.355-7.009-3.166-10.554-.974-4.27-4.79-7.895-6.495-11.762-.568-1.37-1.298-2.82-2.029-4.19a174.917 174.917 0 00-2.192-3.947c-1.948-3.465-4.789-6.284-6.656-9.748-1.056-2.014-6.007-7.734-6.17-7.896 0 0-15.748-12.809-17.291-14.5-.974-1.129-9.173-4.996-10.553-5.48-1.461-.563-5.763-2.98-6.819-3.141-.568-.08-7.306-3.303-9.579-3.303-2.354-.08-4.708-.403-6.981-1.128-.974-.322-9.254-2.014-10.553-2.014-7.793-.08-13.394.241-15.83.322-3.084.08-24.434 2.9-25.327 3.464-.487.322-18.265 4.19-29.63 11.682-2.03 1.289-25.084 18.368-36.61 36.495-.407.886-8.524 18.288-8.606 19.093-.65 2.095-4.14 13.857-4.221 14.663-.162 2.014-.325 3.947-.568 5.961 0 .081-.163 9.507 0 12.246.243 1.208-.163 8.459-.325 10.795-.081 1.048.406 4.995.487 6.123.162 1.128.65 6.526.893 7.734.081.725 2.76 9.265 3.085 10.473.081.726 5.601 13.213 5.764 14.099 0 0 4.22 8.137 4.789 9.104 1.136 1.691 2.354 4.108 3.896 5.72.975 1.047 7.063 8.459 7.469 8.217.243-.161.243-.967.162-1.853 0-.242-.081-.483-.081-.725s-.081-.483-.081-.725c0-.161-.081-.242-.081-.403-.082-.403-.082-.725-.163-1.128-.08-.564-.162-1.128-.162-1.53 0 0-.568-4.029-.568-4.995-.081-1.209-.244-2.337.162-3.545 0-.161 2.03-16.274 2.841-18.852-.162-.644 1.218-4.109 2.517-4.995 1.46-1.047 2.11-.967 2.516.725.163.645.487 1.048.812 1.612.974 1.53 3.572 7.572 4.14 8.781 1.786 3.545 3.978 6.848 5.601 10.634 1.462 3.626 3.491 7.331 6.738 9.99 1.055.806 1.299.645 1.705-.483.487-1.128 1.299-7.251 1.542-9.104.244-1.853.162-4.028.568-5.881.812-3.787 1.3-7.573 1.705-11.44.568-6.284 1.786-12.487 2.922-18.691.812-4.269 1.624-8.62 2.517-12.89.649-3.303 1.137-6.767 1.786-10.07.568-3.142 3.734-13.374 4.059-14.018.162-.483.568-4.028.893-5.317.406-1.209 1.055-6.687 1.542-11.198 0-.242 0-.403.081-.564 0-.161.082-.323.082-.484.081-.322.081-.644.081-.966 0-.162.081-.403.081-.564v-.323-.161c0-.161 0-.322.081-.483.081-.484.081-.886.081-1.289v-.161-.242-.322-.484-.241c0-2.901-.162-5.801-1.136-8.943a364.575 364.575 0 01-3.572 6.526c-1.299 2.497-2.354 5.156-4.708 7.009-.893.725-1.786 1.047-2.598 1.047-1.299 0-2.435-.806-3.166-2.336-1.542-3.626-2.679-7.493-3.734-11.279 0 0-.081-.081-.081-.242 0-.08-.082-.161-.082-.241 0-.081-.08-.081-.08-.162-.082-.08-.082-.241-.163-.322-.081-.08-.081-.161-.162-.242-.082-.161-.163-.322-.163-.402a15.795 15.795 0 01-.487-1.128c-.081-.081-.081-.161-.081-.322 0-.081-.081-.081-.081-.162v-.08c0-.081-.081-.242-.163-.322-.08-.162-.162-.403-.243-.564-.162-.403-.244-.806-.406-1.209-.568-1.933-.893-4.028-.243-5.397.324-1.934 5.114-4.109 6.088-4.754 2.516-1.772 5.52-2.658 8.036-4.35 2.842-1.934 5.926-3.545 9.011-5.156.974-.484 1.948-.806 2.841-.806.731 0 1.38.161 2.111.645.081.08.162.08.244.161.081.08.162.08.243.161.081.081.162.081.244.161 2.76 1.853 10.959 7.331 14.043 9.184l.487.242c.082 0 .082.081.163.081.081.08.162.08.243.161.163.08.244.08.325.161h.081c.244-.322 12.42-.564 18.103-.725 3.409-.081 6.737.241 10.147-.403 4.221-.161 7.955-2.175 11.771-3.625 4.546-1.773 9.01-3.545 13.556-5.318.731-.322 1.462-.402 2.192-.402 1.055 0 2.03.241 3.004.644 2.922 1.209 6.007 1.934 9.01 3.062 2.923 1.047 6.008 1.53 9.173 1.53H208.888c1.136 0 2.029.484 2.679 1.209.081.08.162.241.243.322.081.08.163.161.163.242.081.08.162.241.243.322.081.161.163.403.244.564.081.08.081.241.162.322v.081c.081.161.081.241.081.402.081.162.081.403.163.564.487 2.578-1.218 3.948-2.273 5.64-.974 1.53-4.952 7.573-5.196 8.056-.081.161-.081.322-.162.403-.081.161-.162.322-.162.403-1.218 2.819-2.76 5.317-4.546 7.814-1.867 2.901-3.41 5.317-3.572 5.72-.406 1.531-1.786 2.095-3.085 2.175h-.487-.081c-.081 0-.081 0-.163-.08-.081 0-.162-.081-.162-.081-.081 0-.162-.08-.243-.161-.082-.08-.163-.161-.244-.161l-.162-.161c-.082-.081-.163-.242-.244-.322-.081-.081-.081-.161-.081-.161-.081-.162-.244-.403-.325-.564-.081-.161-.162-.323-.162-.403-1.38-3.062-2.111-6.284-3.815-9.184-.731-1.209-.812-2.981-1.299-4.431-.244-.645-.487-.887-.731-.887-.243 0-.568.242-.974.645-1.137 1.128-1.542 2.336-1.137 3.948 1.056 4.189 2.436 14.984 2.355 16.112.406.886 4.383 28.117 4.464 33.112v.08c.487 1.37 1.056 2.739 1.624 4.189 0 .081 0 .081.081.161 1.055 2.498 2.192 4.995 3.004 7.412.162.323 2.76 6.848 5.844 14.663-1.38.403-3.165 1.047-4.951 1.692-.406.08-.731.241-1.056.402-.406.162-.73.242-1.055.403v-.08l.244-1.209c0-.483.243-4.914 0-6.928-.325-2.578-1.218-8.298-1.38-8.782-1.218-3.786-4.14-11.117-4.384-11.601-.893-1.611-2.029-2.98-3.085-4.431-.893-1.127-1.705-2.175-2.354-3.303-.487-.725-1.218-1.45-1.948-1.853-.325.645-.731 1.531-.812 2.014-.731 3.384-1.542 6.768-2.273 10.071l-.649 2.981c.162.564.324 1.611.487 3.867.162 1.853.324 4.511.324 6.203 0 1.531-.162 2.981-.243 4.512-.081 1.369-.244 2.819-.244 4.269 0 1.773-.081 3.626-1.055 5.398 1.38 3.787 4.384 5.559 6.657 6.445l.487.161c1.786.645 3.571 1.37 5.357.403.163-.081.487-.322.812-.644.325 0 .812-.162 1.218-.323.243-.161.568-.322 1.055-.483.406-.161.893-.242 1.38-.403.812-.161 1.543-.242 1.948-.161 1.299.161 2.679.403 3.897 0 1.623-.564 3.328-.564 4.952-.806.324.887.73 1.773 1.055 2.659-4.221.161-9.498.483-12.258 1.289-.406.161-1.217.161-1.623.242-.974.161-1.461 1.047-1.461 1.772.081 1.047 1.055.403 1.542.322 1.299-.161 2.598.403 3.734 0 3.085-1.208 6.17-.161 9.254-.483.325 0 1.137-.081 2.03-.081.73 1.853 1.461 3.626 2.029 5.237l.081.161c0-.081-.081-.081-.081-.161-4.14-1.611-8.361 2.256-7.955 7.089.243 2.901.324 5.72.73 8.621.487 3.464 1.543 6.686 5.277 8.217.568.242 1.055.403 1.705.564 5.114 1.208 7.955-1.289 8.036-1.37 1.38 3.867 2.517 6.848 2.76 6.687 2.679-1.369 16.236-18.69 17.21-20.141 2.029-3.141 9.66-18.046 10.634-21.026.244-.806 1.299-4.19 1.218-5.479-.081-.886 1.136-7.009 1.461-9.264.162-1.289 1.867-18.369 1.867-18.449.081-.967-1.542-16.113-1.461-16.838zM98.649 96.581c-.081 0-.081 0 0 0-.081 0-.081 0 0 0-.081 0-.081 0 0 0-.081 0-.081 0 0 0-.081 0-.081 0 0 0zm85.48 125.275c-2.841.242-4.303-1.772-5.764-3.625-.243-.323 0-.887.162-1.209.731-1.289 2.923.725 3.653 1.37 1.137 1.047 1.868.805 2.192-.564.406-1.531 1.299-2.014 2.76-1.773.487.081.812.323.731.806-.162 1.772-1.137 4.753-3.734 4.995zm10.309 2.336l-1.217.242c-.487.081-.893.161-1.218.322.487-.886.893-1.853 1.299-2.578.406-.08.812-.161 1.136-.241.406-.081.731-.162 1.137-.242.162-.081.324-.081.487-.081 1.218-.483 3.572-1.128 5.845-1.691.324.886.73 1.772 1.055 2.658-2.922.483-6.088 1.128-8.524 1.611z",
  fill: "#AAA"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M210.755 124.133c.162 1.209-.244 1.853-1.218 3.142-.243.322-.568.725-.812 1.128l-.811 1.208c-3.897 5.962-4.384 6.768-4.546 7.17 0 .081-.081.162-.081.242l-.082.161-.081.081c0 .08-.081.161-.162.242-.812 1.691-2.273 4.189-4.384 7.572-.487.726-.893 1.451-1.38 2.095-1.948 2.981-2.273 3.625-2.435 4.189-.081.403-.487.645-1.055.725-.082-.161-.325-.483-.569-1.047-.487-1.047-.893-2.175-1.298-3.384-.731-2.014-1.462-4.028-2.598-6.042-.244-.483-.487-1.289-.65-2.014-.162-.644-.324-1.369-.568-2.094-.649-1.853-1.867-2.176-2.597-2.176-1.056 0-1.868.645-2.355 1.209-1.623 1.692-2.191 3.545-1.623 5.72.73 2.819 1.542 8.862 2.029 12.568-.324-.323-.568-.726-.893-1.209-1.867-2.739-4.627-6.123-9.173-8.137a21.993 21.993 0 01-8.036-6.123c-2.842-3.464-3.653-7.814-4.059-11.681l-.244-1.45c-.081-.323-.162-.564-.162-.806 3.085-.403 5.763-1.531 8.442-2.658.812-.323 1.705-.726 2.517-1.048 3.734-1.45 8.605-3.303 13.557-5.317.487-.161.974-.322 1.461-.322.649 0 1.38.161 2.191.483 1.786.725 3.572 1.289 5.277 1.853 1.299.403 2.598.806 3.815 1.289 3.004 1.128 6.332 1.692 9.904 1.692h.649c1.462.322 1.949 2.014 2.03 2.739zM129.496 126.308l-.243.484c-.325.402-.568.805-.812 1.208-1.38 2.014-2.679 3.948-4.465 5.559-1.38 1.289-2.516 2.739-3.571 4.189-.65.886-1.299 1.773-2.03 2.498-.812.886-1.542 1.853-2.192 2.739-.974 1.208-1.867 2.336-2.841 3.383-.73.806-1.705 1.773-2.679 2.74v-.564-.484-.322c0-2.9-.162-6.042-1.217-9.506l-1.38-4.351-2.192 4.028c-1.299 2.417-2.436 4.512-3.572 6.606-.244.484-.487.887-.731 1.37-.974 1.934-1.948 3.787-3.49 5.076-.487.402-.974.563-1.38.563-.73 0-1.137-.644-1.38-1.127-1.543-3.626-2.68-7.412-3.653-11.038 0-.161-.082-.322-.163-.483 0-.08-.08-.161-.162-.322 0 0 0-.081-.081-.081 0-.08-.081-.161-.163-.241v-.081c0-.081-.08-.161-.08-.242l-.163-.483c-.244-.564-.487-1.208-.73-1.772l-.082-.242-.081-.322c-.081-.323-.244-.645-.325-1.048-.812-2.658-.487-3.786-.325-4.108l.082-.242v-.161c.243-.564 1.623-1.531 4.059-2.82.487-.322.893-.483 1.217-.644 1.137-.806 2.436-1.37 3.734-2.014 1.38-.645 2.842-1.37 4.222-2.337 2.679-1.853 5.601-3.383 8.767-5.075.812-.403 1.38-.564 1.948-.564.406 0 .731.08 1.055.322l.082.081.162.08h.081l.487.403h.163c.893.564 2.191 1.45 3.734 2.497 3.572 2.337 7.955 5.318 10.147 6.607.081.08.162.08.243.161v.08zM88.908 138.312a15.646 15.646 0 01-.487-1.128c.08.081.08.161.08.322.082.081.082.242.163.323.162.161.162.322.244.483zM141.592 214.525l-.649-.081c-3.816-.483-6.576 1.612-9.011 3.545-.406-3.142-.731-5.962-.731-8.862.082-4.753-.243-9.426.082-14.179.162-1.933.568-3.786.73-5.72.081-1.047.325-1.853 1.137-2.094.811-.242 1.948.161 2.516.966 2.598 3.787 6.088 6.687 8.767 10.393.163.242 2.436 3.545 5.114 3.545 2.679-.081 5.277-.887 7.956-.725 1.705.08 3.491-.484 5.195-.887 4.14-.886 8.28-2.819 12.664-3.142 0 0 .731 7.09.649 9.91 0 1.45-.162 2.9-.243 4.35-.163 1.45-.244 2.9-.244 4.431 0 1.772-.081 3.384-.974 4.673l-.325.403v.08c-1.704-.322-2.76-1.45-3.653-3.061-1.298-2.256-1.704-4.754-2.76-7.009-.73-1.45-1.217-3.142-2.273-4.431-1.38-1.853-3.571-2.659-5.844-2.901-1.056-.08-2.192 0-3.247.081-2.03.161-2.76 1.853-3.248 3.464-1.055 3.223-2.922 5.801-5.195 8.137l-.812-.08-5.601-.806zM180.881 229.348c-.162 3.706-4.383 5.881-7.468 3.948-.244-.161-.406-.322-.649-.403-2.436 3.223-4.384 3.303-8.362 1.37-.974-.484-1.542-1.45-1.136-2.176.487-.805 1.623-1.047 2.597-.161 1.056 1.048 2.273 1.048 3.572.564.812-.322 1.218-1.047 1.218-2.014 0-.725-.162-1.369-.893-1.45-.974-.161-1.786-.644-1.542-1.531.243-1.128.324-2.417 1.623-3.061 1.461-.725 2.841-.645 4.059.322 1.218.967.731 2.498.406 3.464-.406 1.289-.162 1.853.812 2.498 1.948 1.289 3.003-.242 2.922-1.773-.081-.725.487-1.047 1.137-1.047.649 0 1.38.322 1.623.967.081.08.081.242.081.483zM208.402 236.521c0-.082-.082-.082-.082-.164l.082.164zM181.612 167.879c-.568 2.014-.324 4.109-.162 6.123.243 2.739-1.055 4.834-2.76 6.686-1.705 1.934-3.41 4.029-6.17 4.673-5.195 1.289-11.689 1.692-15.667.484-1.136-.323-1.786-.645-1.705-1.692 0-.725.325-1.37 1.299-1.209 3.004.322 6.089 1.128 9.011.725 3.734-.483 7.631-1.047 10.634-3.947 2.436-2.337 2.273-4.592 2.273-7.895-3.734 2.336-5.926.08-8.686-2.015-.487-.322-.893-.725-1.38-1.047-1.461-1.047-2.598-2.256-2.192-4.189.325-1.853 1.949-2.9 3.653-3.223 3.004-.564 6.008-1.369 9.092-1.208.325 0 .731-.081 1.056.242 1.461 1.45 2.273 5.397 1.704 7.492zM152.876 266.729c.162 3.142-3.166 6.929-7.063 7.734-.649.162-1.218.323-1.867.484-1.38.322-2.192-.161-2.435-1.611-1.056-5.157-1.949-10.393-3.734-15.388-.65-1.934-.812-3.948-1.056-6.042 3.572 1.047 6.9 2.175 10.31 3.061 2.029.564 3.003 2.175 3.734 3.867 1.136 2.498 1.948 5.156 2.111 7.895z",
  fill: "#AAA"
});

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M145.975 217.022c-.893 3.142-3.085 5.881-5.276 8.54l-.569.725c-.568.645-1.542 2.175-2.516 3.545-.812 1.208-3.572 3.947-3.572 3.947-.649-2.739-1.299-7.331-1.624-10.634-.081-1.128-.243-2.175-.324-2.9.162-.161.568-.403.73-.484 2.355-1.933 4.627-3.786 7.793-3.383l.65.08c1.542.161 3.247.403 4.708.564zM152.307 236.438c-2.029.564-2.841 1.692-4.627 2.094-2.029.484-3.896 1.853-5.682 2.901-2.679 1.53-5.683 2.578-7.874 4.914-.731.725-2.03.806-2.517-.081-.568-1.047.081-2.336 1.218-2.819 2.679-1.209 5.033-3.062 7.712-4.27 2.435-1.047 4.708-2.82 7.63-2.82 1.299 0 2.03-1.45 3.734-1.128 1.218.242 1.056 1.048.406 1.209zM151.982 232.329c-1.38 1.209-3.328 1.209-4.951 1.853-2.76 1.047-5.764 1.531-8.686 2.095-1.462.241-2.273 1.692-3.816 1.853-.974.161-1.948.483-2.435-.564-.325-.806.162-1.209.731-1.531.243-.08.487-.242.649-.322.244-.161.568-.322.812-.484.243-.161 1.136-.402 2.435-.805 3.734-1.048 10.634-2.82 12.501-3.142.975-.161 1.786-.242 2.598.242.406.08.406.563.162.805zM177.635 155.311c-1.461 1.289-2.192-.08-4.546-1.289-.568-.322-1.461.161-1.705 1.128-.081.483-1.055 1.289-1.136 1.37-.893.241-1.786.966-2.598-.081-.812-1.047-.406-2.417.244-3.223 2.273-2.9 5.601-3.786 9.091-1.611.812.403 1.299 3.062.65 3.706zM144.838 157.406c-.811.644-1.704.161-2.435-.403-.162-.161-.243-.322-.325-.483-2.354-2.095-3.003-2.015-5.033.483-.324.322-.568.806-1.055.564-.812-.484-1.136-1.45-.974-2.256.162-1.692 3.653-4.27 6.088-4.189 1.705-.081 3.085 1.692 4.465 3.222.974.967.244 2.256-.731 3.062zM150.603 241.03c-2.598 2.417-5.196 4.834-7.956 7.009-1.299.967-2.598 2.256-4.952 2.175-.487-.081-1.136-.564-.568-1.611.487-.967 1.38-1.45 2.354-2.014 1.705-1.048 3.653-1.531 5.033-3.303 1.299-1.612 3.328-2.578 5.196-3.626 1.542-.725 1.948.564.893 1.37zM155.392 228.059c-1.705.323-4.628-1.208-5.358-2.819-.406-.886-.163-1.531.406-1.934.568-.403 1.217.081 1.623.564.974 1.209 2.111 1.773 3.653.886.812-.483 1.299-.966 1.299-1.853 0-1.047.081-2.255 1.38-2.175 1.38.081 1.543 1.45 1.705 2.578.325 1.531-2.923 4.431-4.708 4.753z",
  fill: "#AAA"
});

function SvgUserProfile(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 290,
    height: 360,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDI5MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cmVjdCB3aWR0aD0iMjkwIiBoZWlnaHQ9IjM2MCIgZmlsbD0iI0VERURFRCIvPg0KPHBhdGggZD0iTTIwOC40MDEgMjM2LjQzOEMyMDguNDAxIDIzNi41MTggMjA4LjQwMSAyMzYuNTE4IDIwOC40ODIgMjM2LjU5OUwyMDguNDAxIDIzNi40MzhaTTk4LjU2NzIgOTYuNTgwNUM5OC42NDg0IDk2LjU4MDUgOTguNjQ4NCA5Ni41ODA1IDk4LjU2NzIgOTYuNTgwNVY5Ni41ODA1Wk04OC43NDQ4IDEzNy44MjlDODguNjYzNiAxMzcuNzQ4IDg4LjY2MzYgMTM3LjU4NyA4OC41ODI0IDEzNy41MDZDODguNTgyNCAxMzcuNDI2IDg4LjUwMTIgMTM3LjM0NSA4OC41MDEyIDEzNy4xODRDODguNjYzNiAxMzcuNTg3IDg4LjgyNTkgMTM3Ljk5IDg4Ljk4ODMgMTM4LjMxMkM4OC44MjU5IDEzOC4xNTEgODguODI1OSAxMzcuOTkgODguNzQ0OCAxMzcuODI5WiIgZmlsbD0iI0FBQUFBQSIvPg0KPHBhdGggZD0iTTI1MC4wNDUgMTc1LjA0OUMyNTAuMjA3IDE3My45MjEgMjQ4LjA5NyAxNjIuOTY1IDI0Ny42MSAxNjEuNjc2QzI0Ni4xNDggMTU4LjI5MiAyNDUuMjU1IDE1NC42NjcgMjQ0LjQ0NCAxNTEuMTIyQzI0My40NyAxNDYuODUyIDIzOS42NTQgMTQzLjIyNyAyMzcuOTQ5IDEzOS4zNkMyMzcuMzgxIDEzNy45OSAyMzYuNjUxIDEzNi41NCAyMzUuOTIgMTM1LjE3QzIzNS4xODkgMTMzLjgwMSAyMzQuNDU5IDEzMi41MTIgMjMzLjcyOCAxMzEuMjIzQzIzMS43OCAxMjcuNzU4IDIyOC45MzkgMTI0LjkzOSAyMjcuMDcyIDEyMS40NzVDMjI2LjAxNiAxMTkuNDYxIDIyMS4wNjUgMTEzLjc0MSAyMjAuOTAyIDExMy41NzlDMjIwLjkwMiAxMTMuNTc5IDIwNS4xNTQgMTAwLjc3IDIwMy42MTEgOTkuMDc4MUMyMDIuNjM3IDk3Ljk1MDIgMTk0LjQzOCA5NC4wODMyIDE5My4wNTggOTMuNTk5OEMxOTEuNTk3IDkzLjAzNTkgMTg3LjI5NSA5MC42MTkgMTg2LjIzOSA5MC40NTc5QzE4NS42NzEgOTAuMzc3MyAxNzguOTMzIDg3LjE1NDggMTc2LjY2IDg3LjE1NDhDMTc0LjMwNiA4Ny4wNzQyIDE3MS45NTIgODYuNzUyIDE2OS42NzkgODYuMDI2OUMxNjguNzA1IDg1LjcwNDYgMTYwLjQyNSA4NC4wMTI4IDE1OS4xMjYgODQuMDEyOEMxNTEuMzMzIDgzLjkzMjMgMTQ1LjczMiA4NC4yNTQ1IDE0My4yOTYgODQuMzM1MUMxNDAuMjEyIDg0LjQxNTYgMTE4Ljg2MiA4Ny4yMzUzIDExNy45NjkgODcuNzk5M0MxMTcuNDgyIDg4LjEyMTUgOTkuNzA0IDkxLjk4ODYgODguMzM5MiA5OS40ODA5Qzg2LjMwOTcgMTAwLjc3IDYzLjI1NTMgMTE3Ljg0OSA1MS43MjgxIDEzNS45NzZDNTEuMzIyMiAxMzYuODYyIDQzLjIwNDUgMTU0LjI2NCA0My4xMjMzIDE1NS4wNjlDNDIuNDczOSAxNTcuMTY0IDM4Ljk4MzIgMTY4LjkyNiAzOC45MDIgMTY5LjczMkMzOC43Mzk3IDE3MS43NDYgMzguNTc3MyAxNzMuNjc5IDM4LjMzMzggMTc1LjY5M0MzOC4zMzM4IDE3NS43NzQgMzguMTcxNCAxODUuMiAzOC4zMzM4IDE4Ny45MzlDMzguNTc3MyAxODkuMTQ3IDM4LjE3MTQgMTk2LjM5OCAzOC4wMDkxIDE5OC43MzRDMzcuOTI3OSAxOTkuNzgyIDM4LjQxNSAyMDMuNzI5IDM4LjQ5NjIgMjA0Ljg1N0MzOC42NTg1IDIwNS45ODUgMzkuMTQ1NiAyMTEuMzgzIDM5LjM4OTEgMjEyLjU5MUMzOS40NzAzIDIxMy4zMTYgNDIuMTQ5MSAyMjEuODU2IDQyLjQ3MzkgMjIzLjA2NEM0Mi41NTUgMjIzLjc5IDQ4LjA3NTEgMjM2LjI3NyA0OC4yMzc1IDIzNy4xNjNDNDguMjM3NSAyMzcuMTYzIDUyLjQ1ODcgMjQ1LjMgNTMuMDI2OSAyNDYuMjY3QzU0LjE2MzQgMjQ3Ljk1OCA1NS4zODExIDI1MC4zNzUgNTYuOTIzNSAyNTEuOTg3QzU3Ljg5NzYgMjUzLjAzNCA2My45ODU5IDI2MC40NDYgNjQuMzkxOCAyNjAuMjA0QzY0LjYzNTMgMjYwLjA0MyA2NC42MzUzIDI1OS4yMzcgNjQuNTU0MiAyNTguMzUxQzY0LjU1NDIgMjU4LjEwOSA2NC40NzMgMjU3Ljg2OCA2NC40NzMgMjU3LjYyNkM2NC40NzMgMjU3LjM4NCA2NC4zOTE4IDI1Ny4xNDMgNjQuMzkxOCAyNTYuOTAxQzY0LjM5MTggMjU2Ljc0IDY0LjMxMDYgMjU2LjY1OSA2NC4zMTA2IDI1Ni40OThDNjQuMjI5NCAyNTYuMDk1IDY0LjIyOTQgMjU1Ljc3MyA2NC4xNDgzIDI1NS4zN0M2NC4wNjcxIDI1NC44MDYgNjMuOTg1OSAyNTQuMjQyIDYzLjk4NTkgMjUzLjg0QzYzLjk4NTkgMjUzLjg0IDYzLjQxNzcgMjQ5LjgxMSA2My40MTc3IDI0OC44NDVDNjMuMzM2NSAyNDcuNjM2IDYzLjE3NDEgMjQ2LjUwOCA2My41OCAyNDUuM0M2My41OCAyNDUuMTM5IDY1LjYwOTUgMjI5LjAyNiA2Ni40MjEyIDIyNi40NDhDNjYuMjU4OSAyMjUuODA0IDY3LjYzODkgMjIyLjMzOSA2OC45Mzc3IDIyMS40NTNDNzAuMzk4OSAyMjAuNDA2IDcxLjA0ODQgMjIwLjQ4NiA3MS40NTQzIDIyMi4xNzhDNzEuNjE2NiAyMjIuODIzIDcxLjk0MTMgMjIzLjIyNiA3Mi4yNjYgMjIzLjc5QzczLjI0MDIgMjI1LjMyIDc1LjgzNzggMjMxLjM2MiA3Ni40MDYxIDIzMi41NzFDNzguMTkyIDIzNi4xMTYgODAuMzgzOCAyMzkuNDE5IDgyLjAwNzMgMjQzLjIwNUM4My40Njg1IDI0Ni44MzEgODUuNDk4IDI1MC41MzYgODguNzQ1MSAyNTMuMTk1Qzg5LjgwMDQgMjU0LjAwMSA5MC4wNDM5IDI1My44NCA5MC40NDk4IDI1Mi43MTJDOTAuOTM2OSAyNTEuNTg0IDkxLjc0ODcgMjQ1LjQ2MSA5MS45OTIyIDI0My42MDhDOTIuMjM1NyAyNDEuNzU1IDkyLjE1NDUgMjM5LjU4IDkyLjU2MDQgMjM3LjcyN0M5My4zNzIyIDIzMy45NCA5My44NTkzIDIzMC4xNTQgOTQuMjY1MiAyMjYuMjg3Qzk0LjgzMzQgMjIwLjAwMyA5Ni4wNTExIDIxMy44IDk3LjE4NzUgMjA3LjU5NkM5Ny45OTkzIDIwMy4zMjcgOTguODExMSAxOTguOTc2IDk5LjcwNDEgMTk0LjcwNkMxMDAuMzUzIDE5MS40MDMgMTAwLjg0MSAxODcuOTM5IDEwMS40OSAxODQuNjM2QzEwMi4wNTggMTgxLjQ5NCAxMDUuMjI0IDE3MS4yNjIgMTA1LjU0OSAxNzAuNjE4QzEwNS43MTEgMTcwLjEzNSAxMDYuMTE3IDE2Ni41OSAxMDYuNDQyIDE2NS4zMDFDMTA2Ljg0OCAxNjQuMDkyIDEwNy40OTcgMTU4LjYxNCAxMDcuOTg0IDE1NC4xMDNDMTA3Ljk4NCAxNTMuODYxIDEwNy45ODQgMTUzLjcgMTA4LjA2NSAxNTMuNTM5QzEwOC4wNjUgMTUzLjM3OCAxMDguMTQ3IDE1My4yMTYgMTA4LjE0NyAxNTMuMDU1QzEwOC4yMjggMTUyLjczMyAxMDguMjI4IDE1Mi40MTEgMTA4LjIyOCAxNTIuMDg5QzEwOC4yMjggMTUxLjkyNyAxMDguMzA5IDE1MS42ODYgMTA4LjMwOSAxNTEuNTI1QzEwOC4zMDkgMTUxLjQ0NCAxMDguMzA5IDE1MS4yODMgMTA4LjMwOSAxNTEuMjAyQzEwOC4zMDkgMTUxLjEyMiAxMDguMzA5IDE1MS4wNDEgMTA4LjMwOSAxNTEuMDQxQzEwOC4zMDkgMTUwLjg4IDEwOC4zMDkgMTUwLjcxOSAxMDguMzkgMTUwLjU1OEMxMDguNDcxIDE1MC4wNzQgMTA4LjQ3MSAxNDkuNjcyIDEwOC40NzEgMTQ5LjI2OUMxMDguNDcxIDE0OS4xODggMTA4LjQ3MSAxNDkuMTg4IDEwOC40NzEgMTQ5LjEwOEMxMDguNDcxIDE0OS4wMjcgMTA4LjQ3MSAxNDguOTQ3IDEwOC40NzEgMTQ4Ljg2NkMxMDguNDcxIDE0OC43MDUgMTA4LjQ3MSAxNDguNjI0IDEwOC40NzEgMTQ4LjU0NEMxMDguNDcxIDE0OC4zODMgMTA4LjQ3MSAxNDguMjIxIDEwOC40NzEgMTQ4LjA2QzEwOC40NzEgMTQ3Ljk4IDEwOC40NzEgMTQ3Ljg5OSAxMDguNDcxIDE0Ny44MTlDMTA4LjQ3MSAxNDQuOTE4IDEwOC4zMDkgMTQyLjAxOCAxMDcuMzM1IDEzOC44NzZDMTA2LjAzNiAxNDEuMjkzIDEwNC44OTkgMTQzLjM4OCAxMDMuNzYzIDE0NS40MDJDMTAyLjQ2NCAxNDcuODk5IDEwMS40MDkgMTUwLjU1OCA5OS4wNTQ2IDE1Mi40MTFDOTguMTYxNyAxNTMuMTM2IDk3LjI2ODcgMTUzLjQ1OCA5Ni40NTY5IDE1My40NThDOTUuMTU4MSAxNTMuNDU4IDk0LjAyMTYgMTUyLjY1MiA5My4yOTEgMTUxLjEyMkM5MS43NDg2IDE0Ny40OTYgOTAuNjEyMiAxNDMuNjI5IDg5LjU1NjkgMTM5Ljg0M0M4OS41NTY5IDEzOS44NDMgODkuNDc1NyAxMzkuNzYyIDg5LjQ3NTcgMTM5LjYwMUM4OS40NzU3IDEzOS41MjEgODkuMzk0NSAxMzkuNDQgODkuMzk0NSAxMzkuMzZDODkuMzk0NSAxMzkuMjc5IDg5LjMxMzMgMTM5LjI3OSA4OS4zMTMzIDEzOS4xOThDODkuMjMyMSAxMzkuMTE4IDg5LjIzMjEgMTM4Ljk1NyA4OS4xNTEgMTM4Ljg3NkM4OS4wNjk4IDEzOC43OTYgODkuMDY5OCAxMzguNzE1IDg4Ljk4ODYgMTM4LjYzNEM4OC45MDc0IDEzOC40NzMgODguODI2MyAxMzguMzEyIDg4LjgyNjMgMTM4LjIzMkM4OC42NjM5IDEzNy45MDkgODguNTAxNSAxMzcuNTA3IDg4LjMzOTIgMTM3LjEwNEM4OC4yNTggMTM3LjAyMyA4OC4yNTggMTM2Ljk0MyA4OC4yNTggMTM2Ljc4MkM4OC4yNTggMTM2LjcwMSA4OC4xNzY4IDEzNi43MDEgODguMTc2OCAxMzYuNjJDODguMTc2OCAxMzYuNjIgODguMTc2OCAxMzYuNjIgODguMTc2OCAxMzYuNTRDODguMTc2OCAxMzYuNDU5IDg4LjA5NTcgMTM2LjI5OCA4OC4wMTQ1IDEzNi4yMThDODcuOTMzMyAxMzYuMDU2IDg3Ljg1MjEgMTM1LjgxNSA4Ny43NzA5IDEzNS42NTRDODcuNjA4NiAxMzUuMjUxIDg3LjUyNzQgMTM0Ljg0OCA4Ny4zNjUxIDEzNC40NDVDODYuNzk2OCAxMzIuNTEyIDg2LjQ3MjEgMTMwLjQxNyA4Ny4xMjE1IDEyOS4wNDhDODcuNDQ2MiAxMjcuMTE0IDkyLjIzNTcgMTI0LjkzOSA5My4yMDk4IDEyNC4yOTRDOTUuNzI2NCAxMjIuNTIyIDk4LjcyOTkgMTIxLjYzNiAxMDEuMjQ2IDExOS45NDRDMTA0LjA4OCAxMTguMDEgMTA3LjE3MiAxMTYuMzk5IDExMC4yNTcgMTE0Ljc4OEMxMTEuMjMxIDExNC4zMDQgMTEyLjIwNSAxMTMuOTgyIDExMy4wOTggMTEzLjk4MkMxMTMuODI5IDExMy45ODIgMTE0LjQ3OCAxMTQuMTQzIDExNS4yMDkgMTE0LjYyN0MxMTUuMjkgMTE0LjcwNyAxMTUuMzcxIDExNC43MDcgMTE1LjQ1MyAxMTQuNzg4QzExNS41MzQgMTE0Ljg2OCAxMTUuNjE1IDExNC44NjggMTE1LjY5NiAxMTQuOTQ5QzExNS43NzcgMTE1LjAzIDExNS44NTggMTE1LjAzIDExNS45NCAxMTUuMTFDMTE4LjcgMTE2Ljk2MyAxMjYuODk5IDEyMi40NDEgMTI5Ljk4MyAxMjQuMjk0QzEzMC4xNDYgMTI0LjM3NSAxMzAuMzA4IDEyNC40NTUgMTMwLjQ3IDEyNC41MzZDMTMwLjU1MiAxMjQuNTM2IDEzMC41NTIgMTI0LjYxNyAxMzAuNjMzIDEyNC42MTdDMTMwLjcxNCAxMjQuNjk3IDEzMC43OTUgMTI0LjY5NyAxMzAuODc2IDEyNC43NzhDMTMxLjAzOSAxMjQuODU4IDEzMS4xMiAxMjQuODU4IDEzMS4yMDEgMTI0LjkzOUMxMzEuMjAxIDEyNC45MzkgMTMxLjIwMSAxMjQuOTM5IDEzMS4yODIgMTI0LjkzOUMxMzEuNTI2IDEyNC42MTcgMTQzLjcwMiAxMjQuMzc1IDE0OS4zODUgMTI0LjIxNEMxNTIuNzk0IDEyNC4xMzMgMTU2LjEyMiAxMjQuNDU1IDE1OS41MzIgMTIzLjgxMUMxNjMuNzUzIDEyMy42NSAxNjcuNDg3IDEyMS42MzYgMTcxLjMwMyAxMjAuMTg2QzE3NS44NDkgMTE4LjQxMyAxODAuMzEzIDExNi42NDEgMTg0Ljg1OSAxMTQuODY4QzE4NS41OSAxMTQuNTQ2IDE4Ni4zMjEgMTE0LjQ2NiAxODcuMDUxIDExNC40NjZDMTg4LjEwNiAxMTQuNDY2IDE4OS4wODEgMTE0LjcwNyAxOTAuMDU1IDExNS4xMUMxOTIuOTc3IDExNi4zMTkgMTk2LjA2MiAxMTcuMDQ0IDE5OS4wNjUgMTE4LjE3MkMyMDEuOTg4IDExOS4yMTkgMjA1LjA3MyAxMTkuNzAyIDIwOC4yMzggMTE5LjcwMkMyMDguNDAxIDExOS43MDIgMjA4LjY0NCAxMTkuNzAyIDIwOC44MDcgMTE5LjcwMkgyMDguODg4QzIxMC4wMjQgMTE5LjcwMiAyMTAuOTE3IDEyMC4xODYgMjExLjU2NyAxMjAuOTExQzIxMS42NDggMTIwLjk5MSAyMTEuNzI5IDEyMS4xNTIgMjExLjgxIDEyMS4yMzNDMjExLjg5MSAxMjEuMzEzIDIxMS45NzMgMTIxLjM5NCAyMTEuOTczIDEyMS40NzVDMjEyLjA1NCAxMjEuNTU1IDIxMi4xMzUgMTIxLjcxNiAyMTIuMjE2IDEyMS43OTdDMjEyLjI5NyAxMjEuOTU4IDIxMi4zNzkgMTIyLjIgMjEyLjQ2IDEyMi4zNjFDMjEyLjU0MSAxMjIuNDQxIDIxMi41NDEgMTIyLjYwMiAyMTIuNjIyIDEyMi42ODNWMTIyLjc2NEMyMTIuNzAzIDEyMi45MjUgMjEyLjcwMyAxMjMuMDA1IDIxMi43MDMgMTIzLjE2NkMyMTIuNzg0IDEyMy4zMjggMjEyLjc4NCAxMjMuNTY5IDIxMi44NjYgMTIzLjczQzIxMy4zNTMgMTI2LjMwOCAyMTEuNjQ4IDEyNy42NzggMjEwLjU5MyAxMjkuMzdDMjA5LjYxOSAxMzAuOSAyMDUuNjQxIDEzNi45NDMgMjA1LjM5NyAxMzcuNDI2QzIwNS4zMTYgMTM3LjU4NyAyMDUuMzE2IDEzNy43NDggMjA1LjIzNSAxMzcuODI5QzIwNS4xNTQgMTM3Ljk5IDIwNS4wNzMgMTM4LjE1MSAyMDUuMDczIDEzOC4yMzJDMjAzLjg1NSAxNDEuMDUxIDIwMi4zMTMgMTQzLjU0OSAyMDAuNTI3IDE0Ni4wNDZDMTk4LjY2IDE0OC45NDcgMTk3LjExNyAxNTEuMzYzIDE5Ni45NTUgMTUxLjc2NkMxOTYuNTQ5IDE1My4yOTcgMTk1LjE2OSAxNTMuODYxIDE5My44NyAxNTMuOTQxSDE5My43ODlDMTkzLjcwOCAxNTMuOTQxIDE5My42MjcgMTUzLjk0MSAxOTMuNTQ1IDE1My45NDFDMTkzLjQ2NCAxNTMuOTQxIDE5My40NjQgMTUzLjk0MSAxOTMuMzgzIDE1My45NDFDMTkzLjM4MyAxNTMuOTQxIDE5My4zODMgMTUzLjk0MSAxOTMuMzAyIDE1My45NDFDMTkzLjIyMSAxNTMuOTQxIDE5My4yMjEgMTUzLjk0MSAxOTMuMTM5IDE1My44NjFDMTkzLjA1OCAxNTMuODYxIDE5Mi45NzcgMTUzLjc4IDE5Mi45NzcgMTUzLjc4QzE5Mi44OTYgMTUzLjc4IDE5Mi44MTUgMTUzLjcgMTkyLjczNCAxNTMuNjE5QzE5Mi42NTIgMTUzLjUzOSAxOTIuNTcxIDE1My40NTggMTkyLjQ5IDE1My40NThDMTkyLjQwOSAxNTMuMzc4IDE5Mi40MDkgMTUzLjM3OCAxOTIuMzI4IDE1My4yOTdDMTkyLjI0NiAxNTMuMjE2IDE5Mi4xNjUgMTUzLjA1NSAxOTIuMDg0IDE1Mi45NzVDMTkyLjAwMyAxNTIuODk0IDE5Mi4wMDMgMTUyLjgxNCAxOTIuMDAzIDE1Mi44MTRDMTkxLjkyMiAxNTIuNjUyIDE5MS43NTkgMTUyLjQxMSAxOTEuNjc4IDE1Mi4yNUMxOTEuNTk3IDE1Mi4wODkgMTkxLjUxNiAxNTEuOTI3IDE5MS41MTYgMTUxLjg0N0MxOTAuMTM2IDE0OC43ODUgMTg5LjQwNSAxNDUuNTYzIDE4Ny43MDEgMTQyLjY2M0MxODYuOTcgMTQxLjQ1NCAxODYuODg5IDEzOS42ODIgMTg2LjQwMiAxMzguMjMyQzE4Ni4xNTggMTM3LjU4NyAxODUuOTE1IDEzNy4zNDUgMTg1LjY3MSAxMzcuMzQ1QzE4NS40MjggMTM3LjM0NSAxODUuMTAzIDEzNy41ODcgMTg0LjY5NyAxMzcuOTlDMTgzLjU2IDEzOS4xMTggMTgzLjE1NSAxNDAuMzI2IDE4My41NiAxNDEuOTM4QzE4NC42MTYgMTQ2LjEyNyAxODUuOTk2IDE1Ni45MjIgMTg1LjkxNSAxNTguMDVDMTg2LjMyMSAxNTguOTM2IDE5MC4yOTggMTg2LjE2NyAxOTAuMzc5IDE5MS4xNjJWMTkxLjI0MkMxOTAuODY2IDE5Mi42MTIgMTkxLjQzNSAxOTMuOTgxIDE5Mi4wMDMgMTk1LjQzMUMxOTIuMDAzIDE5NS41MTIgMTkyLjAwMyAxOTUuNTEyIDE5Mi4wODQgMTk1LjU5MkMxOTMuMTM5IDE5OC4wOSAxOTQuMjc2IDIwMC41ODcgMTk1LjA4OCAyMDMuMDA0QzE5NS4yNSAyMDMuMzI3IDE5Ny44NDggMjA5Ljg1MiAyMDAuOTMyIDIxNy42NjdDMTk5LjU1MiAyMTguMDcgMTk3Ljc2NyAyMTguNzE0IDE5NS45ODEgMjE5LjM1OUMxOTUuNTc1IDIxOS40MzkgMTk1LjI1IDIxOS42IDE5NC45MjUgMjE5Ljc2MUMxOTQuNTE5IDIxOS45MjMgMTk0LjE5NSAyMjAuMDAzIDE5My44NyAyMjAuMTY0VjIyMC4wODRDMTkzLjk1MSAyMTkuNjgxIDE5NC4wMzIgMjE5LjI3OCAxOTQuMTE0IDIxOC44NzVDMTk0LjExNCAyMTguMzkyIDE5NC4zNTcgMjEzLjk2MSAxOTQuMTE0IDIxMS45NDdDMTkzLjc4OSAyMDkuMzY5IDE5Mi44OTYgMjAzLjY0OSAxOTIuNzM0IDIwMy4xNjVDMTkxLjUxNiAxOTkuMzc5IDE4OC41OTQgMTkyLjA0OCAxODguMzUgMTkxLjU2NEMxODcuNDU3IDE4OS45NTMgMTg2LjMyMSAxODguNTg0IDE4NS4yNjUgMTg3LjEzM0MxODQuMzcyIDE4Ni4wMDYgMTgzLjU2IDE4NC45NTggMTgyLjkxMSAxODMuODNDMTgyLjQyNCAxODMuMTA1IDE4MS42OTMgMTgyLjM4IDE4MC45NjMgMTgxLjk3N0MxODAuNjM4IDE4Mi42MjIgMTgwLjIzMiAxODMuNTA4IDE4MC4xNTEgMTgzLjk5MUMxNzkuNDIgMTg3LjM3NSAxNzguNjA5IDE5MC43NTkgMTc3Ljg3OCAxOTQuMDYyTDE3Ny4yMjkgMTk3LjA0M0MxNzcuMzkxIDE5Ny42MDcgMTc3LjU1MyAxOTguNjU0IDE3Ny43MTYgMjAwLjkxQzE3Ny44NzggMjAyLjc2MyAxNzguMDQgMjA1LjQyMSAxNzguMDQgMjA3LjExM0MxNzguMDQgMjA4LjY0NCAxNzcuODc4IDIxMC4wOTQgMTc3Ljc5NyAyMTEuNjI1QzE3Ny43MTYgMjEyLjk5NCAxNzcuNTUzIDIxNC40NDQgMTc3LjU1MyAyMTUuODk0QzE3Ny41NTMgMjE3LjY2NyAxNzcuNDcyIDIxOS41MiAxNzYuNDk4IDIyMS4yOTJDMTc3Ljg3OCAyMjUuMDc5IDE4MC44ODIgMjI2Ljg1MSAxODMuMTU1IDIyNy43MzdMMTgzLjY0MiAyMjcuODk4QzE4NS40MjggMjI4LjU0MyAxODcuMjEzIDIyOS4yNjggMTg4Ljk5OSAyMjguMzAxQzE4OS4xNjIgMjI4LjIyIDE4OS40ODYgMjI3Ljk3OSAxODkuODExIDIyNy42NTdDMTkwLjEzNiAyMjcuNjU3IDE5MC42MjMgMjI3LjQ5NSAxOTEuMDI5IDIyNy4zMzRDMTkxLjI3MiAyMjcuMTczIDE5MS41OTcgMjI3LjAxMiAxOTIuMDg0IDIyNi44NTFDMTkyLjQ5IDIyNi42OSAxOTIuOTc3IDIyNi42MDkgMTkzLjQ2NCAyMjYuNDQ4QzE5NC4yNzYgMjI2LjI4NyAxOTUuMDA3IDIyNi4yMDYgMTk1LjQxMiAyMjYuMjg3QzE5Ni43MTEgMjI2LjQ0OCAxOTguMDkxIDIyNi42OSAxOTkuMzA5IDIyNi4yODdDMjAwLjkzMiAyMjUuNzIzIDIwMi42MzcgMjI1LjcyMyAyMDQuMjYxIDIyNS40ODFDMjA0LjU4NSAyMjYuMzY4IDIwNC45OTEgMjI3LjI1NCAyMDUuMzE2IDIyOC4xNEMyMDEuMDk1IDIyOC4zMDEgMTk1LjgxOCAyMjguNjIzIDE5My4wNTggMjI5LjQyOUMxOTIuNjUyIDIyOS41OSAxOTEuODQxIDIyOS41OSAxOTEuNDM1IDIyOS42NzFDMTkwLjQ2MSAyMjkuODMyIDE4OS45NzQgMjMwLjcxOCAxODkuOTc0IDIzMS40NDNDMTkwLjA1NSAyMzIuNDkgMTkxLjAyOSAyMzEuODQ2IDE5MS41MTYgMjMxLjc2NUMxOTIuODE1IDIzMS42MDQgMTk0LjExNCAyMzIuMTY4IDE5NS4yNSAyMzEuNzY1QzE5OC4zMzUgMjMwLjU1NyAyMDEuNDIgMjMxLjYwNCAyMDQuNTA0IDIzMS4yODJDMjA0LjgyOSAyMzEuMjgyIDIwNS42NDEgMjMxLjIwMSAyMDYuNTM0IDIzMS4yMDFDMjA3LjI2NCAyMzMuMDU0IDIwNy45OTUgMjM0LjgyNyAyMDguNTYzIDIzNi40MzhMMjA4LjY0NCAyMzYuNTk5QzIwOC42NDQgMjM2LjUxOCAyMDguNTYzIDIzNi41MTggMjA4LjU2MyAyMzYuNDM4QzIwNC40MjMgMjM0LjgyNyAyMDAuMjAyIDIzOC42OTQgMjAwLjYwOCAyNDMuNTI3QzIwMC44NTEgMjQ2LjQyOCAyMDAuOTMyIDI0OS4yNDcgMjAxLjMzOCAyNTIuMTQ4QzIwMS44MjUgMjU1LjYxMiAyMDIuODgxIDI1OC44MzQgMjA2LjYxNSAyNjAuMzY1QzIwNy4xODMgMjYwLjYwNyAyMDcuNjcgMjYwLjc2OCAyMDguMzIgMjYwLjkyOUMyMTMuNDM0IDI2Mi4xMzcgMjE2LjI3NSAyNTkuNjQgMjE2LjM1NiAyNTkuNTU5QzIxNy43MzYgMjYzLjQyNiAyMTguODczIDI2Ni40MDcgMjE5LjExNiAyNjYuMjQ2QzIyMS43OTUgMjY0Ljg3NyAyMzUuMzUyIDI0Ny41NTYgMjM2LjMyNiAyNDYuMTA1QzIzOC4zNTUgMjQyLjk2NCAyNDUuOTg2IDIyOC4wNTkgMjQ2Ljk2IDIyNS4wNzlDMjQ3LjIwNCAyMjQuMjczIDI0OC4yNTkgMjIwLjg4OSAyNDguMTc4IDIxOS42QzI0OC4wOTcgMjE4LjcxNCAyNDkuMzE0IDIxMi41OTEgMjQ5LjYzOSAyMTAuMzM2QzI0OS44MDEgMjA5LjA0NyAyNTEuNTA2IDE5MS45NjcgMjUxLjUwNiAxOTEuODg3QzI1MS41ODcgMTkwLjkyIDI0OS45NjQgMTc1Ljc3NCAyNTAuMDQ1IDE3NS4wNDlaTTk4LjY0ODcgOTYuNTgwNkM5OC41Njc2IDk2LjU4MDYgOTguNTY3NiA5Ni41ODA2IDk4LjY0ODcgOTYuNTgwNkM5OC41Njc2IDk2LjU4MDYgOTguNTY3NiA5Ni41ODA2IDk4LjY0ODcgOTYuNTgwNkM5OC41Njc2IDk2LjU4MDYgOTguNTY3NiA5Ni41ODA2IDk4LjY0ODcgOTYuNTgwNkM5OC41Njc2IDk2LjU4MDYgOTguNTY3NiA5Ni41ODA2IDk4LjY0ODcgOTYuNTgwNkM5OC41Njc2IDk2LjU4MDYgOTguNTY3NiA5Ni41ODA2IDk4LjY0ODcgOTYuNTgwNlpNMTg0LjEyOSAyMjEuODU2QzE4MS4yODggMjIyLjA5OCAxNzkuODI2IDIyMC4wODQgMTc4LjM2NSAyMTguMjMxQzE3OC4xMjIgMjE3LjkwOCAxNzguMzY1IDIxNy4zNDQgMTc4LjUyNyAyMTcuMDIyQzE3OS4yNTggMjE1LjczMyAxODEuNDUgMjE3Ljc0NyAxODIuMTggMjE4LjM5MkMxODMuMzE3IDIxOS40MzkgMTg0LjA0OCAyMTkuMTk3IDE4NC4zNzIgMjE3LjgyOEMxODQuNzc4IDIxNi4yOTcgMTg1LjY3MSAyMTUuODE0IDE4Ny4xMzIgMjE2LjA1NUMxODcuNjE5IDIxNi4xMzYgMTg3Ljk0NCAyMTYuMzc4IDE4Ny44NjMgMjE2Ljg2MUMxODcuNzAxIDIxOC42MzMgMTg2LjcyNiAyMjEuNjE0IDE4NC4xMjkgMjIxLjg1NlpNMTk0LjQzOCAyMjQuMTkyQzE5NC4wMzIgMjI0LjI3MyAxOTMuNjI3IDIyNC4zNTMgMTkzLjIyMSAyMjQuNDM0QzE5Mi43MzQgMjI0LjUxNSAxOTIuMzI4IDIyNC41OTUgMTkyLjAwMyAyMjQuNzU2QzE5Mi40OSAyMjMuODcgMTkyLjg5NiAyMjIuOTAzIDE5My4zMDIgMjIyLjE3OEMxOTMuNzA4IDIyMi4wOTggMTk0LjExNCAyMjIuMDE3IDE5NC40MzggMjIxLjkzN0MxOTQuODQ0IDIyMS44NTYgMTk1LjE2OSAyMjEuNzc1IDE5NS41NzUgMjIxLjY5NUMxOTUuNzM3IDIyMS42MTQgMTk1Ljg5OSAyMjEuNjE0IDE5Ni4wNjIgMjIxLjYxNEMxOTcuMjggMjIxLjEzMSAxOTkuNjM0IDIyMC40ODYgMjAxLjkwNyAyMTkuOTIzQzIwMi4yMzEgMjIwLjgwOSAyMDIuNjM3IDIyMS42OTUgMjAyLjk2MiAyMjIuNTgxQzIwMC4wNCAyMjMuMDY0IDE5Ni44NzQgMjIzLjcwOSAxOTQuNDM4IDIyNC4xOTJaIiBmaWxsPSIjQUFBQUFBIi8+DQo8cGF0aCBkPSJNMjEwLjc1NSAxMjQuMTMzQzIxMC45MTcgMTI1LjM0MiAyMTAuNTExIDEyNS45ODYgMjA5LjUzNyAxMjcuMjc1QzIwOS4yOTQgMTI3LjU5NyAyMDguOTY5IDEyOCAyMDguNzI1IDEyOC40MDNDMjA4LjU2MyAxMjguNjQ1IDIwOC4yMzggMTI5LjEyOCAyMDcuOTE0IDEyOS42MTFDMjA0LjAxNyAxMzUuNTczIDIwMy41MyAxMzYuMzc5IDIwMy4zNjggMTM2Ljc4MUMyMDMuMzY4IDEzNi44NjIgMjAzLjI4NyAxMzYuOTQzIDIwMy4yODcgMTM3LjAyM0wyMDMuMjA1IDEzNy4xODRMMjAzLjEyNCAxMzcuMjY1QzIwMy4xMjQgMTM3LjM0NSAyMDMuMDQzIDEzNy40MjYgMjAyLjk2MiAxMzcuNTA3QzIwMi4xNSAxMzkuMTk4IDIwMC42ODkgMTQxLjY5NiAxOTguNTc4IDE0NS4wNzlDMTk4LjA5MSAxNDUuODA1IDE5Ny42ODUgMTQ2LjUzIDE5Ny4xOTggMTQ3LjE3NEMxOTUuMjUgMTUwLjE1NSAxOTQuOTI1IDE1MC43OTkgMTk0Ljc2MyAxNTEuMzYzQzE5NC42ODIgMTUxLjc2NiAxOTQuMjc2IDE1Mi4wMDggMTkzLjcwOCAxNTIuMDg4QzE5My42MjYgMTUxLjkyNyAxOTMuMzgzIDE1MS42MDUgMTkzLjEzOSAxNTEuMDQxQzE5Mi42NTIgMTQ5Ljk5NCAxOTIuMjQ2IDE0OC44NjYgMTkxLjg0MSAxNDcuNjU3QzE5MS4xMSAxNDUuNjQzIDE5MC4zNzkgMTQzLjYyOSAxODkuMjQzIDE0MS42MTVDMTg4Ljk5OSAxNDEuMTMyIDE4OC43NTYgMTQwLjMyNiAxODguNTkzIDEzOS42MDFDMTg4LjQzMSAxMzguOTU3IDE4OC4yNjkgMTM4LjIzMiAxODguMDI1IDEzNy41MDdDMTg3LjM3NiAxMzUuNjU0IDE4Ni4xNTggMTM1LjMzMSAxODUuNDI4IDEzNS4zMzFDMTg0LjM3MiAxMzUuMzMxIDE4My41NiAxMzUuOTc2IDE4My4wNzMgMTM2LjU0QzE4MS40NSAxMzguMjMyIDE4MC44ODIgMTQwLjA4NSAxODEuNDUgMTQyLjI2QzE4Mi4xOCAxNDUuMDc5IDE4Mi45OTIgMTUxLjEyMiAxODMuNDc5IDE1NC44MjhDMTgzLjE1NSAxNTQuNTA1IDE4Mi45MTEgMTU0LjEwMiAxODIuNTg2IDE1My42MTlDMTgwLjcxOSAxNTAuODggMTc3Ljk1OSAxNDcuNDk2IDE3My40MTMgMTQ1LjQ4MkMxNzAuMzI4IDE0NC4xMTMgMTY3LjU2OCAxNDIuMDE4IDE2NS4zNzcgMTM5LjM1OUMxNjIuNTM1IDEzNS44OTUgMTYxLjcyNCAxMzEuNTQ1IDE2MS4zMTggMTI3LjY3OEMxNjEuMjM3IDEyNy4xOTQgMTYxLjE1NSAxMjYuNzExIDE2MS4wNzQgMTI2LjIyOEMxNjAuOTkzIDEyNS45MDUgMTYwLjkxMiAxMjUuNjY0IDE2MC45MTIgMTI1LjQyMkMxNjMuOTk3IDEyNS4wMTkgMTY2LjY3NSAxMjMuODkxIDE2OS4zNTQgMTIyLjc2NEMxNzAuMTY2IDEyMi40NDEgMTcxLjA1OSAxMjIuMDM4IDE3MS44NzEgMTIxLjcxNkMxNzUuNjA1IDEyMC4yNjYgMTgwLjQ3NiAxMTguNDEzIDE4NS40MjggMTE2LjM5OUMxODUuOTE1IDExNi4yMzggMTg2LjQwMiAxMTYuMDc3IDE4Ni44ODkgMTE2LjA3N0MxODcuNTM4IDExNi4wNzcgMTg4LjI2OSAxMTYuMjM4IDE4OS4wOCAxMTYuNTZDMTkwLjg2NiAxMTcuMjg1IDE5Mi42NTIgMTE3Ljg0OSAxOTQuMzU3IDExOC40MTNDMTk1LjY1NiAxMTguODE2IDE5Ni45NTUgMTE5LjIxOSAxOTguMTcyIDExOS43MDJDMjAxLjE3NiAxMjAuODMgMjA0LjUwNCAxMjEuMzk0IDIwOC4wNzYgMTIxLjM5NEMyMDguMzIgMTIxLjM5NCAyMDguNDgyIDEyMS4zOTQgMjA4LjcyNSAxMjEuMzk0QzIxMC4xODcgMTIxLjcxNiAyMTAuNjc0IDEyMy40MDggMjEwLjc1NSAxMjQuMTMzWiIgZmlsbD0iI0FBQUFBQSIvPg0KPHBhdGggZD0iTTEyOS40OTYgMTI2LjMwOEMxMjkuNDE1IDEyNi40NjkgMTI5LjMzNCAxMjYuNjMxIDEyOS4yNTMgMTI2Ljc5MkMxMjguOTI4IDEyNy4xOTQgMTI4LjY4NSAxMjcuNTk3IDEyOC40NDEgMTI4QzEyNy4wNjEgMTMwLjAxNCAxMjUuNzYyIDEzMS45NDggMTIzLjk3NiAxMzMuNTU5QzEyMi41OTYgMTM0Ljg0OCAxMjEuNDYgMTM2LjI5OCAxMjAuNDA1IDEzNy43NDhDMTE5Ljc1NSAxMzguNjM0IDExOS4xMDYgMTM5LjUyMSAxMTguMzc1IDE0MC4yNDZDMTE3LjU2MyAxNDEuMTMyIDExNi44MzMgMTQyLjA5OSAxMTYuMTgzIDE0Mi45ODVDMTE1LjIwOSAxNDQuMTkzIDExNC4zMTYgMTQ1LjMyMSAxMTMuMzQyIDE0Ni4zNjhDMTEyLjYxMiAxNDcuMTc0IDExMS42MzcgMTQ4LjE0MSAxMTAuNjYzIDE0OS4xMDhDMTEwLjY2MyAxNDguODY2IDExMC42NjMgMTQ4LjcwNSAxMTAuNjYzIDE0OC41NDRDMTEwLjY2MyAxNDguMzgzIDExMC42NjMgMTQ4LjIyMSAxMTAuNjYzIDE0OC4wNkMxMTAuNjYzIDE0Ny45OCAxMTAuNjYzIDE0Ny44OTkgMTEwLjY2MyAxNDcuNzM4QzExMC42NjMgMTQ0LjgzOCAxMTAuNTAxIDE0MS42OTYgMTA5LjQ0NiAxMzguMjMyTDEwOC4wNjYgMTMzLjg4MUwxMDUuODc0IDEzNy45MDlDMTA0LjU3NSAxNDAuMzI2IDEwMy40MzggMTQyLjQyMSAxMDIuMzAyIDE0NC41MTVDMTAyLjA1OCAxNDQuOTk5IDEwMS44MTUgMTQ1LjQwMiAxMDEuNTcxIDE0NS44ODVDMTAwLjU5NyAxNDcuODE5IDk5LjYyMzEgMTQ5LjY3MiA5OC4wODA3IDE1MC45NjFDOTcuNTkzNyAxNTEuMzYzIDk3LjEwNjYgMTUxLjUyNCA5Ni43MDA3IDE1MS41MjRDOTUuOTcwMSAxNTEuNTI0IDk1LjU2NDIgMTUwLjg4IDk1LjMyMDcgMTUwLjM5N0M5My43NzgzIDE0Ni43NzEgOTIuNjQxOCAxNDIuOTg1IDkxLjY2NzcgMTM5LjM1OUM5MS42Njc3IDEzOS4xOTggOTEuNTg2NSAxMzkuMDM3IDkxLjUwNTMgMTM4Ljg3NkM5MS41MDUzIDEzOC43OTYgOTEuNDI0MiAxMzguNzE1IDkxLjM0MyAxMzguNTU0QzkxLjM0MyAxMzguNTU0IDkxLjM0MyAxMzguNDczIDkxLjI2MTggMTM4LjQ3M0M5MS4yNjE4IDEzOC4zOTMgOTEuMTgwNiAxMzguMzEyIDkxLjA5OTQgMTM4LjIzMlYxMzguMTUxQzkxLjA5OTQgMTM4LjA3IDkxLjAxODMgMTM3Ljk5IDkxLjAxODMgMTM3LjkwOUw5MC44NTU5IDEzNy40MjZDOTAuNjEyNCAxMzYuODYyIDkwLjM2ODggMTM2LjIxOCA5MC4xMjUzIDEzNS42NTRMOTAuMDQ0MSAxMzUuNDEyTDg5Ljk2MyAxMzUuMDlDODkuODgxOCAxMzQuNzY3IDg5LjcxOTQgMTM0LjQ0NSA4OS42MzgyIDEzNC4wNDJDODguODI2NSAxMzEuMzg0IDg5LjE1MTIgMTMwLjI1NiA4OS4zMTM1IDEyOS45MzRMODkuMzk0NyAxMjkuNjkyVjEyOS41MzFDODkuNjM4MiAxMjguOTY3IDkxLjAxODMgMTI4IDkzLjQ1MzYgMTI2LjcxMUM5My45NDA3IDEyNi4zODkgOTQuMzQ2NiAxMjYuMjI4IDk0LjY3MTMgMTI2LjA2N0M5NS44MDc3IDEyNS4yNjEgOTcuMTA2NiAxMjQuNjk3IDk4LjQwNTQgMTI0LjA1M0M5OS43ODU0IDEyMy40MDggMTAxLjI0NyAxMjIuNjgzIDEwMi42MjcgMTIxLjcxNkMxMDUuMzA2IDExOS44NjMgMTA4LjIyOCAxMTguMzMzIDExMS4zOTQgMTE2LjY0MUMxMTIuMjA2IDExNi4yMzggMTEyLjc3NCAxMTYuMDc3IDExMy4zNDIgMTE2LjA3N0MxMTMuNzQ4IDExNi4wNzcgMTE0LjA3MyAxMTYuMTU3IDExNC4zOTcgMTE2LjM5OUwxMTQuNDc5IDExNi40OEwxMTQuNjQxIDExNi41NkgxMTQuNzIyTDExNS4yMDkgMTE2Ljk2M0gxMTUuMzcyQzExNi4yNjUgMTE3LjUyNyAxMTcuNTYzIDExOC40MTMgMTE5LjEwNiAxMTkuNDZDMTIyLjY3OCAxMjEuNzk3IDEyNy4wNjEgMTI0Ljc3OCAxMjkuMjUzIDEyNi4wNjdDMTI5LjMzNCAxMjYuMTQ3IDEyOS40MTUgMTI2LjE0NyAxMjkuNDk2IDEyNi4yMjhWMTI2LjMwOFoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik04OC45MDc3IDEzOC4zMTJDODguNzQ1NCAxMzcuOTkgODguNTgzIDEzNy41ODcgODguNDIwNyAxMzcuMTg0Qzg4LjUwMTggMTM3LjI2NSA4OC41MDE4IDEzNy4zNDUgODguNTAxOCAxMzcuNTA2Qzg4LjU4MyAxMzcuNTg3IDg4LjU4MyAxMzcuNzQ4IDg4LjY2NDIgMTM3LjgyOUM4OC44MjY1IDEzNy45OSA4OC44MjY1IDEzOC4xNTEgODguOTA3NyAxMzguMzEyWiIgZmlsbD0iI0FBQUFBQSIvPg0KPHBhdGggZD0iTTE0MS41OTIgMjE0LjUyNUwxNDAuOTQzIDIxNC40NDRDMTM3LjEyNyAyMTMuOTYxIDEzNC4zNjcgMjE2LjA1NiAxMzEuOTMyIDIxNy45ODlDMTMxLjUyNiAyMTQuODQ3IDEzMS4yMDEgMjEyLjAyNyAxMzEuMjAxIDIwOS4xMjdDMTMxLjI4MyAyMDQuMzc0IDEzMC45NTggMTk5LjcwMSAxMzEuMjgzIDE5NC45NDhDMTMxLjQ0NSAxOTMuMDE1IDEzMS44NTEgMTkxLjE2MiAxMzIuMDEzIDE4OS4yMjhDMTMyLjA5NCAxODguMTgxIDEzMi4zMzggMTg3LjM3NSAxMzMuMTUgMTg3LjEzNEMxMzMuOTYxIDE4Ni44OTIgMTM1LjA5OCAxODcuMjk1IDEzNS42NjYgMTg4LjFDMTM4LjI2NCAxOTEuODg3IDE0MS43NTQgMTk0Ljc4NyAxNDQuNDMzIDE5OC40OTNDMTQ0LjU5NiAxOTguNzM1IDE0Ni44NjkgMjAyLjAzOCAxNDkuNTQ3IDIwMi4wMzhDMTUyLjIyNiAyMDEuOTU3IDE1NC44MjQgMjAxLjE1MSAxNTcuNTAzIDIwMS4zMTNDMTU5LjIwOCAyMDEuMzkzIDE2MC45OTQgMjAwLjgyOSAxNjIuNjk4IDIwMC40MjZDMTY2LjgzOCAxOTkuNTQgMTcwLjk3OCAxOTcuNjA3IDE3NS4zNjIgMTk3LjI4NEMxNzUuMzYyIDE5Ny4yODQgMTc2LjA5MyAyMDQuMzc0IDE3Ni4wMTEgMjA3LjE5NEMxNzYuMDExIDIwOC42NDQgMTc1Ljg0OSAyMTAuMDk0IDE3NS43NjggMjExLjU0NEMxNzUuNjA1IDIxMi45OTQgMTc1LjUyNCAyMTQuNDQ0IDE3NS41MjQgMjE1Ljk3NUMxNzUuNTI0IDIxNy43NDcgMTc1LjQ0MyAyMTkuMzU5IDE3NC41NSAyMjAuNjQ4TDE3NC4yMjUgMjIxLjA1MVYyMjEuMTMxQzE3Mi41MjEgMjIwLjgwOSAxNzEuNDY1IDIxOS42ODEgMTcwLjU3MiAyMTguMDdDMTY5LjI3NCAyMTUuODE0IDE2OC44NjggMjEzLjMxNiAxNjcuODEyIDIxMS4wNjFDMTY3LjA4MiAyMDkuNjExIDE2Ni41OTUgMjA3LjkxOSAxNjUuNTM5IDIwNi42M0MxNjQuMTU5IDIwNC43NzcgMTYxLjk2OCAyMDMuOTcxIDE1OS42OTUgMjAzLjcyOUMxNTguNjM5IDIwMy42NDkgMTU3LjUwMyAyMDMuNzI5IDE1Ni40NDggMjAzLjgxQzE1NC40MTggMjAzLjk3MSAxNTMuNjg4IDIwNS42NjMgMTUzLjIgMjA3LjI3NEMxNTIuMTQ1IDIxMC40OTcgMTUwLjI3OCAyMTMuMDc1IDE0OC4wMDUgMjE1LjQxMUwxNDcuMTkzIDIxNS4zMzFMMTQxLjU5MiAyMTQuNTI1WiIgZmlsbD0iI0FBQUFBQSIvPg0KPHBhdGggZD0iTTE4MC44ODEgMjI5LjM0OEMxODAuNzE5IDIzMy4wNTQgMTc2LjQ5OCAyMzUuMjI5IDE3My40MTMgMjMzLjI5NkMxNzMuMTY5IDIzMy4xMzUgMTczLjAwNyAyMzIuOTc0IDE3Mi43NjQgMjMyLjg5M0MxNzAuMzI4IDIzNi4xMTYgMTY4LjM4IDIzNi4xOTYgMTY0LjQwMiAyMzQuMjYzQzE2My40MjggMjMzLjc3OSAxNjIuODYgMjMyLjgxMyAxNjMuMjY2IDIzMi4wODdDMTYzLjc1MyAyMzEuMjgyIDE2NC44ODkgMjMxLjA0IDE2NS44NjMgMjMxLjkyNkMxNjYuOTE5IDIzMi45NzQgMTY4LjEzNiAyMzIuOTc0IDE2OS40MzUgMjMyLjQ5QzE3MC4yNDcgMjMyLjE2OCAxNzAuNjUzIDIzMS40NDMgMTcwLjY1MyAyMzAuNDc2QzE3MC42NTMgMjI5Ljc1MSAxNzAuNDkxIDIyOS4xMDcgMTY5Ljc2IDIyOS4wMjZDMTY4Ljc4NiAyMjguODY1IDE2Ny45NzQgMjI4LjM4MiAxNjguMjE4IDIyNy40OTVDMTY4LjQ2MSAyMjYuMzY3IDE2OC41NDIgMjI1LjA3OCAxNjkuODQxIDIyNC40MzRDMTcxLjMwMiAyMjMuNzA5IDE3Mi42ODIgMjIzLjc4OSAxNzMuOSAyMjQuNzU2QzE3NS4xMTggMjI1LjcyMyAxNzQuNjMxIDIyNy4yNTQgMTc0LjMwNiAyMjguMjJDMTczLjkgMjI5LjUwOSAxNzQuMTQ0IDIzMC4wNzMgMTc1LjExOCAyMzAuNzE4QzE3Ny4wNjYgMjMyLjAwNyAxNzguMTIxIDIzMC40NzYgMTc4LjA0IDIyOC45NDVDMTc3Ljk1OSAyMjguMjIgMTc4LjUyNyAyMjcuODk4IDE3OS4xNzcgMjI3Ljg5OEMxNzkuODI2IDIyNy44OTggMTgwLjU1NyAyMjguMjIgMTgwLjggMjI4Ljg2NUMxODAuODgxIDIyOC45NDUgMTgwLjg4MSAyMjkuMTA3IDE4MC44ODEgMjI5LjM0OFoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0yMDguNDAyIDIzNi41MjFDMjA4LjQwMiAyMzYuNDM5IDIwOC4zMiAyMzYuNDM5IDIwOC4zMiAyMzYuMzU3TDIwOC40MDIgMjM2LjUyMVoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0xODEuNjEyIDE2Ny44NzlDMTgxLjA0NCAxNjkuODkzIDE4MS4yODggMTcxLjk4OCAxODEuNDUgMTc0LjAwMkMxODEuNjkzIDE3Ni43NDEgMTgwLjM5NSAxNzguODM2IDE3OC42OSAxODAuNjg4QzE3Ni45ODUgMTgyLjYyMiAxNzUuMjggMTg0LjcxNyAxNzIuNTIgMTg1LjM2MUMxNjcuMzI1IDE4Ni42NSAxNjAuODMxIDE4Ny4wNTMgMTU2Ljg1MyAxODUuODQ1QzE1NS43MTcgMTg1LjUyMiAxNTUuMDY3IDE4NS4yIDE1NS4xNDggMTg0LjE1M0MxNTUuMTQ4IDE4My40MjggMTU1LjQ3MyAxODIuNzgzIDE1Ni40NDcgMTgyLjk0NEMxNTkuNDUxIDE4My4yNjYgMTYyLjUzNiAxODQuMDcyIDE2NS40NTggMTgzLjY2OUMxNjkuMTkyIDE4My4xODYgMTczLjA4OSAxODIuNjIyIDE3Ni4wOTIgMTc5LjcyMkMxNzguNTI4IDE3Ny4zODUgMTc4LjM2NSAxNzUuMTMgMTc4LjM2NSAxNzEuODI3QzE3NC42MzEgMTc0LjE2MyAxNzIuNDM5IDE3MS45MDcgMTY5LjY3OSAxNjkuODEyQzE2OS4xOTIgMTY5LjQ5IDE2OC43ODYgMTY5LjA4NyAxNjguMjk5IDE2OC43NjVDMTY2LjgzOCAxNjcuNzE4IDE2NS43MDEgMTY2LjUwOSAxNjYuMTA3IDE2NC41NzZDMTY2LjQzMiAxNjIuNzIzIDE2OC4wNTYgMTYxLjY3NiAxNjkuNzYgMTYxLjM1M0MxNzIuNzY0IDE2MC43ODkgMTc1Ljc2OCAxNTkuOTg0IDE3OC44NTIgMTYwLjE0NUMxNzkuMTc3IDE2MC4xNDUgMTc5LjU4MyAxNjAuMDY0IDE3OS45MDggMTYwLjM4N0MxODEuMzY5IDE2MS44MzcgMTgyLjE4MSAxNjUuNzg0IDE4MS42MTIgMTY3Ljg3OVoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0xNTIuODc2IDI2Ni43MjlDMTUzLjAzOCAyNjkuODcxIDE0OS43MSAyNzMuNjU4IDE0NS44MTMgMjc0LjQ2M0MxNDUuMTY0IDI3NC42MjUgMTQ0LjU5NSAyNzQuNzg2IDE0My45NDYgMjc0Ljk0N0MxNDIuNTY2IDI3NS4yNjkgMTQxLjc1NCAyNzQuNzg2IDE0MS41MTEgMjczLjMzNkMxNDAuNDU1IDI2OC4xNzkgMTM5LjU2MiAyNjIuOTQzIDEzNy43NzcgMjU3Ljk0OEMxMzcuMTI3IDI1Ni4wMTQgMTM2Ljk2NSAyNTQgMTM2LjcyMSAyNTEuOTA2QzE0MC4yOTMgMjUyLjk1MyAxNDMuNjIxIDI1NC4wODEgMTQ3LjAzMSAyNTQuOTY3QzE0OS4wNiAyNTUuNTMxIDE1MC4wMzQgMjU3LjE0MiAxNTAuNzY1IDI1OC44MzRDMTUxLjkwMSAyNjEuMzMyIDE1Mi43MTMgMjYzLjk5IDE1Mi44NzYgMjY2LjcyOVoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0xNDUuOTc1IDIxNy4wMjJDMTQ1LjA4MiAyMjAuMTY0IDE0Mi44OSAyMjIuOTAzIDE0MC42OTkgMjI1LjU2MkwxNDAuMTMgMjI2LjI4N0MxMzkuNTYyIDIyNi45MzIgMTM4LjU4OCAyMjguNDYyIDEzNy42MTQgMjI5LjgzMkMxMzYuODAyIDIzMS4wNCAxMzQuMDQyIDIzMy43NzkgMTM0LjA0MiAyMzMuNzc5QzEzMy4zOTMgMjMxLjA0IDEzMi43NDMgMjI2LjQ0OCAxMzIuNDE4IDIyMy4xNDVDMTMyLjMzNyAyMjIuMDE3IDEzMi4xNzUgMjIwLjk3IDEzMi4wOTQgMjIwLjI0NUMxMzIuMjU2IDIyMC4wODQgMTMyLjY2MiAyMTkuODQyIDEzMi44MjQgMjE5Ljc2MUMxMzUuMTc5IDIxNy44MjggMTM3LjQ1MSAyMTUuOTc1IDE0MC42MTcgMjE2LjM3OEwxNDEuMjY3IDIxNi40NThDMTQyLjgwOSAyMTYuNjE5IDE0NC41MTQgMjE2Ljg2MSAxNDUuOTc1IDIxNy4wMjJaIiBmaWxsPSIjQUFBQUFBIi8+DQo8cGF0aCBkPSJNMTUyLjMwNyAyMzYuNDM4QzE1MC4yNzggMjM3LjAwMiAxNDkuNDY2IDIzOC4xMyAxNDcuNjggMjM4LjUzMkMxNDUuNjUxIDIzOS4wMTYgMTQzLjc4NCAyNDAuMzg1IDE0MS45OTggMjQxLjQzM0MxMzkuMzE5IDI0Mi45NjMgMTM2LjMxNSAyNDQuMDExIDEzNC4xMjQgMjQ2LjM0N0MxMzMuMzkzIDI0Ny4wNzIgMTMyLjA5NCAyNDcuMTUzIDEzMS42MDcgMjQ2LjI2NkMxMzEuMDM5IDI0NS4yMTkgMTMxLjY4OCAyNDMuOTMgMTMyLjgyNSAyNDMuNDQ3QzEzNS41MDQgMjQyLjIzOCAxMzcuODU4IDI0MC4zODUgMTQwLjUzNyAyMzkuMTc3QzE0Mi45NzIgMjM4LjEzIDE0NS4yNDUgMjM2LjM1NyAxNDguMTY3IDIzNi4zNTdDMTQ5LjQ2NiAyMzYuMzU3IDE1MC4xOTcgMjM0LjkwNyAxNTEuOTAxIDIzNS4yMjlDMTUzLjExOSAyMzUuNDcxIDE1Mi45NTcgMjM2LjI3NyAxNTIuMzA3IDIzNi40MzhaIiBmaWxsPSIjQUFBQUFBIi8+DQo8cGF0aCBkPSJNMTUxLjk4MiAyMzIuMzI5QzE1MC42MDIgMjMzLjUzOCAxNDguNjU0IDIzMy41MzggMTQ3LjAzMSAyMzQuMTgyQzE0NC4yNzEgMjM1LjIyOSAxNDEuMjY3IDIzNS43MTMgMTM4LjM0NSAyMzYuMjc3QzEzNi44ODMgMjM2LjUxOCAxMzYuMDcyIDIzNy45NjkgMTM0LjUyOSAyMzguMTNDMTMzLjU1NSAyMzguMjkxIDEzMi41ODEgMjM4LjYxMyAxMzIuMDk0IDIzNy41NjZDMTMxLjc2OSAyMzYuNzYgMTMyLjI1NiAyMzYuMzU3IDEzMi44MjUgMjM2LjAzNUMxMzMuMDY4IDIzNS45NTUgMTMzLjMxMiAyMzUuNzkzIDEzMy40NzQgMjM1LjcxM0MxMzMuNzE4IDIzNS41NTIgMTM0LjA0MiAyMzUuMzkxIDEzNC4yODYgMjM1LjIyOUMxMzQuNTI5IDIzNS4wNjggMTM1LjQyMiAyMzQuODI3IDEzNi43MjEgMjM0LjQyNEMxNDAuNDU1IDIzMy4zNzYgMTQ3LjM1NSAyMzEuNjA0IDE0OS4yMjIgMjMxLjI4MkMxNTAuMTk3IDIzMS4xMjEgMTUxLjAwOCAyMzEuMDQgMTUxLjgyIDIzMS41MjRDMTUyLjIyNiAyMzEuNjA0IDE1Mi4yMjYgMjMyLjA4NyAxNTEuOTgyIDIzMi4zMjlaIiBmaWxsPSIjQUFBQUFBIi8+DQo8cGF0aCBkPSJNMTc3LjYzNSAxNTUuMzExQzE3Ni4xNzQgMTU2LjYgMTc1LjQ0MyAxNTUuMjMxIDE3My4wODkgMTU0LjAyMkMxNzIuNTIxIDE1My43IDE3MS42MjggMTU0LjE4MyAxNzEuMzg0IDE1NS4xNUMxNzEuMzAzIDE1NS42MzMgMTcwLjMyOSAxNTYuNDM5IDE3MC4yNDggMTU2LjUyQzE2OS4zNTUgMTU2Ljc2MSAxNjguNDYyIDE1Ny40ODYgMTY3LjY1IDE1Ni40MzlDMTY2LjgzOCAxNTUuMzkyIDE2Ny4yNDQgMTU0LjAyMiAxNjcuODk0IDE1My4yMTZDMTcwLjE2NyAxNTAuMzE2IDE3My40OTUgMTQ5LjQzIDE3Ni45ODUgMTUxLjYwNUMxNzcuNzk3IDE1Mi4wMDggMTc4LjI4NCAxNTQuNjY3IDE3Ny42MzUgMTU1LjMxMVoiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0xNDQuODM4IDE1Ny40MDZDMTQ0LjAyNyAxNTguMDUgMTQzLjEzNCAxNTcuNTY3IDE0Mi40MDMgMTU3LjAwM0MxNDIuMjQxIDE1Ni44NDIgMTQyLjE2IDE1Ni42ODEgMTQyLjA3OCAxNTYuNTJDMTM5LjcyNCAxNTQuNDI1IDEzOS4wNzUgMTU0LjUwNSAxMzcuMDQ1IDE1Ny4wMDNDMTM2LjcyMSAxNTcuMzI1IDEzNi40NzcgMTU3LjgwOSAxMzUuOTkgMTU3LjU2N0MxMzUuMTc4IDE1Ny4wODMgMTM0Ljg1NCAxNTYuMTE3IDEzNS4wMTYgMTU1LjMxMUMxMzUuMTc4IDE1My42MTkgMTM4LjY2OSAxNTEuMDQxIDE0MS4xMDQgMTUxLjEyMkMxNDIuODA5IDE1MS4wNDEgMTQ0LjE4OSAxNTIuODE0IDE0NS41NjkgMTU0LjM0NEMxNDYuNTQzIDE1NS4zMTEgMTQ1LjgxMyAxNTYuNiAxNDQuODM4IDE1Ny40MDZaIiBmaWxsPSIjQUFBQUFBIi8+DQo8cGF0aCBkPSJNMTUwLjYwMyAyNDEuMDNDMTQ4LjAwNSAyNDMuNDQ3IDE0NS40MDcgMjQ1Ljg2NCAxNDIuNjQ3IDI0OC4wMzlDMTQxLjM0OCAyNDkuMDA2IDE0MC4wNDkgMjUwLjI5NSAxMzcuNjk1IDI1MC4yMTRDMTM3LjIwOCAyNTAuMTMzIDEzNi41NTkgMjQ5LjY1IDEzNy4xMjcgMjQ4LjYwM0MxMzcuNjE0IDI0Ny42MzYgMTM4LjUwNyAyNDcuMTUzIDEzOS40ODEgMjQ2LjU4OUMxNDEuMTg2IDI0NS41NDEgMTQzLjEzNCAyNDUuMDU4IDE0NC41MTQgMjQzLjI4NkMxNDUuODEzIDI0MS42NzQgMTQ3Ljg0MiAyNDAuNzA4IDE0OS43MSAyMzkuNjZDMTUxLjI1MiAyMzguOTM1IDE1MS42NTggMjQwLjIyNCAxNTAuNjAzIDI0MS4wM1oiIGZpbGw9IiNBQUFBQUEiLz4NCjxwYXRoIGQ9Ik0xNTUuMzkyIDIyOC4wNTlDMTUzLjY4NyAyMjguMzgyIDE1MC43NjQgMjI2Ljg1MSAxNTAuMDM0IDIyNS4yNEMxNDkuNjI4IDIyNC4zNTQgMTQ5Ljg3MSAyMjMuNzA5IDE1MC40NCAyMjMuMzA2QzE1MS4wMDggMjIyLjkwMyAxNTEuNjU3IDIyMy4zODcgMTUyLjA2MyAyMjMuODdDMTUzLjAzNyAyMjUuMDc5IDE1NC4xNzQgMjI1LjY0MyAxNTUuNzE2IDIyNC43NTZDMTU2LjUyOCAyMjQuMjczIDE1Ny4wMTUgMjIzLjc5IDE1Ny4wMTUgMjIyLjkwM0MxNTcuMDE1IDIyMS44NTYgMTU3LjA5NiAyMjAuNjQ4IDE1OC4zOTUgMjIwLjcyOEMxNTkuNzc1IDIyMC44MDkgMTU5LjkzOCAyMjIuMTc4IDE2MC4xIDIyMy4zMDZDMTYwLjQyNSAyMjQuODM3IDE1Ny4xNzcgMjI3LjczNyAxNTUuMzkyIDIyOC4wNTlaIiBmaWxsPSIjQUFBQUFBIi8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/team-block/edit.js":
/*!********************************!*\
  !*** ./src/team-block/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/team-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var imgUrl = attributes.imgUrl,
      name = attributes.name,
      intro = attributes.intro,
      description = attributes.description,
      twitter = attributes.twitter,
      linkedin = attributes.linkedin;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Profile Picture"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: "Profile Picture",
    allowedTypes: ["image"],
    onSelect: function onSelect(val) {
      setAttributes({
        imgUrl: val.sizes.full.url
      });
    },
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: imgUrl,
        onClick: open
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Name",
    value: name,
    onChange: function onChange(val) {
      return setAttributes({
        name: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextareaControl"], {
    label: "Intro",
    value: intro,
    onChange: function onChange(val) {
      return setAttributes({
        intro: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextareaControl"], {
    label: "Description",
    value: description,
    onChange: function onChange(val) {
      return setAttributes({
        description: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Twitter",
    value: twitter,
    onChange: function onChange(val) {
      return setAttributes({
        twitter: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Linkedin",
    value: linkedin,
    onChange: function onChange(val) {
      return setAttributes({
        linkedin: val
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imgUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-description"
  }, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-info"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "team__block-name"
  }, name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-intro"
  }, intro), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-social"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.twitter.com/".concat(twitter)
  }, "Twitter"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "team__block-dot"
  }, "\xB7 "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.linkedin.com/in/".concat(linkedin)
  }, "Linkedin")))));
}

/***/ }),

/***/ "./src/team-block/editor.scss":
/*!************************************!*\
  !*** ./src/team-block/editor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/team-block/index.js":
/*!*********************************!*\
  !*** ./src/team-block/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/team-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-block/save.js");
/* harmony import */ var _assets_images_userProfile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/userProfile.svg */ "./src/team-block/assets/images/userProfile.svg");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





var name = 'waldos-blocks/team-block';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Team Block", "team-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Waldos Team member block", "team-block"),
  category: "common",
  icon: "smiley",
  attributes: {
    imgUrl: {
      type: "string",
      default: _assets_images_userProfile_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    name: {
      type: "string",
      default: "Waldo"
    },
    intro: {
      type: "string",
      default: "Hey, pet me human"
    },
    description: {
      type: "string",
      default: "I take care of everyone around me and they love too"
    },
    twitter: {
      type: "string",
      default: ""
    },
    linkedin: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/team-block/save.js":
/*!********************************!*\
  !*** ./src/team-block/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

function save(_ref) {
  var attributes = _ref.attributes;
  var imgUrl = attributes.imgUrl,
      name = attributes.name,
      intro = attributes.intro,
      description = attributes.description,
      twitter = attributes.twitter,
      linkedin = attributes.linkedin;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imgUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-description"
  }, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-info"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "team__block-name"
  }, name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-intro"
  }, intro), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "team__block-social"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.twitter.com/".concat(twitter)
  }, "Twitter"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "team__block-dot"
  }, "\xB7 "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.linkedin.com/in/".concat(linkedin)
  }, "Linkedin"))));
}

/***/ }),

/***/ "./src/video-block/edit.js":
/*!*********************************!*\
  !*** ./src/video-block/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/video-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/video-block/inspector.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/video-block/helpers.js");






var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var RichText = wp.editor.RichText;
function Edit(props) {
  var _video_annotations$se;

  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      outline_title = _props$attributes.outline_title,
      video_url = _props$attributes.video_url,
      youtube_api_key = _props$attributes.youtube_api_key;

  var _useState = useState(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      thumbnails = _useState6[0],
      setThumbnails = _useState6[1];

  var itemsList = [];
  var start = selectedItem <= 4 ? 0 : selectedItem - 4;
  var end = selectedItem <= 4 ? 5 : selectedItem + 1;
  var videoId = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["YouTubeGetID"])(video_url);
  var REMOTE_URL_CALL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(videoId, "&key=").concat(youtube_api_key);
  useEffect(function () {
    fetch(REMOTE_URL_CALL).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      var _responseJson$items$, _responseJson$items$$, _responseJson$items$2, _responseJson$items$3;

      setDescription(responseJson === null || responseJson === void 0 ? void 0 : (_responseJson$items$ = responseJson.items[0]) === null || _responseJson$items$ === void 0 ? void 0 : (_responseJson$items$$ = _responseJson$items$.snippet) === null || _responseJson$items$$ === void 0 ? void 0 : _responseJson$items$$.description);
      setThumbnails(responseJson === null || responseJson === void 0 ? void 0 : (_responseJson$items$2 = responseJson.items[0]) === null || _responseJson$items$2 === void 0 ? void 0 : (_responseJson$items$3 = _responseJson$items$2.snippet) === null || _responseJson$items$3 === void 0 ? void 0 : _responseJson$items$3.thumbnails);
    }).catch(function (error) {
      return console.log(error);
    });
  }, [video_url, youtube_api_key]);
  var video_annotations = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["extractTime"])(description);

  var _loop = function _loop(i) {
    var _thumbnails$default, _video_annotations$i, _video_annotations$i2;

    itemsList.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "video-block__playItem ".concat(selectedItem === i && 'video-block__playItem--active', " "),
      onClick: function onClick() {
        return setSelectedItem(i);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: thumbnails === null || thumbnails === void 0 ? void 0 : (_thumbnails$default = thumbnails.default) === null || _thumbnails$default === void 0 ? void 0 : _thumbnails$default.url
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "video-block__description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, " ", (_video_annotations$i = video_annotations[i]) === null || _video_annotations$i === void 0 ? void 0 : _video_annotations$i.description, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, " ", (_video_annotations$i2 = video_annotations[i]) === null || _video_annotations$i2 === void 0 ? void 0 : _video_annotations$i2.time, " "))));
  };

  for (var i = start; i < end; i++) {
    _loop(i);
  }

  var chapter_start = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["extractTimeInSeconde"])((_video_annotations$se = video_annotations[selectedItem]) === null || _video_annotations$se === void 0 ? void 0 : _video_annotations$se.time);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "video-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "video-block__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "video-block__player"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("iframe", {
    src: "https://www.youtube.com/embed/".concat(videoId, "?start=").concat(chapter_start),
    frameborder: "0",
    height: "480"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "video-block__playlist"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    value: outline_title,
    onChange: function onChange(outline_title) {
      return setAttributes({
        outline_title: outline_title
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "video-block__itemsList"
  }, selectedItem > 4 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    onClick: function onClick() {
      return setSelectedItem(selectedItem - 1);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "20",
    height: "13",
    viewBox: "0 0 20 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M9.22255 12.6703L0.321856 3.55299C-0.107286 3.11342 -0.107286 2.40036 0.321856 1.9608L1.36013 0.897302C1.78882 0.458205 2.48314 0.457736 2.91274 0.895425L9.99977 8.12127L17.0873 0.895893C17.5169 0.457735 18.2112 0.458674 18.6399 0.897769L19.6781 1.96126C20.1073 2.40083 20.1073 3.11389 19.6781 3.55346L10.777 12.6703C10.3478 13.1099 9.65169 13.1099 9.22255 12.6703Z",
    fill: "#848484"
  }))), itemsList, video_annotations.length - 1 != selectedItem && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    onClick: function onClick() {
      return setSelectedItem(selectedItem + 1);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "20",
    height: "13",
    viewBox: "0 0 20 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M9.22255 12.6703L0.321856 3.55299C-0.107286 3.11342 -0.107286 2.40036 0.321856 1.9608L1.36013 0.897302C1.78882 0.458205 2.48314 0.457736 2.91274 0.895425L9.99977 8.12127L17.0873 0.895893C17.5169 0.457735 18.2112 0.458674 18.6399 0.897769L19.6781 1.96126C20.1073 2.40083 20.1073 3.11389 19.6781 3.55346L10.777 12.6703C10.3478 13.1099 9.65169 13.1099 9.22255 12.6703Z",
    fill: "#848484"
  }))))))));
}

/***/ }),

/***/ "./src/video-block/editor.scss":
/*!*************************************!*\
  !*** ./src/video-block/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/video-block/helpers.js":
/*!************************************!*\
  !*** ./src/video-block/helpers.js ***!
  \************************************/
/*! exports provided: extractTime, extractTimeInSeconde, YouTubeGetID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTime", function() { return extractTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTimeInSeconde", function() { return extractTimeInSeconde; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeGetID", function() { return YouTubeGetID; });
// Extract timestamps from  Youtube viddeo description
var extractTime = function extractTime(str) {
  var regex = /^([0-9]+?:[0-9]+?|[0-9]+?:[0-9]+?:[0-9]+?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\x2D[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]([\s\S]*?)$/gm;
  var match;
  var matches = [];

  while ((match = regex.exec(str)) !== null) {
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    var time = match[1];
    var description = match[2];
    matches.push({
      time: time,
      description: description
    });
  }

  return matches;
};
var extractTimeInSeconde = function extractTimeInSeconde(time) {
  var timeRange = time === null || time === void 0 ? void 0 : time.split(':');
  var start = 0;
  var range_01 = (timeRange === null || timeRange === void 0 ? void 0 : timeRange.length) && parseInt(timeRange[0]);
  var range_02 = (timeRange === null || timeRange === void 0 ? void 0 : timeRange.length) && parseInt(timeRange[1]);
  var range_03 = (timeRange === null || timeRange === void 0 ? void 0 : timeRange.length) && parseInt(timeRange[2]);

  if ((timeRange === null || timeRange === void 0 ? void 0 : timeRange.length) === 2) {
    start = range_01 === 0 ? range_02 : range_01 * 60 + range_02;
    return start;
  }

  if ((timeRange === null || timeRange === void 0 ? void 0 : timeRange.length) === 3) {
    start = range_01 * 3600 + range_02 * 60 + range_03;
    return start;
  }

  return start;
};
var YouTubeGetID = function YouTubeGetID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

/***/ }),

/***/ "./src/video-block/index.js":
/*!**********************************!*\
  !*** ./src/video-block/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/video-block/edit.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var name = 'waldos-blocks/video-block';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Video Block", "video-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Waldos Video block", "video-block"),
  category: "common",
  icon: "video",
  supports: {
    align: ['full']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'full'
    },
    outline_title: {
      type: 'string',
      default: 'Video outline'
    },
    video_url: {
      type: 'string',
      default: 'LrWe_VzegoM'
    },
    youtube_api_key: {
      type: 'string',
      default: 'AIzaSyAL0Otj6cbv26GlgyZ5YL1EmRuzxdjxroo'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
};

/***/ }),

/***/ "./src/video-block/inspector.js":
/*!**************************************!*\
  !*** ./src/video-block/inspector.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var video_url = attributes.video_url,
      youtube_api_key = attributes.youtube_api_key;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Youtube URL:",
    value: video_url,
    onChange: function onChange(video_url) {
      return setAttributes({
        video_url: video_url
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Youtube API Key:",
    value: youtube_api_key,
    onChange: function onChange(youtube_api_key) {
      return setAttributes({
        youtube_api_key: youtube_api_key
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

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