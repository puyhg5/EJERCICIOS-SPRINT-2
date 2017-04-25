function cuentaNumeros(numero, arrayDeNumeros){
  var repeat = 0;
  for (i=0; i<arrayDeNumeros.length; i++){
    if(numero === arrayDeNumeros[i]){
      repeat = repeat + 1;
    }
  }
  return repeat;
}

cuentaNumeros(1,[1,3,4,2,1,3,4,5]);
