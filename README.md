Rock Paper Scissors
Prerequisites:
* Problem: design an interactive 1 player Rock Paper Scissors game against a computer generated opponent in JavaScript printed to the console.log. The game should consist of 5 rounds. 
* Constraints: only strings containing “rock” , “paper”, or “scissors” may be chosen as input by computer or player via an input field. Should not be case sensitive. Only 5 rounds should occur, with score kept and a final winner declared. 
*An option to restart gameplay should follow.
* Input: strings = “rock”, “paper”, “scissors”
* Output: a Boolean result for user’s choice against computer determines a winner of each round, with a unique message based on chosen input ex  “you win, paper beats rock” after 5 rounds the game will end with a message.
* Solution within constraints: gameplay flows through 5 rounds, keeps score, and declares a winner through the 5 rounds. 

Algorithm:
1. Start
2. Get variable for computer selection, which will hold a random selection from “rock”, “paper”, “scissors”. 
3. Get variable for player(user) selection that conforms to “rock paper or scissors”, via user text input
4. Execute a gameplay that checks computer selection against player selection a declares a winner.
5. initialize a counter that keeps score and stops gameplay after 5 rounds. 
6. Include conditionals for draw match. declaring an overall winner with a message. 

