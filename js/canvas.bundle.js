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
var menuButtonParent = document.querySelector(".menu__buttons"),
    menuBody = document.querySelector(".menu"),
    scoreCurrentEl = document.querySelector('#score__current'),
    scoreBestEl = document.querySelector('#score__best');
game.width = 600; //window.innerWidth

game.height = 745; //window.innerHeight

var gravity = 0.14;
var bestScore = 0;
var startGame = false;

var Bird = /*#__PURE__*/function () {
  function Bird() {
    _classCallCheck(this, Bird);

    this.position = {
      x: game.width / 2,
      y: game.height / 2
    };
    this.positionCurrent = {
      x: this.position.x,
      y: this.position.y
    };
    this.size = {
      width: 33,
      height: 24
    };
    this.velocity = {
      x: 0,
      y: 3
    };
    this.jump = {
      height: 0,
      length: 10,
      count: 0
    };
    this.angle = 0;
    this.radius = 12;
    this.frame = {
      current: 0,
      slow: 0
    };
  }

  _createClass(Bird, [{
    key: "draw",
    value: function draw() {
      root.save();
      root.translate(this.position.x, this.position.y);
      root.rotate(this.angle * Math.PI / 180);
      root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 3 + 28 * this.frame.current, 490, 17, 13, -this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);
      root.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.frame.slow++;

      if (this.frame.slow > 7) {
        if (this.frame.current > 1) this.frame.current = 0;
        this.frame.current++;
        this.frame.slow = 0;
      }

      if (startGame) {
        this.angle += 4;
        this.position.y += this.velocity.y - this.jump.height;
        this.velocity.y += gravity;
      }

      if (this.angle > 90) {
        this.angle = 90;
      }

      this.draw();
      this.jumpBird();
      this.collisionWall();
    }
  }, {
    key: "collisionWall",
    value: function collisionWall() {
      if (this.position.y + platform.size.height > game.height) {
        endGame();
      }

      if (this.position.y < 0) {
        endGame();
      }
    }
  }, {
    key: "jumpBird",
    value: function jumpBird() {
      if (keys.space.pressed) {
        this.jump.count++;
        this.angle = -30;
        this.jump.height = this.jump.length * Math.sin(Math.PI * this.jump.count / this.jump.length);
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

    this.scoreOne = false;
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
      this.position.x -= 2.2;
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
    _classCallCheck(this, Score);

    this.position = {
      x: 10,
      y: 50
    };
    this.setup = 'bold 50px Montserrat';
  }

  _createClass(Score, [{
    key: "draw",
    value: function draw() {
      var scoreNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      root.fillStyle = '#ddd';
      root.font = this.setup;
      root.strokeText(scoreNumber, this.position.x, this.position.y);
      root.fillText(scoreNumber, this.position.x, this.position.y);
    }
  }]);

  return Score;
}(); //create bird


var bird = new Bird(); //create pipe 

var pipesPair = [];
var scoreNumber = 0;
var score = new Score();
var platform = new Platform(); // to check if a user pressed the space bar 

var keys = {
  space: {
    pressed: false
  }
};

function init() {
  bird = new Bird();
  pipesPair = [];
  scoreNumber = 0;
  score = new Score();
  platform = new Platform();
  startGame = false;
} // function for creating image


function createImage(imageScr) {
  var image = new Image();
  image.src = imageScr;
  return image;
} // Collision between Bird and Pipes


function ditectionCollisionBirdAndPipes(pipeCollision) {
  var test = {
    x: bird.position.x,
    y: bird.position.y
  }; // which edge is closest?

  if (bird.position.x < pipeCollision.position.x) {
    test.x = pipeCollision.position.x;
  } else if (bird.position.x > pipeCollision.position.x + pipeCollision.size.width) {
    test.x = pipeCollision.position.x + pipeCollision.size.width;
  }

  if (bird.position.y < pipeCollision.position.y) {
    test.y = pipeCollision.position.y;
  } else if (bird.position.y > pipeCollision.position.y + pipeCollision.size.height) {
    test.y = pipeCollision.position.y + pipeCollision.size.height;
  } // get distance from closest edges


  var dist = {
    y: bird.position.y - test.y,
    x: bird.position.x - test.x
  };
  var distance = Math.sqrt(Math.pow(dist.x, 2) + Math.pow(dist.y, 2));
  if (distance <= bird.radius) return true;
  return false;
} // function for creating pairs of pipes 


function createPairOfPipes() {
  var min = -630,
      max = -200;
  var pipes = [];
  var randomY = Math.floor(Math.random() * (max - min + 1) + min);
  pipes[0] = new Pipe(game.width + 600, randomY);
  pipes[1] = new Pipe(game.width + 600, randomY + 800, false);
  pipesPair.push(pipes);
}

setInterval(function () {
  if (startGame) {
    createPairOfPipes();
  }
}, 2500); // end game

function endGame() {
  cancelAnimationFrame(animationId);
  menuBody.style.display = "block";
  scoreCurrentEl.innerHTML = scoreNumber;

  if (bestScore < scoreNumber) {
    bestScore = scoreNumber;
    scoreBestEl.innerHTML = bestScore;
  }

  init();
} //main function


var animationId;

function animation() {
  animationId = requestAnimationFrame(animation);
  root.drawImage(createImage(_img_Sprites_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 0, 0, 144, 256, 0, 0, game.width, game.height);
  pipesPair.forEach(function (pipePair) {
    pipePair.forEach(function (pipe) {
      pipe.update();

      if (ditectionCollisionBirdAndPipes(pipe)) {
        endGame();
      }
    });

    if (pipePair[0].position.x + pipePair[0].size.width < -400) {
      pipesPair.splice(0, 1);
    }

    if (pipePair[0].position.x + pipePair[0].size.width < game.width / 2 && pipePair[0].scoreOne == false) {
      pipePair[0].scoreOne = true;
      scoreNumber++;
    }
  });
  platform.draw();
  bird.collisionWall();
  score.draw(scoreNumber);
  root.save();
  bird.update();
}

menuButtonParent.addEventListener('click', function (event) {
  if (event.target && event.target.textContent == 'START') {
    menuBody.style.display = "none";
    animation();
  }
});
document.addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 32:
      startGame = true;
      keys.space.pressed = true;
      break;
  }
});
document.addEventListener('click', function () {
  startGame = true;
  keys.space.pressed = true;
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map