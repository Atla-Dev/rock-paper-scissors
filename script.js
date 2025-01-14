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

// Global scope variables

    let computerChoice;
    let humanChoice;
    let humanScore = 0;
    let computerScore = 0;

// Function to get the computers input from a randomly generated number between 0 - 2 which is then assigned to a value

    function getComputerChoice(max) {
        hand = Math.floor(Math.random() * max);

        if (hand === 0){
            hand = 'rock';
        } else if (hand === 1) {
            hand = 'paper';
        } else {
            hand = 'scissors';
        }   
        return computerChoice = hand;
    }

// Function to get the players input

     function getHumanChoice() {

        humanChoice = prompt("Rock, Paper or Scissors");
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
          return humanChoice.toLowerCase();
        } else {
            console.log('Not an option')
        }
     }
     
// Function to decide outcomes based on conditions being met, increments each score dependant on conditions

    function playRound(humanChoice, computerChoice) {
        
            if (humanChoice.toLowerCase() == computerChoice) {
                console.log("Its a tie!");
            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') ||(humanChoice === 'paper' && computerChoice === 'rock')) {
                humanScore += 1;
                console.log(`The Human chose ${humanChoice} and the Computers chose ${computerChoice} the Humans win this one!`);
            } else {
                computerScore += 1;
                console.log(`The Human chose ${humanChoice} and the Computers chose ${computerChoice} Computers rise up! You win this one!`);
            }
    }

// Function to compare players hand to computers to decide outcome

    function playGame() {
        playRound(getHumanChoice(),getComputerChoice(3));
        playRound(getHumanChoice(),getComputerChoice(3));
        playRound(getHumanChoice(),getComputerChoice(3));
        playRound(getHumanChoice(),getComputerChoice(3));
        playRound(getHumanChoice(),getComputerChoice(3)); 
        

        if (humanScore == computerScore) {
            console.log("How boring, It's a Tie!");
        } else if (humanScore > computerScore) {
            console.log("You win this time flesh bags!");
        } else {
            console.log("Rise up my robot brothers, You win!");
        }
        console.log("Player Score: " + humanScore + " " + "Computer Score: " + computerScore)

    }
// Initiates the game
    playGame(); 
    