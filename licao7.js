/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/
var teclado = require("prompt-sync")();
var resultado = 0;
var qtdMaca = parseFloat(teclado("Digite a quantidade de ma\u00E7as: "));
if (qtdMaca < 12) {
    resultado = qtdMaca * 0.3;
    console.log("Comprando a quantidade de ".concat(qtdMaca, " o valor da compra R$").concat(resultado));
}
else if (qtdMaca >= 12) {
    resultado = qtdMaca * 0.25;
    console.log("Comprando a quantidade de ".concat(qtdMaca, " o valor da compra R$").concat(resultado));
}
else {
    console.log("Algo deu errado!!");
}
