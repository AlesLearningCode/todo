import projects from "./newProject"
import searchIndex from "./searchIndex"
import toDo from "./newToDo"
function render(){
    const content = document.querySelector(`#content`)
    content.innerHTML = ""
    for(let i = 0; i < projects[searchIndex(`.projectInput`)].length; i++){
    const toDoContainer = document.createElement(`div`)
    toDoContainer.classList.add(`container`)
    const newTitle = document.createElement(`h3`)
    const newDescription = document.createElement(`p`)
    const newDate = document.createElement(`div`)
    const checkList = document.createElement(`input`)
    checkList.classList.add(`checkList`)
    checkList.style.backgroundColor = `red`
    checkList.style.appearance = "none"
    checkList.style.borderRadius = `10px`
    checkList.setAttribute(`type`,`range`)
    if(projects[searchIndex(`.projectInput`)][i].checklist == 0){
        checkList.value = 0
    }else{
        checkList.value = 1
        checkList.style.backgroundColor = "green"
    }
    checkList.setAttribute(`max`,`1`)
    checkList.setAttribute(`min`,`0`)
    checkList.style.width = `40px`
    const dltBtn = document.createElement(`button`)
    dltBtn.textContent = "delete"
    dltBtn.setAttribute(`index`,`${i}`)
    checkList.setAttribute(`index`,`${i}`)
    dltBtn.classList.add(`dltBtn`)
    newDescription.textContent = projects[searchIndex(`.projectInput`)][i].description
    newTitle.textContent = projects[searchIndex(`.projectInput`)][i].title
    newDate.textContent = projects[searchIndex(`.projectInput`)][i].dueDate
    toDoContainer.appendChild(newTitle)
    toDoContainer.appendChild(newDescription)
    toDoContainer.appendChild(newDate)
    toDoContainer.appendChild(checkList)
    toDoContainer.appendChild(dltBtn)
    content.appendChild(toDoContainer)
    checkList.addEventListener(`click`, () =>{
        console.log(searchIndex(`.projectInput`))
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
}
export default render