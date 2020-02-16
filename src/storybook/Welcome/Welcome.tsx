import React from "react";
import { Code } from "styled-icons/typicons";
import { StyledWelcome } from "./Welcome.styled";
import {
  MariaMorales,
  Repo,
  CRA,
  TypeScript,
  Storybook
} from "./Welcome.links";

export const Welcome = () => (
  <StyledWelcome>
    <div className={"header"}>
      <h1>Welcome</h1>
      <hr />
    </div>
    <div className={"body"}>
      <p>
        Hi there! My name is <MariaMorales /> and I'm Front-End Developer. This
        is my playground project, my place for learning, practicing, and sharing
        my React components; but also for playing with libraries, and expose
        some pieces of creative code (HTML & CSS purely). Due to the purpose of
        this project, I recomend you to use Google Chrome, mostly because I like
        to experiment with CSS.
      </p>
      <p>
        This <Repo /> was built with <CRA /> + <TypeScript /> + <Storybook />.
        The last one is an open source tool for developing UI components in
        isolation. For now, the project uses some official addons, like knobs
        for enabling the interactions with the component inputs dinamically; or
        actions, for getting feedback when an action is performed. You can see
        them in the rigth side menu, exploring the stories of the components and
        some illustrations.
      </p>
      <p>Thanks for your visit.</p>
    </div>
    <div className={"footer"}>
      <Code />
    </div>
  </StyledWelcome>
);

export default Welcome;
