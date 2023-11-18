import toDo from "./newToDo";
import projects from "./newProject";
const createBtn = document.querySelector(`.createToDo`)
const title = document.querySelector(`.title`)
const description = document.querySelector(`.description`)
const date = document.querySelector(`.date`)
createBtn.addEventListener(`click`, () =>{
    projects[0].push(new toDo(title.value, description.value, "", date.value))
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
projectList.setAttribute(`id`,`projectList`)
document.body.appendChild(projectInput)
document.body.appendChild(projectList)
const projectName = document.querySelector(`.projectName`)  
const createProject = document.querySelector(`.newProject`)
createProject.addEventListener(`click`, () => {
    const listOption = document.createElement(`option`)
    listOption.value = projectName.value
    for(let i = 0; i < projects.length; i++){
    listOption.setAttribute(`index`,`${i}`)
    }
    projectList.appendChild(listOption)
    projects.push([])
    console.log(projects)
    const viewProjects = document.querySelector(`.allProjects`)
viewProjects.addEventListener(`click`, () => {
    content.innerHTML = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < projects.length - 1; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.textContent = listOption.getAttribute(`value`)
        content.appendChild(projectDashboard)
        console.log(listOption)
    }   
})
})

export {createBtn, loadToDos}