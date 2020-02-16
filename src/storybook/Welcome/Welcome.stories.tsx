import React from "react";
import { Welcome } from "./Welcome";
import { KindOfStory } from "../../types";

export default {
  title: KindOfStory.WELCOME,
  component: Welcome
};

export const welcome = () => <Welcome />;
