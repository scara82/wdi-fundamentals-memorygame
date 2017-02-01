console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardFour) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}




createCards();

*/
var cards = ['queen', 'queen','king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard(){

		for (var i=0; i<cards.length; i++) {
			cardElement = document.createElement('div');
			cardElement.className = "card";
			cardElement.setAttribute('data-card', cards[i]);
			cardElement.addEventListener('click', isTwoCards);
			board.appendChild(cardElement);
	}
}



function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
			if (this.getAttribute('data-card')==='king'){
				this.innerHTML = "<img src='King.png'>"
			}
			else {
				this.innerHTML = "<img src='Queen.png'>"
			}

	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch (cards){
	if (cards[0] === cards[1]){
		alert('It is a Match!');
	}	
	else{
		alert("Sorry, try again.");
	}
	cards.innerHTML = '';
}

createBoard();














