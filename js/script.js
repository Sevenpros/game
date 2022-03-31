

// create computerPlay function

function computerPlay(){
    let options = ['Rock','Paper','Scisor']
    let index = Math.floor(Math.random() * 3)
    return options[index]

 
}



function playRound(computerSelection, playerSelection){
    // check if the player selection is valid
    if(!playerSelection){
        return 'Invalid choice.'
    }
    //compare computer and player selection


    // if the player select rock .
    else if(playerSelection === 'rock'){
        return playerSelectRock(computerSelection)
    }
    //if the player select paper
    else if(playerSelection === 'paper'){
        return playerSelectPaper(computerSelection);
    }

     //if the player select scissor 
     else if(playerSelection === 'scissor'){
        return playerSelectScisor(computerSelection);
    }
    // return the error message
    else return 'Please You have choose either "Rock,Paper or Scissor"'

}

function playerSelectRock(computerSelection){
     // if the player select rock and computer choose paper computer wins.

     if(computerSelection === 'Paper'){
         return 'You have lost! Paper beats Rock'
     }
     //else if computer choose scissor the player wins
     else if(computerSelection === 'Scisor'){
         return 'You have won Rock beast Scisor'
     }
     //else it's tie
     else return 'it\'s a tie'
     

}

function playerSelectPaper(computerSelection){
    //if the player select paper and computer select scissors computer wins
    if(computerSelection === 'Scisor'){
        return 'You have lost! Scisor beats Paper'
    }
    //else if computer select rock player wins
    else if(computerSelection === 'Rock'){
        return 'You have won! Paper beats Rock'
    }

    // else it's a tie 
    else return 'It\'s a tie'

}
function playerSelectScisor(computerSelection){
      //if the player select scissor and computer select rock computer wins
      if(computerSelection === 'Rock'){
          return 'you have lost! Rock beats Scissor'
      }
     //esle if computer select paper player wins
     else if(computerSelection === 'Paper'){
         return 'You have won! Scissor beats paper'
     }
     //else it's tie.
     else return 'It\'s a tie'

}

function isPlayerChoiceValid(playerChoice){
    
}
function game(){
    let computerScore =0
    let playerScore = 0
    for(let i=0;i<5;i++) {
        const computerChoice = computerPlay();
        const playerChoice= prompt('Choose either "Rock,Paper or Scissor"')    
        const result = playRound(computerChoice,playerChoice);
        console.log(result);
        if(result.match('won')){
            playerScore++
        }
        else if(result.match('lost')){
            computerScore++
        }
        else if(result.match('tie')){}
        else return 'game canceled'
        
    }
    let finalResult = (computerScore > playerScore)?`Sorry you have lost with ${playerScore} Score`:`Congratulations! You have won with ${playerScore} Score`
    return finalResult;
    
}
console.log(game());