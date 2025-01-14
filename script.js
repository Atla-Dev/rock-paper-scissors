/*
Takes human input
Takes the computers input from a random number
Outputs conditional statements based on the matched inputs
If (getHumanChoice === rock && getComputerChoice === scissors),
if (getHumanChoice === scissors && getComputerChoice === paper) and if (getHumanChoice === paper && getComputerChoice === rock) output "You win!"
if these conditions are met output a lose result; if (getHumanChoice === scissors && getComputerChoice === rock),
if (getHumanChoice === rock && getComputerChoice === paper) and if (getHumanChoice === paper && getComputerChoice === scissors) output "You lose!"
if (getHumanChoice === rock && getComputerChoice === rock),
if (getHumanChoice === scissors && getComputerChoice === scissors) and if (getHumanChoice === paper && getComputerChoice === paper) output "Its a tie!"
*/
    let computerChoice;
    let humanChoice;
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(max) {
        hand = Math.floor(Math.random() * max);

        if (hand === 0){
            hand = 'rock';
        } else if (hand === 1) {
            hand = 'paper';
        } else {
            hand = 'scissors';
        }   
        return computerChoice = hand.toLowerCase();
    }


     function getHumanChoice() {

        humanChoice = prompt("Rock, Paper or Scissors");
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
          return humanChoice.toLowerCase();
        } else {
            console.log('Not an option')
        }
     }
     
    function playRound(humanChoice, computerChoice) {
        
            if (humanChoice === computerChoice) {
                console.log("Its a tie!");
            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') ||(humanChoice === 'paper' && computerChoice === 'rock')) {
                humanScore += 1;
                console.log(`The Human chose ${humanChoice} and the Computers chose ${computerChoice} the Humans win this one!`);
            } else {
                computerScore += 1;
                console.log(`The Human chose ${humanChoice} and the Computers chose ${computerChoice} Computers rise up! You win this one!`);
            }
    }

    function playGame() {
        playRound(getHumanChoice(),getComputerChoice());
        playRound(getHumanChoice(),getComputerChoice());
        playRound(getHumanChoice(),getComputerChoice());
        playRound(getHumanChoice(),getComputerChoice());
        playRound(getHumanChoice(),getComputerChoice());

        if (humanScore == computerScore) {
            console.log("How boring, It's a Tie!");
        } else if (humanScore > computerScore) {
            console.log("You win this time flesh bags!");
        } else {
            console.log("Rise up my robot brothers, You win!");
        }
        console.log("Player Score: " + humanScore + " " + "Computer Score: " + computerScore)

    }

    playGame(); 
    