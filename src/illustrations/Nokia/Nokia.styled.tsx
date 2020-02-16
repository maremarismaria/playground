import styled from "styled-components";

type NokiaVariables = { [key: string]: string };

const NokiaVars: NokiaVariables = {
  bgColorContainer: "#fff",
  bgColorControllersLayer: "#d53a36",
  bgColorMobile: "#f0f1f3",
  controllersLayerHeight: "220px",
  controllersLayerWidth: "40px",
  mobileHeight: "488px",
  mobileWidth: "280px",
  screenHoleHeight: "400px",
  earpieceHeight: "80px"
};

export const StyledNokia = styled.div`
  background-image: linear-gradient(to top right, #0a3f92 30%, #006ba2, #fff);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 40px;
  height: 100vh;
  font-family: "Roboto Mono", monospace;

  .container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  .mobile {
    background-color: ${NokiaVars.bgColorContainer};
    border-radius: 84px;
    box-shadow: 8px -8px 12px 0px #9e9e9e inset;
    cursor: pointer;
    height: ${NokiaVars.mobileHeight};
    min-width: ${NokiaVars.mobileWidth};
    width: ${NokiaVars.mobileWidth};
  }

  .top {
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
  }

  .controllers-layer {
    background-color: ${NokiaVars.bgColorControllersLayer};
    height: ${NokiaVars.controllersLayerHeight};
    margin-top: 120px;
    width: ${NokiaVars.controllersLayerWidth};
  }

  .controllers-layer.music {
    background-image: linear-gradient(to right, #9d302c, #d03833, #d33d3e);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .controllers-layer.music .music-button-container {
    height: 48px;
    position: relative;
    width: 100%;
  }

  .controllers-layer.music .music-button-container:after {
    background-color: #9d302c;
    border-radius: 28px;
    content: "";
    height: 60%;
    position: absolute;
    left: -3px;
    top: 6px;
    width: 6px;
  }

  .controllers-layer.music .back {
    margin-top: 6px;
    position: relative;
  }

  .controllers-layer.music .back,
  .controllers-layer.music .back:after {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #fff;
    margin-left: auto;
    margin-right: auto;
  }

  .controllers-layer.music .back:before,
  .controllers-layer.music .forward:after {
    background-color: #fff;
    content: "";
    height: 6px;
    position: absolute;
    top: calc(100% - 6px);
    left: -6px;
    width: 12px;
  }

  .controllers-layer.music .back:after {
    content: "";
    position: absolute;
    top: calc(100% + 12px);
    left: -6px;
  }

  .controllers-layer.music .play-pause,
  .controllers-layer.music .forward,
  .controllers-layer.music .forward:before {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid #fff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    position: relative;
  }

  .controllers-layer.music .play-pause:before,
  .controllers-layer.music .play-pause:after {
    background-color: #fff;
    content: "";
    height: 6px;
    position: absolute;
    left: -6px;
    width: 12px;
  }

  .controllers-layer.music .play-pause:after {
    background-color: #fff;
    top: 9px;
  }

  .controllers-layer.music .forward {
    margin-top: calc(12px + 3px);
  }

  .controllers-layer.music .forward:before {
    content: "";
    margin: 0 auto;
    position: absolute;
    left: -6px;
  }

  .controllers-layer.music .forward:after {
    top: 12px;
  }

  .controllers-layer.brand-container {
    background-image: linear-gradient(to left, #9d302c, #d03833, #d33d3e);
    position: relative;
  }

  .controllers-layer.brand-container .brand {
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 26px;
    position: absolute;
    transform: rotate(90deg) translate(106%, 100%);
  }

  .screen-hole {
    background-color: #d4d7dc;
    border-radius: 60px;
    border-left: 2px solid rgba(169, 169, 169, 0.4);
    border-right: 2px solid rgba(169, 169, 169, 0.6);
    border-bottom: 2px solid rgba(169, 169, 169, 0.8);
    box-shadow: 4px 0px 18px 4px #817f82 inset;
    height: ${NokiaVars.screenHoleHeight};
    margin-top: 40px;
    position: relative;
    width: calc(100% - ${NokiaVars.controllersLayerWidth});
  }

  .screen-hole .earpiece {
    background-color: #d4d7e0;
    background-image: linear-gradient(to top right, #a4a7ac, #969696, #c6c7cb);
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    display: flex;
    height: ${NokiaVars.earpieceHeight};
    justify-content: center;
    width: 100%;
  }

  .screen-hole .earpiece-hole {
    border-radius: 60px;
    height: 10px;
    background-image: linear-gradient(to bottom, #e3e4e8, #76737c);
    position: relative;
    width: 30%;
  }

  .screen-hole .earpiece-hole:before,
  .screen-hole .earpiece-hole:after {
    border-radius: 60px;
    content: "";
    height: 100%;
    background-image: linear-gradient(to top right, #0b1521, #525357);
    position: absolute;
    width: 30%;
  }

  .screen-hole .earpiece-hole:after {
    right: 0;
  }

  .screen-hole .screen {
    align-items: center;
    background-image: linear-gradient(to top right, #0b1521, #525357);
    display: flex;
    height: ${NokiaVars.controllersLayerHeight};
    justify-content: center;
    width: 100%;
  }

  .screen-hole .layer {
    background-color: #fff;
    height: calc(100% - 40px);
    width: calc(100% - 40px);
  }

  .layer.intro {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .layer.intro .brand {
    color: #006ba2;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 28px;
    text-align: center;
    width: 100px;
  }

  .screen-hole .ctas {
    background-color: #d4d7e0;
    background-image: linear-gradient(to top right, #a4a7ac, #969696, #c6c7cb);
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    display: flex;
    // prettier-ignore
    height: calc(
      ${NokiaVars.screenHoleHeight} - ${NokiaVars.earpieceHeight} - ${NokiaVars.controllersLayerHeight}
    );
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .screen-hole .ctas:before {
    content: "";
    height: 4px;
    background-image: linear-gradient(to bottom, #76737c, #e3e4e8);
    position: absolute;
    top: 42%;
    left: 10%;
    width: 80%;
    z-index: 1;
  }

  .screen-hole .ctas:after {
    content: "";
    height: 4px;
    background-color: #000;
    border-radius: 28px;
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 8px;
    transform: rotate(-40deg);
  }

  .screen-hole .ctas > .cta {
    align-items: center;
    border-radius: 28px;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 33%;
  }

  .screen-hole .ctas > .cta:before {
    background-color: #006da0;
    background-image: linear-gradient(#fff, #006da0, #76737c);
    border-radius: 28px;
    content: "";
    height: 6px;
    position: absolute;
    top: 18%;
    width: 28px;
  }

  .screen-hole .ctas > .cta:after {
    background-color: #006253;
    background-image: linear-gradient(#fff, #006253, #76737c);
    border-radius: 28px;
    content: "";
    height: 6px;
    position: absolute;
    bottom: 32%;
    width: 28px;
  }

  .screen-hole .ctas > .cta:last-child:after {
    background-color: #9d312e;
    background-image: linear-gradient(#fff, #9d312e, #76737c);
    content: "";
    height: 6px;
    position: absolute;
    width: 28px;
  }

  .screen-hole .ctas .cta-main {
    align-items: center;
    background-color: #ececea;
    background-image: radial-gradient(#fff 12%, #e9ebf1 56%, #fff 80%);
    border: 3px solid #444857;
    border-radius: 28px;
    display: flex;
    height: 70px;
    margin-top: 6px;
    justify-content: center;
    width: 70px;
    z-index: 2;
  }

  .screen-hole .ctas .cta-main .cta {
    background-color: #a4a7ac;
    background-image: linear-gradient(
      to top right,
      #a4a7ac,
      #969696,
      #c6c7cb,
      #fff
    );
    border: 2px solid #252525;
    border-radius: 12px;
    height: 28px;
    width: 28px;
  }
`;
