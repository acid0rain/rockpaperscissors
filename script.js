document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

});


function getComputerChoice() {
    let randomNumber = Math.random(); //get random float between 0 and 1
    let computerChoice = undefined;

    if (randomNumber <= 0.33) {
        computerChoice = "Rock";
    }
    else if (randomNumber >= 0.66) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissor";
    }

    console.log(randomNumber);
    console.log(computerChoice);
}


getComputerChoice();
