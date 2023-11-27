import loadModal from "./modal"
import projects from "./newProject"
import loadToDos from "./loadToDo"
function showProjects(){
const projectInput = document.querySelector(`.projectInput`)
const sidebarProjects = document.querySelector(`.projects`)
    sidebarProjects.textContent = ""
    const allOptions = document.querySelectorAll(`option`)
    for(let i = 0; i < projects.length; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.classList.add(`projectContainer`)
        projectDashboard.setAttribute(`index`, `${i}`)
        projectDashboard.textContent = `# ${allOptions[i].getAttribute(`value`)}`
        projectDashboard.style.display = `grid`
        projectDashboard.style.alignItems = `center`
        projectDashboard.style.padding = `10px`
        projectDashboard.style.marginTop = `20px`
        sidebarProjects.appendChild(projectDashboard)
        const projectDashboards = document.querySelectorAll(`.projectContainer`) 
        projectDashboards.forEach(element => {
        element.addEventListener(`click`, () => {
        projectInput.value = element.textContent.replace(`# `,``)
        const index = element.getAttribute(`index`)
        loadToDos(index)
    })
})
}
}
export default showProjects