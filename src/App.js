import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather app</p>
        <div className="container">
          <Weather />
        </div>
      </header>
      <footer>
        <a href="https://github.com/bialoreti/weather-react">
          Open source code
        </a>
        , by Beatriz Loreti
      </footer>
    </div>
  );
}

export default App;
