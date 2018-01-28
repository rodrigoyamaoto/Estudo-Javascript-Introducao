var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = peso / (altura * altura);

  if(validaPeso(peso) && validaAltura(altura))
    paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
  else
    paciente.querySelector(".info-imc").textContent = "Peso ou altura inválida";
};

function validaPeso(peso){
  if(peso > 0 && peso < 1000)
    return true;
  else
    return false;
}

function validaAltura(altura){
  if(altura > 0 && altura < 3)
    return true;
  else
    return false;
}
