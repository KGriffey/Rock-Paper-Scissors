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

/* Play the game */
function playGame(playerSelection, computerSelection){
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

    //Return the result message
    if(result === "win"){
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if(result === "lose"){
        return `Oh no, you lost! ${computerSelection} beats ${playerSelection}.`;
    } else if(result === "tie"){
        creturn `It's a tie! You both chose ${playerSelection}.`;
    } else{
        return `That doesn't look right. You forfeit!`;
    } 
}

//Determine player/computer moves
const playerSelection = playerPlay();
const computerSelection = computerPlay();

//Test code to read player move's value
console.log(playerSelection);

//Play the game
playGame(playerSelection, computerSelection);


