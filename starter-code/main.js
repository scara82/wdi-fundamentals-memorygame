console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardFour) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}

var boardBuilder = document.getElementById('game-board');

var createCards = function(){
	var i = function() {
for (var i=0; i<4; i++) {
	var newCard = document.createElement('div');
	newCard.className = "card";
	newCard.textContent = "";
	boardBuilder.appendChild(newCard);
}
}
}

createCards();




