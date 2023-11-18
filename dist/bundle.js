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
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   loadToDos: () => (/* binding */ loadToDos)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");


const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][0].push(new _newToDo__WEBPACK_IMPORTED_MODULE_0__["default"](title.value, description.value, "", date.value))
    console.log(_newProject__WEBPACK_IMPORTED_MODULE_1__["default"])
    loadToDos()
})
function loadToDos(){
    const toDoContainer = document.createElement(`div`)
    const newTitle = document.createElement(`h3`)
    const newDescription = document.createElement(`p`)
    const newDate = document.createElement(`div`)
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][0].length; i++){
    newDescription.textContent = _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][0][i].description
    newTitle.textContent = _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][0][i].title
    newDate.textContent = _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][0][i].dueDate
    toDoContainer.appendChild(newTitle)
    toDoContainer.appendChild(newDescription)
    toDoContainer.appendChild(newDate)
    content.appendChild(toDoContainer)
    }
}
const projectList = document.createElement(`datalist`)
const projectInput = document.createElement(`input`)
const content = document.querySelector(`#content`)
projectInput.setAttribute(`list`,`projectList`)
projectList.setAttribute(`id`,`projectList`)
document.body.appendChild(projectInput)
document.body.appendChild(projectList)
const projectName = document.querySelector(`.projectName`)  
const createProject = document.querySelector(`.newProject`)
createProject.addEventListener(`click`, () => {
    const listOption = document.createElement(`option`)
    listOption.value = projectName.value
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++){
    listOption.setAttribute(`index`,`${i}`)
    }
    projectList.appendChild(listOption)
    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].push([])
    console.log(_newProject__WEBPACK_IMPORTED_MODULE_1__["default"])
    const viewProjects = document.querySelector(`.allProjects`)
viewProjects.addEventListener(`click`, () => {
    content.innerHTML = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.textContent = listOption.getAttribute(`value`)
        content.appendChild(projectDashboard)
        console.log(listOption)
    }   
})
})



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
    []
]
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
class toDo{
    constructor(title,description,checklist,dueDate){
        this.title = title
        this.description = description
        this.checklist = checklist
        this.dueDate = dueDate
        this.pointList = 0
    }
    addPoints(){
        return this.pointList++
    }
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.loadToDos)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ087QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVEsYUFBYSxnREFBSTtBQUM3QixnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLG1EQUFRLFlBQVk7QUFDM0MsaUNBQWlDLG1EQUFRO0FBQ3pDLDJCQUEyQixtREFBUTtBQUNuQywwQkFBMEIsbURBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUksbURBQVEsU0FBUztBQUN4Qyx1Q0FBdUMsRUFBRTtBQUN6QztBQUNBO0FBQ0EsSUFBSSxtREFBUTtBQUNaLGdCQUFnQixtREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLG1EQUFRLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZENEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDSmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ1pmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNPO0FBQ087QUFDM0MsK0NBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL25ld1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jcmVhdGVUb0RvYClcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpdGxlYClcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlc2NyaXB0aW9uYClcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF0ZWApXG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PntcbiAgICBwcm9qZWN0c1swXS5wdXNoKG5ldyB0b0RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgXCJcIiwgZGF0ZS52YWx1ZSkpXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgbG9hZFRvRG9zKClcbn0pXG5mdW5jdGlvbiBsb2FkVG9Eb3MoKXtcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgzYClcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1swXS5sZW5ndGg7IGkrKyl7XG4gICAgbmV3RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c1swXVtpXS5kZXNjcmlwdGlvblxuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbMF1baV0udGl0bGVcbiAgICBuZXdEYXRlLnRleHRDb250ZW50ID0gcHJvamVjdHNbMF1baV0uZHVlRGF0ZVxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGl0bGUpXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbilcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RhdGUpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKVxuICAgIH1cbn1cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGF0YWxpc3RgKVxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250ZW50YClcbnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoYGxpc3RgLGBwcm9qZWN0TGlzdGApXG5wcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoYGlkYCxgcHJvamVjdExpc3RgKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdE5hbWVgKSAgXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld1Byb2plY3RgKVxuY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgb3B0aW9uYClcbiAgICBsaXN0T3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWUudmFsdWVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgIGxpc3RPcHRpb24uc2V0QXR0cmlidXRlKGBpbmRleGAsYCR7aX1gKVxuICAgIH1cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0T3B0aW9uKVxuICAgIHByb2plY3RzLnB1c2goW10pXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgY29uc3Qgdmlld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFsbFByb2plY3RzYClcbnZpZXdQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBjb25zdCBhbGxPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgb3B0aW9uYClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdERhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApXG4gICAgICAgIHByb2plY3REYXNoYm9hcmQudGV4dENvbnRlbnQgPSBsaXN0T3B0aW9uLmdldEF0dHJpYnV0ZShgdmFsdWVgKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REYXNoYm9hcmQpXG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RPcHRpb24pXG4gICAgfSAgIFxufSlcbn0pXG5cbmV4cG9ydCB7Y3JlYXRlQnRuLCBsb2FkVG9Eb3N9IiwiaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuY29uc3QgcHJvamVjdHMgPSBbXG4gICAgW11cbl1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzIiwiY2xhc3MgdG9Eb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixjaGVja2xpc3QsZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnBvaW50TGlzdCA9IDBcbiAgICB9XG4gICAgYWRkUG9pbnRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50TGlzdCsrXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdG9EbyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7Y3JlYXRlQnRuLCBsb2FkVG9Eb3N9IGZyb20gXCIuL0RPTVwiO1xubG9hZFRvRG9zKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=