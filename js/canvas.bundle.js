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

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var game = document.querySelector(".game__area");
var root = game.getContext("2d");
game.width = 600; //window.innerWidth

game.height = window.innerHeight - 10; //window.innerHeight

var gravity = 1.5;

var Bird = /*#__PURE__*/function () {
  function Bird() {
    _classCallCheck(this, Bird);

    this.position = {
      x: game.width / 2,
      y: game.height / 2
    };
    this.size = {
      radius: 12
    };
    this.velocity = {
      x: 0,
      y: 3
    };
    this.jump = {
      height: 0,
      length: 7,
      count: 0
    };
  }

  _createClass(Bird, [{
    key: "draw",
    value: function draw() {
      root.beginPath();
      root.arc(this.position.x, this.position.y, this.size.radius, 0, Math.PI * 2, false);
      root.fillStyle = 'yellow';
      root.fill();
      root.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += Math.floor(this.velocity.y + gravity) - this.jump.height;
      this.jumpBird();
      this.collisionWall();
    }
  }, {
    key: "collisionWall",
    value: function collisionWall() {
      if (this.position.y + this.size.radius > game.height) {
        this.position.y = game.height / 2;
      }

      if (this.position.y - this.size.radius < 0) {
        this.position.y = game.height / 2;
      }
    }
  }, {
    key: "jumpBird",
    value: function jumpBird() {
      if (keys.space.pressed) {
        this.jump.count++;
        this.jump.height = 2 * this.jump.length * Math.sin(Math.PI * this.jump.count / this.jump.length);
      }

      if (this.jump.count > this.jump.length) {
        this.jump.count = 0;
        this.jump.height = 0;
        keys.space.pressed = false;
      }
    }
  }]);

  return Bird;
}();

;

var Pipe = /*#__PURE__*/function () {
  function Pipe(x, y) {
    _classCallCheck(this, Pipe);

    this.position = {
      x: x,
      y: y
    };
    this.size = {
      width: 60,
      height: 700
    };
  }

  _createClass(Pipe, [{
    key: "draw",
    value: function draw() {
      root.fillStyle = "green";
      root.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.replace();
      this.position.x -= 3;
    }
  }, {
    key: "replace",
    value: function replace() {
      if (this.position.x + this.size.width < 0) {
        this.position.x = 1000;
      }
    }
  }]);

  return Pipe;
}();

;
var bird = new Bird(); //create a bird
//create pipes

var keys = {
  space: {
    pressed: false
  }
}; //pressedSpaceOrNot

function createPairOfPipes() {
  var pipes = [];
  var randomY = Math.floor(Math.random() * (-120 - -600 + 1) + -600);

  for (var i = 0; i < 2; i++) {
    pipes[i] = new Pipe(game.width + 200, randomY + i * (700 + 100));
  }

  return pipes;
}

var pairPipers = createPairOfPipes();
console.log(pairPipers);

function animation() {
  requestAnimationFrame(animation);
  root.fillStyle = "#296389";
  root.fillRect(0, 0, game.width, game.height);
  pairPipers.forEach(function (pipe) {
    pipe.update();
  });
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