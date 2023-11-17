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
    const content = document.querySelector(`#content`)
    const toDoContainer = document.createElement(`div`)
    const newTitle = document.createElement(`h3`)
    const newDescription = document.createElement(`p`)
    const newDate = document.createElement(`div`)
    newDescription.textContent = projects[0][0].description
    newTitle.textContent = projects[0][0].title
    newDate.textContent = projects[0][0].dueDate
    toDoContainer.appendChild(newTitle)
    toDoContainer.appendChild(newDescription)
    toDoContainer.appendChild(newDate)
    content.appendChild(toDoContainer)
}
export {createBtn, loadToDos}