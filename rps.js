// Random computer choice
function getComputerChoice() {
    let computerChoice = ["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// Scores
let humanScore = 0;
let computerScore = 0;

// Play game
function playRound(humanChoice, computerChoice) {
     
    // Generate computer choice and images
     computerChoice = getComputerChoice();

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
        img.src = "images/scissors.png";
        img.style.width = "50%";
        compChoice.appendChild(img);
    }

    // Rules of the game  
     if (humanChoice === computerChoice) {
     } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
     } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
     } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
     } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
     } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
     }
     
     // Show scores
     let playerScore = document.querySelector("#player-score");
     playerScore.textContent = humanScore;
     let computerScoreCount = document.querySelector("#computer-score");
     computerScoreCount.textContent = computerScore;
     let result = document.querySelector(".result");

    // Game end and results
     if (humanScore === 5) result.textContent = "You won the game!";
     if (computerScore === 5) result.textContent = "You lost the game!";

    // Choice button disable
     if (humanScore === 5 || computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.style.backgroundColor = "lightgray";
        paper.style.backgroundColor = "lightgray";
        scissors.style.backgroundColor = "lightgray";
    }            
}

// Player chooses rock
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

// Player chooses paper
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

// Player chooses scissors
let scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissors")
    let playerChoice = document.querySelector("#player-choice");
    playerChoice.textContent = ""
    let img = document.createElement("img");
    img.src = "images/scissors.png";
    img.style.width = "50%";
    playerChoice.appendChild(img);
})

// New game button
let newGame = document.querySelector(".new-game")
newGame.addEventListener("click", () => {
    location.reload()
})













