import { useIntervalTimer } from "../../hooks/intervalTimer";
import "./style.css";
import DateCalc from './dateCalc';

import React from "react";

function DateComponent() {
  const [seconds] = useIntervalTimer(() => {
  });

  let dateCalc = new DateCalc(seconds);

  let ampm = dateCalc.ampm;
  let hour = dateCalc.hour;
  let day = dateCalc.day;
  let month = dateCalc.month;
  let year = dateCalc.year;

  return <div className="Date">{month.toString().padStart(2, '0')}/{day.toString().padStart(2, '0')}/{year.toString().padStart(4, '0')} {hour}:00 {ampm}</div>;
}

export default DateComponent;
