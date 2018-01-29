var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = peso / (altura * altura);

  if(!validaPeso(peso)){
    paciente.querySelector(".info-imc").textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");

  }
  else if(!validaAltura(altura)){
    paciente.querySelector(".info-imc").textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
  else{
    paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
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

//Adicionar Novo paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();

  var tabela = document.querySelector("#tabela-pacientes");
  var formulario = document.querySelector("#form-novo-paciente");
  var nome = formulario.nome.value;
  var peso = formulario.peso.value;
  var altura = formulario.altura.value;
  var gordura = formulario.gordura.value;

  //Criando os elementos HTML
  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");

  tabela.appendChild(pacienteTr);

  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  nomeTd.textContent = nome;
  nomeTd.classList.add("info-nome");

  pesoTd.textContent = peso;
  pesoTd.classList.add("info-peso");

  alturaTd.textContent = altura;
  alturaTd.classList.add("info-altura");

  gorduraTd.textContent = gordura;
  gorduraTd.classList.add("info-gordura");
} );
