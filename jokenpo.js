function getComputerChoice(){
    const randomInt = Math.floor(Math.random() * 3)

    if (randomInt === 0) {
    return "rock"; }
    else if (randomInt === 1){
    return "paper"; } 
    else {
    return "scissors";}

}

console.log(getComputerChoice())

function getHumanChoice() {
    choice = prompt("Rock, Paper or scissors?");
    return choice;
} 

console.log(getHumanChoice())
