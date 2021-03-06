import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import WeatherForecast from "./WeatherForecast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    let apiKey = "e09b992b2268118729ef48d240afa69c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "e09b992b2268118729ef48d240afa69c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleGeoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weather.ready) {
    return (
      <div>
        <div className="row row-top">
          <div className="col-4 float-left">
            <ul>
              <li className="city-name text-capitalize text-left">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-geo-alt text-geo"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>{" "}
                {weather.city}
              </li>
              <li className="date-info">
                <FormatDate date={weather.date} />
              </li>
              <li className="time-info">
                <FormatTime date={weather.date} />
              </li>
            </ul>
          </div>
          <div className="col-8 float-right">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7">
                  <input
                    type="search"
                    placeholder="Search for a city"
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2 float-left">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-outline-light shadow-lg button-search"
                  />
                </div>
                <div className="col-1 align-right">
                  <input
                    type="submit"
                    className="btn shadow-lg btn-outline-dark button-find"
                    value="Find Me"
                    onClick={handleGeoLocation}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row-middle">
          <WeatherInfo data={weather} />
        </div>
        <div className="row-bottom">
          <WeatherForecast city={weather.city} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return (
      <div className="row">
        <div className="col-12 text-center loader-text">
          <Loader type="Puff" color="#5fdde5" height={80} width={80} />
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }
}
