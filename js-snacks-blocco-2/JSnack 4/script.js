/*
JSnack 4
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numInt = [1, 4, 6, 3, 2, 5, 7, 8, 9, 0, 10];
let somma = 0;

for (let i = 0; i < numInt.length; i++) {
    if( i % 2 == 0) {
        somma += numInt[i]
    }
}

console.log(somma);