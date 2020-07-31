import "./App.css";

import React from "react";

import Paper from "@material-ui/core/Paper";

import Date from "./Components/Date";
import Schedule from "./Components/Schedule";
import Stamina from "./Components/Stamina";
import Wood from "./Components/Wood";

function App() {
  return (
    <div className="container">
      <Paper>
        <Date />
        <Stamina />
        <Wood />
      </Paper>
      <Paper>
        <Schedule />
      </Paper>
    </div>
  );
}

export default App;
