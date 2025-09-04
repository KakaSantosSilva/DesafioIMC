//1) Faça um algoritmo que dê a média de 3 notas tiradas por um aluno em uma faculdade em um semestre, calcule e imprima sua média e sua classfiicação


/* 
Média < 5 = reprovado
Média entre 5 e 7 = Recuperação
Média > 7 = Aprovado

*/

let media = CalculoMedia(7,7,8);

if (media < 5) {
    console.log(`Sua nota foi de ${media.toFixed(2)}`)
    console.log(`Situação: Reprovado`)

} else if (media >= 5 && media <= 7) {
    console.log(`Sua nota foi de ${media.toFixed(2)}`)
    console.log(`Situação: Recuperação`)

} else {
    console.log(`Sua nota foi de ${media.toFixed(2)}`)
    console.log(`Situação: Aprovado, passou de semestre`)

}


function CalculoMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return media;
}