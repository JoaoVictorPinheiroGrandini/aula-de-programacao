function media(numeros) {
    var soma = 0
    for(var indice = 0; indice < numeros.length ; indice += 1){
        soma = soma + numeros[indice]
    }
    return soma / numeros.length
}
var numerosus = [2,4,6]
console.log(media(numerosus))
