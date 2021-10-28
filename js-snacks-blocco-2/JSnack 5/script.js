/*
JSnack 5
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

let array1 = [1, 2, 5, 6, 8, 2, 4, 5];
let array2 = [4, 6, 8, 3];

while (array1.length !== array2.length) {
    if (array1.length > array2.length) {
        const num = Math.floor(Math.random() * 10);
        array2.push(num);
    }
    else if (array2.length > array1.length) {
        const num = Math.floor(Math.random() * 10);
        array1.push(num);
    }
}

console.log(`${array1} -- e -- ${array2} ora hanno la stessa lunghezza`);