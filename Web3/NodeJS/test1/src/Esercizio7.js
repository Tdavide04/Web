import React from 'react'
import { list } from './Prodotto'


const Esercizio7 = () => {
    let element1 = "il prodotto è: " + list[0].nome + ", "+list[0].descrizione+", "+list[0].prezzo

  return (
    <div>
        <h1>Esercizio7</h1>
        <h2>{element1}</h2>
    </div>
  )
}

export default Esercizio7