import React from 'react'

const Esercizio2 = () => {

    let string = "";
    for(let i=0; i<=10; i++){
            string += i + " ";
    }
  return (
    <div>
        <h1>Esercizio2</h1>
        <h2>{string}</h2>
    
  </div>)
}

export default Esercizio2