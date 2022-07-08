
var imagem = [
   "./imagens/gear2.jpg",
   "./imagens/gear3.jpg",
   "./imagens/gear4.jpg",
   "./imagens/gear5.jpg",

]
var indice = 0
window.document.getElementById("imagem1").src = imagem[indice];
function trocarImagem(){
   if(indice == imagem.length -1){
      indice = 0;
   }else{
      indice = indice + 1
   }
window.document.getElementById("imagem1").src = imagem[indice];
}
var botao = window.document.getElementById("botão")
botao.addEventListener("click",trocarImagem)
