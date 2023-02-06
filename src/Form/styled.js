import styled from "styled-components";

export const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #eeedef;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #008080;
  border: 0;
  padding: 10px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: #009999;
  }

  &:active {
    background-color: #00b3b3;
  }
`;
