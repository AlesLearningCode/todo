function searchIndex(value){
const listOption = document.querySelector(value)
    const listOptions = document.querySelectorAll(`option`)
    let index
    listOptions.forEach(element => {
        if(element.getAttribute(`value`) == listOption.value.replace(`#`,``)){
           index = element.getAttribute(`index`)
        }
    });
    return index
}
export default searchIndex