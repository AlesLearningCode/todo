import projects from "./newProject"
import searchIndex from "./searchProjectIndex"
import toDo from "./newToDo"
import editToDo from "./editToDo"
const currentProject = document.createElement(`h1`)
function render(value){
    const content = document.querySelector(`#content`)
    const projectList = document.querySelector(`.projectInput`) 
    currentProject.textContent = projectList.value
    document.body.appendChild(currentProject)
    projectList.setAttribute(`type`,`hidden`)
    content.innerHTML = ""
    for(let i = 0; i < projects[value].length; i++){
    const toDoContainer = document.createElement(`div`)
    toDoContainer.classList.add(`container`)
    const newTitle = document.createElement(`h3`)
    newTitle.setAttribute(`index`,`${i}`)
    const newDescription = document.createElement(`p`)
    newDescription.setAttribute(`index`,`${i}`)
    const newDate = document.createElement(`div`)
    newDate.style.justifySelf = `end`
    const checkList = document.createElement(`input`)
    checkList.classList.add(`checkList`)
    checkList.style.backgroundColor = `red`
    checkList.style.appearance = "none"
    checkList.style.borderRadius = `10px`
    checkList.setAttribute(`type`,`range`)
    if(projects[value][i].checklist == 0){
        checkList.value = 0
    }else{
        checkList.value = 1
        checkList.style.backgroundColor = "green"
    }
    checkList.setAttribute(`max`,`1`)
    checkList.setAttribute(`min`,`0`)
    checkList.style.width = `40px`
    checkList.style.justifySelf = `right`
    const dltBtn = document.createElement(`button`)
    dltBtn.textContent = "delete"
    dltBtn.setAttribute(`index`,`${i}`)
    checkList.setAttribute(`index`,`${i}`)
    dltBtn.classList.add(`dltBtn`)
    dltBtn.style.marginTop = `10px`
    newDescription.textContent = projects[value][i].description
    newTitle.textContent = projects[value][i].title
    newDate.textContent = projects[value][i].dueDate
    toDoContainer.appendChild(checkList)
    toDoContainer.appendChild(newTitle)
    toDoContainer.appendChild(newDescription)
    toDoContainer.appendChild(newDate)
    toDoContainer.appendChild(dltBtn)
    content.appendChild(toDoContainer)
    checkList.addEventListener(`click`, () =>{
        if(checkList.value == 0){
            checkList.value = 1
            checkList.style.backgroundColor = "green"
            projects[searchIndex(`.projectInput`)][i].checklist = 1
        }else if(checkList.value == 1){
            checkList.value = 0
            checkList.style.backgroundColor = `red`
            projects[searchIndex(`.projectInput`)][i].checklist = 0
        }
    })
    }
    const containerHeader = document.querySelectorAll(`.container h3`)
    const containerDescription = document.querySelectorAll(`.container p`)
    editToDo(containerHeader,`title`,`input`)
    editToDo(containerDescription,`description`,`textarea`)
}
export default render