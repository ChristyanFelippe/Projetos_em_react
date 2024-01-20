import React from "react";

const TimerControls = ({timerOn, onStart, onStop, onReset, onLap}) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button className="timer-controls-btn" onClick={onStart}>Iniciar</button>}
      {timerOn && <button className="timer-controls-btn" onClick={onStop}>Pausar</button>}
      {timerOn && <button className="timer-controls-btn" onClick={onLap}>Volta</button>}
      <button className="timer-controls-btn" onClick={onReset}>Zerar</button>
    </div>
  );
};

export default TimerControls;
