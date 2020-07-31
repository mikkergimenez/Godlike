import { useIntervalTimer } from "../../hooks/intervalTimer";
import "./style.css";
import { useStore } from "../../hooks/useStore";

import React from "react";

function Stamina() {
  useIntervalTimer(() => {
  });

  const { rootStore } = useStore();

  return <div>Stamina: {rootStore.characterStore.stamina.value} / {rootStore.characterStore.stamina.max}</div>;
}

export default Stamina;
