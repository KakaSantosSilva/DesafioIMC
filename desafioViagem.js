
const tipoCombustivel = "gasolina"

if(tipoCombustivel === "etanol"){
    calculo(5.79,10,100)
}else if(tipoCombustivel === "gasolina"){
    calculo(6.66,10,100)
}else{
    console.log(`Combustível inválido`)
}

function calculo (preco, kmPorLitro,distanciaKM ){
    const litros = distanciaKM / kmPorLitro

    const gastoTotal = litros * preco

    return console.log(`O valor total gasto será de: ${gastoTotal.toFixed(2)} reais`)

   
}


