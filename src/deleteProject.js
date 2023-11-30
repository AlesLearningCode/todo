import loadToDos from "./loadToDo"
import projects from "./newProject"
import render from "./render"
import searchIndex from "./searchProjectIndex"
const dltProjectBtn = document.querySelector(`.deleteProject`)
dltProjectBtn.addEventListener(`click`,() =>{
    projects.splice(searchIndex(`.projectInput`),1)
    const allOptions = document.querySelectorAll(`option`)
    allOptions.forEach(element => {
        const listOption = document.querySelector(`.projectInput`)
        const projectList = document.querySelector(`#projectList`)
        if(element.getAttribute(`value`) == listOption.value){
            projectList.removeChild(element)
            const allOptions = document.querySelectorAll(`option`)
            console.log(allOptions)
            let saveInMemory = []
            allOptions.forEach((element,index) => {
            saveInMemory[index] = element.getAttribute(`value`)
            });
            localStorage.setItem("listOption",JSON.stringify(saveInMemory))
            listOption.value = "Default"
            loadToDos(searchIndex(`.projectInput`))
            localStorage.setItem("projects", JSON.stringify(projects));
        }
    });
})
export default dltProjectBtn