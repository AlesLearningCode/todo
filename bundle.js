/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");



const addProject = document.querySelector(".addProject")
const projectName = document.querySelector(".projectName")
addProject.addEventListener(`click`, () =>{
    const projectDiv = document.createElement("div")
    projectDiv.classList.add("projectDiv")
    projectDiv.setAttribute("index",`${_newProject__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1}`)
    projectDiv.setAttribute(`title`,`${projectName.value}`)
    projectDiv.style.width = `100px`
    projectDiv.style.height = `100px`
    projectDiv.style.border = `solid black 1px`
    _newProject__WEBPACK_IMPORTED_MODULE_0__["default"].push([])
    ___WEBPACK_IMPORTED_MODULE_2__.content.appendChild(projectDiv)
    console.log(_newProject__WEBPACK_IMPORTED_MODULE_0__["default"])
})
const addToDo = document.querySelector(".addToDo")
addToDo.addEventListener(`click`, () => {
    const projectDiv = document.querySelector("#content div")
    _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][projectDiv.getAttribute(`index`)].push((0,_newToDo__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName.value,"description","dueDate","priority","notes","checkList"))
    const allProjectDivs = document.querySelectorAll(".projectDiv")
    allProjectDivs.forEach((project,) => {
        console.log(projectDiv.getAttribute(`index`))
    project.addEventListener(`click`,() =>{
        const projectDiv = document.querySelector("#content div")
        console.log(projectDiv.getAttribute(`index`))
    })
})
})


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const home = document.createElement(`div`)
const allProjects = document.createElement(`div`)
const content = document.getElementById(`content`)
console.log(_newProject__WEBPACK_IMPORTED_MODULE_1__["default"])


/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");

const projects = [
]
projects.push([])
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/newToDo.js":
/*!************************!*\
  !*** ./src/newToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDo = function(title,description,dueDate,priority,notes,checkList){
    return {title,description,dueDate,priority,notes,checkList}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ1A7QUFDRDtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1EQUFRLFlBQVk7QUFDM0QsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osSUFBSSxzQ0FBTztBQUNYLGdCQUFnQixtREFBUTtBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBUSx3Q0FBd0Msb0RBQUk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjJCO0FBQ087QUFDSDtBQUNoQztBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDTlE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDSmY7QUFDQSxZQUFZO0FBQ1o7QUFDQSxpRUFBZTs7Ozs7O1VDSGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL25ld1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vbmV3UHJvamVjdFwiXG5pbXBvcnQgdG9EbyBmcm9tIFwiLi9uZXdUb0RvXCJcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLlwiXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdE5hbWVcIilcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PntcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIilcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImluZGV4XCIsYCR7cHJvamVjdHMubGVuZ3RoIC0gMX1gKVxuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKGB0aXRsZWAsYCR7cHJvamVjdE5hbWUudmFsdWV9YClcbiAgICBwcm9qZWN0RGl2LnN0eWxlLndpZHRoID0gYDEwMHB4YFxuICAgIHByb2plY3REaXYuc3R5bGUuaGVpZ2h0ID0gYDEwMHB4YFxuICAgIHByb2plY3REaXYuc3R5bGUuYm9yZGVyID0gYHNvbGlkIGJsYWNrIDFweGBcbiAgICBwcm9qZWN0cy5wdXNoKFtdKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbn0pXG5jb25zdCBhZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb0RvXCIpXG5hZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgZGl2XCIpXG4gICAgcHJvamVjdHNbcHJvamVjdERpdi5nZXRBdHRyaWJ1dGUoYGluZGV4YCldLnB1c2godG9Ebyhwcm9qZWN0TmFtZS52YWx1ZSxcImRlc2NyaXB0aW9uXCIsXCJkdWVEYXRlXCIsXCJwcmlvcml0eVwiLFwibm90ZXNcIixcImNoZWNrTGlzdFwiKSlcbiAgICBjb25zdCBhbGxQcm9qZWN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERpdlwiKVxuICAgIGFsbFByb2plY3REaXZzLmZvckVhY2goKHByb2plY3QsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3REaXYuZ2V0QXR0cmlidXRlKGBpbmRleGApKVxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCgpID0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50IGRpdlwiKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGl2LmdldEF0dHJpYnV0ZShgaW5kZXhgKSlcbiAgICB9KVxufSlcbn0pXG5leHBvcnQge2FkZFByb2plY3R9IiwiaW1wb3J0IHRvRG8gZnJvbSAnLi9uZXdUb0RvJ1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vbmV3UHJvamVjdCdcbmltcG9ydCB7YWRkUHJvamVjdH0gZnJvbSAnLi9ET00nXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbmNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGVudGApXG5jb25zb2xlLmxvZyhwcm9qZWN0cylcbmV4cG9ydCB7Y29udGVudH0iLCJpbXBvcnQgdG9EbyBmcm9tICcuL25ld1RvRG8nXG5jb25zdCBwcm9qZWN0cyA9IFtcbl1cbnByb2plY3RzLnB1c2goW10pXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cyIsImNvbnN0IHRvRG8gPSBmdW5jdGlvbih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzLGNoZWNrTGlzdCl7XG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzLGNoZWNrTGlzdH1cbn1cbmV4cG9ydCBkZWZhdWx0IHRvRG8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9