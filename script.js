let userScoreEl = document.querySelector(".user-score");
let cpuScoreEl = document.querySelector(".cpu-score");
const userImg = document.querySelector(".user-img");
const cpuImg = document.querySelector(".cpu-img");
const gameMessage = document.querySelector("p");

let userScore = 0;
let cpuScore = 0;
let userChoice = "";
let cpuChoice = "";

const btns = document.querySelectorAll(".btn");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.textContent;
    if (userChoice === "Rock") {
      userImg.src = "images/rock.png";
    } else if (userChoice === "Paper") {
      userImg.src = "images/paper.png";
    } else if (userChoice === "Scissors") {
      userImg.src = "images/scissors.png";
    }
    getCpuChoice();
  });
});

function getCpuChoice() {
  let choice = Math.trunc(Math.random() * 3);
  if (choice === 0) {
    cpuChoice = "Rock";
    cpuImg.src = "images/rock.png";
  } else if (choice === 1) {
    cpuChoice = "Paper";
    cpuImg.src = "images/paper.png";
  } else {
    cpuChoice = "Scissors";
    cpuImg.src = "images/scissors.png";
  }
  checkConditions();
}

const checkConditions = () => {
  if (userChoice === "Rock" && cpuChoice === "Scissors") {
    userScore++;
  } else if (userChoice === "Paper" && cpuChoice === "Rock") {
    userScore++;
  } else if (userChoice === "Scissors" && cpuChoice === "Paper") {
    userScore++;
  } else if (cpuChoice === "Rock" && userChoice === "Scissors") {
    cpuScore++;
  } else if (cpuChoice === "Paper" && userChoice === "Rock") {
    cpuScore++;
  } else if (cpuChoice === "Scissors" && userChoice === "Paper") {
    cpuScore++;
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
  userImg.src = "images/gameon.webp";
  cpuImg.src = "images/gameon.webp";
}

document.querySelector(".play-again").addEventListener("click", () => {
  resetGame();
});
