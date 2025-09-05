// Exercícios faltantes da aula de 13 de agosto de 2025

/* 8. Faça um programa que receba a idade da pessoa e informe se ela é maior ou menor de 
idade */
idade = 15;
if (idade >= 18) {
    console.log("08. Esta pessoa tem " + idade + " anos de idade. Esta pessoa é maior.");
} else {
    console.log("08. Esta pessoa tem " + idade + " anos de idade. Esta pessoa é menor.");
};

/* 9. Faça um programa que receba a idade da pessoa e informe se o voto é: não pode 
votar, voto opcional, pode votar */
idadeVoto = 70;
if (idadeVoto < 16) {
    console.log("09. Esta pessoa tem " + idadeVoto + " anos de idade. Não pode votar.");
} else if ((idadeVoto >= 16 && idadeVoto < 18) || (idadeVoto >= 70)) { // && indica "e" e || indica "ou"
    console.log("09. Esta pessoa tem " + idadeVoto + " anos de idade. O voto é opcional.");
} else {
    console.log("09. Esta pessoa tem " + idadeVoto + " anos de idade. O voto é obrigatório.");
};

/* 10. Faça um programa que receba a 3 notas do aluno, calcule a média e se a nota for 
maior que 6 aprovado, caso contrario reprovado */
primeiraNota = 5;
segundaNota = 5;
terceiraNota = 4;
mediaAluno = (primeiraNota + segundaNota + terceiraNota) / 3;
if (mediaAluno > 6) {
    console.log("10. A média do aluno é " + mediaAluno.toFixed(1) + ". Ele está aprovado.")
} else {
    console.log("10. A média do aluno é " + mediaAluno.toFixed(1) + ". Ele está reprovado.")
};