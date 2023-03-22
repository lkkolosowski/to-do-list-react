import styled, { css } from "styled-components";

export const ButtonsGroup = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    margin-top: 20px;
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.alto};
  }
`;

export const Button = styled.button`
  line-height: 1;
  padding: 4px 0;
  margin: 0;
  border: 0;
  color: ${({ theme }) => theme.color.teal};
  background-color: transparent;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, filter, text-shadow;
  margin: 0 0 0 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 20px 0 0 0;
    line-height: 1;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.alto};
    pointer-events: none;
  }

  ${({ active }) =>
    active &&
    css`
      text-shadow: ${({ theme }) => theme.color.forestGreen} 0 0 16px;
      text-decoration: underline;
    `};
`;
