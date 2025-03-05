class Rubrica {
    constructor() {
        this.lista = [];
    }
}

class Utente {
    constructor(nome, cognome, indirizzo = new Indirizzo()) {
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
    }
}

class Indirizzo {
    constructor(citta, cap, via, civico) {
        this.citta = citta;
        this.cap = cap;
        this.via = via;
        this.civico = civico;
    }
}

function CreaUtente() {
    newNome = prompt("inserisci il nome");
    newCognome = prompt("inserisci il cognome");
    
        newIndirizzo = new Indirizzo(
            citta = prompt("inserisci la citta"),
            cap = prompt("inserisci il cap"),
            via = prompt("inserisci la via"),
            civico = prompt("inserisci il civico"),
        );
        newUtente = new Utente(newNome, newCognome, newIndirizzo);
        rubrica.lista.push(newUtente);
        console.log(newUtente);
}

function VisualizzaRubrica() {
    console.log(rubrica.lista);
}

let indirizzo = new Indirizzo("Ladispoli", "00055", "Via dei Fiori", "5");

let utente = new Utente("Mario", "Rossi", indirizzo);

let rubrica = new Rubrica();
rubrica.lista.push(utente);

console.log(rubrica.lista); 
