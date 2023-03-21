import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
`;

export const NavbarItem = styled.li`
  list-style-type: none;
  margin: 20px;
  padding: 4px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: filter;

  &:hover {
    filter: brightness(110%);
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }

  &:active {
    filter: brightness(120%);
  }

  &.active {
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }
`;
