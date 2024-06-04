import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
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
    <form onSubmit={handleSubmit}>
      <input className="Search" type="search" placeholder="type a city..." onChange={updateCity} />
      <input className="Button" type="submit" value="search" />
    </form>
  );
  if (loaded) {
    return (
    <div className="Weather">
        {form}
        <ul>
          <li>Temperature: {Math.round(data.temperature)}ºC</li>
          <li>Wind: {Math.round(data.wind)} km/h</li>
          <li>Humidity: {Math.round(data.humidity)}%</li>
          <li>
            <img src={data.icon} alt="temp-icon" />
          </li>
        </ul>
        </div>
        );

  } else {
    return form;
  }
 
  
}
