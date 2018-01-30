//Adicionar Novo paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();

  var tabela = document.querySelector("#tabela-pacientes");
  var form = document.querySelector("#form-novo-paciente");
  var paciente = formHelper(form);
  var pacienteTr = createTr(paciente);

  tabela.appendChild(pacienteTr);
  form.reset();
} );

function formHelper(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function createTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(createTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(createTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(createTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(createTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(createTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function createTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
