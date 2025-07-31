export function offcanvas(params) {
    const showOffcanvasBtn = document.querySelector("#showOffcanvas")
    const offcanvas = document.querySelector("#offcanvas")
    const overlay = document.querySelector("#overlay")
    const closeBtn = document.querySelector("#close")




    showOffcanvasBtn.addEventListener("click", () => {
        offcanvas.classList.add("show")
        overlay.classList.add("show")
    })

    overlay.addEventListener("click", () => {
        offcanvas.classList.remove("show")
        overlay.classList.remove("show")
    })
    offcanvas.addEventListener("click", (e) => {
        e.stopPropagation()
    })
    closeBtn.addEventListener("click", () => {
        offcanvas.classList.remove("show")
        overlay.classList.remove("show")
    })

}