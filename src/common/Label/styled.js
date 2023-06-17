import styled, { css } from "styled-components";

export const StyledLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  border-radius: 12px;
  margin-left: 4px;
  padding: 2px 7px;
  border: 0;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}

  ${({ variant }) => {
    switch (variant) {
      case "kcal":
        return css`
          background-color: #ede0db;
        `;
      case "g/100g":
        return css`
          background-color: #dff4ff;
        `;
      case "-":
        return css`
          background-color: #fdeeee;
          margin-left: 0;
          margin-right: 8px;
          font-size: 1rem;
          width: 23px;
          user-select: none;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
        `;
      case "+":
        return css`
          background-color: #e8f4ed;
          margin-left: 8px;
          font-size: 1rem;
          width: 23px;
          user-select: none;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
        `;
      case "productName":
        return css`
          margin-left: 8px;
          margin-right: 8px;
        `;
      case "button":
        return css`
          background-color: #008c8c;
          color: ${({ theme }) => theme.color.white};
          margin-left: 8px;
          margin-right: 8px;
          padding: 5px 14px;
          cursor: pointer;
          user-select: none;
          &:hover {
            opacity: 0.8;
          }
        `;
      default:
        return css`
          background-color: transparent;
          padding: 2px 0;
        `;
    }
  }};
`;
