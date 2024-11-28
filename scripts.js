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
