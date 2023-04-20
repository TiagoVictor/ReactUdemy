import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
    </div>
  );
}

export default App;
