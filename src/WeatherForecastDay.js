import React from "react";

export default function WeatherForecastDay(props) {
return (
  <div>
    <div className="forecast-day">{props.data.dt}</div>
    <div className="forecast-icon">{forecast[0].weather[0].icon}</div>
    <div className="forecast-temperature">
      <span className="forecast-temperature-max">{forecast[0].temp.max}º</span>
      <span className="forecast-temperature-min">{forecast[0].temp.min}º</span>
    </div>
  </div>
);
}