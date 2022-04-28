var nomes = ["João", "Alessandro", "Kenzo"]
nomes[0] = "Naomi"
for(var indice = 0; indice <= nomes.length; indice += 1){
    //console.log(nomes[indice])
}
var numeros = [098, 380, 153, 9731, 091823]
var numerosImpares = []
/*for(var indice = 0; indice < numeros.length; indice += 1){
    if (numeros[indice] % 2 != 0 ){
        numerosImpares[indice] = numeros[indice]
    }
}*/
//console.log(numerosImpares)
for(var indice = 0; indice < numeros.length; indice += 1){
    if (numeros[indice] % 2 != 0 ){
        numerosImpares.push(numeros[indice])
        //numerosImpares.unshift(numeros[indice])
    }
}
//console.log(numerosImpares)
//numerosImpares.pop()
numerosImpares.shift()
//console.log(numerosImpares)
//console.log(numerosImpares)
//console.log("Indexof : " + numeros.indexOf(153))
console.log(numeros[numeros.length -1])