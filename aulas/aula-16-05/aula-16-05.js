//var n1 = prompt('Informe o primeiro valor: ');
//var n2 = prompt('Informe o segundo valor: ');

//Parceando para numero inteiro
var n1 = parseInt(prompt('Informe o primeiro valor: '));
var n2 = parseInt(prompt('Informe o segundo valor: '));

//Parceando para numero float
//var n1 = parseFloat(prompt('Informe o primeiro valor: '));

//document.write(n1 + n2);
//alert(n1 + n2);
result.innerHTML = n1 + n2;

console.log(n1 + n2);

var resposta = confirm('Deseja continuar?');

document.write('<p>' + resposta + '</p>');      