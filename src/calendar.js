import { first } from "lodash"
function createCalendar(){
    const calendar = document.querySelector(`.calendar`)
    calendar.addEventListener(`click`, () => {
    const content = document.querySelector(`#content`)
    content.innerHTML = ""
    content.removeAttribute(`style`)
    content.style.gridRow = `1/5`
    content.style.gridColumn = `2/5`
    const ul = document.createElement(`ul`)
    ul.style.borderTop = `1px black solid`
    ul.style.borderBottom = `1px black solid`
    ul.style.listStyleType = `none`
    ul.style.display = `grid`
    ul.style.gridTemplateColumns = `repeat(7,100px)`
    ul.style.justifyContent = `center`
    ul.style.flexWrap = `wrap`
    ul.style.marginTop = `20px`
    const days = [`Mon`,`Tue`,`Wed`,`Thur`,`Fri`,`Sat`,`Sun`]
    for(let i = 0; i < 7; i++){
    const li = document.createElement(`li`)
    li.style.display = `flex`
    li.style.flexDirection = `column`
    li.style.textAlign = `center`
    li.style.marginBottom = `20px`
    li.textContent = days[i]
    ul.appendChild(li)
    content.appendChild(ul)
    }
    const date = new Date()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }
    const daysInMonth = getDaysInMonth(currentYear,currentMonth)
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    for(let k = 0; k < firstDay.getDay() - 1; k++){
        const div = document.createElement(`div`)
        div.style.width = `100px`
        div.style.height = `100px`
        ul.appendChild(div)
    }
    for(let j = 0; j < daysInMonth; j++){
        const div = document.createElement(`div`)
        div.textContent = `${j+1}`
        div.setAttribute(`index`,`${j}`)
        div.style.display = `grid`
        div.style.border = `1px solid black`
        div.style.width = `100px`
        div.style.height = `100px`
        div.style.alignItems = `center`
        div.style.justifyItems = `center`
        ul.appendChild(div)
        div.addEventListener(`click`, () =>{
            console.log(div.getAttribute(`index`))
        })
    }
})
}
export default createCalendar