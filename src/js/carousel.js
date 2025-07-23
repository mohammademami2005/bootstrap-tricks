const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const items = document.querySelectorAll("ul > li");

let currentIndex = 0;

function resetClasses() {
    items.forEach(item => {
        item.classList.remove("active", "next", "prev");
    });
}

function updateCarousel(newIndex, direction) {
    resetClasses();

    const prevIndex = currentIndex;
    currentIndex = newIndex;

    // آیتم فعلی
    items[currentIndex].classList.add("active");

    if (prevIndex !== currentIndex) {
        if (direction === "forward") {
            items[prevIndex].classList.add("prev");
        } else if (direction === "backward") {
            items[prevIndex].classList.add("next");
        }
    }
}


forward.addEventListener("click", () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= items.length) newIndex = 0;
    updateCarousel(newIndex, "forward");
});

backward.addEventListener("click", () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = items.length - 1;
    updateCarousel(newIndex, "backward");
});

// مقدار اولیه
updateCarousel(currentIndex, "forward");

    let arr =  Array.from(items)
    console.log(arr)
