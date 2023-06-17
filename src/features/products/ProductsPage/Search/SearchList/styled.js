import styled from "styled-components";
import { ReactComponent as CrossIcon } from "../../../../../images/cross.svg";

export const Wrapper = styled.article`
  padding: 20px 34px;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  z-index: 40;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  border: 2px solid ${({ theme }) => theme.color.athensGray};
  margin-top: 5px;
  text-align: center;
`;

export const StyledSearchList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 160px);
  justify-items: center;
  margin: 0;
`;

export const Item = styled.li`
  width: 160px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: space-between;
  padding: 10px 0;
  grid-gap: 10px;
  &:hover {
    box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  }
`;

export const Image = styled.img`
  height: 120px;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  pointer-events: none;
  padding: 8px;
  margin: 0 auto;
`;

export const Remove = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0.6;
  cursor: pointer;
  padding: 0;
  border: 0;
  background-color: white;
  text-align: center;
  line-height: 1;
  color: white;
  user-select: none;

  &:hover {
    opacity: 1;
  }
`;

export const Cross = styled(CrossIcon)`
  height: 16px;
  width: auto;
  margin-bottom: -3px;
`;
