const rpsContain = document.getElementById('rpsContain');
const choices = ['Rock', 'Paper', 'Scissors'];
const buttonContainer = document.createElement("div");
const gameName = document.createElement('h1');
gameName.textContent = 'Rock, Paper or Scissors'
const subTitle = document.createElement('h3');
subTitle.textContent = 'Choose your pick to begin'
const resultText = document.createElement('p');
const scoreText = document.createElement('p');
const resultScore = document.createElement('p');
const winnerGame = document.createElement('p');



let humanScore = 0;
let computerScore = 0;
let gameOver = false;

rpsContain.appendChild(gameName);
rpsContain.appendChild(subTitle);
rpsContain.appendChild(buttonContainer);
rpsContain.appendChild(resultText);
rpsContain.appendChild(scoreText);
rpsContain.appendChild(winnerGame);


choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
        const playerSelection = choice;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    buttonContainer.appendChild(button);
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let result = '';
    if(playerSelection === computerSelection) {
        result = `Draw! Both chose ${playerSelection}`;
    } else if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        humanScore++;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    resultText.textContent = result;
    scoreText.textContent = `Player: ${humanScore}    |    Computer: ${computerScore}`;
    checkGameOver();
}

function checkGameOver() {
    if (humanScore === 5) {
        winnerGame.textContent = "Congratulations! You have won the game!"
        gameOver = true;

    } else if (computerScore === 5) {
        winnerGame.textContent = "Game over! The computer wins!";
        gameOver = true;
        }
        if (gameOver) {
            resetButton.style.display = 'block';

        }     
}

const resetButton = document.createElement('button');
resetButton.textContent = 'Play Again?';
resetButton.style.display = 'none';
resetButton.addEventListener('click', resetGame);
rpsContain.appendChild(resetButton);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    resultText.textContent = '';
    winnerGame.textContent = '';
    scoreText.textContent = 'Player: 0 | Computer: 0';
    resetButton.style.display = 'none';
}