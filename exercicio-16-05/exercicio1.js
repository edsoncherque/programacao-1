// Construa uma página que leia 4 números e mostre a média dos mesmos. Para mostrar o resultado utilize um alert.

//Parceando para numero inteiro
var n1 = parseInt(prompt('Informe o primeiro valor: '));
var n2 = parseInt(prompt('Informe o segundo valor: '));
var n3 = parseInt(prompt('Informe o terceiro valor: '));
var n4 = parseInt(prompt('Informe o quarto valor: '));

var media = (n1 + n2 + n3 + n4) / 4;

alert('A média dos valores é: ' + media);