/**
 * Created by Joao on 29/04/2016.
 */

// IMC = peso / altura * altura


var botao = document.getElementById("calcula-imcs");

//botao.onclick = calculaTodosImcs; //chamada pelo evento de click do botão (apenas um possível para o mesmo botao)

//Listener do evento click do botao (vários possíveis para o mesmo botao)
botao.addEventListener("click", function(){

    function montaPaciente(pacienteTr){
        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

        var paciente = {
            nome : tdNome.textContent,
            peso : tdPeso.textContent,
            altura : tdAltura.textContent,
            pegaImc: function() {

                if(this.altura != 0){
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                } else{
                    console.log("Não posso dividir por zero!");
                }
            }
        };
        return paciente;
    }

    var trsPacientes = document.getElementsByClassName("paciente"); // array
    console.log(trsPacientes);

    percorreArray(trsPacientes, function(pacienteTr){
        var tdnome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdpeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdaltura = pacienteTr.getElementsByClassName("info-altura")[0];
        //var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

        var pacienteAtual = montaPaciente(pacienteTr);

        var imc = pacienteAtual.pegaImc();

        var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdimc.textContent = imc;
        console.log(imc);
    });
});
//Listener do evento click
botao.addEventListener("click", function(){
    console.log("Calculando IMCs")
});
//Listener do evento click
botao.addEventListener("click", function(){
    alert("IMCs calculados!!!")
});






