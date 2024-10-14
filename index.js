let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


let firstDisplay = document.getElementById("first");
let secondDisplay = document.getElementById("second");
let thirdDisplay = document.getElementById("third");

let userImg = document.getElementById("userImg");
let computerImg = document.getElementById("computerImg");
let choice = "";

let rockImg = "https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock2.png";
let paperImg = "play-rock-paper-scissors-with-us-246506.png";
let scissorsImg = "https://i.pinimg.com/originals/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.png";


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

let imgArray = [rockImg, paperImg, scissorsImg];
randomImg =  Math.floor(Math.random() * imgArray.length);

rock.addEventListener("click", function () {
    choice = "Rock";
    redirectionLoading();
    userImg.src = rockImg
    randomImg =  Math.floor(Math.random() * imgArray.length);
    computerImg.src = imgArray[randomImg];
});

paper.addEventListener("click", function () {
    choice = "Paper";
    redirectionLoading();
    userImg.src = paperImg;
    randomImg =  Math.floor(Math.random() * imgArray.length);
    computerImg.src = imgArray[randomImg];
});

scissors.addEventListener("click", function () {
    choice = "Scissors";
    redirectionLoading();
    userImg.src = scissorsImg;
    randomImg =  Math.floor(Math.random() * imgArray.length);
    computerImg.src = imgArray[randomImg];
});
