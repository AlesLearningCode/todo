import toDo from "./newToDo";
import projects from "./newProject";
import searchIndex from "./searchProjectIndex";
import loadToDos from "./loadToDo";
import loadModal from "./modal";
import showProjects from "./viewProjects";
import render from "./render";
import saveInMemory from "./saveInMemory";
const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    projects[searchIndex(`.projectInput`)].push(new toDo(title.value, description.value, 0, date.value))
    loadToDos(searchIndex(`.projectInput`))
    localStorage.setItem("projects", JSON.stringify(projects));
    JSON.parse(localStorage.getItem("projects"))
    console.log(projects[1])
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
    for(let i = 0; i < projects.length; i++){
    listOptions.forEach((element => {element.setAttribute(`index`,`${i++}`)}))
    }
    projects.push([])
    const dialog = document.querySelector(`.projectDialog`)
    dialog.close();
    showProjects()
    loadModal()
})
export {createBtn}