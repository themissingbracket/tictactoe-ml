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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nvar Grid_1 = __importDefault(__webpack_require__(/*! ../shared/Grid */ \"./src/shared/Grid.tsx\"));\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nvar Current_File = path_1.default.resolve(__dirname);\r\ndotenv.config();\r\nvar app = express_1.default();\r\nvar router = express_1.default.Router();\r\nrouter.get('/', function (req, res, next) {\r\n    var props = { _id: '', Blocks: [], winningHand: [], gameOver: false, currentPlayerX: false };\r\n    var grid = server_1.renderToString(react_1.default.createElement(Grid_1.default, __assign({}, props)));\r\n    console.log(grid);\r\n    res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n        <head>\\n            <meta charset=\\\"UTF-8\\\"/>\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"/>\\n            <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\"/>\\n            <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"main.css\\\"/>\\n            <title>Document</title>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\" + grid + \"</div>\\n            <script src=\\\"main.js\\\"></script>\\n        </body>\\n        </html>\\n    \");\r\n});\r\napp.use('/', router);\r\nconsole.log(__dirname);\r\napp.use(express_1.default.static('./server/dist'));\r\nvar PORT = Number(process.env.PORT) || 3030;\r\napp.listen(PORT, function () { return console.log(\"App is running on port \" + PORT); });\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/index.tsx?");

/***/ }),

/***/ "./src/shared/Block.tsx":
/*!******************************!*\
  !*** ./src/shared/Block.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Block = function (_a) {\r\n    var value = _a.value, position = _a.position, onClick = _a.onClick, winning = _a.winning;\r\n    return (react_1.default.createElement(\"div\", { className: \"block \" + (!onClick ? \"disabled\" : \"\") + \" \" + (winning ? 'winning' : ''), onClick: function () { return onClick && onClick(position); } },\r\n        react_1.default.createElement(\"span\", null, value)));\r\n};\r\nexports.default = Block;\r\n\n\n//# sourceURL=webpack:///./src/shared/Block.tsx?");

/***/ }),

/***/ "./src/shared/Grid.tsx":
/*!*****************************!*\
  !*** ./src/shared/Grid.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Block_1 = __importDefault(__webpack_require__(/*! ./Block */ \"./src/shared/Block.tsx\"));\r\nvar Grid = function (props) {\r\n    var _id = props._id, Blocks = props.Blocks, winningHand = props.winningHand, gameOver = props.gameOver, currentPlayerX = props.currentPlayerX;\r\n    var blockClickedController = function (id) { return console.log(\"blockClicked\"); };\r\n    var Message = \"Message\";\r\n    var Reset = function () { return \"Reset\"; };\r\n    return (react_1.default.createElement(react_1.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: \"gameBoard\" },\r\n            react_1.default.createElement(\"div\", { className: \"header\" },\r\n                react_1.default.createElement(\"header\", null, Message)),\r\n            react_1.default.createElement(\"div\", { className: \"grid\" },\r\n                react_1.default.createElement(\"div\", { className: \"row\" },\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(0) ? true : false, value: Blocks[0], onClick: !gameOver ? blockClickedController : null, position: 0 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(1) ? true : false, value: Blocks[1], onClick: !gameOver ? blockClickedController : null, position: 1 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(2) ? true : false, value: Blocks[2], onClick: !gameOver ? blockClickedController : null, position: 2 })),\r\n                react_1.default.createElement(\"div\", { className: \"row\" },\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(3) ? true : false, value: Blocks[3], onClick: !gameOver ? blockClickedController : null, position: 3 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(4) ? true : false, value: Blocks[4], onClick: !gameOver ? blockClickedController : null, position: 4 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(5) ? true : false, value: Blocks[5], onClick: !gameOver ? blockClickedController : null, position: 5 })),\r\n                react_1.default.createElement(\"div\", { className: \"row\" },\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(6) ? true : false, value: Blocks[6], onClick: !gameOver ? blockClickedController : null, position: 6 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(7) ? true : false, value: Blocks[7], onClick: !gameOver ? blockClickedController : null, position: 7 }),\r\n                    react_1.default.createElement(Block_1.default, { winning: winningHand.includes(8) ? true : false, value: Blocks[8], onClick: !gameOver ? blockClickedController : null, position: 8 }))),\r\n            react_1.default.createElement(\"div\", { className: \"button-box\" },\r\n                react_1.default.createElement(\"div\", { className: \"btn\" },\r\n                    react_1.default.createElement(\"button\", { onClick: Reset }, \" Reset Game \"))),\r\n            react_1.default.createElement(\"footer\", { className: \"footer\" },\r\n                react_1.default.createElement(\"span\", null,\r\n                    \"Contribute on\",\r\n                    react_1.default.createElement(\"a\", { href: \"https://github.com/themissingbracket/tictactoe\", target: \"_blank\", rel: \"noopener noreferrer\" },\r\n                        \" Github\",\r\n                        react_1.default.createElement(\"img\", { style: { paddingLeft: \"5px\", color: \"#bdc3c7\" }, src: \"assets/github-social.png\", alt: \"\", height: \"20px\", width: \"20px\" }))),\r\n                react_1.default.createElement(\"span\", null, !_id &&\r\n                    \"http://localhost:3000?_id=\" + _id)))));\r\n};\r\nexports.default = Grid;\r\n\n\n//# sourceURL=webpack:///./src/shared/Grid.tsx?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });