/**
 * Created by Joao on 02/05/2016.
 */

function percorreArray(trsPacientes, comportamento){
    for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++){
        var pacienteTrAtual = trsPacientes[posicaoAtual];

        comportamento(pacienteTrAtual);

    }
}