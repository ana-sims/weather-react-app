import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container rounded border border-white shadow">
        <Weather city="" />
        <div className="Footer">
          <div id="signature">
            Open-source code by{" "}
            <a
              href="https://github.com/ana-sims/weather-react-app"
              target="_blank"
              className="text-signature"
            >
              ana-sims
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-code-slash code"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
