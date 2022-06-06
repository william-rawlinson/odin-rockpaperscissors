# odin-rockpaperscissors
simple rock paper scissors app

Plan

Rock paper scissors. User plays against the computer. Prior to game initiation, user is given message:
'Do you want to play rock paper scissors?' if user selects yes, game initiates. At the start of each
round user is given a message of the form 'round 1/2/3/4/5, rock, paper, or scissors?'. User enters one of
rock paper or scissors. Computer picks one of rock paper or scissors randomly. User is given message of the form:
'computer picked rock/paper/scissors' users input is compared to computer's selection to see who wins the round, and the score is updated. 
After each round a message is given to the user of the form:'You lose/win, rock/paper/scissor beats scissor/rock/paper/ it's a draw,
the score is user: 0, computer: 1'. 5 rounds are played. After 5 rounds the highest score wins and a message of the form:
 'You lose/win the game' is given to the user.

Algorithm

initiate variable type string, name userPick value ''
initiate variable type string, name computerPick, value ''
initiate variable type int, name userScore, value 0
initiate variable type int, name computerScore, value 0


prompt user with message 'do you want to play rock paper scissors?'
If user inputs yes, initiate game, otherwise do nothing

for loop initilialization round = 1, condition round < 6, increment 1
    Give user prompt 'round 1, rock, paper, or scissors?'
    if input from user isn't one of rock paper or scissors (not case sensitive) do not record
    then give user message 'please chose rock paper or scissors, watch out for your spelling'
    and prompt again
    if input is one of rock paper or scissors (not case sensitive) 
    record input from user into variable userPick
    set value of computerPick equal to random selection of 'rock' 'paper' or 'scissors'
    give user message 'Computer chose (computerPick)'
    run function getRoundWinner on userPick and computerPick that compares them and stores 
    the winner in variable roundWinner
     if roundWinner is 'user', increments userScore variable by 1, returns message 'You win, (userPick) beats (computerPick)'
    if roundWinner is 'computer', increments computerScore variable by 1, returns message 'You lose, (computerPick) beats (loserPick)'
     if roundWinner is 'draw', no change to userScore or computerScore, returns message 'It's a draw!'
    if userScore is 3, or computerScore is 3, break

if userScore > computerScore give user message 'You've won the game (userScore)-(ComputerScore), well played'
if computerScore > userScore give user message 'You've lost the game',(userScore)-(ComputerScore) better luck next time'
if userScore = computerScore give user message 'You've drawn the game (userScore)-(ComputerScore), could be worse'

prompt user with message 'do you want to play again?'
if user inputs yes, re-initiate game, otherwise re-prompt







