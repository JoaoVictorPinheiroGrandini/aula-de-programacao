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

console.log("O individuo " + pessoa4.nome + " tem " + pessoa4.idade + " anos de idade , " + pessoa4.altura + " de altura e " + pessoa4.peso + " de peso.")
console.log(pessoa4)

pessoa4.irmaos.unshift({
    nome: "Burro", 
    idade: 37,
    altura: null,
    peso: null
})

function maiorEMenoridade(pessoas, idadeMinima, idadeMaxima){
    for(var indice = 0; indice < pessoas.length; indice += 1){
        
    }
}
pessoa4.falar("Deus no céu e Bolsonaro na presidencia do Brasil")