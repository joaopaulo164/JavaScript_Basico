/**
 * Created by Joao on 29/04/2016.
 */

// IMC = peso / altura * altura

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

                console("Não posso dividir por zero!");
            }
        }
    }
    return paciente;
}

var trsPacientes = document.getElementsByClassName("paciente"); // array
console.log(trsPacientes);

percorreArray(trsPacientes, function(pacienteTr){
    var tdnome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdpeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdaltura = pacienteTr.getElementsByClassName("info-altura")[0];
    //var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

    var pacienteAtual = montaPaciente(pacienteTr)

    var imc = pacienteAtual.pegaImc();

    var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdimc.textContent = imc;
    console.log(imc);
});







