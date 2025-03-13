import React from 'react'

const Esercizio6 = () => {

let cambiaColore = (id) => {

    let x = document.getElementById(id);
    x.style.color == "red" ? x.style.color = "black" : x.style.color = "red";
}

  return (
    <div>
        <h1>Esercizio6</h1>
        <div className="row justify-content-center">
            <div className="col-sm-3 mb-3 mb-sm-3">
                <div className="card">
                    <img src="/home/user/VscodeprojectDavide/Web/Web3/NodeJS/test1/public/pic1.jpg" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-3 mb-sm-3">
                <div className="card">
                    <img src="./public/Materiale/Abdul-Thomas_NGC2244-Rosette-Nebula-in-Monoceros_Leeds-UK_2024-mar-11-e1711776517298.jpg" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-3 mb-sm-3">
                <div className="card">
                    <img src="./public/Materiale/Abdul-Thomas_NGC2244-Rosette-Nebula-in-Monoceros_Leeds-UK_2024-mar-11-e1711776517298.jpg" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Esercizio6