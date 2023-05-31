// Construa uma página que leia o saldo de uma aplicação e mostre, em um alert, o novo saldo, considerado o reajuste de 2%.

var saldo = parseFloat(prompt('Informe o saldo da aplicação: '));
var reajuste = saldo * 0.02;
var novoSaldo = saldo + reajuste;

alert('O novo saldo é: ' + novoSaldo);