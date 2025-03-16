import React, { useState } from "react";
import { list } from "./Prodotto";

const Esercizio11 = () => {
  let [listaProdotti, setListaProdotti] = useState(list);
  console.log(listaProdotti);

  let eliminaElemento = (nomeProdotto) => {
    let nuovaLista = listaProdotti.filter((el) => el.nome !== nomeProdotto);
    setListaProdotti(nuovaLista);
  };

  return (
    <div>
      <h1>Esercizio11</h1>
      {listaProdotti.length > 0 ? (
        listaProdotti.map((el, i) => (
          <h3 key={i}>
                {el.nome}
            <button onClick={() => eliminaElemento(el.nome)}>Elimina</button>
          </h3>
        ))
      ) : (
        <h3>Lista vuota</h3>
      )}
    </div>
  )
}

export default Esercizio11;
