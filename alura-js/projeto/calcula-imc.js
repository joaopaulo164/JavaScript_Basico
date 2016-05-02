/**
 * Created by Joao on 29/04/2016.
 */

// IMC = peso / altura * altura


var trsPacientes = document.getElementsByClassName("paciente"); // array
console.log(trsPacientes);

percorreArray(trsPacientes, function(pacienteTr){
    var tdnome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdpeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdaltura = pacienteTr.getElementsByClassName("info-altura")[0];
    //var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

    var pacienteAtual = {
        "nome": tdnome.textContent,
        "peso": tdpeso.textContent,
        "altura": tdaltura.textContent,
        "pegaIMC": function() {
            var paciente = this;
            if(paciente.altura != 0){
                var imc = paciente.peso / (paciente.altura * paciente.altura); //paciente.peso; // pega o peso do paciente paciente["peso"]
                return imc
            } else {
                console.log('Altura igual a zero')
            }
        }
    };

    var imc = pacienteAtual.pegaIMC();

    var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdimc.textContent = imc;
    console.log(imc);
});






