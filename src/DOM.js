import toDo from "./newToDo";
import projects from "./newProject";
import { get } from "lodash";
const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    projects[projects.length - 1].push(new toDo(title.value, description.value, "", date.value))
    console.log(projects)
    loadToDos()
})
function loadToDos(){
    const toDoContainer = document.createElement(`div`)
    const newTitle = document.createElement(`h3`)
    const newDescription = document.createElement(`p`)
    const newDate = document.createElement(`div`)
    for(let i = 0; i < projects[0].length; i++){
    newDescription.textContent = projects[0][i].description
    newTitle.textContent = projects[0][i].title
    newDate.textContent = projects[0][i].dueDate
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
projectInput.classList.add(`projectInput`)
projectList.setAttribute(`id`,`projectList`)
const defaultProject = document.createElement(`option`)
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
    const listOption = document.querySelector(`.projectInput`)
    const listOptions = document.querySelectorAll(`option`)
    const index = listOptions.forEach(element => {
        if(element.getAttribute(`value`) == listOption.value){
            return element.getAttribute(`index`)
        }
    });
    console.log(index)
})
export {createBtn, loadToDos}