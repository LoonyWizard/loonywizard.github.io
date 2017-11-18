/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertHsbToRgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = convertRgbToString;
/**
 * That function converts HSB color to RGB model
 *
 * @param hue - [0, 360]
 * @param saturation - [0, 100]
 * @param brightness - [0, 100]
 * @returns {{red: number, green: number, blue: number}}
 */
function convertHsbToRgb(hue, saturation, brightness) {
  const normalizedSaturation = saturation / 100;
  const normalizedBrightness = brightness / 100;

  const c = normalizedBrightness * normalizedSaturation;
  const x = c * (1 - Math.abs(hue / 60 % 2 - 1));
  const m = normalizedBrightness - c;

  let red;
  let green;
  let blue;

  if (hue < 60) {
    red = c;green = x;blue = 0;
  } else if (hue < 120) {
    red = x;green = c;blue = 0;
  } else if (hue < 180) {
    red = 0;green = c;blue = x;
  } else if (hue < 240) {
    red = 0;green = x;blue = c;
  } else if (hue < 300) {
    red = x;green = 0;blue = c;
  } else {
    red = c;green = 0;blue = x;
  }

  red = (red + m) * 255;
  green = (green + m) * 255;
  blue = (blue + m) * 255;

  return {
    red: Math.round(red),
    green: Math.round(green),
    blue: Math.round(blue)
  };
}

/**
 * That function converts three RGB colors to string
 * for example: 255 183 0 --> #ff00b7
 *
 * @param red - [0, 255]
 * @param green - [0, 255]
 * @param blue - [0, 255]
 * @returns string
 */
function convertRgbToString(red, green, blue) {
  const hexRed = red >= 16 ? red.toString(16) : `0${red.toString(16)}`;
  const hexBlue = green >= 16 ? green.toString(16) : `0${green.toString(16)}`;
  const hexGreen = blue >= 16 ? blue.toString(16) : `0${blue.toString(16)}`;

  return `#${hexRed}${hexGreen}${hexBlue}`;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Width and height of HUE picker, where there'is only one coordinate
 */
const HUE_PICKER_WIDTH = 250;
/* harmony export (immutable) */ __webpack_exports__["c"] = HUE_PICKER_WIDTH;

const HUE_PICKER_HEIGHT = 14;
/* harmony export (immutable) */ __webpack_exports__["b"] = HUE_PICKER_HEIGHT;


/**
 * Width and height of SB picker, where there's two coordinates:
 * saturation and brightness
 */
const SATURATION_BRIGHTNESS_PICKER_WIDTH = 250;
/* harmony export (immutable) */ __webpack_exports__["f"] = SATURATION_BRIGHTNESS_PICKER_WIDTH;

const SATURATION_BRIGHTNESS_PICKER_HEIGHT = 150;
/* harmony export (immutable) */ __webpack_exports__["e"] = SATURATION_BRIGHTNESS_PICKER_HEIGHT;


/**
 * Ranges in which specific color value can be
 */
const HUE_RANGE = {
  MIN: 0,
  MAX: 360
};
/* harmony export (immutable) */ __webpack_exports__["d"] = HUE_RANGE;

const SATURATION_RANGE = {
  MIN: 0,
  MAX: 100
};
/* harmony export (immutable) */ __webpack_exports__["g"] = SATURATION_RANGE;

const BRIGHTNESS_RANGE = {
  MIN: 0,
  MAX: 100
};
/* harmony export (immutable) */ __webpack_exports__["a"] = BRIGHTNESS_RANGE;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colorManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hsbPicker__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rgbDisplay__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss__);





const colorManager = new __WEBPACK_IMPORTED_MODULE_0__colorManager__["a" /* default */]();

const picker = new __WEBPACK_IMPORTED_MODULE_1__hsbPicker__["a" /* default */](colorManager);
const rgbDisplay = new __WEBPACK_IMPORTED_MODULE_2__rgbDisplay__["a" /* default */](colorManager);

const app = document.getElementById('app');
const pickerContainer = document.createElement('div');

