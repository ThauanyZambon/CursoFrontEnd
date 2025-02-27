var prompt = require("prompt-sync")();

//calculadora simples

//funcoes
//soma
function soma(a,b){
    return (a+b);
}
//subtracao
function sub(a,b){
    return (a*b);
}

function menu({
    console.log ("Escolha a operacao Desejada")
    console.log("1. soma");
    console.log("2. subtracao");

    let operacao = prompt();
    switch (operacao) {
        case 1:
            var a = Number prompt("informe o 1° n°");
            var b = Number prompt("informe o 2° n°");
            soma(a,b);
            break

        case 2:
            var a = Number prompt("informe o 1° n°");
            var b = Number prompt("informe o 2° n°");
            sub(a,b);
            break
    }
    menu;
})

