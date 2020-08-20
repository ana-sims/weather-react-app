import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container rounded border border-white shadow">
        <Weather city="" />
        <div className="Footer text-center">
          <div id="signature">
            Open-source code by
            <a
              href="https://github.com/ana-sims/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signature"
            >
              ana-sims
              <FontAwesomeIcon className="git" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
