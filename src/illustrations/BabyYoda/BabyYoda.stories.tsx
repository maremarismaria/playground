import React from "react";
import styled from "styled-components";
import { withKnobs, number, boolean, color } from "@storybook/addon-knobs";
import { BabyYoda } from "./BabyYoda";
import { KindOfStory } from "../../types";

export default {
  title: `${KindOfStory.ILLUSTRATION}/Baby Yoda`,
  component: BabyYoda,
  decorators: [withKnobs],
  parameters: {
    notes: "Original illustration by Danc3r"
  }
};

export const babyYoda = () => {
  const unit = number("Unit (px)", 8, {
    range: true,
    min: 1,
    max: 20,
    step: 1
  });

  const bgColor = color("Background color", "rebeccapurple");
  const shadow = boolean("Shadow", true);
  const shadowColor = color("Shadow color", "indigo");

  const Wrapper = styled.div`
    background-color: ${bgColor};
    height: 100vh;
  `;

  return (
    <Wrapper>
      <BabyYoda unit={`${unit}px`} shadow={shadow} shadowColor={shadowColor} />
    </Wrapper>
  );
};
