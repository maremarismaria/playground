import styled from "styled-components";

export const StyledDigitalClock = styled.div`
  color: white;
  background-color: black;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 50%;
  font-family: "Courier New", Courier, monospace;

  .time {
    align-self: center;

    .seconds {
      font-size: 1.5em;
      text-align: right;
    }

    .hours-minutes {
      font-size: 3em;
      font-weight: bold;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  .date {
    font-size: 0.8em;
    align-self: center;
    color: grey;
  }
`;
