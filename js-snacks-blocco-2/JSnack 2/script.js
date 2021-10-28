/*
JSnack 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let numero = parseInt( prompt('Inserisci un numero') );
if ( numero % 2 == 1) {
    numero++;
}
console.log(numero);