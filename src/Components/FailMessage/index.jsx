import { useIntervalTimer } from "../../hooks/intervalTimer";
import "./style.css";
import { useStore } from "../../hooks/useStore";

import React from "react";

function Date() {
  const [seconds] = useIntervalTimer(() => {
  });

  const { rootStore } = useStore();

  if (rootStore.uiStore.showFailMessage) {
    return <div>Failed: {rootStore.uiStore.failMessage}</div>;
  }

return <div></div>
}

export default Date;
