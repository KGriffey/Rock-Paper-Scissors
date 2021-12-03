/* Computer's move */
function computerPlay(){
    //Generate a random number between 0 and 2
    let roll = Math.floor(Math.random()*3);

    //Depending on roll, determine the computer's move (1/3 odds per).
    if(roll === 0){
        return "rock";
    } else if (roll === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

/* Player's move */
function playerPlay(){
    return prompt("What is your move? Choose carefully.")
}

/* Play one round and return the result */
function playRound(playerSelection, computerSelection){
    //Initialize result variable
    let result = " ";
    
    //Convert player's move to lowercase for case insensitive comparisons
    playerSelection = playerSelection.toLowerCase();

    //Check what the player's selection was, then determine the result of the game
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            result = "lose";
        } else if (computerSelection === "scissors"){
            result = "win";
        } else{
            result = "tie";
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result = "win";
        } else if (computerSelection === "scissors"){
            result = "lose";
        } else{
            result = "tie";
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            result = "lose";
        } else if (computerSelection === "paper"){
            result = "win";
        } else{
            result = "tie";
        }
    } else{
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

/* Plays 5 rounds of the game, keeping score, and reporting the overall winner and loser */
function game(){
    //Initialize results for each round and overall scorelines. Result references the player's standing after each round.
    let roundResult = " ";
    let playerScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    
    for(let i = 0; i < 5; i++){
        //Determine the moves
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        //Play the round
        roundResult = playRound(playerSelection, computerSelection);

        //Report the round result
        if(roundResult === "win"){
            console.log(`Round won! ${playerSelection} beats ${computerSelection}.`);
        } else if(roundResult === "lose"){
            console.log(`Round lost! ${computerSelection} beats ${playerSelection}.`);
        } else if(roundResult === "tie"){
            console.log(`Round tie! You both chose ${playerSelection}.`);
        } else{
           console.log(`Round forfeit! That's not a valid move.`);
        } 

        //Tally the score
        if(roundResult === "win"){
            playerScore++;
        } else if(roundResult === "tie"){
            //Do nothing
        } else{
            computerScore++;
        }
    }

    //Report the overall winner and loser
    if(playerScore > computerScore){
        console.log("You win!")
    } else if (playerScore < computerScore){
        console.log("You lost!")
    } else{
        console.log("It's a tie!")
    }

    //Report the final scorelines
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)
}

//Play the game
game();



