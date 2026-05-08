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
    let pick = prompt("Choose a number: ")
    if (pick === 1) {
       return a;
    } else if ( pick === 2) {
        return b;
    } else if (pick === 3) {
        return c;
    }
       // prompt("choose a number: ");
    // return result;

 }

let answer = getHumanChoice(a,b,c);
 console.log(answer)