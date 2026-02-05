const firstNumbers = Number(prompt("Inserisci un numero"))
const secondNumber = Number(prompt("Inserisci un'altro numero"))

if(firstNumbers<secondNumber){
    console.log(secondNumber)
}else if(secondNumber<firstNumbers){
    console.log(firstNumbers)
}else{
    const message = 'I numeri sono uguali'
    console.log(message)
}