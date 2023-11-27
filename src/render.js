import projects from "./newProject"
import searchIndex from "./searchProjectIndex"
import toDo from "./newToDo"
import editToDo from "./editToDo"
function render(value){
    const content = document.querySelector(`#content`)
    content.style.display = `grid`
    content.style.justifySelf = `center`
    content.style.alignSelf = `center`
    content.style.justifyItems = `center`
    content.style.width = `800px`
    content.style.height = `700px`
    content.style.marginLeft = `200px`
    content.style.boxShadow = `#5FBDFF 0px 0px 20px`
    content.style.gridTemplateRows = `100px 1fr`
    content.style.gridTemplateColumns = `1fr`
    content.style.gap = `20px`
    content.style.gridRow = `1/5`
    content.style.gridColumn = `1/5`
    content.style.overflowY = `auto`
    content.style.flexWrap = `wrap`
    const projectList = document.querySelector(`.projectInput`) 
    projectList.setAttribute(`type`,`hidden`)
    content.innerHTML = ""
    const currentProject = document.createElement(`h1`)
    content.appendChild(currentProject)
    const flexContainer = document.createElement(`div`)
    flexContainer.classList.add(`flexContainer`)
    currentProject.textContent = projectList.value.replace(`#`,``)
    if(value == undefined){
        value = 0
    }
    for(let i = 0; i < projects[value].length; i++){
    const toDoContainer = document.createElement(`div`)
    const titleDiv = document.createElement(`div`)
    titleDiv.style.display = `flex`
    titleDiv.style.justifyContent = `space-between`
    toDoContainer.classList.add(`container`)
    const newTitle = document.createElement(`h3`)
    newTitle.setAttribute(`index`,`${i}`)
    const newDate = document.createElement(`div`)
    newDate.style.justifySelf = `end`
    const checkList = document.createElement(`input`)
    checkList.classList.add(`checkList`)
    checkList.style.backgroundColor = `red`
    checkList.style.appearance = "none"
    checkList.style.borderRadius = `10px`
    checkList.style.height = `15px`
    checkList.setAttribute(`type`,`range`)
    if(projects[value][i].checklist == 0){
        checkList.value = 0
    }else{
        checkList.value = 1
        checkList.style.backgroundColor = "green"
    }
    checkList.setAttribute(`max`,`1`)
    checkList.setAttribute(`min`,`0`)
    checkList.style.width = `30px`
    checkList.style.justifySelf = `right`
    const dltBtn = document.createElement(`img`)
    dltBtn.src = `./close-circle.svg`
    dltBtn.alt = `remove`
    dltBtn.textContent = "remove"
    dltBtn.setAttribute(`index`,`${i}`)
    checkList.setAttribute(`index`,`${i}`)
    dltBtn.classList.add(`dltBtn`)
    dltBtn.style.width = `15px`
    dltBtn.style.height = `auto`
    dltBtn.style.borderRadius = `10px`
    dltBtn.style.justifySelf = `flex-start`
    dltBtn.style.gridRow = `1/2`
    if(projects[value][i].description != ``){
    const newDescription = document.createElement(`p`)
    newDescription.setAttribute(`index`,`${i}`)
    newDescription.textContent = projects[value][i].description
    toDoContainer.appendChild(newDescription)
    newDescription.style.gridRow = `4/5`
    }
    newTitle.textContent = projects[value][i].title
    newDate.textContent = projects[value][i].dueDate
    titleDiv.appendChild(newTitle)
    titleDiv.appendChild(checkList)
    toDoContainer.appendChild(titleDiv)
    toDoContainer.appendChild(newDate)
    toDoContainer.appendChild(dltBtn)
    flexContainer.appendChild(toDoContainer)
    content.appendChild(flexContainer)
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