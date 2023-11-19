import toDo from "./newToDo";
import projects from "./newProject";
import { get } from "lodash";
import searchIndex from "./searchIndex";
import loadToDos from "./loadToDo";
const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    projects[searchIndex(`.projectInput`)].push(new toDo(title.value, description.value, 0, date.value))
    loadToDos()
})
const projectList = document.createElement(`datalist`)
const projectInput = document.createElement(`input`)
projectInput.value = "default project"
const content = document.querySelector(`#content`)
projectInput.setAttribute(`list`,`projectList`)
projectInput.classList.add(`projectInput`)
projectList.setAttribute(`id`,`projectList`)
const defaultProject = document.createElement(`option`)
defaultProject.setAttribute(`index`,`0`)
defaultProject.value = "default project"
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
})
const viewProjects = document.querySelector(`.allProjects`)
viewProjects.addEventListener(`click`, () => {
    content.innerHTML = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < projects.length; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.textContent = allOptions[i].getAttribute(`value`)
        content.appendChild(projectDashboard)
        console.log(allOptions)
    }   
})
const editProject = document.querySelector(`.editProject`)
editProject.addEventListener(`click`, () =>{
    content.innerHTML = ""
    loadToDos()
})
export {createBtn}