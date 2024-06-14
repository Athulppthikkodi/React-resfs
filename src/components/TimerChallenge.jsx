import { useRef, useState } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarter, setTimerStarter] = useState(false);
  let timer = useRef()
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimerStarter(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 0 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarter ? handleStop : handleStart}>
          {timerStarter ? "stop" : "start"} Challenge
        </button>
      </p>
      <p className={timerStarter ? "active" : undefined}>
        {timerStarter ? "Timer is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
