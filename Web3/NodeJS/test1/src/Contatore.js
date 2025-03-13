import React, { useEffect, useState } from 'react'

const Contatore = () => {
    let [contatore, setContatore] = useState(0);

    useEffect( () => {
      console.log("sono all'interno della funzione useEffect");
      if(contatore > 0) {
        document.title = "Positivo"
      } else if (contatore < 0) {
        document.title = "Negativo";
        } else {
          document.title = "Neutro";
          }
    })

    let aumenta = () => {
      setTimeout( () => { // asincrona
        setContatore(contatore + 1)
      }, 2000)
    }

    let diminuisci = () => {
      setTimeout( () => { // asincrona
        setContatore(contatore - 1)
      }, 2000)
    }

  return (
    <div>
        <h1>Contatore</h1>
        <h2>Il contatore è: {contatore}</h2>
        <button onClick={aumenta}>Aumenta</button> <button onClick={diminuisci}>Diminuisci</button>
    </div>
  )
}

export default Contatore