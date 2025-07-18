const backward = document.querySelector("#backward")
const forward = document.querySelector("#forward")
const carousel = document.querySelector("ul")
const items = document.querySelectorAll("ul > li")
const firstItem = document.querySelector("#firstLi")


let itemIndex = 0
let isForwardTrue = true


console.log(Array.from(items))

forward.addEventListener("click", () => {
    isForwardTrue = true

    items[itemIndex].classList.replace("backPlus", "plus")
    itemIndex++
    if (itemIndex > items.length - 1) {
        itemIndex = 0
        items.forEach((item, i) => {
            item.classList.remove('show', 'plus' , "firstItem")
        })
    }
    items[itemIndex].classList.add("show")
    console.log(Array.from(items))
})

backward.addEventListener("click", () => {
    isForwardTrue = false
    items[itemIndex].classList.replace("plus", "backPlus")
    itemIndex--
    if (itemIndex < 0) {
        itemIndex = items.length - 1
    }
    items[itemIndex].classList.add("backShow")
    console.log(Array.from(items))
})

let firstClass = () => {
    firstItem.classList.add("firstItem")
    if (isForwardTrue) {
        items.forEach((item) => {
            item.classList.add("myForward")
        })
    } else {
        items.forEach((item) => {
            item.classList.add("myBackward")
        })
    }
}
firstClass()