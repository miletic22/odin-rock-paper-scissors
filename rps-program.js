function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 + 1)) { // Creates a random number between 1-3
        case 1: 
            compChoice = "rock";
            break;

        case 2: 
            compChoice = "paper";
            break;

        case 3: 
            compChoice = "scissors";
            break;
        default:
            console.log("Number is not 1-3, something went wrong.")
}
    return compChoice;

}

function getPlayerChoice() {
    playerChoice = window.prompt("What's your choice?\n Rock\n Paper \n Scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;

}



function playGame (g) {
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice == compChoice) {
        return console.log("It's a tie!");
    }
    
    if (playerChoice == "rock") {
        if (compChoice == "scissors") {
            return console.log("You win! Rock beats Scissors!");
        }
        else {
            return console.log("You lose! Rock loses to Paper!");
        }
    }

    if (playerChoice == "paper") {
        if (compChoice == "scissors") {
            return console.log("You lose! Paper loses to Scissors!");
        }
        else {
            return console.log("You win! Paper beats Rock!");
        }
    }

    if (playerChoice == "scissors") {
        if (compChoice == "rock") {
            return console.log("You lose! Scissors loses to Rock!");
        }
        else {
            return console.log("You win! Scissosrs beats Paper!");
        }
    }
}

playGame();