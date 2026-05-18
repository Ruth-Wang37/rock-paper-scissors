 // the console.log() is for checking if the rock.js file is linked 
 //properly to the html file
 console.log("Hello World!")

  // a function that randomly returns "rock" | "paper" | "scissors"
 let a = "rock";
 let b = "scissors";
 let c = "paper";

 // math.floor is to get the math.random to convert the decimal numbers to whole

 function getComputerChoice(a, b, c) {
    let pick = Math.floor(Math.random() * 3) + 1;
    // if pick is 1 to return rock
    if (pick === 1) {
        return a;
    } 
    // if pick is 2 return paper
    else if (pick === 2) {
        return b;
    } 
    // if pick is 3 return scissors
    else if (pick === 3) {
        return c;
    }
 
 }
 let result = getComputerChoice(a, b, c);
 console.log(result);

  
 function getHumanChoice(a,b,c) {
    //so the prompt returns a string
    let pick = Number(prompt("Choose a number: "));
    //get the string to be a number
    if (pick === 1) {
       return a;
    } else if ( pick === 2) {
        return b;
    } else if (pick === 3) {
        return c;
    }else {
        return "Nothing was picked"
    }
       // prompt("choose a number: ");
    // return result;

 }

  let answer = getHumanChoice(a,b,c);
   console.log(answer);


 //variable for players score
 let humanScore = 0;
 let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let newHumanChoice = humanChoice.toLowerCase();

    if (newHumanChoice === computerChoice) {
        return "Its a tie";
    } else if (newHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++;
        return "Human wins!rock beats scissors!";
    } else if (newHumanChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
        return "Computer wins!paper beats rock!"
    } else if (newHumanChoice === "paper" && computerChoice === "rock") {
        humanScore ++;
        return "Human wins!paper beats rocks!";
    } else if (newHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
        return "Computer wins!scissors cuts paper!"
    } else if (newHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++;
        return "Human wins!scissors cuts paper!";
    } else if (newHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
        return "Computer wins!rock  beats scissors!"
    }
}
let humanChoice = answer;
let computerChoice = result;
let score = playRound(answer, result);
console.log(score);






   