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
/* harmony export */   createBtn: () => (/* binding */ createBtn)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");
/* harmony import */ var _loadToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadToDo */ "./src/loadToDo.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _viewProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewProjects */ "./src/viewProjects.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ "./src/render.js");







const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    const projectInput = document.querySelector(`.projectInput`)
    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_2__["default"])(`.projectInput`)].push(new _newToDo__WEBPACK_IMPORTED_MODULE_0__["default"](title.value, description.value, 0, date.value))
    ;(0,_loadToDo__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_2__["default"])(`.projectInput`))
    console.log(projectInput)
})
const projectList = document.createElement(`datalist`)
const projectInput = document.createElement(`input`)
projectInput.value = `Default`
const content = document.querySelector(`#content`)
projectInput.setAttribute(`list`,`projectList`)
projectInput.classList.add(`projectInput`)
projectList.setAttribute(`id`,`projectList`)
const defaultProject = document.createElement(`option`)
defaultProject.setAttribute(`index`,`0`)
defaultProject.value = `Default`
projectList.appendChild(defaultProject)
document.body.appendChild(projectInput)
document.body.appendChild(projectList)
const projectName = document.querySelector(`.projectName`)  
const createProject = document.querySelector(`.newProject`)
createProject.addEventListener(`click`, () => {
    const listOption = document.createElement(`option`)
    listOption.value = projectName.value
    projectList.appendChild(listOption)
    const listOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++){
    listOptions.forEach((element => {element.setAttribute(`index`,`${i++}`)}))
    }
    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].push([])
    const dialog = document.querySelector(`.projectDialog`)
    dialog.close();
    (0,_viewProjects__WEBPACK_IMPORTED_MODULE_5__["default"])()
    ;(0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])()
})


/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createCalendar(){
    const calendar = document.querySelector(`.calendar`)
    calendar.addEventListener(`click`, () => {
    const content = document.querySelector(`#content`)
    content.innerHTML = ""
    content.removeAttribute(`style`)
    const ul = document.createElement(`ul`)
    const days = [`Mon`,`Tue`,`Wed`,`Thur`,`Fri`,`Sat`,`Sun`]
    for(let i = 0; i < 7; i++){
    const div = document.createElement(`div`)
    const li = document.createElement(`li`)
    li.textContent = days[i]
    li.appendChild(div)
    ul.appendChild(li)
    content.appendChild(ul)
    }
    ul.style.display = `flex`
    ul.style.gap = `20px`
})
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCalendar);

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadToDo */ "./src/loadToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");




const dltProjectBtn = document.querySelector(`.deleteProject`)
dltProjectBtn.addEventListener(`click`,() =>{
    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].splice((0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__["default"])(`.projectInput`),1)
    const allOptions = document.querySelectorAll(`option`)
    allOptions.forEach(element => {
        const listOption = document.querySelector(`.projectInput`)
        const projectList = document.querySelector(`#projectList`)
        if(element.getAttribute(`value`) == listOption.value){
            projectList.removeChild(element)
            listOption.value = "default project"
            ;(0,_loadToDo__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__["default"])(`.projectInput`))
        }
    });
})
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dltProjectBtn);

/***/ }),

/***/ "./src/editToDo.js":
/*!*************************!*\
  !*** ./src/editToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");


function editToDo(value,property,inputType){
    value.forEach(element => {
        element.addEventListener(`click`, function edit(){
            const input = document.createElement(`${inputType}`)
            input.classList.add(`toDoEdit`)
            input.style.padding = `5px`
            input.style.borderRadius = `10px`
            input.style.justifySelf = `start`
            input.value = element.textContent
            element.removeEventListener(`click`, edit)
            const index = element.getAttribute(`index`)
            input.addEventListener(`keypress`, function(e) {
                if(e.key == `Enter`){
                element.textContent = input.value
                _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(`.projectInput`)][index][property] = input.value
                console.log(_newProject__WEBPACK_IMPORTED_MODULE_0__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(`.projectInput`)][index][property])
                console.log(_newProject__WEBPACK_IMPORTED_MODULE_0__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(`.projectInput`)][index])
                element.addEventListener(`click`, edit)
                }
            })
            element.textContent = "" 
            element.appendChild(input)
        })
    });
    
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editToDo);

/***/ }),

