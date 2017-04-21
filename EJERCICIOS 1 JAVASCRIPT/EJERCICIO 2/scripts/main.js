var card = "3P";
var number = card[0];
var suit = card[1];
var previousCardNumber = number - 1;
var previousCard = previousCardNumber + suit;
var nextCardNumber = + number + 1;
var nextCard = nextCardNumber + suit;

console.log("La carta es: " + card);
console.log("La carta anterior es: " + previousCard);
console.log("La carta siguiente es: " + nextCard);

console.log("Prueba de concatenación. Hola "+ number + 1);

var all = previousCard + card + nextCard;

console.log("La concatenación de cartas es: " + all);
