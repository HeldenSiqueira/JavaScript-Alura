//query.selector função seletora: traz do HTML para o js.
//var= variável
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//buscar pela classe paciente
var pacientes = document.querySelectorAll(".paciente");

// para cada um dos pacientes executaremos o código responsável por calcular o IMC e validar o peso e a altura.
//loop for(declaração da variável inicial;até onde queremos que essa variável cresça;o que queremos fazer no fim de cada iteração){}
//length informa o tamanho da array
for (var i = 0; i < pacientes.length; i++) {
//selecionando paciente
    var paciente = pacientes[i];
//buscar dentro da váriavel paciente, pelo <td> que contêm a altura e o peso:
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
//Pegando o <td> que irá guardar o IMC
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
         //calculando imc 
        var imc = peso / (altura * altura);
        //colocando o valor calculado dentro do imc
        //toFixed(2) limita quantidade de casas decimais, recebe como parâmetro casas pós ponto
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
//addEventlistener Responsável por adicionar o escutado do evento.
//function(evento): segundo parâmetro a função anônima, o event
botaoAdicionar.addEventListener("click", function(event) {
    // event.preventDefault() evitar o comportamento padrão do formulário.
    event.preventDefault();
//capturando dados do formulário.
    var form = document.querySelector("#form-adiciona");

    //value acessa valor de um campo
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
//create element cria um elemento HTML
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
//appendChild  Ela adiciona como filho o elemento passado a ela como parâmetro.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
