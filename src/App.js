import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container rounded border border-white shadow">
        <Weather />
      </div>
    </div>
  );
}

export default App;
