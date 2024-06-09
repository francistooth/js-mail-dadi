// creo il numero per il giocatore e lo printo in console

let giocatore = Math.floor(Math.random() * 6) + 1;

console.log(`numero giocatore: ${giocatore}`);

// creo il numero per il computer e lo printo in console

let cpu = Math.floor(Math.random() * 6) + 1;

console.log(`numero giocatore: ${cpu}`);

// eseguo un controllo maggiore minore sui due numeri

if (giocatore > cpu){
    console.log(`giocatore vince con un punteggio di ${giocatore} contro un punteggio di ${cpu} del computer`);
} else if (giocatore < cpu){
    console.log(`computer vince con un punteggio di ${cpu} contro un punteggio di ${giocatore} del giocatore`);
} else {
    console.log(`Pareggio! ${giocatore} - ${cpu}`)
}