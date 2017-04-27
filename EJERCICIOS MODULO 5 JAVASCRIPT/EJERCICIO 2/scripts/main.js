var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];
for (var i=0; i<suits.length; i=i+1){
  for (a=1; a<=cardsBySuit; a=a+1){
    cards[cards.length] = {valor: a, palo: suits[i]};
  }
}

//console.log (cards);

function repartir(cartas){
  cartas.splice(0,1);
  console.log ("Repartiendo...");
}

var Croupier = {reparte: repartir, puntua: puntuar};

Croupier.reparte(cards);

//console.log (cards);

function puntuar(mano){
  var total = 0;
  var equals = false;
  if (mano[0] === mano[1] && mano[1] === mano[2] && mano [2] === mano[3]){
    equals = true;
  }
  for (k=0; k<mano.length; k++){
    if (equals){
      mano[k] = 10 * mano[k];
      //console.log(mano[k]);
    }
    total = total + mano[k];
    //console.log(total);
  }
  console.log("La puntuación de la mano es: " + total);
}
mano = [1,1,1,1];
mano2 = [1,2,2,1];

Croupier.puntua(mano);
Croupier.puntua(mano2);
