var inputFiltro = document.querySelector("#filtrar-tabela");

inputFiltro.addEventListener("input", function(){
  var filtro = this.value;
  var pacientes = document.querySelectorAll(".paciente");

  if(filtro.length > 0)
  {
    pacientes.forEach(function(paciente)
    {
      var nome = paciente.querySelector(".info-nome").textContent;
      var expressao = new RegExp(filtro,"i");

      if(expressao.test(nome)) paciente.classList.remove("invisivel");
      else paciente.classList.add("invisivel");
    });

  }else{
    pacientes.forEach(function(paciente){
      paciente.classList.remove("invisivel");
    });
  }
});
