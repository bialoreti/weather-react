import axios from "axios";
import React from "react";

export default function Weather() {
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;
     axios.get(url).then(displayWeather);
}