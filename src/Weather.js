import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ready: false});
  
  

  function displayWeather(response) { 

    setData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
    });

  }
  

  function handleSubmit(event) {
    event.preventDefault();
    search();
    }

    function updateCity(event) {
      setCity(event.target.value);
    }

    function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;
    axios.get(url).then(displayWeather);  
  }

  


  let form = (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="type a city..."
              className="form-control"
              autoComplete="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
  
  if (data.ready) {
    return (
      <div className="Weather">
        {form}
        <h1>{data.city}</h1>
        <div className="weather-data">
          <WeatherIcon code={data.icon} />
          <h2>
            <WeatherTemperature celsius={data.temperature} />
          </h2>
        </div>
        <ul>
          <li>
            <FormatDate date={data.date} />
          </li>
          <li className="text-capitalize">{data.description}</li>
        </ul>
        <div className="row">
          <div className="col">
            <ul className="weather-details">
              <li>Visibility: {Math.round(data.visibility)} m</li>
              <li>Wind: {Math.round(data.wind)} km/h</li>
              <li>Humidity: {Math.round(data.humidity)}%</li>
            </ul>
          </div>
        </div>
        <div>
          <Forecast coordinates={data.coordinates} />
        </div>
      </div>
    );

  } else {
    search();
    return form;
  }
 
  
}
