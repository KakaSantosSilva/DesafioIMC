//DESAFIO IMC

let Condicao = CalculoIMC(80,1.70);

if (Condicao < 18.5) {
    console.log(`Peso: ${Condicao.toFixed(2)}`)
    console.log("Abaixo do peso")

} else if (Condicao >= 18.5 && Condicao <= 25) {
    console.log(`Peso: ${Condicao.toFixed(2)}`)
    console.log("Peso Normal")

} else if (Condicao > 25 && Condicao <= 30) {
    console.log(`Peso: ${Condicao.toFixed(2)}`)
    console.log("Acima do Peso")


} else if (Condicao > 30 && Condicao <= 40) {
    console.log(`Peso: ${Condicao.toFixed(2)}`)
    console.log("Obeso")

} else {
    console.log(`Peso: ${Condicao.toFixed(2)}`)
    console.log("Obesidade Grave")
}

//Função para o cálculo IMC
function CalculoIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2)
    return imc;
}
