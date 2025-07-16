const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>'
const btn = document.querySelectorAll('button')
const svgs = document.querySelectorAll('button>svg')
const accordionItems = document.querySelectorAll("ul>li")
const allAccordionBodies = document.querySelectorAll("ul>li>p")



btn.forEach(button => {
    button.insertAdjacentHTML('beforeend', arrowSvg)
})
// console.log(allArrows);

accordionItems.forEach((e)=>{
    const accordionbody = e.lastElementChild // this is p element

    const thisBtn = e.firstElementChild;
    const icon = thisBtn.lastElementChild;

    e.addEventListener("click" , ()=>{
        const allArrows = document.querySelectorAll("button>svg")
        allAccordionBodies.forEach((body) => {
            if (body !== accordionbody) {
                body.classList.remove("accordionBody");
            }
        });
        allArrows.forEach((arrow) => {
            if (arrow !== icon) {
                arrow.classList.remove("arrow");
            }
        });
        accordionbody.classList.toggle("accordionBody");
        setTimeout(()=>{
            accordionbody.style.opacity = "1";
            accordionbody.style.transition = 'all 0.5s linear';
        },500)
        icon.classList.toggle("arrow");

    })
})




