var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];

for (var i=0; i<suits.length; i++){
  for (var j=1; j<=cardsBySuit; j++){
    cards[cards.length] = {valor: j, palo: suits[i]};
  }
}
console.log (cards);

function repartir(cartas){
  cartas.splice(0,1);
  console.log ("Repartiendo...");
  console.log (cards);
}

function puntuar(mano){
  var total = 0;

  for (var k=0; k<mano.length; k++){
    if (mano[0] === mano[1] && mano[1] === mano[2] && mano [2] === mano[3]){
      total = total + 10 * mano[k];
    }else{
      total = total + mano[k];
    }
  }

  console.log("La puntuación de la mano es: " + total);
}

var mano = [1,1,1,1];
var mano2 = [1,2,2,1];

var Croupier = {reparte: repartir, puntua: puntuar};

Croupier.reparte(cards);
Croupier.puntua(mano);
Croupier.puntua(mano2);
