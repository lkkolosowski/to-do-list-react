import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  word-break: break-word;
  min-height: 63px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: background-color, filter;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.alizarinCrimson};
    `}

    &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `};
`;
