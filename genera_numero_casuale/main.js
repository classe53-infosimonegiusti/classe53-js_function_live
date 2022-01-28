
/*  
    la funzione restituisce un numero intero casuale compreso tra il valore minimo
    e quello massimo che ho passato come parametro 
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let primoNumeroRandom = getRandomNumber(5,10);
let secondoNumeroRandom = getRandomNumber(40, 75);
let numeroDelLotto = getRandomNumber(1, 90);

console.log(primoNumeroRandom);
console.log(secondoNumeroRandom);
console.log(numeroDelLotto);

/*

    voglio un numero casuale compreso tra 20 ed 80
    Math.random() mi restituisce un numero casuale compreso tra 0 e 0.99999999999

    calcolo la differenza tra max e min
    ed ottengo 60

    genero un numero casuale compreso tra 0 e 60

    aggiungo al minimo il valore casuale

    Math.random() * (max - min + 1) => math.random mi genera un numero compreso tra 0 e 0.9999999 e lo moltiplico per 61
    quindi ottengo un numero compreso tra 0 e 60,999999999999

    aggiungo il numero minimo, quindi il numero che ottengo è compreso tra 20 e 80,9999999999

    il valore ottenuto lo arrodondo all'intero minore tra 20 e 80,9999999, quindi sarà compreso tra 20 ed 80

*/