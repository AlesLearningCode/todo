import render from "./render"
import projects from "./newProject"
import loadModal from "./modal"
import searchIndex from "./searchProjectIndex"
import showProjects from "./viewProjects"
function loadToDos(value){
    showProjects()
    loadModal()
    render(value)
        const allDltBtns = document.querySelectorAll(`.dltBtn `)
        allDltBtns.forEach(element => {
        element.addEventListener(`click`, () =>{
            let index = element.getAttribute(`index`)
            content.innerHTML = ""
            element.parentElement.remove()
            console.log(index)
            projects[searchIndex(`.projectInput`)].splice(index,1)
            render(value)
            loadToDos(searchIndex(`.projectInput`))
        })
        });
        console.log(projects)
    }
export default loadToDos