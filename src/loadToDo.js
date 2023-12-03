import render from "./render"
import projects from "./newProject"
import loadModal from "./modal"
import searchIndex from "./searchProjectIndex"
import showProjects from "./viewProjects"
import toDo from "./newToDo"
import saveInMemory from "./saveInMemory"
function loadToDos(value){
    JSON.parse(localStorage.getItem("projects"))
    showProjects()
    loadModal()
    render(value)
        const allDltBtns = document.querySelectorAll(`.dltBtn `)
        allDltBtns.forEach(element => {
        element.addEventListener(`click`, () =>{
            let index = element.getAttribute(`index`)
            content.innerHTML = ""
            element.parentElement.remove()
            projects[searchIndex(`.projectInput`)].splice(index,1)
            render(value)
            loadToDos(searchIndex(`.projectInput`))
            localStorage.setItem("projects", JSON.stringify(projects));
        })
        });
    }
export default loadToDos