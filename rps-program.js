let compChoice;
let playerChoice;

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3 + 1);
    
    switch (compChoice) {
        case 1: 
            compChoice = "Rock";
            break;

        case 2: 
            compChoice = "Paper";
            break;

        case 3: 
            compChoice = "Scissors";
            break;
        default:
            console.log("Number is not 1-3, something went wrong.")
}
    return compChoice;
}

function getPlayerChoice() {
    playerChoice = window.prompt("What's your choice?\n Rock\n Paper \n Scissors");
    return playerChoice;
}



getComputerChoice();