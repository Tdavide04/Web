import React, { useState } from 'react'
import { list } from './Login'

const Esercizio12 = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState(""); 
    let [result, setResult] = useState("");
    let [verifica, setVerifica] = useState(false);
    let [visualizzaCambio, setVisualizzaCambio] = useState(false);
    let [newPassword, setNewPassword] = useState("");

    let login = (e) => {
        e.preventDefault();
        let login = list.find((element) => element.username === username && element.password === password);
        setResult(login ? "Accesso consentito" : "Accesso negato");
        setVerifica(login? true : false);

        let x = document.getElementById("id");
        if (login) {
            x.style.color = "green";
        } else {
            x.style.color = "red";
        }
        
    }

    let cambia = (e) => {
        e.preventDefault();
        setVisualizzaCambio(true)
    }   

    let cambiaPassword = (e) => {
        e.preventDefault();
        console.log(newPassword)
    }


  return (
    <div>
        <h1>Esercizio12</h1>
        <form>
            <h2><input type='text' placeholder='Inserisci username' value={username} onChange={(e) => setUsername(e.target.value)}/></h2>
            <h2><input type='text' placeholder='Inserisci password' value={password} onChange={(e) => setPassword(e.target.value)}/></h2>
            <h3><button onClick={login}>Login</button> <button onClick={cambia}>Cambia password</button></h3>
            <h3 id={"id"}>{result}</h3>
            { verifica && <div style={{display : visualizzaCambio ? "block" : "none"}}>
                <h3><input type='text' placeholder='Inserisci nuova password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/></h3>
                <h3><button onClick={cambiaPassword}>Cambia</button></h3>
                </div>}
        </form>
    </div>
  )
}

export default Esercizio12
