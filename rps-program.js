// let computerScore = 0;
// let playerScore = 0;

// function getComputerChoice() {
//     let computerSelection;
//     switch (Math.floor(Math.random() * 3 + 1)) { // Creates a random number between 1-3
//         case 1: 
//             computerSelection = "rock";
//             break;

//         case 2: 
//             computerSelection = "paper";
//             break;

//         case 3: 
//             computerSelection = "scissors";
//             break;
// }
//     return computerSelection;

// }

// function playRound (computerSelection, playerSelection) {

//     if (playerSelection == computerSelection) {
//         return console.log(`It's a tie! (${playerSelection} == ${computerSelection}) `);
//     }
    
//     if (playerSelection == "rock") {
//         if (computerSelection == "scissors") {
//             playerScore++;
//             return console.log("You win! Rock beats Scissors!");
//         }

//         else {
//             computerScore++;
//             return console.log("You lose! Rock loses to Paper!");
//         }
//     }

//     if (playerSelection == "paper") {
//         if (computerSelection == "rock") {
//             playerScore++;
//             return console.log("You win! Paper beats Rock!");
//         }

//         else {
//             computerScore++;
//             return console.log("You lose! Paper loses to Scissors!");
//         }
//     }

//     if (playerSelection == "scissors") {
//         if (computerSelection == "paper") {
//             playerScore++;
//             return console.log("You win! Scissosrs beats Paper!");
//         }

//         else {
//             computerScore++;
//             return console.log("You lose! Scissors loses to Rock!");
//         }
//     }
// }

// function game(event) {
//     const btn = document.querySelector(`.button[data-key="${event.keyCode}"]`);
//     if (!btn) return;

//     btn.classList.add("selected");
//     let playerSelection;
//     switch(event.keyCode){
//         case 49: 
//             playerSelection = "rock";
//             break;

//         case 50: 
//             playerSelection = "paper";
//             break;

//         case 51:
//             playerSelection = "scissors";
//             break;
//     }
//     computerSelection = getComputerChoice();

//     console.log(`Computer chose: ${computerSelection} || Player chose: ${playerSelection}`);
//     // console.log(`Computer score: ${computerScore}) || Player score: ${playerScore}`);
//     console.log("_");
//     playRound(computerSelection, playerSelection);

//      if (computerScore > playerScore) {
//         console.log(`You lost. Computer score: ${computerScore} || Player score: ${playerScore}`)
//      }
//      if (computerScore < playerScore) {
//         console.log(`You won. Computer score: ${computerScore} || Player score: ${playerScore}`)
//      }
//      if (computerScore == playerScore) {
//         console.log(`It's a tie. Computer score: ${computerScore} || Player score: ${playerScore}`)
//      }    
// }
 
// // game();

// window.addEventListener('keydown', game);


const button = document.getElementById("button");
const popup = document.getElementById("popup");
const options = document.getElementById("options");

button.addEventListener("click", () => {
    options.classList.toggle("options-hide");
    popup.classList.toggle("popup-open");
});