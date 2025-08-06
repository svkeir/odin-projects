//sets initial score
let humanScore = 0;
let computerScore = 0;

//sets initial round
let round = 0;



// prompts player to choose rock, paper or scissors
function getHumanChoice() {
    
    const choice = prompt("Rock, paper or scissors?").toLowerCase();
    return choice;
    
} 



// makes computer choose rock, paper or scissors at random
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}



function playRound(humanChoice, computerChoice) {

    console.log(`Round ${ round + 1 }`);

    console.log("You choose" + " " + humanChoice);
    console.log("Computer chooses" + " " + computerChoice);
    


    if (humanChoice === computerChoice){
        console.log("It's a Draw!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
       console.log("You win!");
       humanScore++;
    } 
    
    else {
        console.log("You lose!");
        computerScore++;
    }
   

}

function playGame() {
    if(round < 5) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
         
        round++;
         console.log("Your Score is " + " " + humanScore);
         console.log("Computer Score is" + " " + computerScore);
         

         playGame();

         

    
    }
    else {
        console.log("Final Score:");
        console.log("Computer:" + " " + computerScore);
        console.log("You:" + " " + humanScore);
        if(humanScore > computerScore) {
            console.log("You win! :)")
        } 
        else {
            console.log("You Lose! :(")
        }
        console.log("Game Over!");
    }
}

playGame();






