var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cardsBySuit = 12;
var cards = [];
for (var i=0; i<suits.length; i=i+1){
  for (var a=1; a<=cardsBySuit; a=a+1){
    cards[cards.length] = {valor: a, palo: suits[i]};
  }
}

console.log("Las cartas rojas son:"); //Para comprobar que funciona bien aunque no lo pida el ejercicio
var rojas = [];
for (j=0; j<cards.length; j=j+1){
  if (cards[j].palo === "Corazones" || cards[j].palo === "Diamantes"){
    rojas[rojas.length] = cards[j];
    console.log(rojas[(rojas.length)-1].valor + " " + rojas[(rojas.length)-1].palo);
  }
}

console.log("Las cartas negras son:") //Para comprobar que funciona bien aunque no lo pida el ejercicio
var b = 0;
var negras = [];
for (j=0; j<cards.length; j=j+1){
  if (cards[j].palo === "Treboles" || cards[j].palo === "Picas"){
    negras[b] = cards[j];
    console.log(negras[b].valor + " " + negras[b].palo);
    b = b + 1;
  }
}
