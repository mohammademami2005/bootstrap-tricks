const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>';
const btn = document.querySelectorAll('button');
const accordionItems = document.querySelectorAll("ul>li");
const allAccordionBodies = document.querySelectorAll("ul>li>p");


// allAccordionBodies.forEach(item => {
//     let accordionBodyHeight = item.scrollHeight;
//     item.setAttribute("data-height", accordionBodyHeight);
//     item.style.height = "0";
// });

btn.forEach(button => {
    button.insertAdjacentHTML('beforeend', arrowSvg);
});

accordionItems.forEach(e => {
    const accordionbody = e.lastElementChild; 
    const thisBtn = e.firstElementChild; 
    const icon = thisBtn.lastElementChild; 

    
    thisBtn.addEventListener("click", () => {
        // بستن همه قبل از باز کردن یکی
        allAccordionBodies.forEach(body => {
            if (body !== accordionbody) {
                body.style.height = "0px";
                body.classList.remove("accordionBody");
            }
        });

        document.querySelectorAll("button>svg").forEach(arrow => {
            if (arrow !== icon) {
                arrow.classList.remove("arrow");
            }
        });

        accordionbody.classList.toggle("accordionBody")

        // let newHeight = +(accordionbody.getAttribute("data-height"))
        // console.log(newHeight);
        

        
        
        // باز یا بسته کردن این یکی
        if (accordionbody.style.height === "0px" || accordionbody.style.height === "") {
            // accordionbody.style.height = newHeight+ "px";
            accordionbody.style.height = "auto";
        } else {
            accordionbody.style.height = "0px";
        }

        icon.classList.toggle("arrow");
    });
});
