/*
JSnack 4
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/
const odd = [];

for (i = 0; i < 6; i++) {
    const numero = parseInt( prompt('Inserisci un numero:') );
    if (numero % 2 == 1) {
        odd.push(numero);
    }
}

console.log(odd);