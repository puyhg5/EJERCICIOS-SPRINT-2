var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];
for (var i=0; i<suits.length; i=i+1){
  for (a=1; a<=cardsBySuit; a=a+1){
    cards[cards.length] = {valor: a, palo: suits[i]};
  }
}

firstIndexCards = 0;
lastIndexCards = cards.length - 1;

function barajar(cards){
  for (var iteration=1; iteration<=100; iteration++){
    var indexRandom = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    while (indexRandom === indexRandom2){
      var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    }
    var change = cards[indexRandom];
    var change2 = cards [indexRandom2];
    cards[indexRandom] = change2;
    cards[indexRandom2] = change;
  }
  console.log ("Barajando...");
}

var Croupier = {baraja: barajar};

Croupier.baraja(cards);


/*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}*/
