import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-3 text-right">
          <img
            src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={props.data.description}
            className="weather-icon"
          />
        </div>
        <div className="col-2 temp-display">
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-4">
          <ul className="info-text">
            <li className="text-capitalize">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              {props.data.description}
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Humidity: {props.data.humidity}%
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row">Forecast</div>
    </div>
  );
}
