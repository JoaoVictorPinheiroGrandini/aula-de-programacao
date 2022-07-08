function potenciacao (primeiroNum,segundoNum,terceiroNum,quartoNum,quintoNum) {
    var potencias = []
    potencias.push(primeiroNum ** 2)
    potencias.push(segundoNum ** 2)
    potencias.push(terceiroNum ** 2)
    potencias.push(quartoNum ** 2)
    potencias.push(quintoNum ** 2)
    return potencias
}

console.log(potenciacao(2,4,7,8,5));

function calcularImc (peso,altura) {
    var imc = 0
    imc = peso / altura ** 2
    return imc
}

function classificarImc(imc) {
    if (imc >= 40) {
       return "IMC: " + imc + " => Obesidade nivel 2"
    }if (imc >= 30 && imc <= 39.9) {
       return "IMC: " + imc + " => Obesidade nivel 1"
    }if (imc >= 25 && imc <= 29.9) {
       return "IMC: " + imc + " => Sobrepeso"
    }if (imc >= 18.5 && imc <= 24.9) {
       return "IMC: " + imc + " => Peso normal"
    }if (imc <= 18.5 ) {
       return "IMC: " + imc +": =>Abaixo do peso"
    }
}

var peso = 100
var altura = 1.80
var imc = calcularImc(peso, altura)
var classificacao = classificarImc(imc)


