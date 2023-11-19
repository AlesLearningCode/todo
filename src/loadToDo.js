import render from "./render"
import projects from "./newProject"
import searchIndex from "./searchIndex"
function loadToDos(){
    render()
        const allDltBtns = document.querySelectorAll(`.dltBtn `)
        allDltBtns.forEach(element => {
        element.addEventListener(`click`, () =>{
            let index = element.getAttribute(`index`)
            content.innerHTML = ""
            element.parentElement.remove()
            console.log(index)
            projects[searchIndex(`.projectInput`)].splice(index,1)
            render()
            loadToDos()
        })
        });
        console.log(projects)
    }
export default loadToDos