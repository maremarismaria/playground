import React from "react";
import { StyledNokia } from "./Nokia.styled";

export const Nokia = () => (
  <StyledNokia>
    <div className="container">
      <div className="mobile">
        <div className="top">
          <div className="controllers-layer music">
            <div className="music-button-container">
              <div className="back"></div>
            </div>
            <div className="music-button-container">
              <div className="play-pause"></div>
            </div>
            <div className="music-button-container">
              <div className="forward"></div>
            </div>
          </div>
          <div className="screen-hole">
            <div className="earpiece">
              <div className="earpiece-hole"></div>
            </div>
            <div className="screen">
              <div className="layer intro">
                <div className="brand">MOKIA</div>
              </div>
            </div>
            <div className="ctas">
              <div className="cta"></div>
              <div className="cta-main">
                <div className="cta"></div>
              </div>
              <div className="cta"></div>
            </div>
          </div>
          <div className="controllers-layer brand-container">
            <div className="brand">MOKIA</div>
          </div>
        </div>
      </div>
    </div>
  </StyledNokia>
);

export default Nokia;
