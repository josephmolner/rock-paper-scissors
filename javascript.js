const choices = ['rock','paper','scissors'];

// Create function called game that calls "playRound"
function game(){
    playRound()
}
 // Use function playRound that takes "playerSelection" and "computerSelection" and measures their results against a hierarchy
function playRound(){

}


 /* Create function "computerPlay" to generate random selection from strings "rock", "paper", "scissors" */
function computerChoice () {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// Create variable to store data from the computer selection: "computerSelection"

const computerSelection = computerChoice(); 

// Create variable for player selection: "playerSelection", 
//store user input in "playerSelection via prompt.
// Convert user input to lowercase
const playerSelection = playerChoice()
 
function playerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors.");
    while (input == null) {
        input = prompt("Choose Rock, Paper, or Scissors.");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if (check == true) {
        console.log(input)
    }
}

function validateInput(choice) {
    if (choices.includes(choice)) {
    return true
    } else {
        return false
    }
}





 // Create conditional to check that user input is either "rock", "paper", or "scissors".

 // Prompt user for new input if not equal to "rock", "paper", or "scissors".



 // Return a string based on each possible result, claiming user is either a winner or loser of the round

 

 // Loop to keep score, ending gameplay after 5 rounds. Winner is best of 5 rounds.
 
 // Output a string that declares the user a winner or loser