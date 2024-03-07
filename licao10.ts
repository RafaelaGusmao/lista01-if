/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas
são:

&quot;Telefonou para a vítima?&quot;
&quot;Esteve no local do crime?&quot;
&quot;Mora perto da vítima?&quot;
&quot;Devia para a vítima?&quot;
&quot;Já trabalhou com a vítima?&quot;
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se
a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como
&quot;Suspeita&quot;, entre 3 e 4 como &quot;Cúmplice&quot; e 5 como &quot;Assassino&quot;. Caso contrário, ele será
classificado como &quot;Inocente&quot;.
Aluno:
*/

console.clear();

const teclado = require(`prompt-sync`)();

let resposta1: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta2: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta3: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta4: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `)); 
let resposta5: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));

let interrogatorio: number = 0;

if (resposta1 == 1){
    interrogatorio++;
}
if (resposta2 == 1){
    interrogatorio++;
}
if (resposta3 == 1){
    interrogatorio++;
}
if (resposta4 == 1){
    interrogatorio++;
}
if (resposta5 == 1){
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
} else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
} else if (interrogatorio == 5) {
    console.log("Assassino");
} else {
    console.log("Inocente");
}
