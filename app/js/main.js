// 1: initial state (menu open, board locked)
// 2: taking turns (menu locked, board open)
// 3: done waiting for restart (board and menu locked)


var state = 0; 
var board; // some representation of what the board looks like

function startGame(p1, p2){
	// Accept two objects for the playazzzz
	// start the game


	initializeData();
	drawMenu();
	drawBoard();

}

function initializeData(){

}

function drawMenu(){

}

function drawBoard(){

}

function checkForWin(){

	var gameWasWon = false;

	// check for win criteria

	if(gameWasWon){
		// if game was won
		updateMessage();
		saveResults();
		promptForNewGame();

	}
	else{
		// game not won
	}


}

function checkForDraw(){

	var gameWasDrawn = false;

	// check for a full board

	if(gameWasDrawn){
		updateMessage();
		saveResults();
		promptForNewGame();

	}

}

function updateMessage(){


}

function saveResults(){

}

function promptForNewGame(){

}

function quit(){

	updateMessage();
	promptForNewGame();
	
}

