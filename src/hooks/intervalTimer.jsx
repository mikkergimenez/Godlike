import React, { useState, useEffect } from "react";

function useIntervalTimer(tick) {
  let storedSeconds = parseInt(localStorage.getItem("ticks"), 10);
  console.log(storedSeconds);
  if (storedSeconds == NaN || storedSeconds == "NaN" || isNaN(storedSeconds)) {
      storedSeconds = 0;
  }

  const [seconds, setSeconds] = useState(storedSeconds);
  localStorage.setItem("ticks", seconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [seconds];
}

export { useIntervalTimer };
