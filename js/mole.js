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

let score = 0;

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
        case 'fed':
            mole.next = getInterval();
            mole.status = 'leaving';
            // mole.node.children[0].src = "./images/mole-leaving.png";
            break;
        case 'leaving':
            mole.next = getGoneInterval();
            mole.king = getKingStatus();
            mole.status = 'gone';
            mole.node.children[0].classList.add('gone');
            break;
        case 'gone':
            mole.status = 'hungry';
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add('hungry');
            mole.node.children[0].classList.remove('gone');
            // mole.node.children[0].src = "./images/mole-hungry.png";
            break;
        case 'hungry':
            mole.status = 'sad';
            mole.next = getInterval();
            // mole.node.children[0].src = './images/mole-sad.png';
            mole.node.children[0].classList.remove('hungry');
    }

    setImageSource(mole);
}

function setImageSource(mole) {
    if(mole.king) {
        switch(mole.status) {
            case 'leaving':
                mole.node.children[0].src = "./images/king-mole-leaving.png";
                break;
            case 'sad':
                mole.node.children[0].src = "./images/king-mole-sad.png";
                break;
            case 'hungry':
                mole.node.children[0].src = "./images/king-mole-hungry.png";
                break;
            case 'fed':
                mole.node.children[0].src = "./images/king-mole-fed.png"
                break;
        }
    } else {
        switch(mole.status) {
            case 'leaving':
                mole.node.children[0].src = "./images/mole-leaving.png";
                break;
            case 'sad':
                mole.node.children[0].src = "./images/mole-sad.png";
                break;
            case 'hungry':
                mole.node.children[0].src = "./images/mole-hungry.png";
                break;
            case 'fed':
                mole.node.children[0].src = "./images/mole-fed.png"
                break;
        }
    } 
}

function getKingStatus() {
    return Math.random() > 0.9;
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
    const mole = moles[parseInt(event.target.dataset.index)];
    console.log(mole);

    mole.status = 'fed';
    mole.next = getInterval();
    setImageSource(mole);
    mole.node.children[0].classList.remove('hungry');

    if(mole.king)
        score += 2;
    else 
        score += 1;

    if(score >= 20)
        win();

    document.querySelector('.worm-container').style.width = `${5 * score}%`;
}

function win() {
    document.querySelector('.container').classList.add('gone');
    document.querySelector('.win').classList.remove('gone');
}

function init() {
    nextFrame();
    document.querySelector('.container').addEventListener('click', feed);
}

init();