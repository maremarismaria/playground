import React from "react";
import styled from "styled-components";
import { DigitalClock } from "./DigitalClock";
import { KindOfStory } from "../../../types";

export default {
  title: `${KindOfStory.COMPONENT}/Digital Clock`,
  component: DigitalClock
};

const Wrapper = styled.div`
  align-items: center;
  background-color: #161616;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const digitalClock = () => (
  <Wrapper>
    <DigitalClock />
  </Wrapper>
);
