import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
