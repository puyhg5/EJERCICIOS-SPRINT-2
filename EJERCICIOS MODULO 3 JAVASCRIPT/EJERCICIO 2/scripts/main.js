var suits = ["Corazones", "Diamantes", "Treboles", "Picas"];
var cards = [];
var j = 0;
for (i=0; i<4; i=i+1){
  for (a=1; a<=12; a=a+1){
    cards[j] = {valor: a, palo: suits[i]};
    j=j+1;
  }
}

console.log("Las cartas rojas son:"); //Para comprobar que funciona bien aunque no lo pida el ejercicio
var a = 0;
var rojas = [];
for (j=0; j<=47; j=j+1){
  if (cards[j].palo === "Corazones" || cards[j].palo === "Diamantes"){
    rojas[a] = cards[j];
    console.log(rojas[a].valor + " " + rojas[a].palo);
    a = a + 1;
  }
}

console.log("Las cartas negras son:") //Para comprobar que funciona bien aunque no lo pida el ejercicio
var b = 0;
var negras = [];
for (j=0; j<=47; j=j+1){
  if (cards[j].palo === "Treboles" || cards[j].palo === "Picas"){
    negras[b] = cards[j];
    console.log(negras[b].valor + " " + negras[b].palo);
    b = b + 1;
  }
}
