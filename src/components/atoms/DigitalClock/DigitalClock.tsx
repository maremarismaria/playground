import React from "react";
import { useTime } from "./DigitalClock.hooks";
import { StyledDigitalClock } from "./DigitalClock.styled";

export const DigitalClock = () => {
  const time = useTime();

  const hoursAndMinutes = time.format("HH:mm");
  const seconds = time.format("ss");
  const date = time.format("LL");

  return (
    <StyledDigitalClock>
      <div className={"time"}>
        <div className={"seconds"}>{seconds}</div>
        <div className={"hours-minutes"}>{hoursAndMinutes}</div>
      </div>
      <div className={"date"}>{date}</div>
    </StyledDigitalClock>
  );
};

export default DigitalClock;
