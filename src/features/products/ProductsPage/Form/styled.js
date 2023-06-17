import styled, { css } from "styled-components";

export const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.royalBlue};
  border: 0;
  padding: 11px 10px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: background-color, filter;
  width: 137px;
  line-height: 1;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: transparent;
      transition-duration: 0s;
      pointer-events: none;
    `}
`;
