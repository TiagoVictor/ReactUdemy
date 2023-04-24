import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import EventsT from './components/EventsT';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <EventsT />
      <Challenge />
    </div>
  );
}

export default App; 
