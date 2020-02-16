import { useEffect, useState } from "react";
import moment, { Moment } from "moment";

const runInterval = (cb: Function) => {
  let interval: number = setInterval(cb, 1000);

  return () => {
    clearInterval(interval);
  };
};

export const useTime: () => Moment = () => {
  const [time, setTime] = useState<Moment>(moment());
  const timeUpdater = () => setTime(moment());

  useEffect(() => {
    runInterval(timeUpdater);
  }, []);

  return time;
};

export default useTime;
