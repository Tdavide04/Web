import React, { useState } from 'react'

const Esercizio8 = () => {
    let [eta, setEta] = useState(0)
    let [annoNascita, setAnnoNascita] = useState(0)

    let calcola = (e) => {
        e.preventDefault();
        let anno = 2025
        if (annoNascita > anno) {
            alert("Inserisci un anno di nascita valido");
        } else {
        anno-= annoNascita;
        setEta(anno)}
    }

  return (
    <div>
        <h1>Esercizio8</h1>
        <h2>Età: {eta}</h2>
        <form onSubmit={calcola}>
            <label for="inputYear" className="form-label"> <h3>Inserisci anno di nascita</h3></label>
            <input type="number" id="inputYear" className="form-control" value={annoNascita} onChange={(e) => setAnnoNascita(e.target.value)} />
            <div id="Year" className="form-number"></div>
            <button type="submit" className="btn btn-primary" onClick={calcola}>Calcola</button>
        </form>
        
    </div>
  )
}

export default Esercizio8