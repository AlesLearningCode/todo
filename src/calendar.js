function createCalendar(){
    const calendar = document.querySelector(`.calendar`)
    calendar.addEventListener(`click`, () => {
    const content = document.querySelector(`#content`)
    content.innerHTML = ""
    content.removeAttribute(`style`)
    const ul = document.createElement(`ul`)
    const days = [`Mon`,`Tue`,`Wed`,`Thur`,`Fri`,`Sat`,`Sun`]
    for(let i = 0; i < 7; i++){
    const div = document.createElement(`div`)
    const li = document.createElement(`li`)
    li.textContent = days[i]
    li.appendChild(div)
    ul.appendChild(li)
    content.appendChild(ul)
    }
    ul.style.display = `flex`
    ul.style.gap = `20px`
})
}
export default createCalendar