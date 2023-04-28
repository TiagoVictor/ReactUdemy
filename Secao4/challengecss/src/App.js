import './App.css';
import Cars from './components/Cars';

const cars = [
  {marca:"Tesla", modelo:"Model X", km:1000, preco:"R$ 1.000.000,00", cor:"Prata"},
  {marca:"Ferrari", modelo:"F-40", km:12000, preco:"R$ 1.200.000,00", cor:"Vermelha"},
  {marca:"Porsche", modelo:"911", km:8000, preco:"R$ 1.450.000,00", cor:"Amarela"},
  {marca:"Lamborghini", modelo:"Murcielago", km:9000, preco:"R$ 2.000.000,00", cor:"Verde"},
  {marca:"McLaren", modelo:"Senna", km:7000, preco:"R$ 1.050.000,00", cor:"Branca"},
  {marca:"Bugatti", modelo:"Chiron", km:4000, preco:"R$ 3.240.000,00", cor:"Azul"},
  {marca:"Pagani", modelo:"Huayra", km:2000, preco:"R$ 4.000.000,00", cor:"Cinza"},
]

function App() {
  return (
    <div className="App">
      <h1>Carros</h1>
      {
        cars.map((car) => (
          <Cars marca={car.marca} modelo={car.modelo} km={car.km} preco={car.preco} cor={car.cor} />
        ))
      }
    </div>
  );
}

export default App;
