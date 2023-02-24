const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const countArm = document.querySelector("#count-arm");

const control = document.querySelectorAll(".controle-ajuste");

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        changeData(event.target.textContent);
    })
})


function changeData(operation, bodyPart) {
    if (operation === "-") {
        countArm.value = parseInt(countArm.value) - 1;
    } else {
        countArm.value = parseInt(countArm.value) + 1;
    }
}