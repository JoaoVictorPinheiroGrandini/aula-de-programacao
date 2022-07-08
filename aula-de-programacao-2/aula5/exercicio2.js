//Crie uma função que recebe um array de livros e retorne esses livros em em ordem alfabetica
//Crie uma função que recebe um array de livros e retorne esses livros pela data de publicaçao decresente
//Crie uma funçao que retorne um objeto contendo um array de editoras dos livros , sendo que nao pode repetir editoras
//obs: cada livro tem que ter data de publicaçao , editora(tambem é um objeto: nome , CEP e CNPJ) , preço.
var livro1 = {
    nome: "Sigma" ,
    data: 2003 ,
    editora: {
        nome: "Corona" ,
        CEP: 10293843 ,
        CNPJ: 19081802802508 ,
    } ,
    preço: "30 R$",
}
var livro2 = {
    nome: "Based" ,
    data: 2010 ,
    editora: {
        nome: "Uirus" ,
        CEP:  10239402 ,
        CNPJ: 19230287619122 ,
    } ,
    preço: "90 R$",
}
var livro3 = {
    nome: "RedPill" ,
    data: 1994 ,
    editora: {
        nome: "Careca" ,
        CEP: 02457502 ,
        CNPJ: 19081802802505 ,
    } ,
    preço: "120 R$",
}
var livro4 = {
    nome: "Burro" ,
    data: 2003 ,
    editora: {
        nome: "Corona" ,
        CEP: 10293843 ,
        CNPJ: 19081802802508 ,
    } ,
    preço: "30 R$",
}

var livros = [livro1, livro2, livro3, livro4]



function filtrarEditoras (livros) {
    var editoras = []
    naoEstaNoArray = true;
    for(var indice = 0; indice < livros.length; indice += 1){
        // Verificar se a editora q vc vai adicionar j esta no array de editoras
        for(var indice2 = 0; indice2 < editoras.length; indice2 += 1){
            if(livros[indice].editora.nome == editoras[indice2].nome) {
                naoEstaNoArray = false;
            }
        }
        if(naoEstaNoArray){
            editoras.push(livros[indice].editora)
        }
    }
    return editoras
}
console.log(filtrarEditoras(livros))
