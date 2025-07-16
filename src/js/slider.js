const forward = document.querySelector(".forward")
const backward = document.querySelector(".backward")
const items = document.querySelectorAll("ul>li")

let itemIndex = 0;
let isForward = true

forward.addEventListener("click", () => {
    isForward = true
    itemIndex++
    if (itemIndex > items.length) {
        itemIndex = 0
    }
    showResult()
})

backward.addEventListener("click", () => {
    itemIndex--
    if (itemIndex < 0) {
        itemIndex = items.length - 1
    }
    isForward = false
    showResult()
})



const showResult = () => {
    items.forEach((item, i) => {
        if (i !== itemIndex) {
            item.style.left = isForward ? '-100%' : '100%'
            item.classList.remove('show')
        }
    })

    const newItem = items[itemIndex]
    newItem.style.left = isForward ? '100%' : '-100%'

    newItem.offsetHeight
    console.log(newItem.offsetHeight);

    newItem.classList.add("show");
    newItem.style.left = "0";

}
