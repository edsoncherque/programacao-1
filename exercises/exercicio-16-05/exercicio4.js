// Elabore um programa em JavaScript que receba um valor em minutos e converta 
//num formato com dias, horas e minutos. Mostre o resultado na tela com a função 
//"document.write". 1552

var minutos = parseInt(prompt('Informe a quantidade de minutos: '));
var dia = parseInt(minutos / 1440);
var sobra_dia = minutos % 1440;
var hora = parseInt(sobra_dia / 60);
var sobra_hora = sobra_dia % 60;

document.write(minutos + ' minutos equivalem a ' + dia + ' dias, ' + hora + ' horas e ' + sobra_hora + ' minutos');