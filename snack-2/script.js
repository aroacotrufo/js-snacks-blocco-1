const firstWord = prompt('Inserisci una parola')
const secondWord = prompt('Inserisci una seconda parola')
let message
if(firstWord.length < secondWord.length){
    console.log(secondWord)
}else if(firstWord.length > secondWord.length){

    console.log(firstWord)
}else{
     message = 'Hanno la stessa lunghezza'
    console.log(message)
}