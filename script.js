function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }

    
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    if(choice === "rock") {
        return "rock"
    } else if(choice === "paper") {
        return "paper"
    } else if(choice === "scissors") {
        return "scissors"
    } else {
        return "nothing"
    }
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
console.log("You chose " + humanChoice);
console.log("Computer chose " + computerChoice);

    if(humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        console.log("You lose, paper beats rock!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("You win, rock beats scissors!")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        console.log("You lose, scissors beat paper!")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log("You win, paper beats rock!")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie!")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log("You lose, rock beats scissors!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You win, scissors beat paper!")
    }


}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


playRound(humanChoice, computerChoice)
console.log("Your Score " + humanScore)
console.log("Computer Score " + computerScore)
























