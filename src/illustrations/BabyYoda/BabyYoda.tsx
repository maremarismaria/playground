import React, { FC } from "react";
import { StyledBabyYoda } from "./BabyYoda.styled";

export interface Props {
  unit?: string;
  shadow?: boolean;
  shadowColor?: string;
}

export const BabyYoda: FC<Props> = ({
  unit = "8px",
  shadow = false,
  shadowColor = "indigo"
}) => (
  <StyledBabyYoda unit={unit} shadowColor={shadowColor}>
    <div className="container">
      <div className="yoda">
        <div className="head">
          <div className="ear">
            <div className="lobe" />
          </div>
          <div className="face-wrapper">
            <div className="forehead" />
            <div className="face">
              <div className="eye" />
              <div className="eye" />
            </div>
          </div>
          <div className="ear right">
            <div className="lobe" />
          </div>
        </div>
        <div className="body">
          <div className="top" />
          <div className="bottom">
            <div className="fold" />
          </div>
        </div>
        {shadow && <div className="shadow" />}
      </div>
    </div>
  </StyledBabyYoda>
);

export default BabyYoda;
