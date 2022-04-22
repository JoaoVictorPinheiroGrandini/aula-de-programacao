
function indiceDoMaiorNumero(numeros) {
    var maiorNumero = 0
    for(var indice = 0; indice < numeros.length ; indice += 1){
        if(numeros[indice] > maiorNumero) {
            maiorNumero = numeros[indice]
        }
    }
    return numeros.indexOf(maiorNumero)
}

var numeros = [1, 4, 6, 8, 2, 3]

var indiceMaior = indiceDoMaiorNumero(numeros)

console.log(indiceMaior)