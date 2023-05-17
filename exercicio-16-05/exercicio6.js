//Escreva um programa em JavaScript para calcular e exibir o comprimento de uma circunferência, sendo dada o valor de seu raio. C = 2πR.
//Pode-se utilizar a função Math.PI para obter o valor de PI

var raio = parseInt(prompt('Informe o raio da circunferência: '));
var comprimento = (2 * Math.PI * raio);

document.write('O comprimento da circunferência é: ' + comprimento);