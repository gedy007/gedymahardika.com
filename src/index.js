import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          My Blog
          <br />
          Will Coming Soon
        </h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
