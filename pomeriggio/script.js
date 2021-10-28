const btn = document.querySelector('.btn');
const sum = document.querySelector('.somma-cifre');
const average = document.querySelector('.media-cifre');

btn.addEventListener('click',
    function() {
        let numb = '';
        let somma = 0;
        do {
            numb = prompt('inserisci un numero di 4 cifre');
        } while (numb.length !== 4)
        
        for (let i = 0; i < numb.length; i++) {
            somma += parseInt(numb[i]);
        }
        sum.innerHTML = somma;

        const media = somma / numb.length;
        average.innerHTML = media;
    }

)
