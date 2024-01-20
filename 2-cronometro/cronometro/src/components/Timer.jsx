import { useState, useEffect } from "react";
import TimerControls from "./TimerControls";
import LapList from "./LapList";
import TimerDisplay from "./TimerDisplay";
import "./Timer.css";

const Timer = () => {
  const [miliseconds, setMiliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + (Math.floor(miliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(miliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(miliseconds / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const startTimer = () => {
    return setInterval(() => {
      setMiliseconds((prevMiliseconds) => prevMiliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMiliseconds(0)
    setTimerOn(false)
    setLaps([])
  }

  const addLap = () => {
    setLaps([...laps, formatTime()])
  }
  
  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }
    return () => stopTimer(interval);
  }, [timerOn]);

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={() => resetTimer()}
        onLap={() => addLap()}
      />
      <LapList laps={laps}/>
    </div>
  );
};

export default Timer;
