//Exemplo de Script para manipulacao DOM

function clickBtn(){
    //manipulacao pelo ID -> Variavel do tipo simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu Titulo Modificado";
    let li = document.createElement("li");
    li.innerHTML = 'Modificado Texto do Titulo<button onclik="btConfere(this)">Confere<\button>';
    //querySelector -> Variavel Simples
    document.querySelector(".lista"). appendChild(li);
    // getElementsByClassName -> vetor ,descricao
    let descricao = document.querySelectorALL(".descricao");
    console.log(descricao);
    descricao.forEach(Element => Element.style.color = "res");
    text ="Modificacao Cor da Class descricao para Vermelho";
    li.innerHTML = texto+'<button'

 }