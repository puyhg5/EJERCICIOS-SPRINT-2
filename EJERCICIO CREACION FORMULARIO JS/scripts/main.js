var min = 1;
var max = 31;
var select = document.querySelector(".js-birthday-day");

for (var i = min; i<=max; i++){
  var optionDay = document.createElement('option');
  optionDay.value = i;
  optionDay.innerHTML = i;
  select.appendChild(optionDay);
}

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var select = document.querySelector(".js-birthday-month");

for (var i = 0; i<months.length; i++){
  var optionMonth = document.createElement('option');
  optionMonth.value = months[i];
  optionMonth.innerHTML = months[i];
  select.appendChild(optionMonth);
}

var min = 1900;
var max = 2017;
var select = document.querySelector(".js-birthday-year");

for (var i = min; i<=max; i++){
  var optionYear = document.createElement('option');
  optionYear.value = i;
  optionYear.innerHTML = i;
  select.appendChild(optionYear);
}

function buttonok(){
  var email1 = document.querySelector(".email1").value;
  var email2 = document.querySelector(".email2").value;
  var nombre = document.querySelector(".name").value;

  if (email1 === email2){
    console.log("Gracias " + nombre + ", la cuenta se ha creado correctamente");
  }else{
    console.log("No se ha podido crear la cuenta.")
    document.querySelector(".email2").style.borderColor = "red";
  }
}

var submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", buttonok);
