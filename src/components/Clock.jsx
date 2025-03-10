import { createSignal, createEffect } from "solid-js";
import { formatSmallTime, formatTime } from "../helpers/formatters";
import "../css/Clock.css";
import Countdown from "./Countdown";

const Clock = () => {
  const [date, setDate] = createSignal(new Date());
  let h = date().getHours();
  let m = formatSmallTime(date().getMinutes());
  let s = formatSmallTime(date().getSeconds());
  const [clock, setClock] = createSignal(formatTime(h, m, s));
  createEffect(() => {
    setInterval(() => {
      setDate(new Date());
      h = date().getHours();
      m = formatSmallTime(date().getMinutes());
      s = formatSmallTime(date().getSeconds());
      setClock(formatTime(h, m, s));
    }, 1000);
  });

  return (
    <div class="clock">
      <div>{clock()}</div>
      <div>{date().toLocaleDateString()}</div>
      <div>{Countdown}</div>
    </div>
  );
};

export default Clock;
