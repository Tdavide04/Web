import React, { useState } from 'react'
import { list } from './Login'

const Esercizio12 = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState(""); 
    let [result, setResult] = useState("");

    let login = (e) => {
        e.preventDefault();
        let login = list.find((element) => element.username === username && element.password === password);
        setResult(login ? "Accesso consentito" : "Accesso negato");

        let x = document.getElementById("id");
        if (login) {
            x.style.color = "green";
        } else {
            x.style.color = "red";
        }
        
    }



  return (
    <div>
        <h1>Esercizio12</h1>
        <form>
            <h2><input type='text' placeholder='Inserisci username' value={username} onChange={(e) => setUsername(e.target.value)}/></h2>
            <h2><input type='text' placeholder='Inserisci password' value={password} onChange={(e) => setPassword(e.target.value)}/></h2>
            <h3><button onClick={login}>Login</button></h3>
            <h3 id={"id"}>{result}</h3>
        </form>
    </div>
  )
}

export default Esercizio12