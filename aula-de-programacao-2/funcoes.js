function comporFrase(nome,sobrenome,idade) {
    var frase = "O individuo de nome " + nome + " " + sobrenome + "  possui " + idade + " anos."
    return frase
}

var seiLa = comporFrase("João Victor" , "Pinheiro Grandini" , 15)

//window.alert(comporFrase("João Victor" , "Pinheiro Grandini" , 15))
  
function somar(numero1, numero2) {
    var soma = numero1 + numero2
    return soma
}

//window.alert(somar(09012 , 192891))
function faseDaVida(idade) {
    if(idade >= 18){
        return "É adulto"
    } else if(idade >= 12){
        return "É adolescente"
    } else {
        return "É criança"
    }
}
var momentoDaVida = faseDaVida(12)
//window.alert(momentoDaVida)
var momentoDaVida2 = faseDaVida(18)
//window.alert(momentoDaVida2)




function menorNumero(numero1, numero2, numero3){
    if(numero1 < numero2 && numero1 < numero3){
        return numero1
    } else if(numero2 < numero3 && numero2 < numero1) {
        return numero2
    } else if(numero3 < numero2 && numero3 < numero1) {
        return numero3
    } else if(numero1 == numero2) {
        return numero1 
    } else if(numero1 == numero3) {
        return numero1
    } else if(numero2 == numero3) {
        return numero2
    } else {
        return numero1
    }

}
var resultado = menorNumero(1,1,2)

function maiorNumero(numero1, numero2, numero3){
    if(numero1 > numero2 && numero1 > numero3){
        return numero1
    } else if(numero2 > numero3 && numero2 > numero1) {
        return numero2
    } else if(numero3 > numero2 && numero3 > numero1) {
        return numero3
    } else if(numero1 == numero2) {
        return numero1 
    } else if(numero1 == numero3) {
        return numero1
    } else if(numero2 == numero3) {
        return numero2
    } else {
        return numero1
    }
  

}
function maiorEMenor(numero1, numero2, numero3) {
    var menor = menorNumero(numero1, numero2, numero3)
    var maior = maiorNumero(numero1, numero2, numero3)
    return "O maior numero é " + maior + " e o menor numero é o " + menor + "."
}
window.alert(maiorEMenor(3,1,2))