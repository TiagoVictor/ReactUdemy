import './App.css';
import MyForm from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Tiago", email:"tiago@gmail.com" }}/>
      <hr></hr>
      <MyForm />
    </div>
  );
}

export default App;
