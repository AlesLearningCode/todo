
const newProject = document.createElement(`button`)
newProject.classList.add(`showDialog`)
newProject.textContent = "Add Project"
document.body.appendChild(newProject)
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".showDialog");
const closeButton = document.querySelector("dialog .closeButton");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

export default dialog
