//Esercizio numero 1  ho stampato  la  Tabellina del  2  usando  un array e il  metodo  map dove  vado  a moltiplicare  tutti  i mie  numeri  al  interno  del  mio array  per  2 . 
const tabellinadel2 = [1,2,3,4,5,6,7,8,9,10]
const esegui = tabellinadel2.map((numero) => numero *2) ;
console.log(esegui)
//Esercizio numero 2  ho  usato   ho  stampato  tutti  i  numeri  pari  usando  il  metodo  filter  attraverso  il  mio array . 
// ho  poi  calcolato  la  somma  e  divisa  per  il  numero  di  elemnti  
const numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
const numeripari =numeri.filter((Element)=>{
    return Element % 2 === 0 ;
})
const numeridispari = numeri.filter((Element)=>{
    return Element % 2 != 0 ;
    
})
const somma =  numeridispari.reduce((acc,number)=> acc + number );
somma/numeridispari.length
console.log(somma/numeridispari.length)
for (let i =0; i<numeri.length; i++) {
   
    if (numeri[i]% 2 == 0) {
        console.log(numeri[i])
    }
    
}
console.log(numeripari)
console.log(somma)
console.log(numeridispari)

// stampa  di  numeri  dispari  da  1  a  20  
const numberdis = (max,i = 1)=>{
    console.log(i);
    if(i + 2 <= max) numberdis ( max , i +2)

}
numberdis(20)
//  Esercizio  numero  3   ho  usato  un  semplice  sswitch  per  risolvere  il  problema 
let distributore = prompt('inserisci numero')
switch (true){
    case distributore == 1:
        console.log("e stata selezionata l acaqua ")
        break
        
        case distributore == 2 :
            console.log ('e stata selezionata la  coca cola ')
            break
            case distributore  == 3 :
                console.log ('e stata selezionata una  birra ')
                break
                default :
                console.log(prompt('inserisci il numero'))
                

} 