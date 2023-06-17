import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1;
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .body {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.mineShaft};
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${background});
    background-size: 100%;
    background-repeat: repeat;
    background-position: center;
    background-attachment: fixed;
    backdrop-filter: blur(10px);
    font-size: ${({ theme }) => theme.size.medium}px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  #root {
    overflow-x: hidden;
  }
`;
