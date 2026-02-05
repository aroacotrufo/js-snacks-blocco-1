let somma = 0
for (let i=0; i<10;i++){
    let number = Number(prompt(`inserisci un numero ${i+1}`))
    somma += number             //somma = somma + number
    console.log(somma)
}