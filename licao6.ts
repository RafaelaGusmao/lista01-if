/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é
a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a
seguinte tabela:
A - nota=&gt;8,5 nota=&lt;10
B - nota=&gt;7 nota&lt;8,5
C - nota=&gt;5 nota&lt;7
D - nota=&gt;3 nota&lt;5
E - nota&gt;3
Nome Aluno: Rafaela
*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o segundo número: `));
let media: number = 0;
media = (nUm+nDois)/2;

let nota;
if(media >=8.5 && nUm>=0 && nUm<=10 && nDois>=0 && nDois<=10){
  nota = (`A`);
}
else if(media >=7 && media<8.5){
  nota = (`B`);
}
else if(media >=5 && media<7){
  nota = (`C`);
}
else if(media >=3 && media<5){
  nota = (`D`);
}
else if(media < 3 && nUm >=0 && nUm <=10 && nDois>=0 && nDois<=10){
  nota = (`E`);
}
else{
  nota = (`nota inválida`);
}
console.log(`A media das notas serão ${media} e sua nota ${nota}`);