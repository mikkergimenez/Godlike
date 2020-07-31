import { useIntervalTimer } from "../../hooks/intervalTimer";
import "./style.css";
import { useStore } from "../../hooks/useStore";

import React from "react";

function Date() {
  const [seconds] = useIntervalTimer(() => {
  });

  const { rootStore } = useStore();

  return <div>Wood: {rootStore.characterStore.wood.value}</div>;
}

export default Date;