function setAppBackground() {
  const { red, green, blue } = colorManager.getColorRGB();
  app.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

setAppBackground();

colorManager.subscribe(setAppBackground);

app.appendChild(pickerContainer);

pickerContainer.className = 'picker-container';
pickerContainer.appendChild(rgbDisplay.render());
pickerContainer.appendChild(picker.render());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ColorManager;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_random__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_convert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consts__ = __webpack_require__(1);




/**
 * ColorManager manages color state in the color picker
 * It has get/set methods for colors,
 * You can subscribe any callback for color changes
 * */
function ColorManager() {
  const getRandomHue = () => Object(__WEBPACK_IMPORTED_MODULE_0__utils_random__["a" /* getRandomInt */])(__WEBPACK_IMPORTED_MODULE_2__consts__["d" /* HUE_RANGE */].MIN, __WEBPACK_IMPORTED_MODULE_2__consts__["d" /* HUE_RANGE */].MAX);
  const getRandomSaturation = () => Object(__WEBPACK_IMPORTED_MODULE_0__utils_random__["a" /* getRandomInt */])(__WEBPACK_IMPORTED_MODULE_2__consts__["g" /* SATURATION_RANGE */].MIN, __WEBPACK_IMPORTED_MODULE_2__consts__["g" /* SATURATION_RANGE */].MAX);
  const getRandomBrightness = () => Object(__WEBPACK_IMPORTED_MODULE_0__utils_random__["a" /* getRandomInt */])(__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* BRIGHTNESS_RANGE */].MIN, __WEBPACK_IMPORTED_MODULE_2__consts__["a" /* BRIGHTNESS_RANGE */].MAX);

  const subscribers = [];

  const notifySubscribers = () => {
    subscribers.forEach(cb => {
      cb();
    });
  };

  let hue = getRandomHue();
  let saturation = getRandomSaturation();
  let brightness = getRandomBrightness();
  let { red, green, blue } = Object(__WEBPACK_IMPORTED_MODULE_1__utils_convert__["a" /* convertHsbToRgb */])(hue, saturation, brightness);

  this.subscribe = callback => {
    subscribers.push(callback);
  };

  this.getColorHSB = () => ({ hue, saturation, brightness });
  this.getColorRGB = () => ({ red, green, blue });

  this.getHue = () => hue;
  this.getSaturation = () => saturation;
  this.getBrightness = () => brightness;

  this.getRed = () => red;
  this.getGreen = () => green;
  this.getBlue = () => blue;

  this.setColorHSB = color => {
    if (color.hue !== undefined) {
      hue = color.hue;
    }
    if (color.saturation !== undefined) {
      saturation = color.saturation;
    }
    if (color.brightness !== undefined) {
      brightness = color.brightness;
    }

    const rgbColors = Object(__WEBPACK_IMPORTED_MODULE_1__utils_convert__["a" /* convertHsbToRgb */])(hue, saturation, brightness);
    red = rgbColors.red;
    blue = rgbColors.blue;
    green = rgbColors.green;

    notifySubscribers();
  };

  this.setHue = value => {
    this.setColorHSB({ hue: value });
  };
  this.setSaturation = value => {
    this.setColorHSB({ saturation: value });
  };
  this.setBrightness = value => {
    this.setColorHSB({ brightness: value });
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomInt;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HSBPicker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hand__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(1);



function SaturationBrightnessPicker(colorManager) {
  const pickerWidth = __WEBPACK_IMPORTED_MODULE_1__consts__["f" /* SATURATION_BRIGHTNESS_PICKER_WIDTH */];
  const pickerHeight = __WEBPACK_IMPORTED_MODULE_1__consts__["e" /* SATURATION_BRIGHTNESS_PICKER_HEIGHT */];

  const div = document.createElement('div');
  const saturationGradient = document.createElement('div');
  const brightnessGradient = document.createElement('div');

  const updateColor = () => {
    const hue = colorManager.getHue();
    div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  };

  div.className = 'saturation-brightness-picker';

  saturationGradient.className = 'saturation-gradient';
  div.appendChild(saturationGradient);

  brightnessGradient.className = 'brightness-gradient';
  div.appendChild(brightnessGradient);

  updateColor();

  colorManager.subscribe(updateColor);

  function calculateSaturation(handPosition) {
    colorManager.setSaturation(handPosition.x * __WEBPACK_IMPORTED_MODULE_1__consts__["g" /* SATURATION_RANGE */].MAX / pickerWidth);
  }

  function calculateBrightness(handPosition) {
    const brightness = (pickerHeight - handPosition.y) * __WEBPACK_IMPORTED_MODULE_1__consts__["a" /* BRIGHTNESS_RANGE */].MAX / pickerHeight;
    colorManager.setBrightness(brightness);
  }

  function handleHandMove(handPosition) {
    calculateSaturation(handPosition);
    calculateBrightness(handPosition);
  }

  const { saturation, brightness } = colorManager.getColorHSB();

  const sliderPosition = {
    x: saturation * pickerWidth / __WEBPACK_IMPORTED_MODULE_1__consts__["g" /* SATURATION_RANGE */].MAX,
    y: (__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* BRIGHTNESS_RANGE */].MAX - brightness) * pickerHeight / __WEBPACK_IMPORTED_MODULE_1__consts__["a" /* BRIGHTNESS_RANGE */].MAX
  };

  const hand = new __WEBPACK_IMPORTED_MODULE_0__hand__["a" /* default */]({
    position: sliderPosition,
    movingArea: { x: { from: 0, to: pickerWidth }, y: { from: 0, to: pickerHeight } },
    parent: div,
    parentSize: { x: pickerWidth, y: pickerHeight },
    onHandMove: handleHandMove
  });

  div.appendChild(hand.render());

  this.render = () => div;
}

function HuePicker(colorManager) {
  const div = document.createElement('div');
  div.className = 'hue-picker';

  const hue = colorManager.getHue();

  const sliderPosition = {
    x: hue * __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* HUE_PICKER_WIDTH */] / __WEBPACK_IMPORTED_MODULE_1__consts__["d" /* HUE_RANGE */].MAX,
    y: __WEBPACK_IMPORTED_MODULE_1__consts__["b" /* HUE_PICKER_HEIGHT */] / 2
  };

  function calculateHue(handPosition) {
    colorManager.setHue(handPosition.x * __WEBPACK_IMPORTED_MODULE_1__consts__["d" /* HUE_RANGE */].MAX / __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* HUE_PICKER_WIDTH */]);
  }

  const hand = new __WEBPACK_IMPORTED_MODULE_0__hand__["a" /* default */]({
    position: sliderPosition,
    movingArea: {
      x: { from: 0, to: __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* HUE_PICKER_WIDTH */] },
      y: { from: __WEBPACK_IMPORTED_MODULE_1__consts__["b" /* HUE_PICKER_HEIGHT */] / 2, to: __WEBPACK_IMPORTED_MODULE_1__consts__["b" /* HUE_PICKER_HEIGHT */] / 2 }
    },
    parent: div,
    parentSize: { x: __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* HUE_PICKER_WIDTH */], y: __WEBPACK_IMPORTED_MODULE_1__consts__["b" /* HUE_PICKER_HEIGHT */] },
    onHandMove: calculateHue
  });

  div.appendChild(hand.render());

  this.render = () => div;
}

