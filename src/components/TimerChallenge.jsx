import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarter, setTimerStarter] = useState(false);
  const timer = useRef();
    const dialog = useRef()
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarter(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
    <ResultModel ref={dialog} targetTime={targetTime} result='lost' />

      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
}
