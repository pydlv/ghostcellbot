/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EMPTY\": () => (/* binding */ EMPTY),\n/* harmony export */   \"PLAYER_1\": () => (/* binding */ PLAYER_1),\n/* harmony export */   \"PLAYER_2\": () => (/* binding */ PLAYER_2),\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\nconst EMPTY = 0;\r\nconst PLAYER_1 = 1;\r\nconst PLAYER_2 = 2;\r\nclass Board {\r\n    constructor() {\r\n        this.grid = Array.from({ length: 63 }, () => EMPTY);\r\n    }\r\n    updateFromInput() {\r\n        for (let i = 0; i < 7; i++) {\r\n            const row = i;\r\n            const boardRow = readline(); // one row of the board (from top to bottom)\r\n            for (const [column, character] of [...boardRow].entries()) {\r\n                let value = EMPTY;\r\n                if (character === '0') {\r\n                    value = PLAYER_1;\r\n                }\r\n                else if (character === '1') {\r\n                    value = PLAYER_2;\r\n                }\r\n                this.setSlot(row, column, value);\r\n            }\r\n        }\r\n        console.warn(\"Board state:\");\r\n        this.print();\r\n    }\r\n    setSlot(row, column, value) {\r\n        this.grid[row * 9 + column] = value;\r\n    }\r\n    getSlot(row, column) {\r\n        return this.grid[row * 9 + column];\r\n    }\r\n    print() {\r\n        for (let y = 0; y < 6; y++) {\r\n            const row = [];\r\n            for (let column = 0; column < 9; column++) {\r\n                const value = this.grid[y * 9 + column];\r\n                row.push(value);\r\n            }\r\n            console.warn(row.join(', '));\r\n        }\r\n    }\r\n    getWinner() {\r\n        for (let row = 0; row < 7; row++) {\r\n            for (let column = 0; column < 9; column++) {\r\n                // Horizontal check\r\n                if (column <= 5) {\r\n                    const player = this.getSlot(row, column);\r\n                    if (player &\r\n                        this.getSlot(row, column + 1) &\r\n                        this.getSlot(row, column + 2) &\r\n                        this.getSlot(row, column + 3)) {\r\n                        return player;\r\n                    }\r\n                }\r\n                // Vertical check\r\n                if (row <= 3) {\r\n                    const player = this.getSlot(row, column);\r\n                    if (player &\r\n                        this.getSlot(row + 1, column) &\r\n                        this.getSlot(row + 2, column) &\r\n                        this.getSlot(row + 3, column)) {\r\n                        return player;\r\n                    }\r\n                }\r\n                // Ascending diagonal check\r\n                if (row >= 3 && column <= 5) {\r\n                    const player = this.getSlot(row, column);\r\n                    if (player &\r\n                        this.getSlot(row - 1, column + 1) &\r\n                        this.getSlot(row - 2, column + 2) &\r\n                        this.getSlot(row - 3, column + 3)) {\r\n                        return player;\r\n                    }\r\n                }\r\n                // Descending diagonal check\r\n                if (row <= 3 && column <= 5) {\r\n                    const player = this.getSlot(row, column);\r\n                    if (player &\r\n                        this.getSlot(row + 1, column + 1) &\r\n                        this.getSlot(row + 2, column + 2) &\r\n                        this.getSlot(row + 3, column + 3)) {\r\n                        return player;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return EMPTY;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n\r\nclass Game {\r\n    constructor() {\r\n        this.turn = 0;\r\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__.Board();\r\n    }\r\n    processTurn() {\r\n        this.turn = parseInt(readline());\r\n        this.board.updateFromInput();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\r\nconst inputs = readline().split(' ');\r\nconst myId = parseInt(inputs[0]); // 0 or 1 (Player 0 plays first)\r\nconst oppId = parseInt(inputs[1]); // if your index is 0, this will be 1, and vice versa\r\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();\r\nfunction receiveUnusedInput() {\r\n    const numValidActions = parseInt(readline());\r\n    for (let i = 0; i < numValidActions; i++) {\r\n        parseInt(readline());\r\n    }\r\n    parseInt(readline());\r\n}\r\n// game loop\r\nwhile (true) {\r\n    game.processTurn();\r\n    receiveUnusedInput();\r\n    // Output a column index to drop the chip in. Append message to show in the viewer.\r\n    console.log('0');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;