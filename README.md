# Rock Paper Scissors
Prerequisites:
* Problem: design an interactive 1 player Rock Paper Scissors game against a computer generated opponent in JavaScript printed to the console.log. The game should consist of 5 rounds. 
* Constraints: only strings containing “rock” , “paper”, or “scissors” may be chosen as input by computer or player via an input field. Should not be case sensitive. Only 5 rounds should occur, with score kept and a final winner declared. 
* An option to restart gameplay should follow.
* Input: strings = “rock”, “paper”, “scissors”
* Output: a Boolean result for user’s choice against computer determines a winner of each round, with a corresponding message based on chosen input ex  “you win, paper beats rock” after 5 rounds the game will end with a message. All messages output to the console log.
* Solution within constraints: gameplay flows through 5 rounds, keeps score, and declares a winner through the 5 rounds printed to the console log.

Algorithm draft 1:
1. Start
2. Get variable for computer selection, which will hold a random selection from “rock”, “paper”, “scissors”. 
3. Get variable for player(user) selection that conforms to “rock paper or scissors”, via user text input
4. Execute a gameplay that checks computer selection against player selection a declares a winner.
5. initialize a counter that keeps score and stops gameplay after 5 rounds. 
6. Include conditionals for draw match. declaring an overall winner with a message. 

Algorithm Draft 2:
1. START
2. Create variable to store data from the computer selection: "computerSelection"
3. Create a function called "computerPlay" for random selection from strings "rock", "paper", "scissors". 
4. Store this selection in "computerSelection"
5. Create variable for player selection: "playerSelection"
6. Create a prompt for user text input that stores input in "playerSelection"
7. Create a conditional that checks user input as "rock" "paper" or "scissors", is not case sensitive, and prompts for correction if conditions are not met. 
9. Create a function "playRound" that takes parameters "playerSelection", computerSelection" and returns a string based on each possible boolean result. ex. "you win/loose, X beats Y.
10. Within "playRound", establish hierarchy of "rock", "paper", and "scissors.", and check results of computer selection against player selection. Include conditionals for draw rounds. 
11. Create function "game" that calls "playRound", Uses a loop to keep score, stops gameplay after 5 rounds, and outputs a string that declares the user as winner / loser.
 
 Pseudo Code as comments:

 // Create variable to store data from the computer selection: "computerSelection"

 /* Create function "computerPlay" to generate random selection from strings "rock", "paper", "scissors", and store in "computerSelection */

 // Create variable for player selection: "playerSelection", and store user input via prompt.

 // Convert user input to lowercase

 // Create conditional to check that user input is either "rock", "paper", or "scissors".

 // Prompt user for new input if not equal to "rock", "paper", or "scissors".

 // Use function playRound that takes "playerSelection" and "computerSelection" and measures their results against a hierarchy

 // Return a string based on each possible result, claiming user is either a winner or loser of the round

 // Create function called game that calls "playRound"

 // Loop to keep score, ending gameplay after 5 rounds. Winner is best of 5 rounds.
 
 // Output a string that declares the user a winner or loser.