const sampleAlert = document.querySelector("#alert");
const welcomeAlert = document.querySelector("#welcomeAlert");
const errorAlert = document.querySelector("#errorAlert");
const importantAlert = document.querySelector("#importantAlert");
const body = document.querySelector("body")




const sampleAlert1 = {
    type: "autoClose",
    message: "this is an error alert",
    icon: "",
    styleClass: 'sampleAlert',
}
const errorAlert1 = {
    type: "client close",
    message: "this is an error alert",
    icon: "",
    styleClass: 'errorAlert',
}

const welcomeAlert1 = {
    type: 'autoClose',
    message: 'this is an welcome alert',
    icon: '',
    styleClass: "welcomeAlert",
}
const importantAlert1 = {
    type: 'client close',
    message: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
    icon: '',
    styleClass: "importantAlert",
}

const createAlert = (message, icon, type, styleClass) => {
    const alert = document.createElement("div")
    const alertIcon = document.createElement('img')
    const alertContent = document.createElement("p")
    const alertCloseBtn = document.createElement("button")

    body.appendChild(alert)
    icon ? alert.prepend(alertIcon) : undefined;
    alert.classList.add("alert", styleClass)
    alertCloseBtn.textContent = '×'
    alertContent.textContent = message
    alert.appendChild(alertContent)

    const closerAlert = () => {
        alertCloseBtn.addEventListener("click", () => {
            alert.remove()
        })
    }

    if (type == "autoClose") {
        setTimeout(() => {
            alert.remove()
        }, 2000);
    } else if (type === "client close") {
        alert.appendChild(alertCloseBtn)
        closerAlert()
    } else {
        return
    }
}

welcomeAlert.addEventListener('click', () => {
    createAlert(welcomeAlert1.message, welcomeAlert1.icon, welcomeAlert1.type, welcomeAlert1.styleClass)
})

errorAlert.addEventListener("click", () => {
    createAlert(errorAlert1.message, errorAlert1.icon, errorAlert1.type, errorAlert1.styleClass)
})
sampleAlert.addEventListener("click", () => {
    createAlert(sampleAlert1.message, sampleAlert1.icon, sampleAlert1.type, sampleAlert1.styleClass)
})
importantAlert.addEventListener("click", () => {
    createAlert(importantAlert1.message, importantAlert1.icon, importantAlert1.type, importantAlert1.styleClass)
})