/***/ "./src/loadToDo.js":
/*!*************************!*\
  !*** ./src/loadToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");
/* harmony import */ var _viewProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewProjects */ "./src/viewProjects.js");





function loadToDos(value){
    (0,_viewProjects__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_modal__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(value)
        const allDltBtns = document.querySelectorAll(`.dltBtn `)
        allDltBtns.forEach(element => {
        element.addEventListener(`click`, () =>{
            let index = element.getAttribute(`index`)
            content.innerHTML = ""
            element.parentElement.remove()
            console.log(index)
            _newProject__WEBPACK_IMPORTED_MODULE_1__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__["default"])(`.projectInput`)].splice(index,1)
            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(value)
            loadToDos((0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_3__["default"])(`.projectInput`))
        })
        });
        console.log(_newProject__WEBPACK_IMPORTED_MODULE_1__["default"])
    }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToDos);

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");

function loadModal(){
const newProject = document.createElement(`img`)
newProject.style.height = `20px`
newProject.style.width = `20px`
newProject.src = `./plus-thick.svg`
const newToDo = document.querySelector(`img`)
newToDo.src = `./plus-box.svg`
const sidebarProjects = document.querySelector(`.projects`)
newProject.classList.add(`showDialog`)
sidebarProjects.appendChild(newProject)
const projectDialog = document.querySelector(".projectDialog");
const toDoDialog = document.querySelector(".toDoDialog")
const addToDo = document.querySelector(".newToDo")
const addProject = document.querySelector(".showDialog");
const projectCloseButton = document.querySelector(".projectDialog .closeButton");
const toDoCloseButton = document.querySelector(".toDoDialog .closeButton")

// "Show the dialog" button opens the dialog modally
addProject.addEventListener("click", () => {
  projectDialog.showModal();
 });

// "Close" button closes the dialog
projectCloseButton.addEventListener("click", () => {
  projectDialog.close();
});

addToDo.addEventListener("click", () => {
  toDoDialog.showModal();
});

// "Close" button closes the dialog
toDoCloseButton.addEventListener("click", () => {
  toDoDialog.close();
});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadModal);


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

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editToDo */ "./src/editToDo.js");




