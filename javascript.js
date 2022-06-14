

 /* Create function "computerPlay" to generate random selection from strings "rock", "paper", "scissors", and store in "computerSelection */

 function computerPlay () {
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// Create variable to store data from the computer selection: "computerSelection"

const computerSelection = computerPlay(); 

// Create variable for player selection: "playerSelection", 

const playerSelection = prompt("Make Your Choice").toLowerCase(); //store user input in "playerSelection via prompt.
 // Convert user input to lowercase
 // Create conditional to check that user input is either "rock", "paper", or "scissors".

 // Prompt user for new input if not equal to "rock", "paper", or "scissors".

 // Use function playRound that takes "playerSelection" and "computerSelection" and measures their results against a hierarchy

 // Return a string based on each possible result, claiming user is either a winner or loser of the round

 // Create function called game that calls "playRound"

 // Loop to keep score, ending gameplay after 5 rounds. Winner is best of 5 rounds.
 
 // Output a string that declares the user a winner or loser.