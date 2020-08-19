import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <ul>
            <li className="city-name">Lisbon</li>
            <li className="text-muted">22 August 2020</li>
            <li className="text-muted">12:00</li>
          </ul>
        </div>
        <form className="col-8 form-group">
          <div className="row">
            <div className="col-5">
              <input
                type="Search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-7">
              <input
                type="Submit"
                value="Search"
                className="btn text-white shadow-lg search-button"
              />
              <input
                type="Submit"
                className="btn text-white shadow-lg button-find"
                value="Find Me"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-4">Image</div>
        <div className="col-4 temp-display">
          <span className="temperature">28</span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Description</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
      <div className="row">Forecast</div>
      <div className="row">Footer</div>
    </div>
  );
}
