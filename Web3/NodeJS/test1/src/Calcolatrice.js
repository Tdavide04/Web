import React, { useState } from 'react'

const Calcolatrice = () => {
    let [risultato, setRisultato] = useState(0)
    let [operatore1, setOperatore1] = useState(0)
    let [operatore2, setOperatore2] = useState(0)
    let [operazione, setOperazione] = useState('')

    let calcola = (e) => {
        e.preventDefault()

        switch(operazione) {
            case '+':
                let somma = operatore1 + operatore2;
                setRisultato(somma);
                break;
            
            case '-':
                let sottrazione = operatore1 - operatore2;
                setRisultato(sottrazione);
                break;
            
            case '*':
                let moltiplicazione = operatore1 * operatore2;
                setRisultato(moltiplicazione);
                break;

            case '/':
                let divisione = operatore1 / operatore2;
                setRisultato(divisione);
                break;
        }
    }
    

  return (
    <div>
        <h1>Calcolatrice</h1>
        <form onSubmit={calcola}>
            <input type="number" id="input1" className="form-control" value={operatore1} onChange={(e) => setOperatore1(e.target.value)} />
            <input type="number" id="input2" className="form-control" value={operatore2} onChange={(e) => setOperatore2(e.target.value)} />
            <input type="number" id="input3" className="form-control" value={operazione} onChange={(e) => setOperazione(e.target.value)} />

            <button type="submit" className="btn btn-primary" onClick={calcola}>Calcola</button>
        </form>
    </div>
  )
}

export default Calcolatrice