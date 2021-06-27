// Picks a random choice for "computer"
function computerPlay() {
    var num = (Math.ceil(Math.random() * 9));
    if (num <= 3) {
      return "Rock";
    } else if (num > 3 && num <= 6) {
      return "Paper";
    } else if (num > 6 && num < 10) {
      return "Scissor"
    } 
  }
  
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. So it's a Draw!`;
      } else if ((playerSelection === "scissor" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor")) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. So you Lose!`;
      } else {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. So you Win!`;
      } 
}

// let winDisplay = document.getElementById('#wins');
// winDisplay.innerHTML = wins;
// let paperDisplay = document.querySelector('.paper');
// loseDisplay.innerHTML = loss;
// let scissorDisplay = document.querySelector('.scissor');
// drawDisplay.innerHTML = draws;

var wins = 0;
var loss = 0;
var draws = 0;
var computerPick;
var yourPick;
var decision;

function game1() {   
    var result = playRound("scissor", computerPlay());
    var copy = result;
    copy = copy.split(' ');
    
    if (copy[copy.length - 1] === "Draw!") {
        draws++;
        computerPick = "Scissor";
        yourPick = "Scissor";
        decision = "It's a Draw!"
    } else if (copy[copy.length - 1] === "Win!") {
        wins++;
        computerPick = "Paper";
        yourPick = "Scissor";
        decision = "You Won!";
    } else {
        loss++;
        computerPick = "Rock";
        yourPick = "Scissor";
        decision = "You Lost!";
    }
    updateList();
    console.log(result);
    updateComputerChoice(computerPick);
    updateYourChoice(yourPick);
    updateDecision(decision);
}
function game2() {   
    var result = playRound("rock", computerPlay());
    var copy = result;
    copy = copy.split(' ');
     
    if (copy[copy.length - 1] === "Draw!") {
        draws++;
        computerPick = "Rock";
        yourPick = "Rock";
        decision = "It's a Draw!"
    } else if (copy[copy.length - 1] === "Win!") {
        wins++;
        computerPick = "Scissor";
        yourPick = "Rock";
        decision = "You Won!";
    } else {
        loss++;
        computerPick = "Paper";
        yourPick = "Rock";
        decision = "You Lost!";
    }

    updateList();
    console.log(result);
    updateComputerChoice(computerPick);
    updateYourChoice(yourPick);
    updateDecision(decision);
}
function game3() {   
    var result = playRound("paper", computerPlay());
    var copy = result;
    copy = copy.split(' ');
    
    if (copy[copy.length - 1] === "Draw!") {
        draws++;
        computerPick = "Paper";
        yourPick = "Paper";
        decision = "It's a Draw!";
    } else if (copy[copy.length - 1] === "Win!") {
        wins++;
        computerPick = "Rock";
        yourPick = "Paper";
        decision = "You Won!";
    } else {
        loss++;
        computerPick = "Scissor";
        yourPick = "Paper";
        decision = "You Lost!";
    }

    updateList();
    console.log(result);
    updateComputerChoice(computerPick);
    updateYourChoice(yourPick);
    updateDecision(decision);
}

function updateList() {
    var winCount = document.getElementById("wins");
    winCount.innerHTML = wins;
    var drawCount = document.getElementById("draws");
    drawCount.innerHTML = draws;
    var lossCount = document.getElementById("losses");
    lossCount.innerHTML = loss;
}

function updateComputerChoice(pick) {
    var computerChoice = document.getElementById("computer");
    computerChoice.innerHTML = pick;
}
function updateYourChoice(yourPick) {
    var yourChoice = document.getElementById("you");
    yourChoice.innerHTML = yourPick;
}
function updateDecision(decision) {
    var finalDecision = document.getElementById("decision");
    finalDecision.innerHTML = decision; 
}