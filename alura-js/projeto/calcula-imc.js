/**
 * Created by Joao on 29/04/2016.
 */

// IMC = peso / altura * altura

//var tdPeso1 = document.getElementById("peso-1");
//var tdAltura1 = document.getElementById("altura-1");
//
//var paciente1 = {
//    "peso": tdPeso1.textContent,
//    "altura": tdAltura1.textContent
//};
//
//var tdPeso2 = document.getElementById("peso-2");
//var tdAltura2 = document.getElementById("altura-2");
//
//
//var paciente2 = {
//    "peso": tdPeso2.textContent,
//    "altura": tdAltura2.textContent
//};
//
//var trspacientes = [paciente1, paciente2];

var trspacientes = document.getElementsByClassName("paciente"); // array
console.log(trspacientes)

for(var posicaoAtual = 0; posicaoAtual <= trspacientes.length -1; posicaoAtual++) {

    var pacienteTr = trspacientes[posicaoAtual];
    var tdnome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdpeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdaltura = pacienteTr.getElementsByClassName("info-altura")[0];
    //var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

    var paciente = {
        "nome": tdnome.textContent,
        "peso": tdpeso.textContent,
        "altura": tdaltura.textContent
    };

    console.log(paciente)

    if(paciente.altura != 0){
        var imc = paciente.peso / (paciente.altura * paciente.altura); //paciente.peso; // pega o peso do paciente paciente["peso"]
        var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdimc.textContent = imc;
        console.log(imc);
    } else {
        console.log('Altura igual a zero')
    }
}



