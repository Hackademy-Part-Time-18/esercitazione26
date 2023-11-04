// Esercizio 1
let totgatti = 100
let gattixfila = 10
let numerofile = (totgatti / gattixfila  )
 let ngattimancanti = (totgatti - gattixfila)
let filemancanti =  (ngattimancanti / numerofile)
console.log ('ci sono'+ "  " + numerofile+" "+'file di gatto e ne mancano'+" "+ gattixfila+ " " + "per una nuova fila con  un avanzo di   "+ " "+ ngattimancanti)
 
// Esercizio numero 2 
let v = 30 ;
if ( v >= 18 && v < 21 ) {
    console.log( 'sufficiente')
}
else if (v >= 21 && v < 24) {
    console.log('insufficiente')
}
else if (v >= 24 && v < 27 ) {
    console.log ( 'distinto')
}
else if (v >= 27 && v < 29 ) {
    console.log ( 'ottimo' )
}
else if (v >= 30 ) {
    console.log ( 'eccellente')
}

let b = 30
switch(true ){
    case b >= 18 && b <21: 
    console.log("insufficiente")

    case b >= 21 && b <24: 
    console.log("sufficiente")

    case b >= 24 && b <27: 
    console.log("distinto")

    case b >= 27 && b <29: 
    console.log("ottimo")

    case b >= 30 : 
    console.log("eccellente")
}
// Terzo esercizio

let temp=30 
if (temp <20) {
    console.log('non ci sono piu le  mezze  stagioni')
}
else if (temp >= 30 ) {
    console.log ( 'lu mare lu sole lu ientu')
}
else if (temp< 30 ) {
    console.log ( 'mi dia una peroni sudata ')
}
else if (temp < 0 ) {
    console.log ( 'non e  tanto il tempo ma umidita ')
}
else if ( temp < -10 ) {
    console.log ( ' coprti  fa  ancora  freddo ')
}

let time = -20
switch(true){
    case time<20 : 
    console.log("non ci sono piu le  mezze  stagioni")

    case time >= 30 : 
    console.log("lu mare lu sole lu ientu")

    case time<30 : 
    console.log("mi dia una peroni sudata")

    case time < 0 : 
    console.log("non e  tanto il tempo ma umidita")

    case b <-10 : 
    console.log("coprti  fa  ancora  fredd")
}