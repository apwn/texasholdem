//////////////////////////////////////
////////
//////// TEXAS HOLD'EM GAME
////////
//////////////////////////////////////

// Step 1 - INPUT - How many players? (8 max inc. you)
var otherPlayers = [];

function getPlayerNumber() {
    var question = "How many players should play? (max 8 including you)";
    console.log(question);
    return prompt(question);
}

function listPlayers(player){
for (var i = 0; i <= player-1; i++){
  otherPlayers[i] = i;
}
}

var playerNumber = getPlayerNumber();
//console.log(playerNumber);

listPlayers(playerNumber);
//console.log(otherPlayers);

// List cards

var cardValue = [2,3,4,5,6,7,8,9,10,"J","Q","K","Ace"];
var cardColor = ["Heart","Spades","Diamonds","Clubs"];

// Step 2 - Deal player cards

function getRandom(min,max){
//	console.log(Math.random() * (max-min) + min);
	return Math.random() * (max-min) + min;
}

// FIRST CARD OF PLAYER
var cardsRandom = Math.floor(getRandom(0,13));
var playerCardsValue = cardValue[cardsRandom];
//console.log(playerCardsValue);
var colorRandom = Math.floor(getRandom(0,4));
var playerCardsColor = cardColor[colorRandom];
//console.log(playerCardsColor);

var playerCards = playerCardsValue + " of " + playerCardsColor;

// 2ND CARD OF PLAYER
var cardsRandom2 = function(){
  var random2 = Math.floor(getRandom(0,13));
  while (random2 === cardsRandom){
    random2 = Math.floor(getRandom(0,13));
}
return random2;
}
//console.log(cardsRandom2());
var playerCardsValue2 = cardValue[cardsRandom2()];

var colorRandom2 = function(){
  var random2 = Math.floor(getRandom(0,4));
  while (random2 === colorRandom){
    random2 = Math.floor(getRandom(0,4));
}
return random2;
}
//console.log(colorRandom2());
var playerCardsColor2 = cardColor[colorRandom2()];

var playerCards2 = playerCardsValue2 + " of " + playerCardsColor2;

console.log("YOUR CARDS: " + playerCards + " and " + playerCards2);


// Step 3 - Deal CPU cardColor



// Step 4 - Deal Flop, turn and river


// Step 3 - Select winner


// Step 2 - Deal cards (players / Flop / Turn / River)




// Step 3 - Select winner
