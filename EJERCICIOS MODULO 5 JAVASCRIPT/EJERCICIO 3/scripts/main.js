function cuadrado(lado){
  var total = lado*4;
  console.log("La longitud del cuadrado es: " + total + " centímetros cuadrados");
}

function rectangulo(lado1, lado2){
  var total = lado1*2 + lado2*2;
  console.log("La longitud del rectángulo es: " + total + " centímetros cuadrados");
}

function circulo(radio){
  var total = 2*Math.PI*radio;
  console.log("La longitud del círculo es: " + total + " centímetros cuadrados");
}

var calcularLongitud = {Lcuadrado: cuadrado, Lrectangulo: rectangulo, Lcirculo: circulo};

calcularLongitud.Lcuadrado(20);
calcularLongitud.Lrectangulo(10,20);
calcularLongitud.Lcirculo(20);
