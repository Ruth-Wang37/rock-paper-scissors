// a function that randomly returns "rock" | "paper" | "scissors"
 // math.floor is to get the math.random to convert the decimal numbers to whole

 function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3) + 1;
   
    if (pick === 1) {
        return "rock";
    } 
  
    else if (pick === 2) {
        return "paper";
    } 
   
    else {
        return "scissors";
    }
 
 }   
    let humanScore = 0;
 let computerScore = 0;
 let gameOver = false;

const display = document.querySelector('#display');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');


function playRound(humanChoice, computerChoice) {
    let message;
    let newHumanChoice = humanChoice.toLowerCase();

    if (newHumanChoice === computerChoice) {
        message = "Its a tie";
    } else if (newHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++;
       message =  "Human wins!rock beats scissors!";
    } else if (newHumanChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
        message = "Computer wins!paper beats rock!"
    } else if (newHumanChoice === "paper" && computerChoice === "rock") {
        humanScore ++;
       message =  "Human wins!paper beats rocks!";
    } else if (newHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
        message =  "Computer wins!scissors cuts paper!"
    } else if (newHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++;
        message = "Human wins!scissors cuts paper!";
    } else if (newHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
       message =  "Computer wins!rock  beats scissors!"
    }
        display.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;


       if(humanScore === 5 || computerScore === 5){
        gameOver = true;

              if (humanScore === 5) {
             return  "Player wins";
             } else {
              return "Bot wins";
            }
        }
return message;
}

  
   

rock.addEventListener('click', () => {
      if (gameOver) {
        return;
    }
    let result =  playRound("rock",getComputerChoice());
    results.textContent = result;
}
);

paper.addEventListener('click', () => {
    if (gameOver) {
        return;
    }
    let result =  playRound("paper",getComputerChoice());
    results.textContent = result;
}
);

scissors.addEventListener('click', () => {
    if (gameOver) {
        return;
    }
    let result =  playRound("scissors",getComputerChoice());
    results.textContent = result;
}
);










   