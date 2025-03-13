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
                    <img src="Materiale/pic1.jpg" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text1' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text1")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-3 mb-sm-3">
                <div className="card">
                    <img src="Materiale/pic2.jpg" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text2' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text2")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-3 mb-sm-3">
                <div className="card">
                    <img src="Materiale/pic3.png" alt="Rosette Nebula" /> 
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p id='text3' className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={() => {cambiaColore("text3")}}>Cambia colore</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Esercizio6