import React, { useState } from 'react'

const Hooks3 = () => {
    let [persona, setPersona] = useState({
        nome : "Mario",
        cognome : "Rossi",
        eta : 30
    })

    let compleanno = () => {
        let anniAttuali = persona.eta +1;
        setPersona(
            {...persona,
            eta : anniAttuali
    })
    }
  return (
    <div>
        <h1>Hooks3</h1>
        <h2>{persona.nome} {persona.cognome} {persona.eta}</h2> 
        <button onClick={ compleanno }>COMPLEANNO</button>
    </div>
  )
}

export default Hooks3