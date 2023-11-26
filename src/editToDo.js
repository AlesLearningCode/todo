import projects from "./newProject";
import searchIndex from "./searchProjectIndex"
function editToDo(value,property,inputType){
    value.forEach(element => {
        element.addEventListener(`click`, function edit(){
            const input = document.createElement(`${inputType}`)
            input.classList.add(`toDoEdit`)
            input.style.padding = `5px`
            input.style.borderRadius = `10px`
            input.style.justifySelf = `start`
            input.value = element.textContent
            element.removeEventListener(`click`, edit)
            const index = element.getAttribute(`index`)
            input.addEventListener(`keypress`, function(e) {
                if(e.key == `Enter`){
                element.textContent = input.value
                projects[searchIndex(`.projectInput`)][index][property] = input.value
                console.log(projects[searchIndex(`.projectInput`)][index][property])
                console.log(projects[searchIndex(`.projectInput`)][index])
                element.addEventListener(`click`, edit)
                }
            })
            element.textContent = "" 
            element.appendChild(input)
        })
    });
    
}
export default editToDo