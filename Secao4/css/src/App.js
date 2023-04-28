import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Tiago");
  const redTitle = false;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <div>
        <MyComponent />
      </div>
      <p>Este paragrafo é do App.js</p>
      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red", backgroundColor:"green"}} >Este elemento é tratado com css inline</p>
      <h2 style={n > 10 ? ({color:"gray"}) : ({color:"pink"})}>Css dinâmico</h2>

      <h2 style={name === "Tiago" ? ({color:"yellow"}) : null}>Css dinâmico</h2>

      <h2 className={redTitle ? "redTitle" : "title"}>Classe dinâmica</h2>

      <Title />
    </div>
  );
}

export default App;
