import logo from './logo.svg';
import './App.css';
import Esercizio1 from './Esercizio1';
import Esercizio2 from './Esercizio2';
import Esercizio3 from './Esercizio3';
import Esercizio4 from './Esercizio4';
import Esercizio5 from './Esercizio5';

let App = () => {
  return (
    <div className="App">
      <Esercizio1 tabellina = {5} />
      <Esercizio2 />
      <Esercizio3 />
      <Esercizio4 />
      <Esercizio5 />
    </div>
  );
}

export default App;
