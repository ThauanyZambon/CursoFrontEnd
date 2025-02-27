// Estruturas de Dados

// Condicionais (if Else ; Switch Case)

var precoProduto = 150;

if (precoProduto>=100) {
    console.log("Valor a Pagar" +(precoProduto*0.9));
} else {
    console.log("Valor a Pagar" +(precoProduto));
}

var mes = 2;

switch (mes) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;

    default:
        console.log("outro mes");
        break;
}

//estrutura de repeticao
//for(ponto de inicio); ponto de parada; incremento)
for (let i = 0; i < 10; i++) {
    console.log ("indice: "+i);
    
}

//while (condicao de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas=0;
while(continuar) {
    let numeroSorteado = Math.round(Math.random()*10)
    if (numeroEscolhido==numeroSorteado) {
        continuar = false
    }
    tentativas++;
    console.log("N° de Tentavivas : "
    +tentativas);
}

//funcoes (metados)

function saudacao(nome) {
    return "Ola" +nome + "!!!";
}
 
console.log (saudacao) ("Thauany");