class Prodotto {
    constructor(id, nome, descrizione, prezzo) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
    }
}
let scatola = new Prodotto(1, "Scatola", "è una scatola", 12.00);
let bottiglia = new Prodotto(2, "Bottiglia", "è una bottiglia", 15.00);
let cassetta = new Prodotto(3, "Cassetta", "è una cassetta", 18.00);

export let list = [
    scatola, bottiglia, cassetta
]