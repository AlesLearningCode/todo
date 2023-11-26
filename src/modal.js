import toDo from "./newToDo"

const newProject = document.createElement(`button`)
const newToDo = document.createElement(`button`)
newProject.classList.add(`showDialog`)
newToDo.classList.add(`newToDo`)
newToDo.textContent = "Add to do"
newProject.textContent = "Add Project"
document.body.appendChild(newProject)
document.body.appendChild(newToDo)
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

export default projectDialog
