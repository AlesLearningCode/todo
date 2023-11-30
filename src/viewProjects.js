import loadModal from "./modal"
import projects from "./newProject"
import loadToDos from "./loadToDo"
function showProjects(){
const projectInput = document.querySelector(`.projectInput`)
const sidebarProjects = document.querySelector(`.projects`)
    sidebarProjects.textContent = ""
    const projectList = document.querySelector(`datalist`)
    let saveInMemory = ["Default"] 
    console.log(localStorage.getItem("listOption")) 
    if(localStorage.getItem(`listOption`) != null){
       saveInMemory = localStorage.getItem(`listOption`).replace(/(['"])/g,``).replace(/[\[\]']+/g,``).split(`,`)   
    }
    const allOptions = document.querySelectorAll(`option`)
    allOptions.forEach((element,index) => {
        saveInMemory[index] = element.getAttribute(`value`)
    });
    projectList.innerHTML = ""
    for(let j = 0; j < saveInMemory.length; j++){
        const listOption = document.createElement(`option`)
        listOption.value = `${saveInMemory[j]}`
        listOption.setAttribute(`index`,`${j}`)
        projectList.appendChild(listOption)
    }
    console.log(saveInMemory)
    localStorage.setItem("listOption",JSON.stringify(saveInMemory))
    for(let i = 0; i < projects.length; i++){
        const projectDashboard = document.createElement(`div`)
        projectDashboard.classList.add(`projectContainer`)
        projectDashboard.setAttribute(`index`, `${i}`)
        projectDashboard.textContent = `# ${saveInMemory[i]}`
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