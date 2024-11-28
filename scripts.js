function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let computerChoice = "";

  if (randomNumber <= 3) {
    computerChoice = "ROCK";
  } else if (randomNumber > 3 && randomNumber <= 7) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }

  return computerChoice;
}

function getHumanChoice() {
  let result = prompt("Choose your arsenal : rock, paper, scissors");

  if (result.toLowerCase() === "rock") {
    result = "ROCK";
  } else if (result.toLowerCase() === "paper") {
    result = "PAPER";
  } else if (result.toLowerCase() === "scissors") {
    result = "SCISSORS";
  } else {
    alert("Your answered is wrong");
  }

  return result;
}
