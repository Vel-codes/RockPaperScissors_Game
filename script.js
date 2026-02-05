// Create an array of the options
// GET user's choice
// Randomly Generate Computer's choice
// Match the user's choice to the computer's choice
// OUTPUT the result based on the rules of the game

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    console.log(`COMPUTER: ${computerChoice} | USER: ${userChoice}`);

    if (userChoice === computerChoice) {
        console.log("Draw!");
    } else {
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose!");
                computerScore++;
            } else {
                console.log("You win!");
                userScore++;
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose!");
                computerScore++;
            } else {
                console.log("You win!");
                userScore++;
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose!");
                computerScore++;
            } else {
                console.log("You win!");
                userScore++;
            }
        }
    }
    rounds++;
    console.log(`----------------------------------------------\n`);
}

let rounds = 0;
const options = ["rock", "paper", "scissors"];

while (rounds !== 5) {
    const userChoice = prompt("Choose an option (rock, paper, scissors)");

    const index = Math.floor(Math.random() * 3);
    const computerChoice = options[index];

    playRound(userChoice, computerChoice);
}

let result = null;
if (userScore === computerScore) {
    result = "It's a draw!";
} else if (userScore > computerScore) {
    result = "User wins!";
} else {
    result = "Computer wins!";
}
console.log(
    `Your score: ${userScore} | Computer's score: ${computerScore} --> ${result}`,
);
