function cuentaNumeros(numero, arrayDeNumeros){
  var repetido = 0;
  for (var i=0; i<arrayDeNumeros.length; i++){
    if(numero === arrayDeNumeros[i]){
      repetido = repetido + 1;
    }
  }
  return repetido;
}

cuentaNumeros(1,[1,3,4,2,1,3,4,5]);
