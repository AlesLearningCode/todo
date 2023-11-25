function searchIndex(element){
const listOption = document.querySelector(element)
    const listOptions = document.querySelectorAll(`option`)
    let index
    listOptions.forEach(element => {
        if(element.getAttribute(`value`) == listOption.value){
           index = element.getAttribute(`index`)
        }
    });
    return index
}
export default searchIndex