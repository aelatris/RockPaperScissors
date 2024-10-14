let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let choice = "";

rock.addEventListener("click", function(){
    choice = "Rock";
    alert("You have chosen " + choice);

    window.location.href = "loading.html";

});

paper.addEventListener("click", function(){
    choice = "Paper";

    alert("You have chosen " + choice);
});

scissors.addEventListener("click", function(){
    choice = "Scissors";

    alert("You have chosen " + choice);
});
