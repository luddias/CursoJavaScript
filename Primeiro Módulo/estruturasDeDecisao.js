var idade;
idade = prompt("digite sua idade: ");

if(idade >=18){
    var maioridade = true;
    document.write('Maior de idade, pode dirigir :) ');
}else{
    var maioridade = false;
    document.write('Menor de Idade :(');
}

// if (maioridade){
//     document.write('Maior de idade, pode dirigir :) ');
// }else{
//     document.write('Menor de Idade :(');
// }

document.write('<br>');

cargo = prompt("Digite seu cargo: ");
salario = 2000;

switch(cargo) {
    case "gerente":
        salario*=1,15;
        break;
    case "supervisor":
        salario*=1,10;
        break;
    default:
        salario*= 1,05;
}

document.write("Salario do "+ cargo +": " + salario);