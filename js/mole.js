//list of all the moles representing their state
const moles = [
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-0")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-1")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-2")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-3")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-4")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-5")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-6")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-7")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-8")
    },
    {
        status: "sad",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-9")
    },
]

function getInterval() {
    return Date.now() + 1000;
}

function init() {

}

init();