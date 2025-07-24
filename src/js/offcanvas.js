const showOffcanvasBtn = document.querySelector("#showOffcanvas")
const offcanvasContainer = document.querySelector("#offcanvasContainer")
const offcanvas = document.querySelector("#offcanvas")
const overlay = document.querySelector("#overlay")
const closeBtn = document.querySelector("#close")

console.log(showOffcanvasBtn, offcanvasContainer);



showOffcanvasBtn.addEventListener("click", () => {
    offcanvas.classList.add("show")
    overlay.classList.add("show")
    offcanvasContainer.style.pointerEvents = "all"
})

overlay.addEventListener("click", () => {
    offcanvasContainer.style.pointerEvents = "none"
    offcanvas.classList.remove("show")
    overlay.classList.remove("show")
})
closeBtn.addEventListener("click", () => {
    offcanvasContainer.style.pointerEvents = "none"
    offcanvas.classList.remove("show")
    overlay.classList.remove("show")
})




// offcanvasContainer.addEventListener("click", (e) => {
//     if (e.target.id === "overlay") {
//         offcanvasContainer.classList.remove("show")
//         offcanvasContainer.style.pointerEvents = "none"
//     }
// })
