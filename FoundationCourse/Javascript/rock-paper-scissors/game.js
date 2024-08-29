// global variables
const moveset = ["rock", "paper", "scissor"];

const greeting =
  "Hello user, ready to play a game? CPU will make its move, then you will be prompted to make your move.";
console.log(greeting);

// copied from MDN docs to generate a number between 0 and 2
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// 3 choices : ["rock", "paper", "scissor"]
// computer can return 1 of the 3
// make an array, use Random function to generate number between 0 and 2, and pick that number
function getComputerChoice() {
  // create rand num b/w 0 and 2, inclusive
  const choiceVal = getRandomIntInclusive(0, 2);
  // console.log(`The random created number is ${choiceVal}`);
  // pick a value from moveset array using the random created integer
  const CpuChoice = moveset[choiceVal];
  console.log(`CPU has picked the move "${CpuChoice}"`);
  return CpuChoice;
}

// get user prompt and return it
function getHumanChoice() {
  let userChoice = prompt(`Enter your move from [${moveset}]: `);
  userChoice = userChoice.toLowerCase();
  console.log(`User has picked the move ${userChoice}`);
  return userChoice;
}

// user == cpu, same choice, draw, neither gets a point
// user = rock, cpu = scissor, user wins, cpu loses
// user = rock, cpu = paper, user loses, cpu wins
// user = paper, cpu = rock, user wins, cpu loses
// user = paper, cpu = scissor, user loses, cpu wins
// user = scissor, cpu = paper, user wins, cpu loses
// user = scissor, cpu = rock, user loses, cpu wins
function playRound(humanChoice, computerChoice) {
  console.log(
    `Starting round, User selected ${humanChoice} and CPU selected ${computerChoice}`
  );
  // empty string that'll either store "user", or "cpu" depending on who won
  // need to declare with "let", since we are changing this later on
  let winner = "";

  // same choice then draw, return immediately
  if (humanChoice === computerChoice) {
    console.log(
      "Both inputted same move, round's a draw, no points will be awarded to either."
    );
    return;
  }

  if (humanChoice === "rock" && computerChoice === "scissor") {
    winner = "user";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    winner = "cpu";
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    winner = "user";
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    winner = "cpu";
  }

  if (humanChoice === "scissor" && computerChoice === "paper") {
    winner = "user";
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    winner = "cpu";
  }

  return winner;
}

// round of 5, for loop with 5 iterations
// get Choice from human and cpu at each round, track score
function playGame(getComputerChoice, getHumanChoice, playRound) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Starting Round No.${i+1}. Get ready to rumble!`);
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    const winnerRound = playRound(humanChoice, computerChoice);
    if(winnerRound) {
        console.log(`The winner of round is ${winnerRound}`);
        if(winnerRound === "user"){
            humanScore += 1;
        }else{
            computerScore += 1;
        }
    }else{
        console.log("The round was draw.");
        // incase of draw, need to redo round, so minus one from i
        i = i - 1;
    }   
    console.log("\n");
  }

  let winnerGame = "";
  if (humanScore > computerScore){
    winnerGame = "USER";
  } else{
    winnerGame = "CPU";
  }
  console.log(`The game is over, and the winner is ${winnerGame}, with scores being User: ${humanScore}, and CPU: ${computerScore}`);
}

playGame(getComputerChoice, getHumanChoice, playRound)
