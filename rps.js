// Random computer choice
function getComputerChoice() {
    let computerChoice = ["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// Scores
let humanScore = 0;
let computerScore = 0;

// Play 1 round
function playRound(humanChoice, computerChoice) {

    
     
     computerChoice = getComputerChoice();
     console.log(`You chose ${humanChoice}.`);
     console.log(`Computer chose ${computerChoice}.`);

     let compChoice = document.querySelector("#computer-choice");
     compChoice.textContent = ""
     let img = document.createElement("img");

    if (computerChoice === "rock") {
        img.src = "images/rock.webp";
        img.style.width = "50%";
        compChoice.appendChild(img);
    }

    if (computerChoice === "paper") {
        img.src = "images/Towelie.webp";
        img.style.width = "50%";
        compChoice.appendChild(img);
    }

    if (computerChoice === "scissors") {
        img.src = "images/scissors.gif";
        img.style.width = "50%";
        compChoice.appendChild(img);
    }


                // Tie
     if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);

                // User input: rock
     } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`Computer wins! Paper beats rock.`);
        computerScore++;
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! Rock beats scissors.`);
        humanScore++;

                // User input: paper
     } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`Computer wins! Scissors beat paper.`);
        computerScore++;
     } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! Paper beats rock.`);
        humanScore++;
        
                // User input: scissors
     } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`Computer wins! Rock beats scissors.`);
        computerScore++;
     } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! Scissors beat rock.`);
        humanScore++;
     }
     
     let playerScore = document.querySelector("#player-score");
     playerScore.textContent = humanScore;
     let computerScoreCount = document.querySelector("#computer-score");
     computerScoreCount.textContent = computerScore;

     if (humanScore === 5) alert("You win");
     if (computerScore === 5) alert("You lose");
     
                
}

// Play full game
function playGame(){

    for (let i = 1; i <=5; i++) {
        console.log("")
        console.log(`Round ${i}`)
        playRound()
    }

    console.log("")
    console.log(`Your Score: ${humanScore} vs Computer Score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log(`You won the game! Refresh the page if you want to play again.`)
    } else if (humanScore < computerScore) {
        console.log(`You lost the game! Refresh the page to play again.`)
    } else if (humanScore = computerScore) {
        console.log(`It's a tie! Refresh the page and play again to decide who wins.`)
    }
    
}


//Player clicks Rock
let rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
    playRound("rock");
    let playerChoice = document.querySelector("#player-choice");
    playerChoice.textContent = ""
    let img = document.createElement("img");
    img.src = "images/rock.webp";
    img.style.width = "50%";
    playerChoice.appendChild(img);
    
})


let paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    playRound("paper")
    let playerChoice = document.querySelector("#player-choice");
    playerChoice.textContent = ""
    let img = document.createElement("img");
    img.src = "images/Towelie.webp";
    img.style.width = "50%";
    playerChoice.appendChild(img);
})

let scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissors")
    let playerChoice = document.querySelector("#player-choice");
    playerChoice.textContent = ""
    let img = document.createElement("img");
    img.src = "images/scissors.gif";
    img.style.width = "50%";
    playerChoice.appendChild(img);
})


