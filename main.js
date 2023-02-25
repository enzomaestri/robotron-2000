
const control = document.querySelectorAll("[data-controle]");
const statistics = document.querySelectorAll("[data-statistic]");

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

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        changeData(event.target.dataset.controle, event.target.parentNode);
        updateStatistics(event.target.dataset.part);
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