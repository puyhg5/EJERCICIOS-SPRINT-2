function caracterCentral(cadena){
  var central = cadena.length/2-0.5;
  if (cadena.length%2 === 0 ){
     return "Sólo funciono con longitud impar";
  }else{
    return cadena[central];
  }
}

caracterCentral("HOLAS");
caracterCentral("HOLA");
