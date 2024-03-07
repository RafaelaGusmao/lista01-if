/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/

const teclado = require (`prompt-sync`)();

let resultado: number = 0;
let qtdMaca: number = parseFloat(teclado(`Digite a quantidade de maças: `));

if(qtdMaca < 12){
    resultado = qtdMaca * 0.3;   
    console.log(`Comprando a quantidade de ${qtdMaca} o valor da compra R$${resultado}`);
}
else if(qtdMaca >= 12){
    resultado = qtdMaca * 0.25;   
    console.log(`Comprando a quantidade de ${qtdMaca} o valor da compra R$${resultado}`);
}
else{
    console.log(`Algo deu errado!!`);
}

