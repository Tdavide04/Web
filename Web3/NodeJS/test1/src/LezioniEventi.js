import React from 'react'

const LezioneEventi = () => {
    let visualizza =(x) => {
        alert("ciao"+' '+ x);
    }

  return (
    <div>LezioneEventi
            <button onClick={visualizza()}>Salutami</button>
            <button onClick={visualizza}>Salutami</button>
            <button onClick={()=>{visualizza('addio')}}>Salutami</button>
                



    </div>
  )
}

export default LezioneEventi
