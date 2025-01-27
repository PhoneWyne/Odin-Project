console.log("Starting Rock Paper Scissors game!");

// function that maps numerical choice to string choice
function mapChoiceToString(choice) {
  /*
  0 - Rock, 1 - Paper, Scissor - 2
  */
  // ensure choice was int
  choice = parseInt(choice);
  // use strict equality to ensure type matching
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

// use this function to generate random value b/w 0 and 2, inclusive
function getRandomValue(min, max) {
  /* 
      This function returns random value b/w 2 integers, endpoints inclusive
      */
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

// function returns computer's choice
function getComputerChoice() {
  /*
    Gets random value b/w 0 and 2 (inclusive), returns move choice
    0 - Rock, 1 - Paper, Scissor - 2
    */
  const computerChoice = getRandomValue(0, 2);
  return mapChoiceToString(computerChoice);
}
// console.log(getRandomValue(0, 2));
// console.log(`Testing Computer choice: ${getComputerChoice()}`);

// function to get user Choice
function getHumanChoice() {
  humanChoice = prompt(
    "Please enter a number from 0 to 2, inclusive ([0] - Rock [1] - Paper [2] - Scissor) : "
  );
  return mapChoiceToString(humanChoice);
}

// console.log(`Testing Human choice: ${getHumanChoice()}`);
let humanScore = 0;
let computerScore = 0;

// function plays a single round b/w human and computer
// user == cpu, same choice, draw, neither gets a point
// user = rock, cpu = scissor, user wins, cpu loses
// user = rock, cpu = paper, user loses, cpu wins
// user = paper, cpu = rock, user wins, cpu loses
// user = paper, cpu = scissor, user loses, cpu wins
// user = scissor, cpu = paper, user wins, cpu loses
// user = scissor, cpu = rock, user loses, cpu wins
function playRound(humanChoice, computerChoice) {

  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        humanScore += 1;
        console.log(`Human won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      } else {
        computerScore += 1;
        console.log(`Computer won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      }
      break;
    case "scissor":
      if (computerChoice === "paper") {
        humanScore += 1;
        console.log(`Human won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      } else {
        computerScore += 1;
        console.log(`Computer won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        humanScore += 1;
        console.log(`Human won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      } else {
        computerScore += 1;
        console.log(`Computer won this round, Human: ${humanChoice} Computer: ${computerChoice}`)
      }
      break;
    default:
      console.log("Incorrect choices.")
  }
}

// 5 rounds, dont advance round incase of draw, i-=1 incase of draw
for (let i = 0; i < 5; i++){
  computerChoice = getComputerChoice();
  console.log(`Computer played ${computerChoice}`)
  humanChoice = getHumanChoice();
  console.log(`Human played ${humanChoice}`)

  if (humanChoice === computerChoice) {
    console.log("Both human and CPU picked same, round is draw");
    i -= 1;
  } else{
    playRound(humanChoice, computerChoice);
  }
  console.log(`Score: Human: ${humanScore}, Computer: ${computerScore} Starting next round...\n`)
}

if (humanScore > computerScore ){
  console.log("Human won.")
} else{
  console.log("Computer won.")
}
