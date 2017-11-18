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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _caret = __webpack_require__(1);

var _consts = __webpack_require__(2);

var textBox = document.getElementById('text-box');

/*
* That regex selects all hashtags, examples of hashtags:
* #JavaScript, #ES6
* */
var hashtagRegex = /#[a-z0-9_]+/gi;

/*
* That regex selects hashtags, that are not wrapped in <span class="hashtag"> ... </span>
*
* Example: '#Hello' is matching this regex, and '#Hello</span>' isn't
*
* (?!<\/span>)\b means that there should not be a '</span>' after hashtag
* '<' character can appear only in html tags, in innerHTML '<' is replaced with '&lt;'
* */
var notWrappedHashtagRegex = /#[a-z0-9_]+(?!<\/span>)\b/i;

/*
* That function wraps given hashtag to <span class="hashtag"> ... </span>
* and changes textBox.innerHTML
* */
function wrapHashTag(hashtag) {
  var firstCharacterPosition = hashtag.index;
  var hashtagText = hashtag[0];
  var hashtagLength = hashtagText.length;
  var lastCharacterPosition = firstCharacterPosition + hashtagLength;

  var htmlBeforeHashtag = textBox.innerHTML.slice(0, firstCharacterPosition);
  var htmlAfterHashTag = textBox.innerHTML.slice(lastCharacterPosition);

  textBox.innerHTML = htmlBeforeHashtag + '<span class="hashtag">' + hashtagText + '</span>' + htmlAfterHashTag;
}

function handleInput() {
  // Save current position of a caret
  var caretPosition = (0, _caret.getCaretPosition)(textBox);

  // remove all spans, that wraps hashtags
  var htmlWithoutSpans = textBox.innerHTML;

  htmlWithoutSpans = htmlWithoutSpans.replace(/<span class="hashtag">/g, '');
  htmlWithoutSpans = htmlWithoutSpans.replace(/<\/span>/g, '');

  textBox.innerHTML = htmlWithoutSpans;

  // Find how many hashtags there is in the textBox
  var matches = textBox.innerHTML.match(hashtagRegex);

  if (matches !== null) {
    // wrap each hashtag to <span> tag
    for (var i = 0; i < matches.length; i += 1) {
      wrapHashTag(textBox.innerHTML.match(notWrappedHashtagRegex));
    }
  }

  // restore caret position
  (0, _caret.setCaretPosition)(textBox, caretPosition);
}

/*
* There's weird behavior of cursor, when we type Enter and then call handleInput()
* So, for now, let it be one-line input box, at least, it works well
* */
function handleKeyDown(event) {
  if (event.keyCode === _consts.KEY_CODES.ENTER) {
    event.preventDefault();
    return;
  }

  /*
  * KeyDown eventListener is fired before character is added to html,
  * but we need that character to be in textBox.innerHTML to control wrapping
  * So let's just wait, before character will be added
  *
  * I know, that setTimeout is very dangerous to use, is there more efficient solution?
  * */
  setTimeout(handleInput, 0);
}

textBox.addEventListener('keydown', handleKeyDown, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCaretPosition = getCaretPosition;
exports.setCaretPosition = setCaretPosition;

var _consts = __webpack_require__(2);

/*
* That function searches a caret (cursor) position in DOM node
* Function doesn't count html tags and html entities
*
* Example: <div>Hello <b>World</b> |</div>,
* where div - an element, and | is a cursor
* result will be 7
*
* Now it doesn't work in IE
* TODO: make it work in IE
* */
function getCaretPosition(element) {
  var characterPosition = 0;

  var range = window.getSelection().getRangeAt(0);
  var clonedRange = range.cloneRange();

  clonedRange.selectNodeContents(element);
  clonedRange.setEnd(range.endContainer, range.endOffset);
  characterPosition = clonedRange.toString().length;

  return characterPosition;
}

/*
* That function sets cursor to specific position in html tag,
* that can have children
*
* Example of element:
* <div>Hello <div>World<b>!</b></div></div>
* */
function setCaretPosition(element, position) {
  var currentPosition = position;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = element.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.nodeType === _consts.DOM_NODE_TYPES.TEXT) {
        if (node.length >= currentPosition) {
          var range = document.createRange();
          var selection = window.getSelection();

          range.setStart(node, currentPosition);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);

          return -1; // we are done
        }
        currentPosition -= node.length;
      } else {
        currentPosition = setCaretPosition(node, currentPosition);

        if (currentPosition === -1) {
          return -1; // no need to finish the for loop
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return currentPosition; // needed because of recursion stuff
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEY_CODES = exports.DOM_NODE_TYPES = undefined;

var _domNodeTypes = __webpack_require__(3);

var _domNodeTypes2 = _interopRequireDefault(_domNodeTypes);

var _keyCodes = __webpack_require__(4);

var _keyCodes2 = _interopRequireDefault(_keyCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DOM_NODE_TYPES = _domNodeTypes2.default;
exports.KEY_CODES = _keyCodes2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOM_NODE_TYPES = {
  TEXT: 3
};

exports.default = DOM_NODE_TYPES;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEY_CODES = {
  ENTER: 13
};

exports.default = KEY_CODES;

/***/ })
/******/ ]);