import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Timer");
    const timerId = setTimeout(onTimeout, timeout);

    return () => {
        clearTimeout(timerId);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Interval");

    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
