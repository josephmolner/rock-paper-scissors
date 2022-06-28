//Global Array for both computer and user selections
const choices = ['rock','paper','scissors'];
//Score keeping variables, ties are not counted.
let playerScore = 0;
let computerScore = 0;

//A loop calling playRound runs until broken by a score threshold, 3, for best of 5 
function game() {
    alert("Let's play Rock Paper Scissors using the developer console. Best of Five Rounds Wins. Good Luck!");
    while (playerScore < 3 && computerScore < 3) {
        playRound();
        //if player wins, print this messgae.
        if (playerScore == 3){
            return console.log("Congratulations! You've won best of five!");
        //if computer wins print this message instead
        } else if (computerScore ==3) {
            return console.log("Game Over. You lost, better luck next time.");
        }
    }
    
}            
//Takes user through one round, outputs a string declaring the winner.
function playRound (){
    const computerSelection = computerChoice(); 
    const playerSelection = playerChoice();
    const winner = checkWinner(computerSelection, playerSelection);
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(winner);
    console.log("   player score: "+ playerScore);
    console.log("   computer score: "+ computerScore);
    //this line enhances legibility in the console
    console.log("------------------------")
}
//Generates a random choice from global array choices.
function computerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
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
        //Courtesy alert to notify user of their selection
        alert("You chose "+input);
        return(input);
}

//this function check against the original array used in computerChoice.
function validateInput(choice) {
    return choices.includes(choice);
}
//Contains logic for winner, with a corresponding string, and incriments a counter stored in global variable 
function checkWinner(choiceC, choiceP){
    if (choiceC === choiceP) {
        return "Tie. Play again!";
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
game();