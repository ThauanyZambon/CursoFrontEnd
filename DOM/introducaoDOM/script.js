function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

//GetElementeById - selecao do elemento pelo ID

let titulo = document.getElementById("titulo");
titulo.style.color = "blue"; 

//GetElementes
let descricao = document.getElementsByClassName("descricao");
//variavel vetor//array
descricao[0].style.fontWeight = "bold";
descricao[1].style.color = "gren";
descricao[2].style.color = "blue";

let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.length); 

//querySelector -> primeiro elemento
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

//queySelectorALL -> todos elementos
let todosOsParagrafos = document.querySelectorAll("p");
todosOsParagrafos.forEach(p => p.style.fontSize = "18px"); 

