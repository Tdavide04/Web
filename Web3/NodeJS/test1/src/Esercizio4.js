import React from 'react'

const Esercizio4 = () => {

    let string = "";
    for(let i=0; i<=20; i+=2){
            string += i + " ";
    }
  return (
    <div>
        <h1>Esercizio4</h1>
        <h2>{string}</h2>
    
  </div>)
}

export default Esercizio4