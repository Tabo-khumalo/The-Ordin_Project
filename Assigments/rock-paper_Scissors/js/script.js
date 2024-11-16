
let playerWin = 0;
let playerLose = 0;
let computerWin = 0;
let computerLose = 0;

let human = getHumanChoice();
let comp = getComputerchoice();


function getComputerchoice() {
    let computerMove = Math.floor(Math.random() * 75);

    let computerPlay = "";

    if (computerMove >= 0 && computerMove <= 25) {
        computerPlay  = "Rock";
    } 
    else if(computerMove > 25 && computerMove <= 50) {
        computerPlay  = "Paper";
    } 
     else {
        computerPlay  = "Scissors";
     }
    
    return computerPlay 
}


function getHumanChoice(){
    let userPrompt = prompt("Enter Rock, Paper or Scissors to Play", "");
    let humanPlay = "";
    let userPromptFirstLetter = userPrompt.at(0).toLocaleUpperCase();
    let userPromptLowerCase = userPrompt.slice(1).toLocaleLowerCase()

    humanPlay = userPromptFirstLetter + userPromptLowerCase;

    return humanPlay;
    
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        playerWin++
        computerLose++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    } 
    else if (humanChoice === "Scissors" && computerChoice === "Paper") { 
        playerWin++
        computerLose++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") { 
        playerWin++
        computerLose++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") { 
        playerLose++
        computerWin++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") { 
        playerLose++
        computerWin++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor") { 
        playerLose++
        computerWin++
        console.log(`

            You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
            Scores: 
            Player wins: ${playerWin}
            Computer Wins: ${computerWin}
            Player Loses: ${playerLose} 
            Computer Loses ${computerLose}
        `)
    } else  if(humanChoice === computerChoice){
        console.log(`You picked ${humanChoice} and Computer picked ${computerChoice} it's a tie`)
    }

}

console.log(human)
console.log(comp)
playRound(human, comp)










