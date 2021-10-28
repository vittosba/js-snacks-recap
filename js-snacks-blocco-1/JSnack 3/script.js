/*
JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited) 
 */
let somma = 0;

 for (let i = 0; i < 5; i++) {
     const numero = parseInt( prompt('inserisci un numero') );
    somma += numero;
 }

 console.log(somma);