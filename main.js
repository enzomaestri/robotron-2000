
const control = document.querySelectorAll("[data-controle]");
const statistics = document.querySelectorAll("[data-statistic]");
const menuSound = document.querySelector("#menu_sound");
const buildSound = document.querySelector("#production_sound");

const colorButtomNext = document.querySelector(`[data-change="next"]`)
const colorButtomPrevious = document.querySelector(`[data-change="previous"]`)

const parts = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}

const robots = document.querySelectorAll("[data-color]");

let i = 0;

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        changeData(event.target.dataset.controle, event.target.parentNode);
        updateStatistics(event.target.dataset.part);
        menuSound.play();
    })
})


function changeData(operation, control) {
    const part = control.querySelector("[data-contador]");

    if (operation === "-") {
        part.value = parseInt(part.value) - 1;
    } else {
        part.value = parseInt(part.value) + 1;
    }
}

function updateStatistics(part) {
    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic];
    })
}

function playProductionSound() {
    const productionButtom = document.querySelector("#producao");
    productionButtom.addEventListener("click", () => {
        buildSound.play();
        console.log(productionButtom);
    })
}

colorButtomNext.addEventListener("click", () => {
    changeColorNext();
    console.log(i);
})

colorButtomPrevious.addEventListener("click", () => {
    changeColorPrevious();
    console.log(i);
})


function changeColorNext() {
    if (i < 5){
        robots[(i+1)].setAttribute("data-view", "top");
        robots[i].removeAttribute("data-view", "top");
        if (i < 5){
            i++;
        }
    }
}

function changeColorPrevious() {
    if (i > 0){
        robots[(i-1)].setAttribute("data-view", "top");
        robots[i].removeAttribute("data-view", "top");
        if (i > 0){
            i--;
        }
    }
}