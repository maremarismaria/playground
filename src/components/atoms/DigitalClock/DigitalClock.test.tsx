import React from "react";
import { render } from "@testing-library/react";
import { DigitalClock } from "./DigitalClock";

test("renders digital clock", () => {
  const { getByText } = render(<DigitalClock />);
  const hoursMinutes = getByText(/\d{1,2}:\d{1,2}/);
  expect(hoursMinutes).toBeInTheDocument();
});
