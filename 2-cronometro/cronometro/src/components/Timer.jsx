import React from "react";
import TimerControls from "./TimerControls";
import LapList from "./LapList";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerControls />
      <LapList />
    </div>
  );
};

export default Timer;