function render(value){
    const content = document.querySelector(`#content`)
    content.style.display = `grid`
    content.style.justifySelf = `center`
    content.style.alignSelf = `center`
    content.style.justifyItems = `center`
    content.style.width = `800px`
    content.style.height = `700px`
    content.style.marginLeft = `200px`
    content.style.boxShadow = `#5FBDFF 0px 0px 20px`
    content.style.gridTemplateRows = `100px 1fr`
    content.style.gridTemplateColumns = `1fr`
    content.style.gap = `20px`
    content.style.gridRow = `1/5`
    content.style.gridColumn = `1/5`
    content.style.overflowY = `auto`
    content.style.flexWrap = `wrap`
    const projectList = document.querySelector(`.projectInput`) 
    projectList.setAttribute(`type`,`hidden`)
    content.innerHTML = ""
    const currentProject = document.createElement(`h1`)
    content.appendChild(currentProject)
    const flexContainer = document.createElement(`div`)
    flexContainer.classList.add(`flexContainer`)
    currentProject.textContent = projectList.value.replace(`#`,``)
    if(value == undefined){
        value = 0
    }
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value].length; i++){
    const toDoContainer = document.createElement(`div`)
    const titleDiv = document.createElement(`div`)
    titleDiv.style.display = `flex`
    titleDiv.style.justifyContent = `space-between`
    toDoContainer.classList.add(`container`)
    const newTitle = document.createElement(`h3`)
    newTitle.setAttribute(`index`,`${i}`)
    const newDate = document.createElement(`div`)
    newDate.style.justifySelf = `end`
    const checkList = document.createElement(`input`)
    checkList.classList.add(`checkList`)
    checkList.style.backgroundColor = `red`
    checkList.style.appearance = "none"
    checkList.style.borderRadius = `10px`
    checkList.style.height = `15px`
    checkList.setAttribute(`type`,`range`)
    if(_newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value][i].checklist == 0){
        checkList.value = 0
    }else{
        checkList.value = 1
        checkList.style.backgroundColor = "green"
    }
    checkList.setAttribute(`max`,`1`)
    checkList.setAttribute(`min`,`0`)
    checkList.style.width = `30px`
    checkList.style.justifySelf = `right`
    const dltBtn = document.createElement(`img`)
    dltBtn.src = `./close-circle.svg`
    dltBtn.alt = `remove`
    dltBtn.textContent = "remove"
    dltBtn.setAttribute(`index`,`${i}`)
    checkList.setAttribute(`index`,`${i}`)
    dltBtn.classList.add(`dltBtn`)
    dltBtn.style.width = `15px`
    dltBtn.style.height = `auto`
    dltBtn.style.borderRadius = `10px`
    dltBtn.style.justifySelf = `flex-start`
    dltBtn.style.gridRow = `1/2`
    if(_newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value][i].description != ``){
    const newDescription = document.createElement(`p`)
    newDescription.setAttribute(`index`,`${i}`)
    newDescription.textContent = _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value][i].description
    toDoContainer.appendChild(newDescription)
    newDescription.style.gridRow = `4/5`
    }
    newTitle.textContent = _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value][i].title
    newDate.textContent = _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][value][i].dueDate
    titleDiv.appendChild(newTitle)
    titleDiv.appendChild(checkList)
    toDoContainer.appendChild(titleDiv)
    toDoContainer.appendChild(newDate)
    toDoContainer.appendChild(dltBtn)
    flexContainer.appendChild(toDoContainer)
    content.appendChild(flexContainer)
    checkList.addEventListener(`click`, () =>{
        if(checkList.value == 0){
            checkList.value = 1
            checkList.style.backgroundColor = "green"
            _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(`.projectInput`)][i].checklist = 1
        }else if(checkList.value == 1){
            checkList.value = 0
            checkList.style.backgroundColor = `red`
            _newProject__WEBPACK_IMPORTED_MODULE_0__["default"][(0,_searchProjectIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(`.projectInput`)][i].checklist = 0
        }
    })
    }
    const containerHeader = document.querySelectorAll(`.container h3`)
    const containerDescription = document.querySelectorAll(`.container p`)
    ;(0,_editToDo__WEBPACK_IMPORTED_MODULE_3__["default"])(containerHeader,`title`,`input`)
    ;(0,_editToDo__WEBPACK_IMPORTED_MODULE_3__["default"])(containerDescription,`description`,`textarea`)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/searchProjectIndex.js":
/*!***********************************!*\
  !*** ./src/searchProjectIndex.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function searchIndex(value){
const listOption = document.querySelector(value)
    const listOptions = document.querySelectorAll(`option`)
    let index
    listOptions.forEach(element => {
        if(element.getAttribute(`value`) == listOption.value.replace(`#`,``)){
           index = element.getAttribute(`index`)
        }
    });
    return index
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchIndex);

/***/ }),

/***/ "./src/viewProjects.js":
/*!*****************************!*\
  !*** ./src/viewProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _loadToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadToDo */ "./src/loadToDo.js");



function showProjects(){
const projectInput = document.querySelector(`.projectInput`)
const sidebarProjects = document.querySelector(`.projects`)
    sidebarProjects.textContent = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.classList.add(`projectContainer`)
        projectDashboard.setAttribute(`index`, `${i}`)
        projectDashboard.textContent = `# ${allOptions[i].getAttribute(`value`)}`
        projectDashboard.style.display = `grid`
        projectDashboard.style.alignItems = `center`
        projectDashboard.style.padding = `10px`
        projectDashboard.style.marginTop = `20px`
        sidebarProjects.appendChild(projectDashboard)
        const projectDashboards = document.querySelectorAll(`.projectContainer`) 
        projectDashboards.forEach(element => {
        element.addEventListener(`click`, () => {
        projectInput.value = element.textContent.replace(`# `,``)
        const index = element.getAttribute(`index`)
        ;(0,_loadToDo__WEBPACK_IMPORTED_MODULE_2__["default"])(index)
    })
})
}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjects);

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
/* harmony import */ var _loadToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadToDo */ "./src/loadToDo.js");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteProject */ "./src/deleteProject.js");
/* harmony import */ var _searchProjectIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchProjectIndex */ "./src/searchProjectIndex.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar */ "./src/calendar.js");







