/*
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Rafaela
*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o segundo número: `));
let nTres: number = parseFloat(teclado(`Digite o terceiro número: `));

let menor: number = 0;
let mediano: number = 0;
let maior: number = 0;

if(nUm>nDois && nUm>nTres){
    maior = nUm;

    if(nDois>nTres){
        mediano=nDois
        menor=nTres
    }
    else{
        mediano=nTres
        menor=nDois
    }
}

else if(nDois>nUm && nDois>nTres){
    maior = nDois

    if(nUm>nTres){
        mediano=nUm
        menor=nTres
    }
    else{
        mediano=nTres
        menor=nUm
    }
}

else if(nTres>nUm && nTres>nDois){
    maior = nTres
    
    if(nUm>nDois){
        mediano=nUm
        menor=nDois
    }
    else{
        mediano=nDois
        menor=nUm        
    }
}

console.log (`A ordem crescente que corresponde a esses números é: ${menor}, ${mediano} e ${maior}`);