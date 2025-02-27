var prompt = require("prompt-sync")();
// Atividade 1: Verificação de Idade

var idade = Number(prompt("informe sua idade:"));
if (idade <18) {
console.log("menor de idade");
}else if (idade >= 18 && idade < 60) { //condicao intermediaria
    console.log("adulto");
}else {
console.log("idoso");
}

// Atividade 2: Tabuada do número 5
for(let i=1; i<=10;++){
    console.log("5 x"+i =i*5");
}

// Atividade 3: Números Pares de 1 a 20
print("Números pares de 1 a 20:")
for i in range(1, 21):
    if i % 2 == 0:
        print(i)

        
    
