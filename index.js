
const precoCombustivel = 5.79;

const kmPorLitro = 12;

const distanciaKM = 1580;


const litros = distanciaKM / kmPorLitro  //Gasto de litro durante a viagem 
console.log(litros)

const gastoTotal = litros * precoCombustivel; // litros vezes o preço 

console.log(`O valor total gasto será de: ${gastoTotal.toFixed(2)} reais`)

//Booleaom

const eazul = true; //0

const camisetaKauan = false; // 1


console.log(10 < 5)
//false;

console.log(10 > 5)
//true;

const num = 5
const eNumeroPar = num % 2

if (eNumeroPar === 0) {
    console.log(`${num} é par`)

} else {
    console.log(`${num} é ímpar`)
}

console.log(eNumeroPar)


let numero = 0

if (numero > 0 && numero < 100) {
    console.log(`O número é ${numero}`)
} else if (numero === 0) {
    console.log(`O zero é nulo`)
} else {
    console.log(`Número inválido`)
}

//Objeto 

let book = {
    topic: "JavaScript",
    fat: true
}

book.author = "kauan";

console.log(book.fat)
console.log(book.topic)
console.log(book.author)


//Array 

let primes = [2,3,5,7]

console.log(primes[0])
console.log(primes[primes.length-1])

primes[4] = 9;

console.log(primes[4])