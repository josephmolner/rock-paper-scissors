const choices = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function game() {
    for (let i = 0; i < 5; i++){

        playRound();
            }
        
            console.log("Game over!");
        
}
  //  return console.log("Five Rounds played. Game Over!")

function playRound (){
    const computerSelection = computerChoice(); 
    const playerSelection = playerChoice();
    const winner = checkWinner(computerSelection, playerSelection);
    console.log("Player: " + playerSelection, "Computer: " + computerSelection + " ", winner);
    console.log("player score: "+ playerScore);
    console.log("computer score: "+ computerScore);
    console.log("ties: "+ ties);
    keepScore();
}

function computerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
//console.log(computerSelection)

function playerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors."); //store user input in "playerSelection via prompt.
    while (input == null) { 
    input = prompt("Choose Rock, Paper, or Scissors.");
    }
    input = input.toLowerCase();  // Convert user input to lowercase
    let check = validateInput(input); // Create conditional to check user input.
    while (check == false) {
        input = prompt("Check your spelling. Choose Rock, Paper, or Scissors.");
        while (input == null) { 
        input = prompt("Choose Rock, Paper, or Scissors.");
            }
            input = input.toLowerCase();  // this resets input back to true and breaks the loop.
             check = validateInput(input);
        }
        //console.log(input);
        alert("You chose "+input);
        return(input);
}

//this function check against the original array used in computerChoice.
function validateInput(choice) {
    return choices.includes(choice);
}
function checkWinner(choiceC, choiceP){
    if (choiceC === choiceP) {
        return ties++, "Tie. Play again!";
    } else if (choiceC === 'rock' && choiceP === 'paper'){
        return playerScore++, "You win! Paper beats rock!";
    } else if (choiceC === 'paper' && choiceP === 'scissors'){
        return playerScore++,"You win! scissors beats paper!"; 
    } else if (choiceC === 'scissors' && choiceP === 'rock'){
        return playerScore++,"You win! rock beats scissors!";
    } else if (choiceC === 'rock' && choiceP === 'scissors'){
        return computerScore++, "You lose! Rock beats scissors!";
    } else if (choiceC === 'paper' && choiceP === 'rock'){
        return computerScore++, "You lose! Paper beats rock!"; 
    } else if (choiceC === 'scissors' && choiceP === 'paper'){
        return computerScore++, "You lose! Scissors beat paper!";
    }

}
function keepScore (){
    if (playerScore == 3) { 
     console.log("Congratulations! You've won best of five!");
    } else if (computerScore == 3) {
        console.log("You lost, better luck next time.");
        }
    }

game();