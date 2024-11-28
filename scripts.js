// Get computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let computerChoice = "";

  if (randomNumber <= 3) {
    computerChoice = "rock";
  } else if (randomNumber > 3 && randomNumber <= 7) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// Get human choice
function getHumanChoice() {
  let result = prompt("Choose your arsenal : rock, paper, scissors");

  if (result === "rock") {
    result = "rock";
  } else if (result === "paper") {
    result = "paper";
  } else if (result === "scissors") {
    result = "scissors";
  }

  return result;
}

// score for each both player
let humanScore = 0;
let computerScore = 0;

function playGame() {
  // Logic how to play
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`${humanChoice} v.s ${computerChoice} is tied`);
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
      } else if (computerChoice === "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
      } else if (computerChoice === "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else if (computerChoice === "rock") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
      }
    }
  }

  const humanSelection = getHumanChoice;
  const computerSelection = getComputerChoice;

  for (let i = 1; i <= 5; i++) {
    playRound(humanSelection(), computerSelection());
  }

  if (humanScore > computerScore) {
    console.log("Congratulations you win agains computer");
  } else {
    console.log("You're lose from computer");
  }
}

playGame();
