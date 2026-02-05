// Create an array of the options
// GET user's choice
// Randomly Generate Computer's choice
// Match the user's choice to the computer's choice
// OUTPUT the result based on the rules of the game

const options = ["rock", "paper", "scissors"];

const index = Math.floor(Math.random() * 3);
const computerChoice = options[index];

const userChoice = prompt("Choose an option (rock, paper, scissors)");

if (userChoice === computerChoice) {
    console.log("Draw!");
    console.log(`COMPUTER: ${computerChoice} | USER: ${userChoice}`);
} else {
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose!");
        } else {
            console.log("You win!");
        }
        console.log(`COMPUTER: ${computerChoice} | USER: ${userChoice}`);
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose!");
        } else {
            console.log("You win!");
        }
        console.log(`COMPUTER: ${computerChoice} | USER: ${userChoice}`);
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose!");
        } else {
            console.log("You win!");
        }
        console.log(`COMPUTER: ${computerChoice} | USER: ${userChoice}`);
    }
}
