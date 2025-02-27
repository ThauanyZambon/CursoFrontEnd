// Crie um array chamado frutas contendo os seguintes elementos: "maçã", "banana", "laranja" e "uva".

let frutas = ["maçã", "banana", "laranja", "uva"];   
console.log(frutas[1]); // Exibe "banana"

frutas.push("melancia");                                                                                                                                                                             
frutas.shift(); 
console.log(frutas.length); // Exibe o comprimento do array

// Crie um array com os números de 1 a 10.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
numeros.forEach(function(numero) {
    console.log(numero);
});




