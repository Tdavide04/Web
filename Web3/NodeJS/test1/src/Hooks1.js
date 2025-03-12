import React, { useState } from 'react'

const Hooks1 = () => {
    // Hooks ... funzioni di react ... useState()
    let saluto = "Ciao";
    let saluto2 = useState("Ciao"); // useState torna due valore all'interno di un Array
    // 1 valore attuale
    // 2 metodo set

    let cambiaValore = () => {
        saluto2[1]("Arrivederci");

    }

  return (
    <div>
        <h1>Hooks useState</h1>
        <h1>{saluto2[0]}</h1>
        <button onClick = { cambiaValore }>CAMBIA</button>
    </div>
  )
}

export default Hooks1