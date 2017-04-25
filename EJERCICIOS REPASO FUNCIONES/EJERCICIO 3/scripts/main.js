function encuentraPares(numeros){
  var pares = [];
  for(i=0; i<numeros.length; i++){
    if (numeros[i]%2 === 0){
     pares[pares.length] = numeros[i];
   }
 }
 return pares;
}


encuentraPares([1,2,3,4,5,6,7,8]);
