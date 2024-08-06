// document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

// });



//define variables
var playerCount = 0;
var computerCount = 0;
let keepPlaying = true;

let playerChoice = undefined
let computerChoice = undefined;

function getComputerChoice() {
    let randomNumber = Math.random(); //get random float between 0 and 1

    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber >= 0.66) {
        computerChoice = "paper";
    }

    else {
        computerChoice = "scissors";
    }

    console.log(randomNumber); //test
    console.log("Computer picked: " + computerChoice);
    return computerChoice;
}

function getPlayerChoice() {
    let validChoice = false;
    while (validChoice == false) { //input validation loop
        let choice = prompt("Rock, Paper or Scissors?");
        let playerChoice = choice.toLowerCase();
        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            alert("Invalid Choice. Chose Rock, Paper or Scissors")
        }

        else {
            validChoice = true;
            console.log("You picked: " + playerChoice);
            return playerChoice;
        }
    }
}

while (keepPlaying == true) { //repeating loop


//capture choices and assign them to variable
playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();

//game logic

if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("Computer picked: " + computerChoice + ". Congratulations, you win!");
    playerCount++;
}
else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("Computer picked: " + computerChoice + ". Congratulations, you win!");
    playerCount++;
}
else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("Computer picked: " + computerChoice + ". Congratulations, you win!");
    playerCount++;
}
else if (playerChoice === computerChoice) {
    alert("Its a tie!");
}
else {
    alert("Computer picked: " + computerChoice + ". You lose!")
    computerCount++;
}

//display scores
console.log("Player Count: " + playerCount);
console.log("Computer count: " + computerCount);

let again = prompt("Play again? Yes / No ");
    again = again.toLowerCase();
    if (again != "yes") {
        keepPlaying = false;
    }
    
}