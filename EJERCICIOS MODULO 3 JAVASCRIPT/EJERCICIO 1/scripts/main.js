var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];
for (var i=0; i<suits.length; i=i+1){
  for (a=1; a<=cardsBySuit; a=a+1){
    cards[cards.length] = {valor: a, palo: suits[i]};
  }
}

console.log("En esta baraja hay " + cards.length + " cartas. Son las siguientes:"); //Para comprobar que funciona bien aunque no lo pida el ejercicio

for (j=0; j<cards.length; j=j+1){
  console.log(cards[j].valor + " " + cards[j].palo);
}
