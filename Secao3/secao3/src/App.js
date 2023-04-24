import './App.css';
import Pato2 from './assets/pato2.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/pato1.jpg" alt="Pato" />
      </div>
      {/* Imagem em public*/}
      <div>
        <img src={Pato2} alt="Pato" />
      </div>
      <div>
      <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
    </div>
  );
}

export default App;
