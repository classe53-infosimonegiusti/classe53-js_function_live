function moltiplica(primoValore, secondoValore) {
    let risultato = primoValore * secondoValore;
    return risultato;
}


/* Richiedo l'inseriemnto di un numero, se non è valido, ritorno 0 */
function richiediNumero(messaggio) {
    let ritorno;
    let valore = parseInt(prompt(messaggio));

    if (isNaN(valore)) {
        alert('Numero non valido');
        ritorno = 0;
    } else {
        ritorno = valore;
    }

    return ritorno;
}


//let valore = moltiplica(10, 3);
//const valoreRichiesto = richiediNumero('Inserisci un numero, le strignhe non sono accettate!');
//const secondoNumero = richiediNumero('Di nuovo, per cortesia, rimetti un numero!');
//console.log(valoreRichiesto);


/*
function funzionePerEvento() {
    alert('hai fatto click');
}

let bottone = document.getElementById('cliccami');

bottone.addEventListener('click', function() {
    funzionePerEvento();
});

*/

