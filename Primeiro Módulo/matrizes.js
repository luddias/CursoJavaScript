var matint = [[3,6,9],[2,4,6],[1,2,3]];

for(let lin=0; lin<3; lin++){
    for(let col=0; col<3; col++)
    document.write(matint[lin][col]+" ");

    document.write("<br/>")
}
// ______________________________________

var notas = [[4.5,6.5,8.7], [8.5,9.7,9.9]];
var colunas = notas[0].length;

soma=0;
for(let i=0; i<colunas; i++){
    soma+=notas[1][i];
}

var media = soma/colunas;

document.write("Media da Maria: " + media.toFixed(2));