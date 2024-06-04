import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <body>
      <div className="container-fluid">
      <header className="App-header">
          <Weather />
      </header>
      <footer>
        <a href="https://github.com/bialoreti/weather-react">
          Open source code
        </a>
          by Beatriz Loreti
      </footer>
      </div>
    </body>
  );
}

export default App;
