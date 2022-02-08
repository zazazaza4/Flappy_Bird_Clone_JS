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

/***/ "./src/img/Sprites.png":
/*!*****************************!*\
  !*** ./src/img/Sprites.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c37f433b9b3b4cdccc36b809168e23ae.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Sprites.png */ "./src/img/Sprites.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var game = document.querySelector(".game__area");
var root = game.getContext("2d");
game.width = 600; //window.innerWidth

game.height = window.innerHeight - 10; //window.innerHeight

var gravity = 0.14;

var Bird = /*#__PURE__*/function () {
  function Bird() {
    _classCallCheck(this, Bird);

    this.position = {
      x: game.width / 2,
      y: game.height / 2
    };
    this.size = {
      width: 34,
      height: 24
    };
    this.velocity = {
      x: 0,
      y: 3
    };
    this.jump = {
      height: 0,
      length: 4,
      count: 0
    };
  }

  _createClass(Bird, [{
    key: "draw",
    value: function draw() {
      root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 3, 490, 17, 13, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y - this.jump.height;
      this.jumpBird();
      this.collisionWall();
      this.velocity.y += gravity;
    }
  }, {
    key: "collisionWall",
    value: function collisionWall() {
      if (this.position.y + this.size.height + platform.size.height > game.height) {
        this.position.y = game.height - this.size.height - platform.size.height;
      }

      if (this.position.y - this.size.height < 0) {
        this.position.y = game.height / 2;
      }
    }
  }, {
    key: "jumpBird",
    value: function jumpBird() {
      if (keys.space.pressed) {
        this.jump.count++;
        this.jump.height = 4 * this.jump.length * Math.sin(Math.PI * this.jump.count / this.jump.length);
      }

      if (this.jump.count > this.jump.length) {
        this.jump.count = 0;
        this.velocity.y = 0;
        this.jump.height = 0;
        keys.space.pressed = false;
      }
    }
  }]);

  return Bird;
}();

;

var Pipe = /*#__PURE__*/function () {
  function Pipe() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var side = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Pipe);

    this.position = {
      x: x,
      y: y
    };
    this.size = {
      width: 60,
      height: 700
    };
    this.imageSideTop = {
      x: 56
    };
    this.imageSideBottom = {
      x: 84
    };
    this.side = side;

    if (this.side) {
      this.imageSide = this.imageSideTop;
    } else {
      this.imageSide = this.imageSideBottom;
    }
  }

  _createClass(Pipe, [{
    key: "draw",
    value: function draw() {
      root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), this.imageSide.x, 323, 26, 160, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x -= 3;
    }
  }, {
    key: "randomHeight",
    value: function randomHeight() {
      return Math.floor(Math.random() * (-120 - -600 + 1) + -600);
    }
  }]);

  return Pipe;
}();

;

var Platform = /*#__PURE__*/function () {
  function Platform() {
    _classCallCheck(this, Platform);

    this.size = {
      width: game.width,
      height: 75
    };
    this.position = {
      x: 0,
      y: game.height - this.size.height
    };
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 292, 0, 152, 56, this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }]);

  return Platform;
}();

var Score = /*#__PURE__*/function () {
  function Score() {
    var scoreNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Score);

    this.position = {
      x: 10,
      y: 50
    };
    this.setup = '50px serif';
    this.scoreNumber = scoreNumber;
  }

  _createClass(Score, [{
    key: "draw",
    value: function draw() {
      root.font = this.setup;
      root.fillText(this.scoreNumber, this.position.x, this.position.y);
    }
  }]);

  return Score;
}(); //create bird


var bird = new Bird(); //create pipe 

var pipe = new Pipe();
var score = new Score();
var platform = new Platform(); // to check if a user pressed the space bar 

var keys = {
  space: {
    pressed: false
  }
}; // function for creating image

function createImage(imageScr) {
  var image = new Image();
  image.src = imageScr;
  return image;
} // Pairs of pipes replace if their position + their width < than 0 


function replacePairOfPipes(arrayPairOfPipes) {
  var currentRandom = Math.floor(Math.random() * (-120 - -600 + 1) + -600);

  if (arrayPairOfPipes[0].position.x + arrayPairOfPipes[0].size.width < 0) {
    for (var i = 0; i < arrayPairOfPipes.length; i++) {
      arrayPairOfPipes[i].position.x = 2000;
      arrayPairOfPipes[i].position.y = currentRandom + i * 800;
    }
  }
} // Collision between Bird and Pipes


function ditectionCollisionBirdAndPipes(pipeCollision) {
  if (bird.position.x + bird.size.width >= pipeCollision.position.x && bird.position.x <= pipeCollision.size.width + pipeCollision.position.x && bird.position.y + bird.size.height >= pipeCollision.position.y && bird.position.y <= pipeCollision.size.height + pipeCollision.position.y) {
    return true;
  } else {
    return false;
  }
} // function for creating five pairs of pipes 


function createPairOfPipes() {
  var pipes = [[], [], [], [], []];
  var min = -630,
      max = -200;

  for (var j = 0; j < 5; j++) {
    var randomY = Math.floor(Math.random() * (max - min + 1) + min);
    pipes[j][0] = new Pipe(game.width + (200 + j * 400), randomY);
    pipes[j][1] = new Pipe(game.width + (200 + j * 400), randomY + 800, false);
  }

  return pipes;
}

var pairPipes = createPairOfPipes(); //main function 

function animation() {
  requestAnimationFrame(animation);
  root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 0, 0, 144, 256, 0, 0, game.width, game.height);

  for (var i = 0; i < 5; i++) {
    pairPipes[i].forEach(function (pipe) {
      pipe.update();
    });
    replacePairOfPipes(pairPipes[i]);
  }

  for (var _i = 0; _i < 5; _i++) {
    for (var j = 0; j < 2; j++) {
      if (ditectionCollisionBirdAndPipes(pairPipes[_i][j])) {
        console.log("hit");
      }
    }
  }

  platform.draw();
  score.draw();
  bird.update();
}

animation();
document.addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 32:
      console.log("space");
      keys.space.pressed = true;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map