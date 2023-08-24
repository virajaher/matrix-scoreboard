// add function that triggers the onclick event of the points buttons and adds points according to the buttons.
// reset all the values to zero with the onclick event of the restart button
// add fouls by using subtract funtion and creating button for foul
// timer can be place around restart button and we can use laps that are similar to the passenger counter app
// maxpoints = 99

let homeCount = 0;
let guestCount = 0;
let homeCounter = document.getElementById("home-count-el")
let guestCounter = document.getElementById("guest-count-el")

// Home points
function incrementOne() {
    homeCount += 1;
    homeCounter.textContent = homeCount;
}

function incrementTwo() {
    homeCount += 2;
    homeCounter.textContent = homeCount;
}

function incrementThree() {
    homeCount += 3;
    homeCounter.textContent = homeCount;
}

// Guest Points
function incOne() {
    guestCount += 1;
    guestCounter.textContent = guestCount;
}

function incTwo() {
    guestCount += 2;
    guestCounter.textContent = guestCount;
}

function incThree() {
    guestCount += 3;
    guestCounter.textContent = guestCount;
}

//Restart
function restart() {
    guestCount = 0;
    homeCount = 0;
    homeCounter.textContent = homeCount;
    guestCounter.textContent = guestCount;
}