function HSBPicker(colorManager) {
  const div = document.createElement('div');

  const saturationBrightnessPicker = new SaturationBrightnessPicker(colorManager);
  const huePicker = new HuePicker(colorManager);

  div.appendChild(saturationBrightnessPicker.render());
  div.appendChild(huePicker.render());

  this.render = () => div;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Hand;
/**
 * Hand is a control element on input,
 * it's a white circle with which user controls
 * color value
 *
 * @param args
 *  movingArea: { x, y } - constraints for position, where hand can be
 *  position: { x, y }
 *  parent: reference to parent DOM Node
 *  parentSize: { x, y }
 *  onHandMove: a callback, that we should call, when hand was moved,
 *  we pass hand position to onHandMove
 */
function Hand(args) {
  const {
    movingArea,
    position,
    parent,
    parentSize,
    onHandMove
  } = args;

  const div = document.createElement('div');
  const setHandPosition = () => {
    div.style.top = `${position.y / parentSize.y * 100}%`;
    div.style.left = `${position.x / parentSize.x * 100}%`;
  };

  let isDragging = false;

  div.className = 'hand';

  setHandPosition();

  const changePosition = mouseCoordinates => {
    if (mouseCoordinates.x < movingArea.x.from) {
      position.x = movingArea.x.from;
    } else if (mouseCoordinates.x > movingArea.x.to) {
      position.x = movingArea.x.to;
    } else {
      position.x = mouseCoordinates.x;
    }

    if (mouseCoordinates.y < movingArea.y.from) {
      position.y = movingArea.y.from;
    } else if (mouseCoordinates.y > movingArea.y.to) {
      position.y = movingArea.y.to;
    } else {
      position.y = mouseCoordinates.y;
    }

    setHandPosition();
    onHandMove(position);
  };

  const handleMouseDown = event => {
    const rect = parent.getBoundingClientRect();
    const offsetX = rect.left;
    const offsetY = rect.top;

    isDragging = true;
    changePosition({ x: event.clientX - offsetX, y: event.clientY - offsetY });
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = event => {
    if (isDragging) {
      const rect = parent.getBoundingClientRect();
      const offsetX = rect.left;
      const offsetY = rect.top;

      changePosition({ x: event.clientX - offsetX, y: event.clientY - offsetY });
    }
  };

  parent.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mousemove', handleMouseMove);

  this.render = () => div;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RGBDisplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_convert__ = __webpack_require__(0);


function RGBDisplay(colorManager) {
  const div = document.createElement('div');
  div.className = 'rgb-display';

  const updateHtml = () => {
    const { red, green, blue } = colorManager.getColorRGB();
    div.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__utils_convert__["b" /* convertRgbToString */])(red, green, blue).toUpperCase();
  };

  colorManager.subscribe(updateHtml);

  updateHtml();

  this.render = () => div;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\n.app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.rgb-display {\n  text-align: center;\n  margin-bottom: 10px;\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 1.4rem;\n  color: #000; }\n\n.picker-container {\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.11);\n  padding: 10px 10px 20px 10px; }\n\n.saturation-brightness-picker {\n  position: relative;\n  width: 250px;\n  height: 150px;\n  border-radius: 5px;\n  background-color: white;\n  margin-bottom: 20px; }\n\n.saturation-gradient {\n  background: linear-gradient(to left, rgba(255, 255, 255, 0), #fff);\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  border-radius: 5px; }\n\n.brightness-gradient {\n  background: linear-gradient(to bottom, transparent, #000);\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  border-radius: 5px; }\n\n.hue-picker {\n  position: relative;\n  width: 250px;\n  height: 14px;\n  border-radius: 7px;\n  background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red); }\n\n.hand {\n  position: absolute;\n  cursor: hand;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: rgba(84, 82, 87, 0.15) 0 0 0 1px, rgba(84, 82, 87, 0.2) 0 2px 5px; }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);