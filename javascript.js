const choices = ['rock','paper','scissors'];

const computerSelection = computerChoice(); 
const playerSelection = playerChoice();
const winner = checkWinner(computerSelection, playerSelection);

console.log("Player: " + playerSelection, "Computer: " + computerSelection, winner);

function game(){
   // playRound()
}
 
//function playRound() {

//}

function computerChoice () {
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
        alert("You Chose "+input);
        return(input);
}

//this function check against the original array used in computerChoice.
function validateInput(choice) {
    return choices.includes(choice);
}
function checkWinner(choiceC, choiceP){
    if (choiceC === choiceP) {
        return "Tie";
    } else if (choiceC === 'rock' && choiceP === 'paper'){
        return "You win! Paper beats rock!";
    } else if (choiceC === 'paper' && choiceP === 'scissors'){
        return "You win! scissors beats paper!"; 
    } else if (choiceC === 'scissors' && choiceP === 'rock'){
                return "You win! rock beats scissors!";
    } else if (choiceC === 'rock' && choiceP === 'scissors'){
        return "You lose! Rock beats scissors!";
    } else if (choiceC === 'paper' && choiceP === 'rock'){
        return "You lose! Paper beats rock!"; 
    } else if (choiceC === 'scissors' && choiceP === 'paper'){
        return "You lose! Scissors beat paper!";
    }

}
game();