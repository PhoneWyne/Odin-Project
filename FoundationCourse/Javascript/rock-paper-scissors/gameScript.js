console.log("Starting Rock Paper Scissors game!");
// console.log(`Testing Human choice: ${getHumanChoice()}`);
let humanScore = 5;
let computerScore = 0;

// function that maps numerical choice to string choice
function mapChoiceToString(choice) {
  /*
  0 - Rock, 1 - Paper, Scissor - 2
  */
  // ensure choice was int, no need to do this, as button is selecting it
  // choice = parseInt(choice);
  // use strict equality to ensure type matching
  switch (choice){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
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


const displayWinner = (winner, humanChoice, computerChoice) => {
  console.log(`${winner} won this round, Human: ${humanChoice} Computer: ${computerChoice}`);
}
// function plays a single round b/w human and computer
// user == cpu, same choice, draw, neither gets a point
// user = rock, cpu = scissor, user wins, cpu loses
// user = rock, cpu = paper, user loses, cpu wins
// user = paper, cpu = rock, user wins, cpu loses
// user = paper, cpu = scissor, user loses, cpu wins
// user = scissor, cpu = paper, user wins, cpu loses
// user = scissor, cpu = rock, user loses, cpu wins
function evaluateRound(humanChoice, computerChoice) {
  // handle draw scenario
  if (humanChoice == computerChoice ){
    console.log("This round was a draw.");
    return;
  }
  // handle any other scenario, win-lose for 1 side
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        computerScore += 1;
        displayWinner("Human", humanChoice, computerChoice);
      } else {
        humanScore += 1;
        displayWinner("Computer", humanChoice, computerChoice);
      }
      break;
    case "scissor":
      if (computerChoice === "paper") {
        humanScore += 1;
        displayWinner("Human", humanChoice, computerChoice);

      } else {
        computerScore += 1;
        displayWinner("Computer", humanChoice, computerChoice);
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        humanScore += 1;
        displayWinner("Human", humanChoice, computerChoice);

      } else {
        computerScore += 1;
        displayWinner("Computer", humanChoice, computerChoice);
      }
      break;
    default:
      console.log(`Incorrect human choice: ${humanChoice}`)
  }
}

function updateScore() {
  const humanScorePara = document.querySelector("#human-score");
  const computerScorePara = document.querySelector("#computer-score");
  humanScorePara.textContent = `Human Score: ${humanScore}`;
  computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

// it can return undefined, which also evaluates to falsy values
function checkWinner() {
  let winner = '';
  if(humanScore === 5){
    winner = "Human!";
  } else if (computerScore === 5){
    winner ="CPU!";
  }
  return winner;
}

function playRound (event) {
  // check for winner when pressed button, nd again check for winner after round is concluded
  const winner = checkWinner();
  if(winner){
    const winnerText = document.querySelector("#winner");
    winnerText.textContent = `Winner of current round is: ${winner}`
    resetScore();
  }
  // console.log(event.target);
  // since parent was div, pressing anywhere within div, kept triggering the click event as well
  // enforce to match that target element is button
  if(event.target.matches("button")){
    humanChoice = event.target.id;
    computerChoice = getComputerChoice();
    evaluateRound(humanChoice, computerChoice);
    updateScore();
  }
  
} 

function resetScore(){
  humanScore = 0;
  computerScore = 0;
  updateScore();
}
const buttonChoice = document.querySelector('#button-choice');

// bubbling of child elements upto parent element
buttonChoice.addEventListener('click', playRound);


const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetScore);
