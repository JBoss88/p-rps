let userScoreEl = document.querySelector(".user-score");
let cpuScoreEl = document.querySelector(".cpu-score");
const userImg = document.querySelector(".user-img");
const cpuImg = document.querySelector(".cpu-img");
const gameMessage = document.querySelector("p");

let userScore = 0;
let cpuScore = 0;
let userChoice = "";
let cpuChoice = "";

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rock")) {
    userChoice = "rock";
    console.log("User picks rock");
    userImg.src = "images/rock.png";
  } else if (e.target.classList.contains("paper")) {
    userChoice = "paper";
    console.log("User picks paper");
    userImg.src = "images/paper.png";
  } else if (e.target.classList.contains("scissors")) {
    userChoice = "scissors";
    console.log("User picks scissors");
    userImg.src = "images/scissors.png";
  }
  getCpuChoice();
});

function getCpuChoice() {
  let choice = Math.trunc(Math.random() * 3);
  if (choice === 0) {
    cpuChoice = "rock";
    console.log("CPU picks rock");
    cpuImg.src = "images/rock.png";
  } else if (choice === 1) {
    cpuChoice = "paper";
    console.log("CPU picks paper");
    cpuImg.src = "images/paper.png";
  } else {
    cpuChoice = "scissors";
    console.log("CPU picks scissors");
    cpuImg.src = "images/scissors.png";
  }
  checkConditions();
}

const checkConditions = () => {
  if (userChoice === "rock" && cpuChoice === "scissors") {
    console.log("You win");
    userScore++;
  } else if (userChoice === "paper" && cpuChoice === "rock") {
    console.log("You win");
    userScore++;
  } else if (userChoice === "scissors" && cpuChoice === "paper") {
    console.log("You win");
    userScore++;
  } else if (cpuChoice === "rock" && userChoice === "scissors") {
    console.log("CPU wins");
    cpuScore++;
  } else if (cpuChoice === "paper" && userChoice === "rock") {
    console.log("CPU wins");
    cpuScore++;
  } else if (cpuChoice === "scissors" && userChoice === "paper") {
    console.log("CPU wins");
    cpuScore++;
    // userScoreEl.value = userScore++;
  } else {
    console.log("Tied!!");
  }
  userScoreEl.textContent = userScore;
  cpuScoreEl.textContent = cpuScore;

  if (userScore === 5) {
    gameMessage.textContent = "User wins!!";
  } else if (cpuScore === 5) {
    gameMessage.textContent = "CPU wins!!";
  }
};

function resetGame() {
  userScore = 0;
  cpuScore = 0;
  userChoice = "";
  cpuChoice = "";
  userScoreEl.textContent = "0";
  cpuScoreEl.textContent = "0";
  gameMessage.textContent = "";
}

document.querySelector(".play-again").addEventListener("click", () => {
  resetGame();
});
