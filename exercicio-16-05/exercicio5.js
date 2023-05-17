//Elabore um programa em JavaScript para receber uma quantidade de horas e uma quantidade de minutos e converter apenas em minutos.
// Mostre o resultado utilizando a função "document.write". 1h 30min = 90min

var horas = parseInt(prompt('Informe a quandidade de horas: '));
var minutos = parseInt(prompt('Informe a quantidade de minutos: '));
var horas_em_minutos = (horas * 60);
var minutos_totais = (horas_em_minutos + minutos);

document.write(horas + ' horas e ' + minutos + ' minutos equivalem a ' + minutos_totais + ' minutos');
