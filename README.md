# odin-rockpaperscissors

## First JS Project. Simple Rock Paper Scissors Functionality Within Console.

### Plan.
  
The user plays the computer.  
Before the game, the user is given a prompt 'Do you want to play rps?'. If 'yes' is entered, the game starts.  
At the start of each round, the user is given a prompt 'round x, rock, paper, or scissors?'.  
The user enters one of the options, and the computer picks an option randomly.  
The choices are compared and the winner is found. The user is given an alert describing the computer's choice  
and whether they won or lost the round. After 5 rounds the game ends and the winner is announced.  


### Algorithm.

Initiate variable type string, name userPick value ''.  
Initiate variable type string, name computerPick, value ''.  
Initiate variable type int, name userScore, value 0.  
Initiate variable type int, name computerScore, value 0.  
Initiate array, name rpsArray, value ['rock','paper','scissors'].  

Prompt user 'do you want to play rps?'. If user inputs yes (case insensitive) initiate game. Otherwise do nothing.  

For loop initialization: round = 1; condition: round <6; increment +1.  

Set userPick = getUserPick(round, userPick): function that prompts 'round x, rps?' and returns entered string 'rock' 'paper' or 'scissors'.    
GetUserPick will re-prompt for a correct spelling (case insensitive) if none of those options are inputted.  
Call getComputerPick(rpsArray): function that randomly selects an element of rpsArray, returns that value (string), and alerts
user as to what choice was made by the computer.  
Set roundWinner = getRoundWinner(userPick, computerPick): function that returns 'draw'/'computer'/'user' string, based on which of userScore/computerScore wins.  
Call alertRoundWinner(roundWinner, round): function that alerts user as to who wins that round.  
Call updateScore(roundWinner): function that adds 1 to userScore if roundWinner = 'user', vice versa for computer, and does nothing if roundWinner = 'draw'.  
Include break condition - if userScore or computerScore is equal to 3, then best of five has been decided, exit for loop.  

End for loop.  

Call function alertGameWinner(userScore,computerScore): function that alerts user as to who has won (or if it's been a draw), based on userScore/computerScore.  
AlertGameWinner includes the score-line in its message.  

No further actions.  







