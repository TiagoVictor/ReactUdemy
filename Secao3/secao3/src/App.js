import { useState } from 'react';
import './App.css';
import Pato2 from './assets/pato2.jpg'
import ConditionalRender from './components/CondidionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
  //const name = "Tiago Victor";
  const [userName] = useState("Tiago Victor de Oliveira");
  const cars = [
    {id:1, brand:"Ferrari", km: 0, color:"Branca", newCar:true},
    {id:2, brand:"Ford", km: 10000, color:"Vermelha", newCar:false},
    {id:3, brand:"Porsche", km: 2000, color:"Amarela", newCar:false},
  ]

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
      <div>
        <ConditionalRender />
      </div>
      {/* props */}
      <div>
        <ShowUserName name={userName} />
      </div>
      {/* desc */}
      <div>
        <CarDetails brand="GM" km={200000} color="Cinza" newCar={false} />
        <CarDetails brand="Ford" km={0} color="Cinza" newCar={true}/>
        <CarDetails brand="Bmw" km={20000} color="Cinza" newCar={false}/>
        <CarDetails brand="VW" km={40000} color="Cinza" newCar={false}/>
        <CarDetails brand="Audi" km={100000} color="Cinza" newCar={false}/>
        <CarDetails brand="Kia" km={0} color="Cinza" newCar={true}/>
      </div>
      {/* list */}
      <div>
        {
          cars.map((car) => (
            <CarDetails id={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
          ))
        }
      </div>
      {/* fragment */}
      <Fragment />
    </div>
  );
}

export default App;
