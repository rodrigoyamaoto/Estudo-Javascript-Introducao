//Adicionar Novo paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();


  var form = document.querySelector("#form-novo-paciente");
  var paciente = formHelper(form);
  var erros = validaPaciente(paciente);

  if(erros.length > 0) showErrors(erros);
  else{
    adicionaPacienteNaTabela(paciente);
    form.reset();
    cleanErrors();
  }
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


function adicionaPacienteNaTabela(paciente){
  var tabela = document.querySelector("#tabela-pacientes");
  var pacienteTr = createTr(paciente);
  tabela.appendChild(pacienteTr);
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

function validaPaciente(paciente){
  var erros = [];

  if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if(!validaAltura(paciente.altura)) erros.push("Altura inválida");
  if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");
  if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");
  if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");
  if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco");

  return erros;
}

function showErrors(erros){
  var mensagensErro = document.querySelector("#lista-erros");

  cleanErrors();

  erros.forEach(function(erro){
    var li = document.createElement("li");

    li.textContent = erro;
    mensagensErro.appendChild(li);
  });
}

function cleanErrors(){
  var mensagensErro = document.querySelector("#lista-erros");
  mensagensErro.innerHTML = "";
}
