//ao clicarmos no botão de "Buscar Paciente", devemos selecioná-lo e atrelá-lo ao evento de click
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    //Para fazermos essa requisição, temos um objeto bastante conhecido no JS, o XMLHttpRequest
    //O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP
    var xhr = new XMLHttpRequest();
// acessar o endereço api-pacientes.herokuapp.com/pacientes,
//Esse endereço é uma API, uma interface de programação que disponibiliza os dados para o usuário.
//método open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
//load evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        // Para sabermos qual o código da requisição, acessaremos a propriedade status
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            //para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest
            var resposta = xhr.responseText;
            //formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.
            //parse transformar a resposta, que é um texto (uma string), em um array de pacientes, usaremos um "transformador"
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
//send() enviando a requisição
    xhr.send();
});
