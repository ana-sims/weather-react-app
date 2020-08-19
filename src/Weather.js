import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Lisbon</li>
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
              <input type="Submit" value="Search" className="btn btn-info" />
              <input
                type="Submit"
                className="btn btn-info text-white shadow-lg"
                value="My Location"
                id="btn-link"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-4">Image</div>
        <div className="col-4">
          <ul>
            <li>Lisbon</li>
            <li>28°C</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="text-muted">
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
