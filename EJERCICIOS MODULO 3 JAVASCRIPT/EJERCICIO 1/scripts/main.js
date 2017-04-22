var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];
var j = 0;
for (i=0; i<suits.length; i=i+1){
  for (a=1; a<=cardsBySuit; a=a+1){
    cards[j] = {valor: a, palo: suits[i]}; //Otra opción cards[cards.length]
    j=j+1;
  }
}

console.log("En esta baraja hay " + j + " cartas. Son las siguientes:"); //Para comprobar que funciona bien aunque no lo pida el ejercicio

for (j=0; j<=47; j=j+1){
  console.log(cards[j].valor + " " + cards[j].palo);
}
