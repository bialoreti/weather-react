import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Weather app
        </p>
          <Weather />
      </header>
      <p>
        <a href="https://github.com/bialoreti/weather-react">Open-source code</a>, by Beatriz loreti
        </p>
    </div>
  );
}

export default App;
