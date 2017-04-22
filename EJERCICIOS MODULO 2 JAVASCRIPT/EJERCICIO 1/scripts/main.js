var card = "4C";
var number = card[0];
var suit = card[1];

if (number === "4"){
  if (suit === "C"){
    console.log("Es el 4 de corazones");
  }else{
    console.log("Es 4 pero no es de corazones");
}
}else{
  console.log("No es el número 4");
}

var card = "3C";
var number = card[0];
var suit = card[1];

if (number === "3"){
  if (suit === "C"){
    console.log("Es el 3 de corazones");
  }else{
    console.log("Es 3 pero no es de corazones");
  }
}else{
    console.log("No es el número 3");
}

var card = "12C";
var number = card[0]+card[1];
var suit = card[2];

if (number === "12"){
  if (suit === "C"){
    console.log("Es el 12 de corazones");
  }else{
    console.log("Es 12 pero no es de corazones");
  }
}else{
    console.log("No es el número 12");
}
