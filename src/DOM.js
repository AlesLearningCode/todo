import projects from "./newProject"
import toDo from "./newToDo"
import { content } from "."
const addProject = document.querySelector(".addProject")
const projectName = document.querySelector(".projectName")
addProject.addEventListener(`click`, () =>{
    const projectDiv = document.createElement("div")
    projectDiv.classList.add("projectDiv")
    projectDiv.setAttribute("index",`${projects.length - 1}`)
    projectDiv.setAttribute(`title`,`${projectName.value}`)
    projectDiv.style.width = `100px`
    projectDiv.style.height = `100px`
    projectDiv.style.border = `solid black 1px`
    projects.push([])
    content.appendChild(projectDiv)
    console.log(projects)
})
const addToDo = document.querySelector(".addToDo")
addToDo.addEventListener(`click`, () => {
    const projectDiv = document.querySelector("#content div")
    projects[projectDiv.getAttribute(`index`)].push(toDo(projectName.value,"description","dueDate","priority","notes","checkList"))
    const allProjectDivs = document.querySelectorAll(".projectDiv")
    allProjectDivs.forEach((project,) => {
        console.log(projectDiv.getAttribute(`index`))
    project.addEventListener(`click`,() =>{
        const projectDiv = document.querySelector("#content div")
        console.log(projectDiv.getAttribute(`index`))
    })
})
})
export {addProject}