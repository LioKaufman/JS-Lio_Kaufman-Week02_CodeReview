function getNames(){
	var player1 = prompt("Welcome to Dice-Roulette.  Please enter the name of the first player.", "Player 1 Name:");
	var player2 = prompt("Welcome to Dice-Roulette.  Please enter the name of the second player.", "Player 2 Name:");

	// document.getElementByID("names").innerHTML = player1 + " vs. " + player2;
	names.innerText = player1 + " vs. " + player2;
};
