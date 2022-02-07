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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background0.png":
/*!*********************************!*\
  !*** ./src/img/background0.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a7902363171f60746b18fe905732af5.png");

/***/ }),

/***/ "./src/img/hero_left.png":
/*!*******************************!*\
  !*** ./src/img/hero_left.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbb33d5aee3c5d03c8b833543bcc7dc9.png");

/***/ }),

/***/ "./src/img/hero_rigth.png":
/*!********************************!*\
  !*** ./src/img/hero_rigth.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec62c4751b3102633f18526ce80280fa.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "10a205d414a8922fa719c575d1b8a93c.png");

/***/ }),

/***/ "./src/img/tree.png":
/*!**************************!*\
  !*** ./src/img/tree.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "837cda671accc09ac154574324727fbe.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background0.png */ "./src/img/background0.png");
/* harmony import */ var _img_tree_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/tree.png */ "./src/img/tree.png");
/* harmony import */ var _img_hero_rigth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/hero_rigth.png */ "./src/img/hero_rigth.png");
/* harmony import */ var _img_hero_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/hero_left.png */ "./src/img/hero_left.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var game = document.querySelector(".game__area");
var root = game.getContext("2d");
var score = document.querySelector(".score");
game.width = 1024; //window.innerWidth

game.height = 576; //window.innerHeight

var gravite = .6;

var Hero = /*#__PURE__*/function () {
  function Hero() {
    _classCallCheck(this, Hero);

    this.position = {
      x: 200,
      y: 300
    };
    this.size = {
      width: 38,
      height: 72
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.jump = {
      count: 0,
      length: 12,
      height: 0
    };
    this.speed = 5;
    this.frame = 0;
    this.slowFrame = 0;
    this.sprite = {
      stand: {
        right: {
          image: createImage(_img_hero_rigth_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
          x: 14,
          y: 0,
          width: 19,
          height: 36,
          slowFrame: 8,
          quantity: 3
        },
        left: {
          image: createImage(_img_hero_left_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          x: 172,
          y: 0,
          width: 19,
          height: 36,
          slowFrame: 8,
          quantity: 3
        }
      },
      jump: {
        right: {
          image: createImage(_img_hero_rigth_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
          y: 75,
          x: 14,
          width: 19,
          height: 36,
          slowFrame: 4,
          quantity: 3
        },
        left: {
          image: createImage(_img_hero_left_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          x: 14,
          y: 75,
          width: 19,
          height: 36,
          slowFrame: 4,
          quantity: 3
        }
      },
      run: {
        right: {
          image: createImage(_img_hero_rigth_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
          x: 67,
          y: 37,
          width: 23,
          height: 38,
          slowFrame: 2,
          quantity: 3
        },
        left: {
          image: createImage(_img_hero_left_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          x: 19,
          y: 37,
          width: 19,
          height: 38,
          slowFrame: 2,
          quantity: 3
        }
      }
    };
    this.currentSprite = this.sprite.stand.right;
  }

  _createClass(Hero, [{
    key: "draw",
    value: function draw() {
      root.drawImage(this.currentSprite.image, this.currentSprite.x + 50 * this.frame, this.currentSprite.y, this.currentSprite.width, this.currentSprite.height, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.slowFrame++;

      if (this.slowFrame > this.currentSprite.slowFrame * this.frame) {
        this.frame++;
        if (this.frame > this.currentSprite.quantity) this.frame = 0;
        this.slowFrame = 0;
      }

      this.draw();
      this.position.y += this.velocity.y - this.jump.height;
      this.position.x += this.velocity.x;
      this.collisionDown();
    }
  }, {
    key: "collisionDown",
    value: function collisionDown() {
      if (game.height >= this.position.y + this.size.height + this.velocity.y) this.velocity.y += gravite;
    }
  }]);

  return Hero;
}();

;

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.size = {
      width: width,
      height: height
    };
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      root.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }]);

  return Platform;
}();

;

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        _ref2$changePerSent = _ref2.changePerSent,
        changePerSent = _ref2$changePerSent === void 0 ? 1 : _ref2$changePerSent,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.changePerSent = changePerSent;
    this.image = image;
    this.size = {
      width: image.width / this.changePerSent,
      height: image.height / this.changePerSent
    };
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      root.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }]);

  return GenericObject;
}();

