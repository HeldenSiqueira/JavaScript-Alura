var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

//eventListener de duplo clique "dbclick"
tabela.addEventListener("dblclick", function(event) {
    //classList elemento da lista do css
    //target alvo
    //event.target destino dp evento
    //parentNode selecionar pai de um elemento 
    event.target.parentNode.classList.add("fadeOut");
//remove()método  responsável por remover um elemento do HTML
    setTimeout(function() {
        //Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target.
        //parentNode selecionarmos o pai de um elemento
        event.target.parentNode.remove();
        //time 0,5 ms
    }, 500);

});
