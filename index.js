let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


let firstDisplay = document.getElementById("first");
let secondDisplay = document.getElementById("second");
let thirdDisplay = document.getElementById("third");

let userImg = document.getElementById("userImg");
let choice = "";


function displayFirstPart() {
    firstDisplay.style.display = "block";
    secondDisplay.style.display = "none";
    thirdDisplay.style.display = "none";
}

function displaySecondPart() {
    firstDisplay.style.display = "none";
    secondDisplay.style.display = "block";
    thirdDisplay.style.display = "none";
}

function displayThirdPart() {
    firstDisplay.style.display = "none";
    secondDisplay.style.display = "none";
    thirdDisplay.style.display = "flex";
}

function redirectionLoading() {
    displaySecondPart();
    setTimeout(function () {
        displayThirdPart();
    }, 2000);
}

rock.addEventListener("click", function () {
    choice = "Rock";
    redirectionLoading();
});

paper.addEventListener("click", function () {
    choice = "Paper";
    redirectionLoading();
});

scissors.addEventListener("click", function () {
    choice = "Scissors";
    redirectionLoading();
});
