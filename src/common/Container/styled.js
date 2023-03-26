import styled, { css } from "styled-components";

export const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0 10px;
  }

  ${({ trimmed }) =>
    trimmed &&
    css`
      padding: 0 20px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0;
      }
    `};
`;
