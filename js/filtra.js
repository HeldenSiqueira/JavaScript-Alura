var campoFiltro = document.querySelector("#filtrar-tabela");

//escutaremos um evento de input
campoFiltro.addEventListener("input", function() {
    //Passaremos como segundo parâmetro uma função com a ação a ser executada quando alguém clicar no campo.
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //Criando expressões regulares
            //As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings,
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
