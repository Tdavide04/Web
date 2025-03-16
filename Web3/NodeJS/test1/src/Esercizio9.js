import React, { useState } from 'react'
import { list } from './Prodotto';

const Esercizio9 = () => {

    let [prodotto, setProdotto] = useState("")
    let [result, setResult] = useState("Inserisci prodotto");

    let cerca = (e) => {
        e.preventDefault();
        let trovato = list.find((element) => element.nome.toLowerCase() === prodotto);
            setResult(trovato ? "Prodotto trovato" : "Prodotto non trovato");
    }
    
    
  return (
    <div>
        <h1>Esercizio9</h1>
        <form>
            <h2>
                <input type='text' placeholder='Inserisci prodotto' value={prodotto} onChange={(e) => setProdotto(e.target.value)}/>
            </h2>
            <button type="submit" className="btn btn-primary" onClick={cerca}>Cerca</button>
            <h2>{result}</h2>
        </form>
        
    
  </div>)
}

export default Esercizio9