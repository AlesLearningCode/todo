import toDo from "./newToDo"
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
export default loadModal
