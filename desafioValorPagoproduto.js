//Desafio valor produto pago


const formaPagamento = 5;
const precoProduto = 100;

if (formaPagamento === 1) {
    console.log("Forma de pagamento selecionado: débito")
    const debito = precoProduto - (precoProduto * (10 / 100))
    console.log(`Total: ${debito} `)

} else if (formaPagamento === 2) {
    console.log("Forma de pagamento selecionado: dinheiro/pix")
    const debito = precoProduto - (precoProduto * (15 / 100))
    console.log(`Total: ${debito} `)

} else if (formaPagamento === 3) {
    console.log("Forma de pagamento selecionado: Em 2 vezes sem juros")
    console.log(`Total: ${precoProduto}`)

} else if(formaPagamento === 4){
    const juros = precoProduto + (precoProduto * 10 / 100)
    console.log("Juros de 10%")
    console.log(`O Total será de: ${juros}`)

}else{
    console.log("Opção inválida")
}