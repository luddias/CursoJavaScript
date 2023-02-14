var sul = new Array("RS", "SC", "PR");
var sudeste = new Array("SP", "RJ", "MG", "ES");

document.write('Estados da regiao sul: ');

for(i=0; i<sul.length; i++){
    document.write('<br>');
    document.write(sul[i]);
}

document.write('<br>Estados da regiao sudeste: ');
for(i=0; i<sudeste.length; i++){
    document.write('<br>');
    document.write(sudeste[i]);
}

document.write('<br><br>');
//______________________________________________________________________
var meses = new Array("jan","fev","mar","abr","mai","jun","jul");
var dolar = new Array(4.56, 4.89, 4.93, 5.23, 5.45, 5.75, 5.80);

meses.push("ago");
dolar.push(5.95);

document.write("<u>VALOR DO DOLAR:</u> <br>");

for(i=0; i<dolar.length; i++){
    document.write('<br>');
    document.write(meses[i]+": R$"+ dolar[i]);
}
//_______________________________________________________________________

document.write('<br><br>');

// Método Pop
var frutas=['banana', 'laranja', 'ameixa', 'abacaxi'];
frutas.pop();
document.write(frutas);

// Método Unshift
var idades= [25,30,32,37];
idades.unshift(45);
alert(idades);