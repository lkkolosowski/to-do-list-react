import styled from "styled-components";

export const ButtonsGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  color: #008080;
  background-color: transparent;
  cursor: pointer;
  transition-duration: 0.2s;
  margin: 0 0 0 30px;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
  }

  &:hover {
    color: #009999;
  }

  &:active {
    color: #00b3b3;
  }

  &:disabled {
    color: #d3d3d3;
    pointer-events: none;
  }
`;
