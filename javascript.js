const choices = ['rock','paper','scissors'];

// Create function called game that calls "playRound"
function game(){
    playRound()
    // Loop to keep score, ending gameplay after 5 rounds. Winner is best of 5 rounds.

}
 
function playRound(computerSelection, playerSelection){
    // Use function playRound that takes "playerSelection" and "computerSelection" and measures their results against a hierarchy

     // Return a string based on each possible result, claiming user is either a winner or loser of the round

}


 /* Create function "computerChoice" to generate random selection from strings "rock", "paper", "scissors" */
function computerChoice () {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const computerSelection = computerChoice(); 

const playerSelection = playerChoice() 
 
function playerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors."); //store user input in "playerSelection via prompt.
    while (input == null) { // null cannot be converted .tolowercase.
        input = prompt("Choose Rock, Paper, or Scissors.");
    }
    input = input.toLowerCase();  // Convert user input to lowercase
    let check = validateInput(input) // Create conditional to check user input.
    while (check == false) {
        input = prompt(
            "Check your spelling. Choose Rock, Paper, or Scissors."
            );
            input = input.toLowerCase();  // this resets input back to true and breaks the loop.
            check = validateInput(input)
    }
}
//this function check against the original array used in computerChoice.
function validateInput(choice) {
    return choices.includes(choice); { 
    } 

}





 

 // Prompt user for new input if not equal to "rock", "paper", or "scissors".




 

 
 // Output a string that declares the user a winner or loser