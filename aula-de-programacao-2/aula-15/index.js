var transacoes = [
    {
        tipo: "Transferência recebida",
        nome: "DOUGLAS PIRES BRANTES",
        valor: "R$ 12,50",
        data: "Hoje",
        icone: "dinheiroBaixo.png"
    },
    {
        tipo: "Transferência enviada",
        nome: "Lucas Muniz Formoso",
        valor: "R$ 21,50",
        data: "Ontem",
        icone: "setaCima.png"
    },
    {
        tipo: "Transferência recebida",
        nome: "MARCIO MADEIRA DA CUNHA",
        valor: "R$ 38,50",
        data: "21/05/22",
        icone: "dinheiroBaixo.png"
    },
    {
        tipo: "Compra no débito",
        nome: "Tutti Fruti",
        valor: "R$ 19,98",
        data: "22/07/21",
        icone: "cartao.png"
    },
    {
        tipo: "Compra no crédito",
        nome: "Art Pão",
        valor: "R$ 38,60",
        data: "Ontem",
        icone: "cartao.png"
    }
]

/*transacoes.forEach(
    function(item, indice){
        console.log(indice)
    }
)*/
var tutti 
/*for(var indice = 0; indice < transacoes.length; indice += 1) {
    if(transacoes[indice].nome == "Tutti Fruti"){
        tutti = transacoes[indice]
    }
}

console.log(tutti)*/
var encontrado = transacoes.find(function(item){
    if(item.nome == "Tutti Fruti" ) {
        return true
        }
        else{
            return undefined
        }
    })
console.log(encontrado)
