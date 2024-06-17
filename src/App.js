import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid shadow-sm">
        <header>
          <Weather defaultCity />
        </header>
      </div>
      <div className="container-fluid shadow-sm">
      </div>
      <footer>
        <a href="https://github.com/bialoreti/weather-react">
          Open source code
        </a>
        , by Beatriz Loreti
      </footer>
    </div>
  );
}


