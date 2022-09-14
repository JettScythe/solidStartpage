import { createSignal, createEffect } from "solid-js";
import { makeClock } from "../helpers/formatters";



const Countdown = () => {
  let date = new Date();
  const endDate = new Date('2022-11-07 14:00:00');
  let diffInSeconds = Math.round((endDate.getTime() - date.getTime()) / 1000);
  const [timer, setTimer] = createSignal(makeClock(diffInSeconds));
  createEffect(() => {
    setInterval(() => {
      date = new Date();
      diffInSeconds = Math.round((endDate.getTime() - date.getTime()) / 1000);
      setTimer(makeClock(diffInSeconds))
    }, 1000);
  });

  return (
    <div>
      <div>{timer()}</div>
    </div>
  );
};

export default Countdown;
