import toDo from "./newToDo";

function saveInMemory(title,description,checklist){
    localStorage.setItem(toDo,title)
    localStorage.setItem(toDo,description)
    localStorage.setItem(toDo,checklist)
}
export default saveInMemory