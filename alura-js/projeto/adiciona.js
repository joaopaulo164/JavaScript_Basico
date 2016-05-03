/**
 * Created by john on 02/05/2016.
 */


var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){

    event.preventDefault(); //impede o comportamento padrão que no caso de um botão no formulário é submeter

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info-nome'>" + campoNome.value + "</td>" + //input não possui conteúdo, por isto utilizamos .valeu para pegar o valor
        "<td class='info-peso'>" + campoPeso.value + "</td>"+
        "<td class='info-altura'>" + campoAltura.value + "</td>" +
        "<td class='info-imc'>"+campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>"+
        "</tr>";

//var tabela = document.getElementsByTagName("table")[0]; // getElementsByTagName retorna um array por isto [0] para pegar o primeiro elemento

//document.querySelectorAll("table"); //querySelectorAll retorna um array

    var tabela = document.querySelector("table"); // querySelector retorna sempre o primeiro elemento.
    tabela.innerHTML = tabela.innerHTML + pacienteNovo; //adiciona HTML

    campoNome.value = ''; //Limpa os campos após inserido
    campoPeso.value = '';
    campoAltura.value = '';
});