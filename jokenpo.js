
let humanScore = 0;
let computerScore = 0;
let round = 1;


function getHumanChoice() {
    
    const choice = prompt("Rock, paper or scissors?").toLowerCase();
    return choice;
    
} 


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

    console.log(`Round ${ round }`);

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
    if(round < 6) {
        
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






