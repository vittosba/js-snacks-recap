/*
JSnack 3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const nomi = ['Vittorio', 'Stefano', 'Matteo', 'Alessandro'];
const cognomi = ['Sbardella', 'Pasqualini', 'Cuccaro', 'Giacalone'];
let falsaLista = [];

for (let i = 0; i < 3; i++) {
    const num1 = Math.floor(Math.random() * nomi.length);
    const num2 = Math.floor(Math.random() * cognomi.length);
    falsaLista.push(`${nomi[num1]} ${cognomi[num2]}`);
}

console.log(falsaLista);