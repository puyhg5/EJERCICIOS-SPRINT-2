function cuadrado(lado){
  total = lado*4;
  console.log("La longitud del cuadrado es: " + total + " centímetros cuadrados");
}

function rectangulo(lado1, lado2){
  total = lado1*2 + lado2*2;
  console.log("La longitud del rectángulo es: " + total + " centímetros cuadrados");
}

function circulo(radio){
  total = 2*Math.PI*radio;
  console.log("La longitud del círculo es: " + total + " centímetros cuadrados");
}

var calcularLongitud = {cuadrado: cuadrado, rectangulo: rectangulo, circulo: circulo};

calcularLongitud.cuadrado(20);
calcularLongitud.rectangulo(10,20);
calcularLongitud.circulo(20);
