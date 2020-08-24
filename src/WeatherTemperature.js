import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |
          <a href="/" rel="noopener noreferrer" onClick={convertToFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit">
          °F |
          <a href="/" rel="noopener noreferrer" onClick={convertToCelsius}>
            ˚C
          </a>
        </span>
      </div>
    );
  }
}
