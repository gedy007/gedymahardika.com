import React from "react";
import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";

import "../styles.css";

export default function Home() {
  return (
    <div className="Home">
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