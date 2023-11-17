class toDo{
    constructor(title,description,checklist,dueDate){
        this.title = title
        this.description = description
        this.checklist = checklist
        this.dueDate = dueDate
        this.pointList = 0
    }
    addPoints(){
        return this.pointList++
    }
}
export default toDo