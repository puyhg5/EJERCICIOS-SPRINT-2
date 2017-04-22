var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cards = [];
var j = 0;
for (i=0; i<4; i=i+1){
  for (a=1; a<=12; a=a+1){
    cards[j] = {valor: a, palo: suits[i]};
    j=j+1;
  }
}

console.log("Las cartas rojas y pares son:"); //Para comprobar que funciona bien aunque no lo pida el ejercicio
var a = 0;
var rojas = [];
for (j=0; j<=47; j=j+1){
  if ((cards[j].palo === "Corazones" || cards[j].palo === "Diamantes") && cards[j].valor % 2 === 0){
    rojas[a] = cards[j];
    console.log(rojas[a].valor + " " + rojas[a].palo);
    a = a + 1;
  }
}

console.log("La última carta es " + rojas[a-1].valor + " de " + rojas[a-1].palo);
