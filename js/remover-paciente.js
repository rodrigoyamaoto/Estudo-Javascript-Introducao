var tabela = document.querySelector("#tabela-pacientes");

//Adiciona evento de duplo click no tbody da tabela de pacientes
tabela.addEventListener("dblclick", function(event){
  var pacienteTr = event.target.parentNode;

  pacienteTr.classList.add("fadeOut");

  setTimeout(function(){
    pacienteTr.remove();
  }, 500);

});
