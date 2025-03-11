import React from 'react'

const Esercizio1 = (props) => {
    let numero = props.tabellina;
    let risultato = [];

    for (let i = 1; i <= 10; i++) {
        let stampa = numero + " * "+i+" = "+numero*i
        risultato.push(stampa);
    }


  return (
    <div>
        <h1>Esercizio1</h1>
        {
            risultato.map( (el) => {
                return <h2>{el}</h2>
            } )
        }
    </div>
  )
}

export default Esercizio1