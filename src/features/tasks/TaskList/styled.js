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
  border-bottom: 1px solid #dedede;

  ${({ hidden }) => hidden && css`
    display: none;
  `};
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  background-color: #008000;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: #009900;
  }

  &:active {
    background-color: #00b300;
  }

  ${({remove}) => remove && css`
    background-color: #ff0000;

    &:hover {
      background-color: #ff4d4d;
    }

    &:active {
      background-color: #ff8080;
    }
  `}
`;

export const Content = styled.span`
  ${({ done }) => done && css`
    text-decoration: line-through;
  `};
`;