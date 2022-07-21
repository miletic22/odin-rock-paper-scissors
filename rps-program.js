let computerSelection;
let playerSelection;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 + 1)) { // Creates a random number between 1-3
        case 1: 
            computerSelection = "rock";
            break;

        case 2: 
            computerSelection = "paper";
            break;

        case 3: 
            computerSelection = "scissors";
            break;
        default:
            console.log("Number is not 1-3, something went wrong.")
}
    return computerSelection;

}

function getPlayerChoice() {
    playerSelection = window.prompt("What's your choice?\n Rock\n Paper \n Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;

}


computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

function playGame (computerSelection, playerSelection) {


    if (playerSelection == computerSelection) {
        return console.log("It's a tie!");
    }
    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return console.log("You win! Rock beats Scissors!");
        }
        else {
            return console.log("You lose! Rock loses to Paper!");
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return console.log("You lose! Paper loses to Scissors!");
        }
        else {
            return console.log("You win! Paper beats Rock!");
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return console.log("You lose! Scissors loses to Rock!");
        }
        else {
            return console.log("You win! Scissosrs beats Paper!");
        }
    }
}

 playGame (computerSelection, playerSelection);