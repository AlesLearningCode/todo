import toDo from "./newToDo";
import projects from "./newProject";
import { get } from "lodash";
import searchIndex from "./searchProjectIndex";
import loadToDos from "./loadToDo";
import dialog    from "./modal";
const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    projects[searchIndex(`.projectInput`)].push(new toDo(title.value, description.value, 0, date.value))
    loadToDos(searchIndex(`.projectInput`))
})
const projectList = document.createElement(`datalist`)
const projectInput = document.createElement(`input`)
const currentDate = new Date()
projectInput.value = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
const content = document.querySelector(`#content`)
projectInput.setAttribute(`list`,`projectList`)
projectInput.classList.add(`projectInput`)
projectList.setAttribute(`id`,`projectList`)
const defaultProject = document.createElement(`option`)
defaultProject.setAttribute(`index`,`0`)
defaultProject.value = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
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
    dialog.close();
})
const viewProjects = document.createElement(`button`)
viewProjects.classList.add(`viewProjects`)
viewProjects.textContent = `View Projects`
document.body.appendChild(viewProjects)
viewProjects.addEventListener(`click`, () => {
    content.innerHTML = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < projects.length; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.classList.add(`projectContainer`)
        projectDashboard.setAttribute(`index`, `${i}`)
        projectDashboard.textContent = allOptions[i].getAttribute(`value`)
        projectDashboard.style.width = `100px`
        projectDashboard.style.height = `100px`
        projectDashboard.style.display = `grid`
        projectDashboard.style.alignItems = `center`
        projectDashboard.style.padding = `10px`
        projectDashboard.style.backgroundImage = `linear-gradient(
            45deg,
            #C5FFF8,
            #C5FFF8,
            #96EFFF,
        #5FBDFF
          )`
        projectDashboard.style.marginTop = `20px`
        projectDashboard.style.border = `2px black solid`
        content.appendChild(projectDashboard)
        const projectDashboards = document.querySelectorAll(`.projectContainer`) 
        projectDashboards.forEach(element => {
        element.addEventListener(`click`, () => {
        projectInput.value = element.textContent
        const index = element.getAttribute(`index`)
        loadToDos(index)
    })
});
        console.log(projectDashboards)
    }   
}) 
export {createBtn}