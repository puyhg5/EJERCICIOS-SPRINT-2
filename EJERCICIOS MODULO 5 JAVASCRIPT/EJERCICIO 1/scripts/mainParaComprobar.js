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
  //  console.log("La colocación de las cartas es: " + cards);
    var indexRandom = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    console.log("El primer indice elegido es: " + indexRandom);
    var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    console.log("El segundo indice elegido es: " + indexRandom2);
    while (indexRandom === indexRandom2){
      var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    }
    console.log("El segundo indice elegido es: " + indexRandom2);
    var change = cards[indexRandom];
    console.log("La primera carta de cambio es " + change.valor +" "+ change.palo + "estaba en el indice "+ indexRandom);
    var change2 = cards [indexRandom2];
    console.log("La segunda carta de cambio es: " + change2.valor + " "+change2.palo + "estaba en el indice" + indexRandom2);
    cards[indexRandom] = change2;
    cards[indexRandom2] = change;
    console.log("La colocación de las cartas es: " + cards);
    console.log("Ahora en el indice " + indexRandom + "esta " +  cards[indexRandom].palo + " " + cards[indexRandom].valor);
    console.log("Ahora en el indice " + indexRandom2 + "esta " +  cards[indexRandom2].palo + " " + cards[indexRandom2].valor);
  }
}

var Croupier = {baraja: barajar};

Croupier.baraja(cards);


/*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}*/
