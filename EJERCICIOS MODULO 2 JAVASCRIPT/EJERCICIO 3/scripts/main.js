var suits = "CDTP";

console.log("Las cartas rojas y múltiples de tres en la baraja son:");

for (var a=0; a<=4; a=a+1){
  for (var i=0; i<=12; i=i+1){
    if (suits[a] === "C" || suits[a]=="D"){
      if(i%3 === 0){
        console.log (i + suits[a]);
      }
    }
  }
}
