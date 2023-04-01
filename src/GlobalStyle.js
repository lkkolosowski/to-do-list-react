import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1;
    box-sizing: border-box;
    overflow: auto;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
    overflow: hidden;
  }

  .body {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.mineShaft};
    background-color: ${({ theme }) => theme.color.gallery};
    font-size: ${({ theme }) => theme.size.medium}px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
