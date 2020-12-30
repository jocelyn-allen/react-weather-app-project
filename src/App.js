import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
            <Weather defaultCity="Liverpool" />
           <footer>
        This project was coded by Jocelyn Allen and is{" "}
      <a href="https://github.com/jocelyn-allen/react-weather-app-project" target="_blank" rel="noreferrer">open-sourced on GitHub

      </a>
      .
      </footer>
   </div>
   </div>
  );
}


