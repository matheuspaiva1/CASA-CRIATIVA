

function onOff() {
    document
    .querySelector("#modal")

    .classList

    .toggle("hide")

    document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .querySelector ("#modal")
    .classList
    .toggle ("addScroll")


}


function checkFields(event) {

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",

    ]

    const isEmpity = valuesToCheck.find(function(value) {
        
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpity = !event.target[value].value.trim()
        
        if(checkIfIsString && checkIfIsEmpity) {
            return true
        }
    })

    if(isEmpity) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

}



