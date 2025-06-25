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
    if(choice == "rock") {
        return "rock"
    } else if(choice == "paper") {
        return "paper"
    } else if(choice == "scissors") {
        return "scissors"
    } else {
        return "nothing"
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
console.log("You chose " + humanChoice);
console.log("Computer chose " + computerChoice);

    if(humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        console.log("You lose, paper beats rock!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("You win, rock beats scissors!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        console.log("You lose, scissors beat paper!")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log("You win, paper beats rock!")
    }  else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log("You lose, rock beats scissors!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You win, scissors beat paper!")
    }

}



for(let i = 1; i <=6; i++) {
    if (i<=5) {
    console.log(`--- Round ${i} ---`)
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    } else {
        console.log("--------------------")
        console.log("The game has finished.")
        console.log("Your Score: " + humanScore + " vs Computer Score: " + computerScore)
    }
}



























