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
    
  }
  // Function to take user input to vs computer input
  function gamePlay(myPick) {
    var computer = computerPlay();
    console.log(computer)
    if (myPick === computer) {
      return `Computer chose ${computer} and you chose ${myPick}. So it's a draw!`;
    } else if ((myPick === "Scissor" && computer === "Rock") || (myPick === "Rock" && computer === "Paper") || (myPick === "Paper" && computer === "Scissor")) {
      return `Computer chose ${computer} and you chose ${myPick}. So you lost!`;
    } else {
      return `Computer chose ${computer} and you chose ${myPick}. So you win!`;
    } 
}

  // Function to get input from user
  $("button").click(function() {
    var fired_button = $(this).val();
    alert(fired_button);
});