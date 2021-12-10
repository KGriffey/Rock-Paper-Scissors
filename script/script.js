/* Computer's move */
function computerPlay() {
    // Generate a random number between 0 and 2
    let roll = Math.floor(Math.random() * 3);

    // Depending on roll, determine the computer's move (1/3 odds per).
    if (roll === 0) {
        return 'fire';
    } else if (roll === 1) {
        return 'water';
    } else {
        return 'grass';
    }
}

/* Play one round and return the result */
function playRound() {
    // Initialize result variable and moves
    let result = ' ';
    const computerSelection = computerPlay();
    const playerSelection = this.className;

    // Check what the player's selection against computer's, then determine the result of the game
    if (playerSelection === 'fire') {
        if (computerSelection === 'water') {
            result = 'lose';
        } else if (computerSelection === 'grass') {
            result = 'win';
        } else {
            result = 'tie';
        }
    } else if (playerSelection === 'water') {
        if (computerSelection === 'fire') {
            result = 'win';
        } else if (computerSelection === 'grass') {
            result = 'lose';
        } else {
            result = 'tie';
        }
    } else {
        if (computerSelection === 'fire') {
            result = 'lose';
        } else if (computerSelection === 'water') {
            result = 'win';
        } else {
            result = 'tie';
        }
    }

    // Print result
    printResult(result);

    // Update the score
    updateScore(result);

    // At 5 wins for either player, determine who won the game
    if (playerScore === 5 || computerScore === 5) {
        determineWinner();
        newGame();
    }

}

/* Print round result */
function printResult(result) {
    const message = document.querySelector('.message');
    message.textContent = `You ${result} this round!`;
}

/* Update the score and scoreboard */
function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        const playerScoreboard = document.querySelector('.player .score');
        playerScoreboard.textContent = playerScore;
    } else {
        computerScore++;
        const computerScoreboard = document.querySelector('.computer .score');
        computerScoreboard.textContent = computerScore;
    }
}

/* Reset the score and scoreboard */
function resetScore(){
    playerScore = 0;
    computerScore = 0;

    const playerScoreboard = document.querySelector('.player .score');
    playerScoreboard.textContent = playerScore;
    const computerScoreboard = document.querySelector('.computer .score');
    computerScoreboard.textContent = computerScore;
}

/* Determine the game winner and end it */
function determineWinner() {
    const message = document.querySelector('.message');
    if (computerScore === 5) {
        message.textContent = 'The computer won the game!';
    } else {
        message.textContent = 'You won the game!';
    }

    buttons.forEach(button => {
        button.removeEventListener('click', playRound);
    });
}

/* Play a new game */
function newGame() {
    // Add a button prompting to play again
    const playAgain = document.querySelector('.playAgain');
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = 'Play again?';
    playAgain.appendChild(playAgainBtn);

    // Initialize a fresh game
    playAgainBtn.addEventListener('click', initGame);
}

/* Initialize a new game */
function initGame() {
    
    //Remove Play Again Button if needed
    const playAgainBtn = document.querySelector('.playAgain button');
    if(playAgainBtn != null){
        const playAgain = document.querySelector('.playAgain');
        playAgain.removeChild(playAgainBtn);
        playAgain.textContent = ''; 
    }
    
    const message = document.querySelector('.message');
    message.textContent = 'Let\'s play a game.';

    resetScore();

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });
}

// Initialize the first game
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
initGame();





