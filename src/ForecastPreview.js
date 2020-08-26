import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let time = new Date(props.data.dt * 1000).getHours();
    return `${time}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}`;
  }

  return (
    <div className="col text-center">
      <div className="date">{hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="temp">{temperature()} °C</div>
    </div>
  );
}
