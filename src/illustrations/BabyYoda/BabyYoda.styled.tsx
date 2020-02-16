import styled from "styled-components";

export const StyledBabyYoda = styled.div<{ unit: string; shadowColor: string }>`
  height: 100%;

  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .yoda {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  /** HEAD **/

  .head {
    align-items: flex-end;
    display: flex;
  }

  .forehead {
    background-color: greenyellow;
    border-left: ${({ unit }) => unit} solid green;
    border-right: ${({ unit }) => unit} solid green;
    height: ${({ unit }) => unit};
    margin-top: calc(${({ unit }) => unit} * 2);
    position: relative;
    width: calc(${({ unit }) => unit} * 6);
  }

  .forehead:before {
    background-color: black;
    content: "";
    height: ${({ unit }) => unit};
    position: absolute;
    top: calc(${({ unit }) => unit} * 2 * -1);
    width: calc(${({ unit }) => unit} * 6);
  }

  .forehead:after {
    background-color: greenyellow;
    background-image: repeating-linear-gradient(
      to right,
      green,
      green ${({ unit }) => unit},
      greenyellow ${({ unit }) => unit},
      greenyellow calc(${({ unit }) => unit} * 5)
    );
    border-left: ${({ unit }) => unit} solid black;
    border-right: ${({ unit }) => unit} solid black;
    content: "";
    height: ${({ unit }) => unit};
    left: calc(${({ unit }) => unit} * -1);
    position: absolute;
    top: calc(${({ unit }) => unit} * -1);
    width: calc(${({ unit }) => unit} * 6);
  }

  .face {
    background-color: greenyellow;
    display: flex;
    height: calc(${({ unit }) => unit} * 3);
    justify-content: space-around;
    width: calc(${({ unit }) => unit} * 8);
  }

  .eye {
    background-color: black;
    height: calc(${({ unit }) => unit} * 2);
    position: relative;
    width: calc(${({ unit }) => unit} * 2);
  }

  .eye:before {
    background-color: white;
    content: "";
    height: ${({ unit }) => unit};
    position: absolute;
    width: ${({ unit }) => unit};
  }

  .ear {
    background-color: transparent;
    border-top: ${({ unit }) => unit} solid black;
    height: calc(${({ unit }) => unit} * 3);
    position: relative;
    width: calc(${({ unit }) => unit} * 5);
  }

  .ear:before {
    background-color: greenyellow;
    border-left: ${({ unit }) => unit} solid black;
    box-shadow: ${({ unit }) => unit} 0 green inset;
    content: "";
    height: ${({ unit }) => unit};
    position: absolute;
    width: calc(${({ unit }) => unit} * 4);
  }

  .ear .lobe {
    background-color: transparent;
    height: calc(${({ unit }) => unit} * 2);
    margin-top: ${({ unit }) => unit};
    position: relative;
    width: calc(${({ unit }) => unit} * 5);
  }

  .ear .lobe:before,
  .ear .lobe:after {
    background-color: orchid;
    border-left: ${({ unit }) => unit} solid black;
    content: "";
    height: ${({ unit }) => unit};
    margin-left: ${({ unit }) => unit};
    position: absolute;
    width: calc(${({ unit }) => unit} * 3);
  }

  .ear .lobe:after {
    left: ${({ unit }) => unit};
    top: ${({ unit }) => unit};
    width: calc(${({ unit }) => unit} * 2);
  }

  .ear.right {
    transform: scaleX(-1);
  }

  /** BODY **/

  .body .top {
    background-color: darkgoldenrod;
    border-left: ${({ unit }) => unit} solid black;
    border-right: ${({ unit }) => unit} solid black;
    height: calc(${({ unit }) => unit} * 2);
    position: relative;
    width: calc(${({ unit }) => unit} * 10);
  }

  .body .top:before {
    background-color: saddlebrown;
    content: "";
    height: calc(${({ unit }) => unit} * 2);
    left: calc(${({ unit }) => unit} * 6);
    position: absolute;
    width: ${({ unit }) => unit};
    z-index: 2;
  }

  .body .top:after {
    background-image: repeating-linear-gradient(
      to right,
      saddlebrown,
      saddlebrown ${({ unit }) => unit},
      darkgoldenrod ${({ unit }) => unit},
      darkgoldenrod calc(${({ unit }) => unit} * 9)
    );
    content: "";
    height: ${({ unit }) => unit};
    position: absolute;
    top: ${({ unit }) => unit};
    width: calc(${({ unit }) => unit} * 10);
    z-index: 1;
  }

  .body .bottom {
    background-color: sandybrown;
    border-left: ${({ unit }) => unit} solid black;
    border-right: ${({ unit }) => unit} solid black;
    height: calc(${({ unit }) => unit} * 4);
    left: ${({ unit }) => unit};
    position: relative;
    width: calc(${({ unit }) => unit} * 8);
    z-index: 1;
  }

  .body .bottom .fold {
    background-color: transparent;
    border-left: ${({ unit }) => unit} solid darkgoldenrod;
    border-right: ${({ unit }) => unit} solid darkgoldenrod;
    height: calc(${({ unit }) => unit} * 3);
    left: ${({ unit }) => unit};
    position: relative;
    width: calc(${({ unit }) => unit} * 4);
    z-index: 1;
  }

  .body .bottom .fold:before {
    background-color: transparent;
    border-left: ${({ unit }) => unit} solid darkgoldenrod;
    border-right: ${({ unit }) => unit} solid darkgoldenrod;
    content: "";
    height: ${({ unit }) => unit};
    position: absolute;
    top: calc(${({ unit }) => unit} * 3);
    width: ${({ unit }) => unit};
  }

  .body .bottom .fold:after {
    background-color: darkgoldenrod;
    content: "";
    height: ${({ unit }) => unit};
    left: calc(${({ unit }) => unit} * 2);
    position: absolute;
    top: calc(${({ unit }) => unit} * 2);
    width: ${({ unit }) => unit};
  }

  .shadow {
    background-color: ${({ shadowColor }) => shadowColor};
    height: calc(${({ unit }) => unit} * 3);
    position: relative;
    top: calc(${({ unit }) => unit} * 2 * -1);
    width: calc(${({ unit }) => unit} * 12);
    z-index: 0;
  }

  .shadow:before {
    background-color: inherit;
    content: "";
    height: ${({ unit }) => unit};
    left: calc(${({ unit }) => unit} * -1);
    position: absolute;
    top: ${({ unit }) => unit};
    width: calc(${({ unit }) => unit} * 14);
    z-index: 0;
  }
`;