(0,_loadToDo__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_calendar__WEBPACK_IMPORTED_MODULE_6__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxzREFBUztBQUNqQixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDNUJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDTztBQUNKO0FBQ0c7QUFDUztBQUNHO0FBQ1A7QUFDeEMscURBQVM7QUFDVCxzREFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvYWRUb0RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbmV3VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NlYXJjaFByb2plY3RJbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9EbyBmcm9tIFwiLi9uZXdUb0RvXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHNlYXJjaEluZGV4IGZyb20gXCIuL3NlYXJjaFByb2plY3RJbmRleFwiO1xuaW1wb3J0IGxvYWRUb0RvcyBmcm9tIFwiLi9sb2FkVG9Eb1wiO1xuaW1wb3J0IGxvYWRNb2RhbCBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi92aWV3UHJvamVjdHNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcmVuZGVyXCI7XG5jb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY3JlYXRlVG9Eb2ApXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZWApXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXNjcmlwdGlvbmApXG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRhdGVgKVxuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT57XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RJbnB1dGApXG4gICAgcHJvamVjdHNbc2VhcmNoSW5kZXgoYC5wcm9qZWN0SW5wdXRgKV0ucHVzaChuZXcgdG9Ebyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIDAsIGRhdGUudmFsdWUpKVxuICAgIGxvYWRUb0RvcyhzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbnB1dClcbn0pXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRhdGFsaXN0YClcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YClcbnByb2plY3RJbnB1dC52YWx1ZSA9IGBEZWZhdWx0YFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250ZW50YClcbnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoYGxpc3RgLGBwcm9qZWN0TGlzdGApXG5wcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChgcHJvamVjdElucHV0YClcbnByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShgaWRgLGBwcm9qZWN0TGlzdGApXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYG9wdGlvbmApXG5kZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoYGluZGV4YCxgMGApXG5kZWZhdWx0UHJvamVjdC52YWx1ZSA9IGBEZWZhdWx0YFxucHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3QpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dClcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0TmFtZWApICBcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3UHJvamVjdGApXG5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBvcHRpb25gKVxuICAgIGxpc3RPcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZS52YWx1ZVxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pXG4gICAgY29uc3QgbGlzdE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBvcHRpb25gKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgbGlzdE9wdGlvbnMuZm9yRWFjaCgoZWxlbWVudCA9PiB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGluZGV4YCxgJHtpKyt9YCl9KSlcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaChbXSlcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdERpYWxvZ2ApXG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgc2hvd1Byb2plY3RzKClcbiAgICBsb2FkTW9kYWwoKVxufSlcbmV4cG9ydCB7Y3JlYXRlQnRufSIsImZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyKCl7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FsZW5kYXJgKVxuICAgIGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29udGVudGApXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoYHN0eWxlYClcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHVsYClcbiAgICBjb25zdCBkYXlzID0gW2BNb25gLGBUdWVgLGBXZWRgLGBUaHVyYCxgRnJpYCxgU2F0YCxgU3VuYF1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgbGlgKVxuICAgIGxpLnRleHRDb250ZW50ID0gZGF5c1tpXVxuICAgIGxpLmFwcGVuZENoaWxkKGRpdilcbiAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHVsKVxuICAgIH1cbiAgICB1bC5zdHlsZS5kaXNwbGF5ID0gYGZsZXhgXG4gICAgdWwuc3R5bGUuZ2FwID0gYDIwcHhgXG59KVxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FsZW5kYXIiLCJpbXBvcnQgbG9hZFRvRG9zIGZyb20gXCIuL2xvYWRUb0RvXCJcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9uZXdQcm9qZWN0XCJcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcmVuZGVyXCJcbmltcG9ydCBzZWFyY2hJbmRleCBmcm9tIFwiLi9zZWFyY2hQcm9qZWN0SW5kZXhcIlxuY29uc3QgZGx0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0YClcbmRsdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCgpID0+e1xuICAgIHByb2plY3RzLnNwbGljZShzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApLDEpXG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYG9wdGlvbmApXG4gICAgYWxsT3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RJbnB1dGApXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RMaXN0YClcbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYHZhbHVlYCkgPT0gbGlzdE9wdGlvbi52YWx1ZSl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgICAgICAgbGlzdE9wdGlvbi52YWx1ZSA9IFwiZGVmYXVsdCBwcm9qZWN0XCJcbiAgICAgICAgICAgIGxvYWRUb0RvcyhzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApKVxuICAgICAgICB9XG4gICAgfSk7XG59KVxuZXhwb3J0IGRlZmF1bHQgZGx0UHJvamVjdEJ0biIsImltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgc2VhcmNoSW5kZXggZnJvbSBcIi4vc2VhcmNoUHJvamVjdEluZGV4XCJcbmZ1bmN0aW9uIGVkaXRUb0RvKHZhbHVlLHByb3BlcnR5LGlucHV0VHlwZSl7XG4gICAgdmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIGVkaXQoKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtpbnB1dFR5cGV9YClcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYHRvRG9FZGl0YClcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLnBhZGRpbmcgPSBgNXB4YFxuICAgICAgICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYDEwcHhgXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5qdXN0aWZ5U2VsZiA9IGBzdGFydGBcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIGVkaXQpXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBpbmRleGApXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKGBrZXlwcmVzc2AsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZihlLmtleSA9PSBgRW50ZXJgKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApXVtpbmRleF1bcHJvcGVydHldID0gaW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApXVtpbmRleF1bcHJvcGVydHldKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3NlYXJjaEluZGV4KGAucHJvamVjdElucHV0YCldW2luZGV4XSlcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZWRpdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCIgXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgZWRpdFRvRG8iLCJpbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JlbmRlclwiXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vbmV3UHJvamVjdFwiXG5pbXBvcnQgbG9hZE1vZGFsIGZyb20gXCIuL21vZGFsXCJcbmltcG9ydCBzZWFyY2hJbmRleCBmcm9tIFwiLi9zZWFyY2hQcm9qZWN0SW5kZXhcIlxuaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi92aWV3UHJvamVjdHNcIlxuZnVuY3Rpb24gbG9hZFRvRG9zKHZhbHVlKXtcbiAgICBzaG93UHJvamVjdHMoKVxuICAgIGxvYWRNb2RhbCgpXG4gICAgcmVuZGVyKHZhbHVlKVxuICAgICAgICBjb25zdCBhbGxEbHRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmRsdEJ0biBgKVxuICAgICAgICBhbGxEbHRCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PntcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBpbmRleGApXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0c1tzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApXS5zcGxpY2UoaW5kZXgsMSlcbiAgICAgICAgICAgIHJlbmRlcih2YWx1ZSlcbiAgICAgICAgICAgIGxvYWRUb0RvcyhzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApKVxuICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgfVxuZXhwb3J0IGRlZmF1bHQgbG9hZFRvRG9zIiwiaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiXG5mdW5jdGlvbiBsb2FkTW9kYWwoKXtcbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbWdgKVxubmV3UHJvamVjdC5zdHlsZS5oZWlnaHQgPSBgMjBweGBcbm5ld1Byb2plY3Quc3R5bGUud2lkdGggPSBgMjBweGBcbm5ld1Byb2plY3Quc3JjID0gYC4vcGx1cy10aGljay5zdmdgXG5jb25zdCBuZXdUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nYClcbm5ld1RvRG8uc3JjID0gYC4vcGx1cy1ib3guc3ZnYFxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RzYClcbm5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChgc2hvd0RpYWxvZ2ApXG5zaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaWFsb2dcIik7XG5jb25zdCB0b0RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvRGlhbG9nXCIpXG5jb25zdCBhZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUb0RvXCIpXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93RGlhbG9nXCIpO1xuY29uc3QgcHJvamVjdENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGlhbG9nIC5jbG9zZUJ1dHRvblwiKTtcbmNvbnN0IHRvRG9DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0RpYWxvZyAuY2xvc2VCdXR0b25cIilcblxuLy8gXCJTaG93IHRoZSBkaWFsb2dcIiBidXR0b24gb3BlbnMgdGhlIGRpYWxvZyBtb2RhbGx5XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gfSk7XG5cbi8vIFwiQ2xvc2VcIiBidXR0b24gY2xvc2VzIHRoZSBkaWFsb2dcbnByb2plY3RDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59KTtcblxuYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b0RvRGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cbi8vIFwiQ2xvc2VcIiBidXR0b24gY2xvc2VzIHRoZSBkaWFsb2dcbnRvRG9DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b0RvRGlhbG9nLmNsb3NlKCk7XG59KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRNb2RhbFxuIiwiaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuY29uc3QgcHJvamVjdHMgPSBbXG4gICAgW11cbl1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzIiwiY2xhc3MgdG9Eb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixjaGVja2xpc3QsZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnBvaW50TGlzdCA9IDBcbiAgICB9XG4gICAgYWRkUG9pbnRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50TGlzdCsrXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdG9EbyIsImltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9uZXdQcm9qZWN0XCJcbmltcG9ydCBzZWFyY2hJbmRleCBmcm9tIFwiLi9zZWFyY2hQcm9qZWN0SW5kZXhcIlxuaW1wb3J0IHRvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiXG5pbXBvcnQgZWRpdFRvRG8gZnJvbSBcIi4vZWRpdFRvRG9cIlxuZnVuY3Rpb24gcmVuZGVyKHZhbHVlKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvbnRlbnRgKVxuICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IGBncmlkYFxuICAgIGNvbnRlbnQuc3R5bGUuanVzdGlmeVNlbGYgPSBgY2VudGVyYFxuICAgIGNvbnRlbnQuc3R5bGUuYWxpZ25TZWxmID0gYGNlbnRlcmBcbiAgICBjb250ZW50LnN0eWxlLmp1c3RpZnlJdGVtcyA9IGBjZW50ZXJgXG4gICAgY29udGVudC5zdHlsZS53aWR0aCA9IGA4MDBweGBcbiAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGA3MDBweGBcbiAgICBjb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBgMjAwcHhgXG4gICAgY29udGVudC5zdHlsZS5ib3hTaGFkb3cgPSBgIzVGQkRGRiAwcHggMHB4IDIwcHhgXG4gICAgY29udGVudC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYDEwMHB4IDFmcmBcbiAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgMWZyYFxuICAgIGNvbnRlbnQuc3R5bGUuZ2FwID0gYDIwcHhgXG4gICAgY29udGVudC5zdHlsZS5ncmlkUm93ID0gYDEvNWBcbiAgICBjb250ZW50LnN0eWxlLmdyaWRDb2x1bW4gPSBgMS81YFxuICAgIGNvbnRlbnQuc3R5bGUub3ZlcmZsb3dZID0gYGF1dG9gXG4gICAgY29udGVudC5zdHlsZS5mbGV4V3JhcCA9IGB3cmFwYFxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RJbnB1dGApIFxuICAgIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShgdHlwZWAsYGhpZGRlbmApXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoMWApXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdClcbiAgICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGZsZXhDb250YWluZXJgKVxuICAgIGN1cnJlbnRQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdExpc3QudmFsdWUucmVwbGFjZShgI2AsYGApXG4gICAgaWYodmFsdWUgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdmFsdWUgPSAwXG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1t2YWx1ZV0ubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICB0aXRsZURpdi5zdHlsZS5kaXNwbGF5ID0gYGZsZXhgXG4gICAgdGl0bGVEaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBgc3BhY2UtYmV0d2VlbmBcbiAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGNvbnRhaW5lcmApXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoM2ApXG4gICAgbmV3VGl0bGUuc2V0QXR0cmlidXRlKGBpbmRleGAsYCR7aX1gKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgIG5ld0RhdGUuc3R5bGUuanVzdGlmeVNlbGYgPSBgZW5kYFxuICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YClcbiAgICBjaGVja0xpc3QuY2xhc3NMaXN0LmFkZChgY2hlY2tMaXN0YClcbiAgICBjaGVja0xpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJlZGBcbiAgICBjaGVja0xpc3Quc3R5bGUuYXBwZWFyYW5jZSA9IFwibm9uZVwiXG4gICAgY2hlY2tMaXN0LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAxMHB4YFxuICAgIGNoZWNrTGlzdC5zdHlsZS5oZWlnaHQgPSBgMTVweGBcbiAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKGB0eXBlYCxgcmFuZ2VgKVxuICAgIGlmKHByb2plY3RzW3ZhbHVlXVtpXS5jaGVja2xpc3QgPT0gMCl7XG4gICAgICAgIGNoZWNrTGlzdC52YWx1ZSA9IDBcbiAgICB9ZWxzZXtcbiAgICAgICAgY2hlY2tMaXN0LnZhbHVlID0gMVxuICAgICAgICBjaGVja0xpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG4gICAgfVxuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoYG1heGAsYDFgKVxuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoYG1pbmAsYDBgKVxuICAgIGNoZWNrTGlzdC5zdHlsZS53aWR0aCA9IGAzMHB4YFxuICAgIGNoZWNrTGlzdC5zdHlsZS5qdXN0aWZ5U2VsZiA9IGByaWdodGBcbiAgICBjb25zdCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbWdgKVxuICAgIGRsdEJ0bi5zcmMgPSBgLi9jbG9zZS1jaXJjbGUuc3ZnYFxuICAgIGRsdEJ0bi5hbHQgPSBgcmVtb3ZlYFxuICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCJcbiAgICBkbHRCdG4uc2V0QXR0cmlidXRlKGBpbmRleGAsYCR7aX1gKVxuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoYGluZGV4YCxgJHtpfWApXG4gICAgZGx0QnRuLmNsYXNzTGlzdC5hZGQoYGRsdEJ0bmApXG4gICAgZGx0QnRuLnN0eWxlLndpZHRoID0gYDE1cHhgXG4gICAgZGx0QnRuLnN0eWxlLmhlaWdodCA9IGBhdXRvYFxuICAgIGRsdEJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMTBweGBcbiAgICBkbHRCdG4uc3R5bGUuanVzdGlmeVNlbGYgPSBgZmxleC1zdGFydGBcbiAgICBkbHRCdG4uc3R5bGUuZ3JpZFJvdyA9IGAxLzJgXG4gICAgaWYocHJvamVjdHNbdmFsdWVdW2ldLmRlc2NyaXB0aW9uICE9IGBgKXtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKVxuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShgaW5kZXhgLGAke2l9YClcbiAgICBuZXdEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RzW3ZhbHVlXVtpXS5kZXNjcmlwdGlvblxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pXG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZFJvdyA9IGA0LzVgXG4gICAgfVxuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbdmFsdWVdW2ldLnRpdGxlXG4gICAgbmV3RGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RzW3ZhbHVlXVtpXS5kdWVEYXRlXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQobmV3VGl0bGUpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KVxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEYXRlKVxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGx0QnRuKVxuICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpXG4gICAgY2hlY2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT57XG4gICAgICAgIGlmKGNoZWNrTGlzdC52YWx1ZSA9PSAwKXtcbiAgICAgICAgICAgIGNoZWNrTGlzdC52YWx1ZSA9IDFcbiAgICAgICAgICAgIGNoZWNrTGlzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHByb2plY3RzW3NlYXJjaEluZGV4KGAucHJvamVjdElucHV0YCldW2ldLmNoZWNrbGlzdCA9IDFcbiAgICAgICAgfWVsc2UgaWYoY2hlY2tMaXN0LnZhbHVlID09IDEpe1xuICAgICAgICAgICAgY2hlY2tMaXN0LnZhbHVlID0gMFxuICAgICAgICAgICAgY2hlY2tMaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZWRgXG4gICAgICAgICAgICBwcm9qZWN0c1tzZWFyY2hJbmRleChgLnByb2plY3RJbnB1dGApXVtpXS5jaGVja2xpc3QgPSAwXG4gICAgICAgIH1cbiAgICB9KVxuICAgIH1cbiAgICBjb25zdCBjb250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY29udGFpbmVyIGgzYClcbiAgICBjb25zdCBjb250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb250YWluZXIgcGApXG4gICAgZWRpdFRvRG8oY29udGFpbmVySGVhZGVyLGB0aXRsZWAsYGlucHV0YClcbiAgICBlZGl0VG9Ebyhjb250YWluZXJEZXNjcmlwdGlvbixgZGVzY3JpcHRpb25gLGB0ZXh0YXJlYWApXG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXIiLCJmdW5jdGlvbiBzZWFyY2hJbmRleCh2YWx1ZSl7XG5jb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YWx1ZSlcbiAgICBjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYG9wdGlvbmApXG4gICAgbGV0IGluZGV4XG4gICAgbGlzdE9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYHZhbHVlYCkgPT0gbGlzdE9wdGlvbi52YWx1ZS5yZXBsYWNlKGAjYCxgYCkpe1xuICAgICAgICAgICBpbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBpbmRleGApXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXhcbn1cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaEluZGV4IiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tIFwiLi9tb2RhbFwiXG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vbmV3UHJvamVjdFwiXG5pbXBvcnQgbG9hZFRvRG9zIGZyb20gXCIuL2xvYWRUb0RvXCJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpe1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RJbnB1dGApXG5jb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdHNgKVxuICAgIHNpZGViYXJQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBjb25zdCBhbGxPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgb3B0aW9uYClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0RGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICAgICAgcHJvamVjdERhc2hib2FyZC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0Q29udGFpbmVyYClcbiAgICAgICAgcHJvamVjdERhc2hib2FyZC5zZXRBdHRyaWJ1dGUoYGluZGV4YCwgYCR7aX1gKVxuICAgICAgICBwcm9qZWN0RGFzaGJvYXJkLnRleHRDb250ZW50ID0gYCMgJHthbGxPcHRpb25zW2ldLmdldEF0dHJpYnV0ZShgdmFsdWVgKX1gXG4gICAgICAgIHByb2plY3REYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9IGBncmlkYFxuICAgICAgICBwcm9qZWN0RGFzaGJvYXJkLnN0eWxlLmFsaWduSXRlbXMgPSBgY2VudGVyYFxuICAgICAgICBwcm9qZWN0RGFzaGJvYXJkLnN0eWxlLnBhZGRpbmcgPSBgMTBweGBcbiAgICAgICAgcHJvamVjdERhc2hib2FyZC5zdHlsZS5tYXJnaW5Ub3AgPSBgMjBweGBcbiAgICAgICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REYXNoYm9hcmQpXG4gICAgICAgIGNvbnN0IHByb2plY3REYXNoYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByb2plY3RDb250YWluZXJgKSBcbiAgICAgICAgcHJvamVjdERhc2hib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudC5yZXBsYWNlKGAjIGAsYGApXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGluZGV4YClcbiAgICAgICAgbG9hZFRvRG9zKGluZGV4KVxuICAgIH0pXG59KVxufVxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3RzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9EbyBmcm9tIFwiLi9uZXdUb0RvXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHtjcmVhdGVCdG59IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IGxvYWRUb0RvcyBmcm9tIFwiLi9sb2FkVG9Eb1wiO1xuaW1wb3J0IGRsdFByb2plY3RCdG4gZnJvbSBcIi4vZGVsZXRlUHJvamVjdFwiO1xuaW1wb3J0IHNlYXJjaEluZGV4IGZyb20gXCIuL3NlYXJjaFByb2plY3RJbmRleFwiO1xuaW1wb3J0IGNyZWF0ZUNhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyXCI7XG5sb2FkVG9Eb3MoKVxuY3JlYXRlQ2FsZW5kYXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==