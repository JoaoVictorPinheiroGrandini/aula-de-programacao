function maiorEMenoridade(pessoas, idadeMinima, idadeMaxima){
    var pessoasPermitidas = []
    for(var indice = 0; indice < pessoas.length; indice += 1){
        if(pessoas[indice].idade >= idadeMinima && pessoas[indice].idade <= idadeMaxima){
            pessoasPermitidas.unshift(pessoas[indice])
        }
    }
    return pessoasPermitidas
}
var pessoa1 = {
    nome: "Maria", 
    idade: 7 ,
    altura: null,
    peso: null
}
var pessoa2 = {
    nome: "Benjamim", 
    idade: 2,
    altura: null,
    peso: null
}
var pessoa3 = {
    nome: "Lavynia", 
    idade: 10,
    altura: null,
    peso: null
}
var pessoa4 = {
    nome: "João Victor",
    idade: 15,
    altura: "158cm",
    peso: "76kg",
    falar: function (mensagem) {
            window.alert(mensagem)
    },
    irmaos: [pessoa1, pessoa2, pessoa3]     
}
var pessoas = [pessoa1, pessoa2 , pessoa3, pessoa4]
console.log(maiorEMenoridade(pessoas, 8, 7))
