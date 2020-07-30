import { useIntervalTimer } from "../../hooks/intervalTimer";
import "./style.css";

import React, { useState, useEffect } from "react";

function Date() {
  const [seconds] = useIntervalTimer(() => {
      console.log("Ticking Date");
  });

  let twenty_four_hour = seconds % 24;
  let hour;
  let ampm;

  if (twenty_four_hour < 12) {
      hour = twenty_four_hour + 1;
      ampm = "am";
  } else {
      hour = twenty_four_hour - 11;
      ampm = "pm";
  }

  let day = (seconds - twenty_four_hour) % 30 + 1;
  let month = ((seconds - twenty_four_hour) - ((day - 1) * 24) % 12) + 1;
  let year = ((seconds - twenty_four_hour) - ((day - 1) * 24) % 365);


  return <div className="Date">{month.toString().padStart(2, '0')}/{day.toString().padStart(2, '0')}/{year.toString().padStart(4, '0')} {hour}:00 {ampm}</div>;
}

export default Date;
