console.log('hello')

let userPick = '';
let computerPick = '';
let userScore = 0;
let computerScore = 0;
let rpsArray = ['rock','paper','scissors']

let userInitiate = prompt('Do you want to play rock paper scissors?')

if (userInitiate.toLowerCase() == 'yes') {
    
    for (let round = 1; round <6; round++){

        userPick = getUserPick(round, userPick);
        getComputerPick(rpsArray);
        roundWinner = getRoundWinner(userPick, computerPick);
        alertRoundWinner(roundWinner, round);
        updateScore(roundWinner);
        if (userScore == 3 || computerScore ==3) break;

    }
    
    alertGameWinner(userScore,computerScore);
}



function getUserPick (round, userPick) {
    recognised = 0;
        userPick = prompt(`Round ${round}: rock, paper, or scissors?`).toLowerCase();
        if (userPick !== 'rock' && userPick !== 'scissors' && userPick !== 'paper') {
            while (recognised !== 1){
            userPick = prompt(`Input unrecognised, please pick again and watch your spelling!`).toLowerCase();
            if (userPick == 'rock' || userPick || 'scissors' || userPick !== 'paper') {
                recognised = 1;
                }
            }
        }
    console.log(userPick);
    return userPick;
}

function getComputerPick (rpsArray) {
    computerPick = rpsArray[Math.floor(Math.random()*3)]
    console.log(computerPick)
    alert(`Computer chose ${computerPick}`);
}

function alertRoundWinner (roundWinner, round) {
    if (roundWinner == 'draw'){
        alert(`Round ${round} is a draw`);
    } else if (roundWinner == 'user'){
        alert(`You win round ${round}!`)
    } else if (roundWinner == 'computer'){
        alert(`Computer wins round ${round}!`)
    }
}

function alertGameWinner (userScore, computerScore){
    if (userScore > computerScore){
        alert(`Congratulations, you've won the game ${userScore}-${computerScore}!`)
        console.log(`Congratulations, you've won the game ${userScore}-${computerScore}!`)
    } else if (computerScore > userScore) {
        alert(`Unlucky, you've lost the game ${userScore}-${computerScore}!`)
        console.log(`Unlucky, you've lost the game ${userScore}-${computerScore}!`)
    } else if (computerScore == userScore) {
        alert(`You've drawn the game ${userScore}-${computerScore}!`)
        console.log(`You've drawn the game ${userScore}-${computerScore}!`)
    }   
}

function updateScore (roundWinner) {
    if (roundWinner == 'user'){
        userScore += 1
    } else if (roundWinner == 'computer'){
        computerScore += 1
    }
}

function getRoundWinner (userPick, computerPick){
    let roundWinner = ''
    if (userPick == computerPick) {
        roundWinner = 'draw';
         } else if (userPick == 'rock') {
        computerPick == 'scissors' ? roundWinner = 'user':
        roundWinner = 'computer'
         } else if (userPick == 'paper') {
        computerPick == 'rock' ? roundWinner = 'user':
        roundWinner = 'computer'
         } else if (userPick == 'scissors') {
        computerPick == 'paper' ? roundWinner = 'user':
        roundWinner = 'computer'}
    return roundWinner
}