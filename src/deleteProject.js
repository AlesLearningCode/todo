import projects from "./newProject"
import render from "./render"
import searchIndex from "./searchIndex"
const dltProjectBtn = document.querySelector(`.deleteProject`)
dltProjectBtn.addEventListener(`click`,() =>{
    projects.splice(searchIndex(`.projectInput`),1)
    const allOptions = document.querySelectorAll(`option`)
    allOptions.forEach(element => {
        const listOption = document.querySelector(`.projectInput`)
        const projectList = document.querySelector(`#projectList`)
        if(element.getAttribute(`value`) == listOption.value){
            projectList.removeChild(element)
            listOption.value = "default project"
            render()
        }
    });
    console.log(searchIndex(`.projectInput`))
})
export default dltProjectBtn