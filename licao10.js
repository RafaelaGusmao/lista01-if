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
Aluno:Rafaela
*/
console.clear();
var teclado = require("prompt-sync")();
var resposta1 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta2 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta3 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta4 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta5 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var interrogatorio = 0;
if (resposta1 == 1) {
    interrogatorio++;
}
if (resposta2 == 1) {
    interrogatorio++;
}
if (resposta3 == 1) {
    interrogatorio++;
}
if (resposta4 == 1) {
    interrogatorio++;
}
if (resposta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
}
else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
}
else if (interrogatorio == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
