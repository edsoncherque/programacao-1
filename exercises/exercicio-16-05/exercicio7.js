//Elabore um programa que leia um comprimento em polegadas, calcule e exiba o comprimento em milímetros, considerando que 1 polegada equivale a 25,4 milímetros. Mostre o resultado utilizando a função "document.write".

var polegadas = parseInt(prompt('Informe o comprimento em polegadas: '));
var milimetros = (polegadas * 25.4);

document.write(polegadas + ' polegadas equivalem a ' + milimetros + ' milímetros');