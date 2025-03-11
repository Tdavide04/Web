import React from 'react'

const Esercizio3 = () => {

    let string = "";
    for(let i=5; i<=15; i++){
            string += i + " ";
    }
  return (
    <div>
        <h1>Esercizio3</h1>
        <h2>{string}</h2>
    
  </div>)
}

export default Esercizio3