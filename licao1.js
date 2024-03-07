/*
 Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é
 um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA,
 fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Rafaela
*/
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("digite o valor do raio: "));
var altura = parseFloat(teclado("Digite o valor da altura: "));
var resultado = 3.14 * (raio * raio) * altura;
console.log("resultado \u00E9 ".concat(resultado));
