import React, { useState } from 'react'

const Esercizio10 = () => {

    let [max, setMax] = useState(0);
    let [number, setNumber] = useState(0);
    let [counter, setCounter] = useState(1);
    let [pass, setPass] = useState(true);
    
    let confronto = (e) => {
        e.preventDefault();

        if (pass) {
            if (number > max) {
                setMax(number);
            }
            setCounter(counter + 1);
            if (counter === 10) {
                setPass(false);
            }
        }
        console.log(counter)
        } 
        
return (
    <div>
        <h1>Esercizio10</h1>
        <form>
            <h2>
                <input type='number' placeholder='Inserisci un numero' value={number} onChange={(e) => setNumber(e.target.value)}/>
            </h2>
            <button type="submit" className="btn btn-primary" onClick={confronto}>Confornta</button>
            <h2>{max}</h2>
        </form>
        
    
  </div>)
}

export default Esercizio10