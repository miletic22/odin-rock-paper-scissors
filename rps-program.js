let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
    let computerSelection;
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
    let playerSelection;
    playerSelection = window.prompt("What's your choice?\n Rock\n Paper \n Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}



function playRound (computerSelection, playerSelection) {

    if (playerSelection == computerSelection) {
        return console.log(`It's a tie! (${playerSelection} == ${computerSelection}) `);
    }
    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerScore++;
            return console.log("You win! Rock beats Scissors!");
        }

        else {
            computerScore++;
            return console.log("You lose! Rock loses to Paper!");
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return console.log("You win! Paper beats Rock!");
        }

        else {
            computerScore++;
            return console.log("You lose! Paper loses to Scissors!");
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore++;
            return console.log("You win! Scissosrs beats Paper!");
        }

        else {
            computerScore++;
            return console.log("You lose! Scissors loses to Rock!");
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        playRound(computerSelection, playerSelection);
        console.log(`Computer chose: ${computerSelection} || Player chose: ${playerSelection}`);
        console.log(`Computer score: ${computerScore}) || Player score: ${playerScore}`);
        console.log("_")
     }
     if (computerScore > playerScore) {
        console.log("You lost.")
     }
     else {
        console.log("You won!");
     }
}
 
game();
