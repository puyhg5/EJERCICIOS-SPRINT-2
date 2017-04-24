// Suits are Diamonds Clubs Hearts and Spades

function scoreHand(hand){
  var total = 0;
  for (var i=0; i<hand.length; i=i+1){
    var value = hand[i].number;
    if (hand[i].number === 1){
      value = 20;
    }
    total = total + value;
  }
  console.log("La puntuación total de la mano es: " + total);
}

var hand = [{number:1, suit:"Diamonds"},{number:4, suit:"Hearts"}];
var hand2 = [{number:12, suit:"Spades"},{number:3, suit:"Diamonds"},{number:5, suit:"Hearts"},{number:6, suit:"Clubs"}];
var hand3 = [{number:1, suit:"Hearts"},{number:2, suit:"Diamonds"},{number:1, suit:"Spades"}];

scoreHand(hand);
scoreHand(hand2);
scoreHand(hand3);
