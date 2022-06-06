# odin-rockpaperscissors
Simple rock paper scissors functionality within console

Plan

User vs computer. Before game, user given prompt 'Do you want to play rps?'. If 'yes' is entered, game starts.
At start of each round, user given prompt 'round x, rock, paper, or scissors?'. User enters one of the options,
computer picks an option randomly. Choices are compared and winner is found. User is given alert describing
computer's choice and whether they won or lost the round. After 5 rounds the game ends and the winner is 
announced.


Algorithm

initiate variable type string, name userPick value ''
initiate variable type string, name computerPick, value ''
initiate variable type int, name userScore, value 0
initiate variable type int, name computerScore, value 0
initiate array, name rpsArray, value ['rock','paper','scissors']

Prompt user 'do you want to play rps?'. If user inputs yes (case insensitive) initiate game. Otherwise do nothing.

For loop initialization: round = 1; condition: round <6; increment ++1

    set userPick = getUserPick(round, userPick), function that prompts 'round x, rps?' and returns entered string 'rock' 'paper' or 'scissors'.
    getUserPick will re-prompt for a correct spelling (case insensitive) if none of those options are inputted.
    set computerPick = getComputerPick(rpsArray), function that randomly selects an element of rpsArray, and returns that value (string), alerts
    user as to what choice was made by the computer.
    set roundWinner = getRoundWinner(userPick, computerPick), function that returns 'draw'/'computer'/'user' string, based on which selection wins
    call alertRoundWinner(roundWinner, round), function that alerts user as to who wins that round
    call updateScore(roundWinner), function that adds 1 to userScore if roundWinner = 'user', vice versa for computer, and does nothing if roundWinner = 'draw'

    break condition - if userScore or computerScore is equal to 3, then best of five has been decided

End for loop
Call function alertGameWinner(userScore,computerScore), function that alerts user as to who has won (or if it's been a draw), based on userScore/computerScore.
Also includes score-line in message

No further actions






