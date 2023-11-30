import toDo from "./newToDo";
let projects = JSON.parse(localStorage.getItem("projects"))
if(projects === null){
    projects = [
        []
    ]
}
export default projects