import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ul>
            <li className="city-name">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-geo-alt text-geo"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>{" "}
              Lisbon
            </li>
            <li className="date-info">
              {" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-calendar4-event text-calendar"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14 2H2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                />
                <rect width="2" height="2" x="11" y="7" rx=".5" />
              </svg>{" "}
              22 August 2020
            </li>
            <li className="time-info">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-clock text-clock"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>{" "}
              12:00
            </li>
          </ul>
        </div>
        <form className="col-8 form-group">
          <div className="row">
            <div className="col-4">
              <input
                type="Search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="Submit"
                value="Search"
                className="btn btn-outline-light shadow-lg"
              />
              <input
                type="Submit"
                className="btn shadow-lg btn-outline-dark button-find"
                value="Find Me"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-3">Image</div>
        <div className="col-2 temp-display">
          <span className="temperature">28</span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-4">
          <ul className="info-text">
            <li>
              {" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Description
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Humidity
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right text-chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Wind
            </li>
          </ul>
        </div>
      </div>
      <div className="row">Forecast</div>
    </div>
  );
}
