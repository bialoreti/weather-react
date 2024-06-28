import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() =>{
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {

     return (
       <div className="WeatherForecast">
         <div className="row">
           <div className="col">
             <WeatherForecastDay data={forecast[0]} />
           </div>
           <div className="col">
             <WeatherForecastDay data={forecast[1]} />
           </div>
           <div className="col">
             <WeatherForecastDay data={forecast[2]} />
           </div>
           <div className="col">
             <WeatherForecastDay data={forecast[3]} />
           </div>
           <div className="col">
             <WeatherForecastDay data={forecast[4]} />
           </div>
         </div>
       </div>
     );

  } else { 
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return null;
  }
}
