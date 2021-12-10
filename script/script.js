/* Computer's move */
function computerPlay() {
    //Generate a random number between 0 and 2
    let roll = Math.floor(Math.random() * 3);

    //Depending on roll, determine the computer's move (1/3 odds per).
    if (roll === 0) {
        return "rock";
    } else if (roll === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Play one round and return the result */
function playRound(playerSelection, computerSelection) {
    //Initialize result variable
    let result = " ";

    //Convert player's move to lowercase for case insensitive comparisons
    playerSelection = playerSelection.toLowerCase();

    //Check what the player's selection was, then determine the result of the game
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "lose";
        } else if (computerSelection === "scissors") {
            result = "win";
        } else {
            result = "tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "win";
        } else if (computerSelection === "scissors") {
            result = "lose";
        } else {
            result = "tie";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "lose";
        } else if (computerSelection === "paper") {
            result = "win";
        } else {
            result = "tie";
        }
    } else {
        //Forfeit if the move was not valid at all
        result = "forfeit";
    }

    //Format the player and computers moves for the result string. I.E. change "rock" to "Rock"
    let selectionFormatter = playerSelection;
    playerSelection = selectionFormatter.charAt(0).toUpperCase() + selectionFormatter.slice(1);
    selectionFormatter = computerSelection;
    computerSelection = selectionFormatter.charAt(0).toUpperCase() + selectionFormatter.slice(1);

    //Return the result of the round
    return result;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(playRound(button.className,computerPlay()));
    })
});


