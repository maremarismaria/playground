import styled from "styled-components";

export const StyledWelcome = styled.div`
  color: white;
  padding: 16px;
  font-size: 1em;
  padding: 16px;
  background-color: rgb(28, 28, 30);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 8px;

  .header,
  .body,
  .footer {
    width: 100%;
  }

  .header {
    hr {
      border: 1px solid #1ea7fd;
    }
  }

  .body {
    p {
      line-height: 1.5em;
    }
    a {
      color: #1ea7fd;
    }
  }

  .footer {
    margin-bottom: 8px;
    margin-top: 8px;
    text-align: center;

    svg {
      color: rgb(44, 44, 46);
      height: 2em;
      width: 2em;
    }
  }
`;

export default StyledWelcome;
