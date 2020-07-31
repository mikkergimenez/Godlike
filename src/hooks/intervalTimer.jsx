import { useState, useEffect } from "react";

function useIntervalTimer(tick) {
  let storedSeconds = parseInt(localStorage.getItem("ticks"), 10);
  if (isNaN(storedSeconds)) {
      storedSeconds = 0;
  }

  const [seconds, setSeconds] = useState(storedSeconds);
  localStorage.setItem("ticks", seconds);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      tick(localStorage.getItem("ticks"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [seconds];
}

export { useIntervalTimer };
