function scoreHand(hand){
  var total = 0;
  for (var i=0; i<hand.length; i=i+1){
    var value = hand[i].number;
    if (hand[i].number === 1){
      value = 20;
    }
    if (hand[i].suit === "Hearts" || hand[i].suit === "Diamonds"){
      value = value * 2;
    }
    total = total + value;
  }
  console.log("Total score is: " + total);
  return total;
}

function compare(totals){
  if(totals[0]>totals[1]){
    console.log("Player 1 wins");
  }else if(totals[0]<totals[1]){
    console.log("Player 2 wins");
  }else{
    console.log("Tie!");
  }
}

function game(){
  var handPlayer1 = [{number:1, suit:"Hearts"},{number:2, suit:"Diamonds"},{number:1, suit:"Spades"}];
  var handPlayer2 = [{number:12, suit:"Spades"},{number:3, suit:"Diamonds"},{number:5, suit:"Hearts"}];
  var scorePlayer1 = scoreHand(handPlayer1);
  var scorePlayer2 = scoreHand(handPlayer2);
  totals = [scorePlayer1, scorePlayer2];
  compare(totals);
}

game();
