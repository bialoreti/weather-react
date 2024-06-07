import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
}