import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid shadow-sm">
        <header className="App-header">
          <Weather defaultCity="Lisboa" />
        </header>
        <footer>
          <a href="https://github.com/bialoreti/weather-react">
            Open source code
          </a>
          , by Beatriz Loreti
        </footer>
      </div>
    </div>
  );
}

export default App;
