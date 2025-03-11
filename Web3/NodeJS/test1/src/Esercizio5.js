import React from 'react'

const Esercizio5 = () => {

    let string = "";
    for(let i=0; i<=40; i+=4){
            string += i + " ";
    }
  return (
    <div>
        <h1>Esercizio5</h1>
        <h2>{string}</h2>
    
  </div>)
}

export default Esercizio5