var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  if(!validaPeso(peso)){
    paciente.querySelector(".info-imc").textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");

  }
  else if(!validaAltura(altura)){
    paciente.querySelector(".info-imc").textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
  else{
    paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
  }
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

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
