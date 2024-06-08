import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ready: false});
  const [loaded, setLoaded] = useState(false);
  

  function displayWeather(response) {
    setLoaded(true);
    setData({
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;
    axios.get(url).then(displayWeather);
    
  }

  function updateCity(event) {
    setCity(event.target.value);
    
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
              autoFocus="on"
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
  if (loaded) {
    return (
      
      <div className="Weather">
        {form}
        <h1>{data.city}</h1>
        <div className="weather-data">
          <img src={data.icon} alt="temp-icon" />
          <h2>
            <strong className="temperature">
              {Math.round(data.temperature)}
            </strong>
            <strong className="unit">ºC</strong>
          </h2>
        </div>
        <ul>
          <li><FormatDate date={data.date} /></li>
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
      </div>
    );

  } else {
    return form;
  }
 
  
}
