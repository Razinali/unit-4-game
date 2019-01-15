//Variables for wins & losses
var wins = 0;
var losses = 0;

//The computer's random number for current round
var computerNum = [];

//Random number assigned to crystals for current round
var blueNum;
var pinkNum;
var purpleNum;
var redNum;

//The player's score counter for the current round; add 0 & player 
var playerCounter = 0;

//**start the game**//
function startGame() {
	var compNum = Math.floor(Math.random() * 102) + 19;
	computerNum.push(compNum);
	$("#random-number").text(computerNum[0]);
	
	//Random number for crystals
	blueNum = Math.floor(Math.random() * 12) + 1;

	pinkNum = Math.floor(Math.random() * 12) + 1;

	purpleNum = Math.floor(Math.random() * 12) + 1;

	redNum = Math.floor(Math.random() * 12) + 1;
};

// reset the game
function nextGame() {
	computerNum.length = 0;
	playerCounter = 0;
	startGame();
};

//Function to determine player counter 
function checkingNum () {
	if (playerCounter === computerNum[0]) {
		wins++;
		$("#score").html("You won!!");
		$("#wins").html("Wins: "+ wins);
		nextGame();
	}

	else if (playerCounter > computerNum[0]) {
		losses++;
		$("#score").html("You lost!!");
		$("#losses").html("Losses: " + losses);
		nextGame();
	}
};

// start
startGame();

//Clicking crystals
$("#crystal-blue").on("click", function() {
	playerCounter = blueNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-purple").on("click", function() {
	playerCounter = purpleNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-pink").on("click", function() {
	playerCounter = pinkNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});

$("#crystal-red").on("click", function() {
	playerCounter = redNum + playerCounter;
	$("#player-count").text(playerCounter);
	console.log(playerCounter);
	checkingNum();
});