;

function createImage(imageScr) {
  var image = new Image();
  image.src = imageScr;
  return image;
}

var hero = new Hero();
var platforms = [];
var genericObject = [];
var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  hero = new Hero();
  platforms = [new Platform({
    x: -2,
    y: 530,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 498,
    y: 530,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 4.5,
    y: 530,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 8,
    y: 530,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 9,
    y: 530,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 12,
    y: 400,
    width: 500,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 14,
    y: 300,
    width: 200,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 16,
    y: 300,
    width: 200,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 18,
    y: 300,
    width: 60,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 19,
    y: 300,
    width: 100,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 200 * 20,
    y: 500,
    width: 100,
    height: 60,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  })];
  genericObject = [new GenericObject({
    x: 200,
    y: 240,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 200 * 2,
    changePerSent: 1.1,
    y: 280,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 200 * 3.5,
    y: 240,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    changePerSent: 1.1,
    x: 200 * 6.73,
    y: 280,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    changePerSent: 1.1,
    x: 200 * 12,
    y: 310,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    changePerSent: 0.8,
    x: 200 * 10,
    y: 210,
    image: createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  scrollOffset = 0;
}

;

function animation() {
  requestAnimationFrame(animation);
  root.drawImage(createImage(_img_background0_png__WEBPACK_IMPORTED_MODULE_1__["default"]), -1, -1, game.width, game.height);
  genericObject.forEach(function (genericObj) {
    genericObj.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  hero.update();

  if (keys.left.pressed === true && hero.position.x > 100 || keys.left.pressed && scrollOffset === 0 && hero.position.x > 0) {
    hero.velocity.x = -hero.speed;
  } else if (keys.right.pressed === true && hero.position.x < 400) {
    hero.velocity.x = hero.speed;
  } else {
    hero.velocity.x = 0;

    if (keys.left.pressed && scrollOffset > 0) {
      platforms.forEach(function (platform) {
        platform.position.x += hero.speed;
      });
      genericObject.forEach(function (genericObj) {
        genericObj.position.x += hero.speed * 0.66;
      });
      scrollOffset -= hero.speed;
    } else if (keys.right.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x -= hero.speed;
      });
      genericObject.forEach(function (genericObj) {
        genericObj.position.x -= hero.speed * 0.66;
      });
      scrollOffset += hero.speed;
    }
  } //platform colition ;)


  platforms.forEach(function (platform) {
    if (hero.position.y + hero.size.height <= platform.position.y && hero.position.y + hero.size.height + hero.velocity.y >= platform.position.y && hero.position.x + hero.size.width >= platform.position.x && hero.position.x <= platform.position.x + platform.size.width) {
      hero.velocity.y = 0;
    }
  }); //jump

  if (keys.jump.pressed) {
    hero.jump.count++;
    console.log(hero.jump.count);
    hero.jump.height = 2 * hero.jump.length - gravite * hero.jump.count;

    if (hero.jump.count > hero.jump.length) {
      keys.jump.pressed = false;
      hero.jump.count = 0;
      hero.jump.height = 0;
    }
  }

  score.innerHTML = (scrollOffset / 50).toFixed(0); //You win

  if (scrollOffset > 3630) {
    console.log("you win");
    score.innerHTML = "You won";
  } //you lose


  if (game.height < hero.position.y) {
    init();
  }
}

init();
animation();
document.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 37:
    case 65:
      console.log("left");
      keys.left.pressed = true;
      hero.currentSprite = hero.sprite.run.left;
      break;

    case 38:
    case 87:
      console.log("up");
      keys.jump.pressed = true;
      break;

    case 39:
    case 68:
      console.log("right");
      keys.right.pressed = true;
      hero.currentSprite = hero.sprite.run.right;
      break;

    case 40:
    case 83:
      console.log("down");
      break;
  }
});
document.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 37:
    case 65:
      console.log("left");
      keys.left.pressed = false;
      hero.currentSprite = hero.sprite.stand.left;
      break;

    case 38:
    case 87:
      console.log("up");
      break;

    case 39:
    case 68:
      console.log("right");
      keys.right.pressed = false;
      hero.currentSprite = hero.sprite.stand.right;
      break;

    case 40:
    case 83:
      console.log("down");
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map