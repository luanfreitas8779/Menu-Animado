const container = document.querySelector(".container")
const allLi = document.querySelectorAll("li")

allLi.forEach( (item, index) => {
    
    item.addEventListener("click", e => {
        container.querySelector(".home").classList.remove("home")
        item.classList.add("home")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })
})