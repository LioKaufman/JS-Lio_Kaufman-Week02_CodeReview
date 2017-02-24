
function getNames() {

// this function prompts for player names and inserts them in the header

	var player1 = prompt("Welcome to Dice-Roulette.  Please enter the name of the first player.", "Player 1 Name:");
	var player2 = prompt("Welcome to Dice-Roulette.  Please enter the name of the second player.", "Player 2 Name:");

	names.innerText = player1 + " vs. " + player2;
	name1.innerText = player1;
	name2.innerText = player2;

	bgColour()

	var Instructions = function() {
  					alert("Click on the each players respective buttons to roll the dice for that player");
				};
	
	Instructions();
};


function dieRoll() {

// This function generates a dandome number from 1 to 6 and outputs it

	return (Math.ceil(Math.random()*6));
};


function playGame(die1, die2, die3) {

/* 
	This function uses an funciton to create an array of 3 random 
	die rolls and places them at the outcome of each player, 
	based on their player ID 
*/

	var outcome = [dieRoll(), dieRoll(), dieRoll()];

	die1.innerHTML = outcome[0];
	die2.innerHTML = outcome[1];
	die3.innerHTML = outcome[2];
};


function bgColour() {

	// This function generates random background colours.

	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);

	document.getElementById("payer1").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);

	document.getElementById("payer2").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

};
