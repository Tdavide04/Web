import React, { useState } from 'react'

const Calcolatrice = () => {
    let [risultato, setRisultato] = useState(0)
    let [operatore1, setOperatore1] = useState('')
    let [operatore2, setOperatore2] = useState('')
    let [operazione, setOperazione] = useState('')

    let calcola = (e) => {
        e.preventDefault()
        const num1 = parseFloat(operatore1);
        const num2 = parseFloat(operatore2);

        if (isNaN(num1) || isNaN(num2)) {
            setRisultato('Errore: inserisci numeri validi');
            return;
        }

        switch(operazione) {
            case '+':
                let somma = num1 + num2;
                setRisultato(somma);
                break;
            
            case '-':
                let sottrazione = num1 - num2;
                setRisultato(sottrazione);
                break;
            
            case '*':
                let moltiplicazione = num1 * num2;
                setRisultato(moltiplicazione);
                break;

            case '/':
                let divisione = num1 / num2;
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
            <select id="input3" className="form-control" value={operazione} onChange={(e) => setOperazione(e.target.value)}>
                <option value="">Scegli un'operazione</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
                
            <button type="submit" className="btn btn-primary" onClick={calcola}>Calcola</button>
            <h2>Risultato: {risultato}</h2>
        </form>
    </div>
  )
}

export default Calcolatrice