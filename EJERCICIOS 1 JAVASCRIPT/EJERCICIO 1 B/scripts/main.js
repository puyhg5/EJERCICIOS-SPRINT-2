var totalCards = 55;
var jokerCards = 3;
var suits = 4;
var BlackSuits = 2;
var figuresPerSuit = 3;
var evenFactor = 2;


var cardsPerSuit = (totalCards - jokerCards) / suits;
var cardsWithNumbersPerSuit = cardsPerSuit - figuresPerSuit;
var evenCardsPerSuit = cardsWithNumbersPerSuit / evenFactor;

var result = evenCardsPerSuit * BlackSuits;

console.log(result);
