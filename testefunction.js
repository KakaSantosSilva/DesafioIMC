
function teste(){
    console.log(`teste`)
}

teste()

function SayMyName(name){
    console.log(`Meu nome é ${name}`)
}

SayMyName("kauan")

function quadrado(valor){
    return valor * valor

}

const quadradoX = quadrado(2)
console.log(quadradoX + quadradoX) 

function incremetarValor(valor,percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor
    return valorAcrescimo + valor
}

console.log(incremetarValor(100,10))
console.log(incremetarValor(100,15))
console.log(incremetarValor(375,10))