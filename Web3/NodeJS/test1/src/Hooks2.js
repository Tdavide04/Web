import React, {useState} from 'react'

const Hooks2 = () => {
    let [anagrafiche, setAnagrafiche]= useState([
        {nome : "Mario"},
        {nome : "Luca"},
        {nome : "Giovanni"}
    ]);

    let eliminaElemento = (nome) => {
        let nuoviNomi = anagrafiche.filter(x => x.nome !== nome);
        setAnagrafiche(nuoviNomi);
    }


  return (
    <div>
        <h1>Hooks2</h1>
        {
            anagrafiche.map((el, i) => 
                <h3 
                    key = {i}>{el.nome} 
                        <button onClick={() => eliminaElemento(el.nome)}>Elimina</button> 
                </h3>)
        }
    </div>
  )
}

export default Hooks2