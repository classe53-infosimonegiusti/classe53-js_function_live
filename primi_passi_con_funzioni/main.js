/* nel pezzo di programma dove mi serve, richiamo la funzione */

//let arryaDiProva = ritornaPrimiDieciNumeri();
//console.log(arryaDiProva);


console.log(somma(10,10));






/* scrivo la mia funzione */
/* posso scriverla dove voglio, visto che è soggetta a hoisting come le var */
function somma(numero1, numero2) {
    let calcoloDellaSomma = numero1 + numero2;
    return calcoloDellaSomma;
}

/* la funzione sottrazione restituisce la differenza tra il primo ed il secondo argmento*/
function sottrazione(primoValore, secondoValore) {
    let risultato = primoValore - secondoValore;
    return risultato;
}

/* restituisce una stringa con pari o dispari in base al valore passato */
function pariDispari(numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "pari";
    } else {
        ritorno = "dispari";
    }

    return ritorno;

}


/* la funzione ritorna un array con i numeri dallo 0 al 9 */
function ritornaPrimiDieciNumeri() {

    let myarray = [];

    for (i=0; i<10; i++) {
        myarray.push(i);
    }

    return myarray;

}