//list of all the moles representing their state
const moles = [
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-0")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-1")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-2")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-3")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-4")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-5")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-6")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-7")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-8")
    },
    {
        status: "gone",
        next: getInterval(),
        king: false,
        node: document.querySelector("#hole-9")
    },
]

//functions fot getting interval of time (this makes the nextFrame() wait for x amount of time before updatin its state)
function getInterval() {
    return Date.now() + 1000;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() + 3000) + 2000;
}

//this function is responsible for changing the state of mole
function getNextStatus(mole) {
    switch (mole.status) {
        case 'sad':
            mole.next = getInterval();
            mole.status = 'leaving';
            mole.node.children[0].src = "./images/mole-leaving.png";
            break;
        case 'leaving':
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add('gone');
            break;
        case 'gone':
            mole.status = 'hungry';
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add('hungry');
            mole.node.children[0].classList.remove('gone');
            mole.node.children[0].src = "./images/mole-hungry.png";
            break;
        case 'hungry':
            mole.status = 'sad';
            mole.next = getInterval();
            mole.node.children[0].src = './images/mole-sad.png';
            mole.node.children[0].classList.remove('hungry');
    }
}

let runAgainAt = Date.now() + 100;
function nextFrame() {
    const now = Date.now();

    if(now > runAgainAt) {
        for(let i = 0; i < moles.length; i++) {
            if(moles[i].next < now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

function feed(event) {
    if(event.target.tagName !== 'IMG' || !event.target.classList.contains('hungry')) {
        return;
    }
    const mole = event.target;
    console.log(mole);

    mole.status = 'fed';
    mole.next = getInterval();
    mole.src = './images/mole-fed.png';
    mole.classList.remove('hungry');
}

function init() {
    nextFrame();
    document.querySelector('.container').addEventListener('click', feed);
}

init();