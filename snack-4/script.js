let dispari = [0]
for(let i=0;i<6;i++){
    let number = Number(prompt(`Inserisci un numero${i+1}`))
    if(number%2 != 0){
        dispari.push(number)
        console.log(dispari)
    }
 }